import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      username: 'amrit@gmail.com',
      password: '12345',
      firstName: 'Amrit',
    },
    {
      username: 'itachi@gmail.com',
      password: '12345',
      firstName: 'Itachi',
    },
    {
      username: 'naruto@gmail.com',
      password: '12345',
      firstName: 'Naruto',
    },
  ];
  getUserByName(username: string): User {
    return this.users.find((user) => user.username === username);
  }
  getUsers(): User[] {
    return this.users;
  }
}
