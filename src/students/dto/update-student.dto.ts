import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

/**
 * This DTO is used for updating an existing student.
 * It extends the CreateStudentDto but makes all properties optional.
 * This is useful because a client may only want to update a subset of the student's properties.
 */
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
