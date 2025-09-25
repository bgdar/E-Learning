import { Injectable } from '@nestjs/common';

import { CourseGroup } from '../entities/course-group.entity';
import { Repository } from 'typeorm';
import { SubjectCourse } from '../entities/subject-course.entity';


@Injectable()
export class CoursesService {

constructor( private readonly courseGrup : Repository<CourseGroup>
, private readonly subjectCource : Repository<SubjectCourse>
){

}

/**
 * Create Mk baru
 */
createNewSubjectCources(){

    const newSubject = this.subjectCource.create({
    
    })
}


}
