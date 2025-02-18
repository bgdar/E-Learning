import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BaseModule } from './base/base.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, BaseModule],
})
export class AppModule {}
