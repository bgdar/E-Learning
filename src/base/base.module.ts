import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BaseEntity } from "typeorm/browser";
import { BaseViewsController } from "./views-base/views-base.controller";

import { CourseGroup } from "./entities/course-group.entity";
import { SubjectCourse } from "./entities/subject-course.entity";


import { CoursesController } from "./courses/courses.controller";

@Module({
    imports : [TypeOrmModule.forFeature([CourseGroup,SubjectCourse])],
    controllers : [BaseViewsController, CoursesController ],
    providers : []
})
export class BaseModule{}