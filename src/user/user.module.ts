import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth/auth.controller';
import { User } from 'src/user/entities/user.entity';
import { Admin } from './entities/admin.entity';

import { UserService } from './user/user.service';
import { DbUserService } from './user/dbUser.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Admin])],
  controllers: [AuthController],
  providers: [UserService, DbUserService],
})
export class AuthModule {}
