import { Injectable, Res } from '@nestjs/common';
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
   * Cek user apakah ada di database
   * @param name nama user yang akan di cek
   * @param password password user yang akan di cek
   * @returns  Promise<boolean>
   */
  async checkUser(name:string , password : string): Promise<boolean>{
    const user = await this.userRepositori.createQueryBuilder("user")
    .addSelect("user.password")
    .where("user.name = :name",{name})
    .getOne();

    if (!user) return false;
    // verifikasi password hash
    const isValid = await argon2.verify(user.password, password);
    return isValid;
  }


 /**
  * 
  * @param name nama yg di gunakan untuk menecek email di database
  * @returns Promise<string | null>: email
  */
async getEmail(name  : string) : Promise<string | null > {
  const dataUser = await  this.userRepositori.findOneBy({
    name
  })
  if(!dataUser) return null ;
  return dataUser["email"]

  }



}
