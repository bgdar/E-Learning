import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('views-base')
export class BaseViewsController {
  //halaman Home
  @Render('base/views-base/home')
  @Get('home')
  home() {
    return { title: 'Home Page' };
  }

  @Get('*')
  allHandle(@Res() res: Response) {
    res.status(404);
    res.send('<h1>nyari apa bg </h1>');
  }
}
