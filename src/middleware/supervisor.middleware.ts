import { Injectable, NestMiddleware, Req, Res } from "@nestjs/common";
import { NextFunction } from "express";

import { Response , Request } from "express";


// import { SupervisorService } from "src/user/user-service/supervisor.service";

@Injectable()
export class SupervisorMiddleware implements NestMiddleware {
//   constructor(private readonly supervisorService: SupervisorService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const username = req.cookies["supervisor-username"];
    // const isSupervisor = await this.supervisorService.cekSupervisor(username, password);
    if (req.cookies && username) {
      next();
    } else {
      res.redirect("supervisor/signIn");
    }
  }
}
