import { NestFactory } from '@nestjs/core';
import { MessageModule } from './messages/message.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  app.useGlobalPipes(new ValidationPipe());
  app.listen(3000);
}

bootstrap();
