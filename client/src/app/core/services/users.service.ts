import { Injectable } from '@angular/core';
import { User } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getAllUsers() { }

  public getUser(userId: string) { }

  public addUser(userData: User) { }

  public updateUser(userData: User) { }

  public removeUser(userId: string) { }
}
