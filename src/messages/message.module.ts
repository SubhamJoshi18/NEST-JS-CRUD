import { Module } from '@nestjs/common';
import { MessageController } from './message.Controller';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repository';
@Module({
  controllers: [MessageController],
  providers: [MessageService, MessageRepository],
})
export class MessageModule {}
