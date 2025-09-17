import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from "./views-user/vews-user.controller"
import { User } from 'src/user/entities/user.entity';
import { Admin } from './entities/admin.entity';

import { UserService } from './user-service/user.service';
import { AdminService } from './user-service/admin.service';

import { ViewsAdminController } from './views-admin/view-admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Admin])],
  controllers: [AuthController, ViewsAdminController],
  providers: [UserService,AdminService],
})

export class UserModule {}
