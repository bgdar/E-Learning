import { Injectable } from "@nestjs/common";
import { Column, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { User } from "src/user/entities/user.entity";
import { userInfo } from "os";

// di sini akan di gunakan seagai group cource pada user yg di bawah bimbingan seorang guru
@Injectable()
export class CourseGroup {

    @PrimaryGeneratedColumn({type:"int"})
    id: number;

    @Column({type : "varchar"})
    judul : string ;  // judul courser-nya

    @Column({type : "varchar", nullable : true})
    teacher : string ; // pengajar atau guru 

    @Column({ type : "varchar"})
    description : string ; // deskripsi singkat tentang course

    // jadi nantik akan terhubung ke user yang mengambil course ini
    @ManyToMany(()=> User ,{cascade : false}) //tidak auto delete
    @JoinTable({
        name : "course_group",
         joinColumn: { name: "course_id" },
    inverseJoinColumn: { name: "user_id" }
    })
    users : User[] ; // user yang mengambil course ini
}
