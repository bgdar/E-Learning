import { Module } from '@nestjs/common';
import { ViewsController } from './views/views.controller';

@Module({
  controllers: [ViewsController],
  providers: [],
  imports: [],
})
export class BaseModule {}
