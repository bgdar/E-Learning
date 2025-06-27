import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('views')
export class ViewsController {
  //halaman Home
  @Render('base/views/home')
  @Get('home')
  home() {
    return { title: 'Home Page' };
  }

  //halama yang di baawhnya /views/...
  @Get('*')
  allHandle(@Res() res: Response) {
    res.status(404);
    res.send('<h1>nyari apa bg </h1>');
  }
}
