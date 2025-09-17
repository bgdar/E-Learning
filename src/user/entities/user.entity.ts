import { Entity, Column, PrimaryGeneratedColumn ,CreateDateColumn} from 'typeorm';

// User

@Entity()
export class User {
  @PrimaryGeneratedColumn({type:"int"})
  id: number;

  @Column({type:"varchar" ,length:100})
  name: string;
  
  @Column({type:"varchar" ,length:150})
  email: string;
  
  @Column({ select: false,length:100})
  password: string;

  @CreateDateColumn({type : "timestamp"})
  cretaeAt : Date


  //   @ManyToOne(() => Admin, admin => admin.users) // import ManyToOne
  // admin: Admin;
}
