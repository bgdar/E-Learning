import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

// User
@Entity()
export class Supervisor {
  @PrimaryGeneratedColumn({type:"int"})
  id: number;

  @Column({type:"varchar",nullable:true})
  name: string;

  @Column({type:"varchar" , nullable:true})
  email : string

  @Column({select:false})
  //di simpan dalam bentuk hash dan  select:false -> supaya tidak ikut di-return default saat query
  // kalau mau ambil password harus pakai addSelect() di query builder
  password : string

  @CreateDateColumn({type : "timestamp"})
  cretaeAt : Date

  //relasi
  //  @OneToMany(() => User, user => user.admin)
  // users: User[];
}
