import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get() // Maps HTTP requests of type GET (GET /messages)
  findAll() {
    return 'This action returns all messages';
  }

  @Get(':id') // Adds the @Get decorator with the route parameter :id (GET /messages/:id)
  // Adds the @Param decorator to capture the ID
  findOne(@Param('id') id: string) {
    // The return value can be adjusted to include the ID for educational purposes
    return `This action returns the message #${id}`;
  }

  @Post() // Maps HTTP requests of type POST (POST /messages)
  create(@Body() body: any) {
    return body;
  }
}
