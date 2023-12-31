import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly UserService: UsersService) {
    super();
  }
  validate(username: string, password: string): User {
    const user = this.UserService.getUserByName(username);
    if (user === undefined) {
      throw new UnauthorizedException();
    } else if (user.password == password) {
      return user;
    }
  }
}
