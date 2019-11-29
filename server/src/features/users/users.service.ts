import { getRepository } from "typeorm";
import { uuid } from "uuidv4";

import { User } from "./users.entity";
import { RequestListConfig } from "../../interfaces";
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
    const userRepository = getRepository(User);

    return await userRepository
      .createQueryBuilder('user')
      .orderBy(orderBy, sortDirection)
      .skip(offset)
      .take(limit)
      .getMany();
  }

  public async getUser(id: string): Promise<User> {
    const userRepository = getRepository(User);
    return await userRepository.findOne({ id });
  }

  public async addUser(userData: User): Promise<User> {
    const userRepository = getRepository(User);
    const id = uuid();
    const userConfig = {
      id,
      ...userData,
    };
    const user = await userRepository.create(userConfig);
    return await userRepository.save(user);
    // return res.send(results);

    // const userRepository = getRepository(User);
    // const { name, email, userInfo, profilePictureUrl, password, role, status } = userData;
    // const id = uuid();

    // return await userRepository.create({
    //   id,
    //   name,
    //   email,
    //   userInfo: userInfo,
    //   profilePictureUrl,
    //   password,
    //   role,
    //   status,
    // });
  }

  public async updateUser(userData: any): Promise<any> {
    const userRepository = getRepository(User);
    const { name, email, userInfo, profilePictureUrl, password, role, status, isBanned, banEnd } = userData;

    return await userRepository.update(1, {
      name,
      email,
      userInfo: userInfo,
      profilePictureUrl,
      password,
      role,
      status,
      isBanned,
      banEnd,
    });
  }

  public async removeUser(id: string): Promise<any> {
    const userRepository = getRepository(User);

    return await userRepository.delete({ id })
  }
}

export const usersService = new UsersService();
