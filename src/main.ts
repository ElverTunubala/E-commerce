import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//ignora un atributo de mas del dto
    forbidNonWhitelisted: true, // envia un alerta si en el request se envia un atributo de mas
  })) // para que las validaciones del dto quede de manera global
  
  await app.listen(3000);
}
bootstrap();
