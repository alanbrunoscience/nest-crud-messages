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
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post() // Maps HTTP requests of type POST (POST /messages)
  create(@Body() body: any) {
    return body;
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Get() // Maps HTTP requests of type GET (GET /messages)
  findAll(@Query('author') author: string, @Query('limit') limit: string) {
    if (author && limit) {
      return `This action returns ${limit} messages filtered by author: ${author}`;
    }
    if (author) {
      return `This action returns all messages filtered by author: ${author}`;
    }
    if (limit) {
      return `This action returns ${limit} messages`;
    }
    return 'This action returns all messages (unfiltered)';
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
