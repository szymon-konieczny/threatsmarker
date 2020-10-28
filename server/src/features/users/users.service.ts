import { getRepository } from 'typeorm';
import { Service } from 'typedi';

import { UserEntity } from './users.entity';
import { RequestListConfig, User, GetAllResponse } from '../../interfaces';
import { DefaultRequestConfig, UserStatuses } from '../../constants';
import { getUpdatedConfig, getOffset } from '../../helpers';

@Service()
export class UsersService {
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

  public async createUser(userData: Partial<User>): Promise<User> {
    const userRepository = getRepository(UserEntity);
    const user = userRepository.create(userData);
    return await userRepository.save(user);
  }

  public async updateUser(userData: Partial<User>): Promise<User> {
    const userRepository = getRepository(UserEntity);
    await userRepository.update(userData.id, userData);
    return await this.getUser(userData.id);
  }

  public async removeUser(id: string): Promise<User> {
    const userConfig = await this.getUser(id);
    const userRepository = getRepository(UserEntity);
    await userRepository.update(id, getUpdatedConfig(userConfig, { status: UserStatuses.DELETED }));
    return await this.getUser(id);
  }

  public async getUserByEmail(email: string): Promise<User> {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({ email });
    return user;
  }
}
