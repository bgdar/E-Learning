import { Controller , Render , Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Render("base/courses/home")
  @Get("/courses")
  courses(){
    return {title : "courses page"}
  }

}
