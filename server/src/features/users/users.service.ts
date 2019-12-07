import { getRepository } from 'typeorm';
import { Container } from 'typedi';

import { UserEntity } from "./users.entity";
import { RequestListConfig, User } from "../../interfaces";
import { RequestConfig, Statuses } from '../../constants';
import { Logger } from 'src/utils';

class UsersService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  public async getUsers(reqConfig: RequestListConfig): Promise<User[]> {
    const {
      page = RequestConfig.PAGE_NO,
      limit = RequestConfig.LIMIT,
      sortDirection = RequestConfig.SORT_DIRECTION,
      orderBy = RequestConfig.ORDER_BY,
    } = reqConfig;
    const offset = limit * (page - 1);
    const userRepository = getRepository(UserEntity);

    return await userRepository
      .createQueryBuilder('user')
      .orderBy(orderBy, sortDirection)
      .skip(offset)
      .take(limit)
      .getMany();
  }

  public async getUser(id: string): Promise<User> {
    const userRepository = getRepository(UserEntity);
    try {
      return await userRepository.findOne({ id });
    } catch (err) {
      this.logger.logError({}, err)
    }
  }

  public async addUser(userData: User): Promise<User> {
    const userRepository = getRepository(UserEntity);
    const userConfig = {
      ...userData,
    };
    const user = userRepository.create({ ...userConfig });
    return await userRepository.save(user);
  }

  public async updateUser(userData: User): Promise<User> {
    const userRepository = getRepository(UserEntity);
    await userRepository.update(userData.id, {
      ...userData,
    });
    return await this.getUser(userData.id);
  }

  public async removeUser(id: string): Promise<User> {
    const userConfig = await this.getUser(id);
    const userRepository = getRepository(UserEntity);
    await userRepository.update(id, {
      ...userConfig,
      status: Statuses.DELETED,
    });
    return await this.getUser(id);
  }
}

export const usersService = Container.get(UsersService);
