import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Response , Request} from 'express';
import { get } from 'node_modules/axios/index.cjs';


@Controller('views-base')
export class BaseViewsController {

  // halaman defauk viws-base
  @Get()
  @Render("base/")
  default(){
  }
  //halaman Home
  @Render('base/views-base/home')
  @Get('home')
  home(@Res() res : Response) {

    // dapatkan info 
    const errorMessage = res.cookie["flash-error"];
    const successMessage = res.cookie["flash-success"];
    const infoMessage = res.cookie["flash-info"];

console.info("errorMessage :",errorMessage," successMessage :",successMessage," infoMessage :",infoMessage);

     // hapus setelah dibaca (supaya one-time)
    res.clearCookie('flash-error');
    res.clearCookie('flash-success');
    return { title: 'Home Page', errorMessage, successMessage,infoMessage };
  }

  @Get('profil')
  @Render("base/views-base/profil")
  Profil(@Res() res : Response , @Req() req : Request){
    console.info("cookies name: ",req.cookies.username);
    return {
      name : req.cookies.username,
  level : 10,
    }
  }

  @Get('*')
  allHandle(@Res() res: Response) {
    res.status(404);
    res.send('<h1>nyari apa bg </h1>');
  }
}
