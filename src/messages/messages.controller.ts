import { Controller } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  // GET /messages
  findAll() {
    return 'This action returns all messages';
  }

  // GET /messages/:id
  findOne() {
    return 'This action returns one message';
  }
}
