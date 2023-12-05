import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {
  constructor(private UserService: UsersService) {}
  @Get('/users')
  @UseGuards(AuthGuard('local'))
  async getUsers(): Promise<User[]> {
    return this.UserService.getUsers();
  }
}
