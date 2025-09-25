import { Injectable } from "@nestjs/common";
import { Collection, Column, PrimaryGeneratedColumn } from "typeorm";



/**
 * di sini ada kursus untuk mata pembelajarn
 *  */ 
@Injectable()
export class SubjectCourse {

@PrimaryGeneratedColumn({type:"int"})
id : number ;

@Column({type : "varchar"})
judul : string ; // judul course

// pengajar bisa saja user yg sudah menjadi role sebagai pengajar
@Column({type : "varchar", nullable : true})
teacher : string ; // pengajar atau guru


@Column({ type : "array"   ,nullable : true})
users : string[] ; // user yang mengambil course ini

// isi cource dalam bentuk text 
@Column({type : "array", nullable : true})
fill : string[]

// link video pembelajaran 
@Column({type : "array",nullable : true })
videoLink : string[] ; 
}