import { MessageRepository } from './message.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  // messageRepo:MessageRepository;

  constructor(public messageRepo: MessageRepository) {
    // this.messageRepo = new MessageRepository();
    // this.messageRepo = repo;
  }

  findALL() {
    return this.messageRepo.findall();
  }

  findById(id: number | string) {
    return this.messageRepo.findbyid(id);
  }

  create(body: any) {
    return this.messageRepo.create(body);
  }

  updating(id: number | string, body: any) {
    return this.messageRepo.patchbyid(id, body);
  }

  deleting(id: number | string) {
    return this.messageRepo.deleting(id);
  }
}
