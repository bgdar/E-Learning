import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as mustacheExpress from 'mustache-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.engine('html', mustacheExpress());
  app.setViewEngine('html');

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'public'));

  console.log('server is running on localhost:5000');
  await app.listen(5000);
}
bootstrap();
