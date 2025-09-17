import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BaseEntity } from "typeorm/browser";
import { BaseViewsController } from "./views-base/views-base.controller";

import { CoursesController } from "./courses/courses.controller";
import { ProfilController } from "./profil/profil.controller";

@Module({
    // imports : [TypeOrmModule.forFeature([])]
    controllers : [BaseViewsController, CoursesController , ProfilController],
    providers : []
})
export class BaseModule{}