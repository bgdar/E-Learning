import { Module } from '@nestjs/common';
import { ViewsController } from './views/views.controller';
import { CoursesService } from './courses/courses.service';

@Module({
  controllers: [ViewsController],
  providers: [CoursesService],
  imports: [],
})
export class BaseModule {}
