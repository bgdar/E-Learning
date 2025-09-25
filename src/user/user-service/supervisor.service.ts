import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supervisor } from '../entities/supervisor.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2"

@Injectable()
export class SupervisorService {

    constructor(@InjectRepository(Supervisor) private supervisorRepository : Repository<Supervisor>){

    }
/**
 * @param name nama untuk Supervisor
 * @param email  email dari Supervisor
 * @param password password untuk Supervisor
 */
async createSupervisor(name :string ,email: string , password : string ){
    
  const hashpassword = await argon2.hash(password)
  const newSupervisor = this.supervisorRepository.create({
        name,
        password : hashpassword ,
        email
    })
    this.supervisorRepository.save(newSupervisor);

    
}
/**
 * @param name nama Supervisor yg login
 * @param password password Supervisor yg login
 * @returns boolean jika benar Supervisor
 */  
  async cekSupervisor(name:string , password : string) : Promise<boolean>{
    const supervisor = await this.supervisorRepository.createQueryBuilder("supervisor")
    .addSelect("supervisor.password")
    .where("supervisor.name = :name",{name})
    .getOne();

    if(!supervisor) return false ;

return await argon2.verify(supervisor.password , password)
 }  

 /**
  * kembalikan email | karena saat login tidka menggunakan email , maka !!
  * @param name nama yg di gunakan untuk menecek email di database
  * @returns Promise<string | null>: email
  */
async getEmail(name  : string) : Promise<string | null > {
  const dataUservisor = await  this.supervisorRepository.findOneBy({
    name
  })
  if(!dataUservisor) return null ;
  return dataUservisor["email"]

  }
}
