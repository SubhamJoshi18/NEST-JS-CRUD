import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { createBodyTdo } from './dto/validate';

@Controller('/messages')
export class MessageController {
  constructor(public MessageService: MessageService) {}
  @Get()
  async listAll() {
    const data = await this.MessageService.findALL();
    return data;
  }

  @Get('/:id')
  async listbyid(@Param() id: any) {
    const data = await this.MessageService.findById(id);
    return data;
  }

  @Post()
  async create(@Body() Body: createBodyTdo) {
    const data = await this.MessageService.create(Body);
    return data;
  }

  @Patch('/:id')
  async updating(@Param() @Body() id: any, body: any) {
    const data = await this.MessageService.updating(id, body);
    return data;
  }

  @Delete('/:id')
  async deleting(@Param() id: any) {
    const data = await this.MessageService.deleting(id);
    return data;
  }
}
