import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admin } from '../entities/admin.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class DbUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Admin)
    private AdminRepository: Repository<Admin>,
  ) {}
  CreateUser(name: string) {
    this.userRepository.create({ name: name });
  }
}
