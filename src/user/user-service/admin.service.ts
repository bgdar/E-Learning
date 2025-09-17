import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {

    constructor(@InjectRepository(Admin) private adminRepository : Repository<Admin>){

    }


createAdmin(name :string ,email: string , password : string ){
    this.adminRepository.create({
        name,
        password,
        email
    })
}
/**
 * @param name nama admin yg login
 * @param password password admin yg login
 * @returns boolean jika benar admin
 */  
cekAdmin(name:string , password : string) : boolean{
    const admin =  this.adminRepository.findOne({
      where : {name ,  password},
    })
    return admin ? true : false ;
  }
}
