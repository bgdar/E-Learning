import { Body, Controller, Res, Req, Get, Post, Render } from '@nestjs/common';
import { Response , Request} from 'express';

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
    @Req() request : Request,
  ) {
    console.log("pass dan user : ",username, password);

   // cek user login
   this.userService.checkUser(username,password).then((isUser)=>{
     if (isUser) {

  // simpan cookiew ( untuk sekarang seperti ini aja dulu )      
  respons.cookie("username",username, {
    maxAge: 900000, // 15 menit
    httpOnly: true,
  })
  respons.cookie("flash-success","anda berhasil login",{
    maxAge : 5000,
    httpOnly : true,
  })
       console.log("user ada di database");
       // redirect ke halaman home
  respons.status(302);

       return respons.redirect('/views-base/home');
     } 
     else {
      //  ini di validasi di client nantik
      respons.cookie("flash-error","username atau password salah")
     }

   }).catch(function(err){
    respons.cookie("flash-error","username atau password salah",{
      maxAge : 5000,
      httpOnly : true,
    })
    
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
