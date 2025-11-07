import { Controller, Get, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return 'This action returns all messages';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns the message #${id}`;
  }
}
