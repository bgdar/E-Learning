import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //halaman Utama Web ini
  @Get()
  @Render('dashboard')
  dashboard() {
    return { title: 'page dashboard' };
  }


  //  ini akan ke block route di bawahnya
  // @Get(':path(*)')
  // @Render('404')
  // allHandle() {
  //   return { title: '404 Not Found' };
  // }
}


