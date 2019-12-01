import { getRepository } from "typeorm";
import { uuid } from "uuidv4";

import { Users } from "./users.entity";
import { RequestListConfig, User } from "../../interfaces";
import * as DEFAULTS from '../../constants';

class UsersService {
  public async getUsers(reqConfig: RequestListConfig): Promise<User[]> {
    const {
      page = DEFAULTS.pageNo,
      limit = DEFAULTS.limit,
      sortDirection = DEFAULTS.sortDirection,
      orderBy = DEFAULTS.orderBy,
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
    const id = uuid();
    const userConfig = {
      id,
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
    const removedUser = await this.getUser(id);
    const userRepository = getRepository(Users);
    await userRepository.update(id, {
      ...removedUser,
      status: 'deleted',
    });
    return await this.getUser(id);
  }
}

export const usersService = new UsersService();
