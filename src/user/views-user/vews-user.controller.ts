import { Body, Controller, Res, Get, Post, Render } from '@nestjs/common';
import { Response } from 'express';

import { UserService } from '../user-service/user.service';


@Controller('user')
export class AuthController {

  constructor(private readonly userService : UserService){
  }
  //halaman untuk login'
  @Render('user/views-user/signIn')
  @Get('signIn')
  login() {
    return { title: 'page login' };
  }

  @Post('singIn')
   login_post(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res() respons: Response,
  ) {
    console.log(username, password);
   // cek user login
   this.userService.checkUser(username,password).then((isUser)=>{
     if (isUser) {
       return respons.redirect('/views-base/home');
     } else {
       return respons.redirect('/user/signUp');
     }
   }).catch(function(err){
    console.error("[x] terjadi error pada singIn user :",err)
   })
  }
  //halaman untuk register' atau sigup jika belum login
  @Render('user/views-user/signUp')
  @Get('signUp')
  register() {

    return { title: 'page register' };
  }
  @Post("signUp")
  register_post(  @Body('username') username: string, @Body("email") email : string ,
    @Body('password') password: string, @Res() response : Response){

      console.info("data singup",username,password,email);

      this.userService.checkUser(username,password).then((isUser)=>{
        // simpan ke databae 
        if(!isUser){
          this.userService.createUser(username,email,password);
        }else {
          // flash message nantik
          console.info("user sudah ada")
        }
      }).catch(function(err){
           console.error("[x] terjadi error pada singIn user :",err)
      })
  }

  // semau halaman di bawah nya
  @Get('*')
  allHandle(@Res() res: Response) {
    res.status(404);
    res.send('<h3>user : tidak di temukan </h3>');
  }
}
