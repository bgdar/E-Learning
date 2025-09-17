import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
@Controller('admin')
export class ViewsAdminController {

    @Get("dashboard")
    @Render("user/views-admin/dashboartd")
    dashboard(){

        return {
            name : "dar"
        }
    }

    @Get("*")

    allHandle(@Res() res : Response){
        res.status(404);
        res.send("<h3>tidak di temukan </h3>")
      }
}
