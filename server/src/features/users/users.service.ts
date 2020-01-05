import { getRepository } from 'typeorm';
import { Container } from 'typedi';

import { UserEntity } from './users.entity';
import { RequestListConfig, User, GetAllResponse } from '../../interfaces';
import { DefaultRequestConfig, UserStatuses } from '../../constants';
import { getConfig, getOffset } from '../../helpers';
import { authService } from '../auth/auth.service';

class UsersService {
  public async getUsers(reqConfig: RequestListConfig): Promise<GetAllResponse<UserEntity>> {
    const {
      page = DefaultRequestConfig.PAGE_NO,
      limit = DefaultRequestConfig.LIMIT,
      sortDirection = DefaultRequestConfig.SORT_DIRECTION,
      orderBy = DefaultRequestConfig.ORDER_BY,
    } = reqConfig;
    const offset = getOffset(limit, page);
    const userRepository = getRepository(UserEntity);

    const data = await userRepository
      .createQueryBuilder('user')
      .orderBy(orderBy, sortDirection)
      .skip(offset)
      .take(limit)
      .getManyAndCount();

    return { data: data[0], count: data[1] }
  }

  public async getUser(id: string): Promise<User> {
    const userRepository = getRepository(UserEntity);
    return await userRepository.findOne({ id });
  }

  public async registerUser(userData: Partial<User>): Promise<User> {
    const userRepository = getRepository(UserEntity);
    const userConfig = getConfig(userData);
    const hashedPassword = await authService.hashPassword(userData.password);

    const userConfigWithHashedPassword = {
      ...userConfig,
      password: hashedPassword,
    }

    const user = userRepository.create(userConfigWithHashedPassword);
    return await userRepository.save(user);
  }

  public async updateUser(userData: Partial<User>): Promise<User> {
    const userRepository = getRepository(UserEntity);
    await userRepository.update(userData.id, getConfig(userData));
    return await this.getUser(userData.id);
  }

  public async removeUser(id: string): Promise<User> {
    const userConfig = await this.getUser(id);
    const userRepository = getRepository(UserEntity);
    await userRepository.update(id, getConfig({ ...userConfig, status: UserStatuses.DELETED }));
    return await this.getUser(id);
  }

  public async getUserByEmail(email: string): Promise<User> {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({ email });
    return user;
  }
}

export const usersService = Container.get(UsersService);
