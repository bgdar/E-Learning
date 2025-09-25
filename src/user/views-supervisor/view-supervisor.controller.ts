import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { Response , Request } from 'express';
import { SupervisorService } from '../user-service/supervisor.service';
import { UserService } from '../user-service/user.service';

// halaman ini di arahkan berdasarakan profle User

@Controller('supervisor')
export class ViewsSupervisorController {

    constructor(private readonly supervisorService : SupervisorService , private readonly userService : UserService){
    }

    @Get('signIn')
    @Render("user/views-supervisor/signIn")
     signIn( @Res() res :  Response ){
    }
    @Post("signIn")
     signInPost( @Req() req : Request , @Res() res : Response){
        
        const { password } = req.body;
        // email dari database user | name dari user yg login 
        const username  = res.cookie["username"]
    //  const email = await this.userService.getEmail(username);
    
        console.info("data supervisir", username, password)
        this.supervisorService.cekSupervisor(username , password).then((isSupervisor)=>{
            if (isSupervisor) {
                // kirim sebagai token nantik untuk menambah username menjadi root atau pengajar
                res.cookie("supervisor-username", username, {
                    maxAge: 900000, // 15 menit
                    httpOnly: true,
                });
                res.cookie("flash-success", "login sebagai supervisor", {
                    maxAge: 5000,
                    httpOnly: true,
                });
                console.log("supervisor ada di database");
                // redirect ke halaman dashboard
                res.status(302);
                return res.redirect('/supervisor/dashboard');
            } else {
                // ini di validasi di client nantik
                res.cookie("flash-error", "username atau password salah");
            }
    
        }).catch((err)=>{
            console.error("[x] terjadi error pada signIn supervisor :",err)
        })
    }
    
    @Get('signUp')
    @Render("user/views-supervisor/signUp")
    async signUp( @Res() res :  Response , @Req() req : Request){
        const username = req.cookies["username"];
         const email = await this.userService.getEmail(username);
        const { password } = req.body;

        console.info("data supervisir", password, username ,email)

        this.supervisorService.cekSupervisor(username,password).then((isSupervisor)=>{
            if(!isSupervisor){
                this.supervisorService.createSupervisor(username,email,password)

            }else {
                // flas message 
                res.cookie("flas-info","spervisor sudah tersedia harap login ulang",{
                    maxAge : 900000,
                    httpOnly : true,
                })
            }
        }).catch((err)=>{
            console.error("[x] ada yg salah saat register supervisor :",err)
        })

    }

    @Get("dashboard")
    @Render("user/views-supervisor/dashboard")
    dashboard(){
        return {
            name : "dar"
        }
    }

    @Get("*")
    @Render("user/views-supervisor/404")

    allHandle(@Res() res : Response){
        res.status(404);
      }
}
