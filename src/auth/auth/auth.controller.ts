import { Body, Controller, Get, Post, Render } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  //halaman untuk login'
  @Render('Auth/login')
  @Get('login')
  login() {
    return { title: 'page login' };
  }
  @Post('login')
  login_post(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    console.log(username, password, email);
  }

  //halaman untuk register' atau sigup jika belum login
  @Render('Auth/register')
  @Get('register')
  register() {
    return { title: 'page register' };
  }
}
