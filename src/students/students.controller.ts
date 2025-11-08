import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return 'This action returns all students';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `This action returns student #${id}`;
  }

  @Post()
  create(@Body() body) {
    console.log(typeof body);
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates student #${id} by applying this ${body}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action deletes student #${id}`;
  }
}
