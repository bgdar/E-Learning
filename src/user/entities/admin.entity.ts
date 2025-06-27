import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// User
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //relasi
  //  @OneToMany(() => User, user => user.admin)
  // users: User[];
}
