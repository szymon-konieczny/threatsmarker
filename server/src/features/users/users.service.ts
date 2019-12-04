import { getRepository } from "typeorm";

import { Users } from "./users.entity";
import { RequestListConfig, User } from "../../interfaces";
import { RequestConfig, Statuses } from '../../constants';

class UsersService {
  public async getUsers(reqConfig: RequestListConfig): Promise<User[]> {
    const {
      page = RequestConfig.PAGE_NO,
      limit = RequestConfig.LIMIT,
      sortDirection = RequestConfig.SORT_DIRECTION,
      orderBy = RequestConfig.ORDER_BY,
    } = reqConfig;
    const offset = limit * (page - 1);
    const userRepository = getRepository(Users);

    return await userRepository
      .createQueryBuilder('user')
      .orderBy(orderBy, sortDirection)
      .skip(offset)
      .take(limit)
      .getMany();
  }

  public async getUser(id: string): Promise<User> {
    const userRepository = getRepository(Users);
    return await userRepository.findOne({ id });
  }

  public async addUser(userData: User): Promise<User> {
    const userRepository = getRepository(Users);
    const userConfig = {
      ...userData,
    };
    const user = userRepository.create({ ...userConfig });
    return await userRepository.save(user);
  }

  public async updateUser(userData: User): Promise<User> {
    const userRepository = getRepository(Users);
    await userRepository.update(userData.id, {
      ...userData,
    });
    return await this.getUser(userData.id);
  }

  public async removeUser(id: string): Promise<User> {
    const userConfig = await this.getUser(id);
    const userRepository = getRepository(Users);
    await userRepository.update(id, {
      ...userConfig,
      status: Statuses.DELETED,
    });
    return await this.getUser(id);
  }
}

export const usersService = new UsersService();
