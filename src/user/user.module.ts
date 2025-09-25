import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from "./views-user/vews-user.controller"
import { User } from 'src/user/entities/user.entity';
import { Supervisor } from './entities/supervisor.entity';

import { UserService } from './user-service/user.service';
import { SupervisorService } from './user-service/supervisor.service';

import { ViewsSupervisorController } from './views-supervisor/view-supervisor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Supervisor])],
  controllers: [AuthController, ViewsSupervisorController],
  providers: [UserService,SupervisorService],
})

export class UserModule {}
