import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as argon2 from "argon2"
// hass menggunaakn argon
// import * as argon2 from "argon2";

// const hash = await argon2.hash(password);  // hash 
// const match = await argon2.verify(hash, password);  // cek hass


@Injectable()
export class UserService {

    constructor(@InjectRepository(User) 
    private userRepositori : Repository<User> ){

    }

     // USER
  async createUser(name: string ,email :string , password : string) {
    const hashPassword = await argon2.hash(password)

   const newUser =  this.userRepositori.create({ name , email ,password:hashPassword});
   // simpan ke Table 
  await this.userRepositori.save(newUser);
  }

  /**
   * 
   * @param name nama user yang akan di cek
   * @param password password user yang akan di cek 
   * @returns  Promise<booolean> 
   */
  async checkUser(name:string , password : string): Promise<boolean>{
    const user = await this.userRepositori.findOneBy({
        name : name 
    })
    if (!user) return false;

    // verifikasi password hash
    const isValid = await argon2.verify(user.password, password);
    return isValid;
  }

}
