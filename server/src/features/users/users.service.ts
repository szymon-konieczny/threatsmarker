import { getRepository } from 'typeorm';
import { Container } from 'typedi';

import { UserEntity } from "./users.entity";
import { RequestListConfig, User } from "../../interfaces";
import { DefaultRequestConfig, UserStatuses } from '../../constants';

class UsersService {
  public async getUsers(reqConfig: RequestListConfig): Promise<User[]> {
    const {
      page = DefaultRequestConfig.PAGE_NO,
      limit = DefaultRequestConfig.LIMIT,
      sortDirection = DefaultRequestConfig.SORT_DIRECTION,
      orderBy = DefaultRequestConfig.ORDER_BY,
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
    return await userRepository.findOne({ id });
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
      status: UserStatuses.DELETED,
    });
    return await this.getUser(id);
  }
}

export const usersService = Container.get(UsersService);
