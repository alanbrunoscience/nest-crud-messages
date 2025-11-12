import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Post() // Maps HTTP requests of type POST (POST /messages)
  create(@Body() body: any) {
    return body;
  }

  @HttpCode(HttpStatus.ACCEPTED)
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

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes the message #${id}`;
  }
}
