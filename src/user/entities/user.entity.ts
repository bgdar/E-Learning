import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// User

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // relasi

  //   @ManyToOne(() => Admin, admin => admin.users) // import ManyToOne
  // admin: Admin;
}
