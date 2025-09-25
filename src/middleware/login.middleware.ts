import { Injectable, NestMiddleware, Req } from "@nestjs/common";

import { NextFunction , Response , Request } from "express";

//login authentikasi 
import { UserService } from "src/user/user-service/user.service";

@Injectable()
export class LoginMiddleware  implements NestMiddleware{

    use(@Req() request : Request, response  :Response , next :NextFunction){

        // validasi user yg sudah login 
        if(request.cookies && request.cookies["username"]){
            console.log("ada cookies username ",request.cookies.username);
            next();
        }else {
            console.log("tidak ada cookies username ");
            return response.redirect('/user/signIn');
        }
        
    }
}