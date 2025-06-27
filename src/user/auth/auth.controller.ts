import { Body, Controller, Res, Get, Post, Render } from '@nestjs/common';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
  //halaman untuk login'
  @Render('user/auth/signIn')
  @Get('signIn')
  login() {
    return { title: 'page login' };
  }

  @Post('login') login_post(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
    @Res() respons: Response,
  ) {
    console.log(username, password, email);
    if (username || password || email) {
      return respons.redirect('/views/home');
    } else {
      return respons.redirect('/auth/signUp');
    }
  }

  //halaman untuk register' atau sigup jika belum login
  @Render('user/auth/singUp')
  @Get('signUp')
  register() {
    return { title: 'page register' };
  }
}
