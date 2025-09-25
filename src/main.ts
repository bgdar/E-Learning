import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as mustacheExpress from 'mustache-express';
import { join } from 'path';


import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Gunakan cookie-parser sebagai global middleware
  app.use(cookieParser('secret-key')); // 'secret-key' digunakan untuk signed cookies
  // app.use(cookieParser());

  app.engine('html', mustacheExpress());
  app.setViewEngine('html');

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'public'));

  console.log('server is running on http://127.0.0.1:5000');
  await app.listen(5000   );
}
bootstrap();
