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
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

/**
 * The @Controller() decorator defines a basic controller.
 * We've passed the 'students' path to this decorator, so this controller will handle requests for the /students endpoint.
 */
@Controller('students')
export class StudentsController {
  /**
   * The constructor injects the StudentsService.
   * The 'private readonly' syntax is a shorthand to declare and initialize the studentsService member in the same location.
   * @param studentsService - The service that handles the business logic for students.
   */
  constructor(private readonly studentsService: StudentsService) {}

  /**
   * The @Get() decorator marks this method as a handler for GET requests.
   * This will handle GET requests to /students and return all students.
   */
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  /**
   * This method handles GET requests for a specific student by their ID.
   * The ':id' in the @Get() decorator is a route parameter.
   * The @Param('id') decorator extracts the 'id' parameter from the URL.
   * @param id - The ID of the student to retrieve.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.studentsService.findOne(id);
  }

  /**
   * The @Post() decorator marks this method as a handler for POST requests.
   * This will handle POST requests to /students to create a new student.
   * The @Body() decorator extracts the entire request body and binds it to the 'body' parameter.
   * The body is expected to conform to the CreateStudentDto.
   * @param body - The data for the new student.
   */
  @Post()
  create(@Body() body: CreateStudentDto) {
    return this.studentsService.create(body);
  }

  /**
   * The @Patch(':id') decorator marks this method as a handler for PATCH requests to update a student's data.
   * @param id - The ID of the student to update.
   * @param body - The data to update, conforming to the UpdateStudentDto.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateStudentDto) {
    return this.studentsService.update(id, body);
  }

  /**
   * The @Delete(':id') decorator marks this method as a handler for DELETE requests to remove a student.
   * @param id - The ID of the student to remove.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }

  /**
   * This method handles POST requests to add a course to a student.
   * @param id - The ID of the student.
   * @param courseId - The ID of the course to add.
   */
  @Post(':id/courses/:courseId')
  addCourseToStudent(@Param('id') id: string, @Param('courseId') courseId: string) {
    return this.studentsService.addCourseToStudent(id, courseId);
  }
}
