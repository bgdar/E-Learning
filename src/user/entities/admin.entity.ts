import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

// User
@Entity()
export class Admin {
  @PrimaryGeneratedColumn({type:"int"})
  id: number;

  @Column({type:"varchar",nullable:true})
  name: string;

  @Column({type:"varchar" , nullable:true})
  email : String

  @Column({select:false})
  //di simpan dalam bentuk hash dan  select:false -> supaya tidak ikut di-return default saat query
  // kalau mau ambil password harus pakai addSelect() di query builder
  password : String

  @CreateDateColumn({type : "timestamp"})
  cretaeAt : Date

  //relasi
  //  @OneToMany(() => User, user => user.admin)
  // users: User[];
}
