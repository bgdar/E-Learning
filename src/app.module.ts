import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BaseModule } from './base/base.module';
import { BaseServiceService } from './base/base-service/base-service.service';

@Module({
  controllers: [AppController],
  providers: [AppService, BaseServiceService],
  imports: [
    // ORM konfigurasi for DATABASE start
    ConfigModule.forRoot(), // ⬅️ aktifkan dotenv
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'dar',
      password: process.env.DB_PASS || 'daraja',
      database: process.env.DB_NAME || 'e-learningdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ⚠️ nonaktifkan di production
    }),
    // ORM konfigurasi for DATABASE end
    UserModule,
    BaseModule,
  ],
})
export class AppModule {}
