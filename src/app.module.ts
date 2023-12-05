import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { PassportLocalStrategy } from './auth/passport.local.strategy';
@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [PassportLocalStrategy],
})
export class AppModule {}
