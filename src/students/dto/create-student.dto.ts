import { IsString, IsNumber } from 'class-validator';

/**
 * A Data Transfer Object (DTO) is an object that defines how the data will be sent over the network.
 * This DTO is used for creating a new student.
 * We use the 'class-validator' library to add validation rules to the properties.
 */
export class CreateStudentDto {
  /**
   * The @IsString() decorator validates that the 'name' property is a string.
   * 'readonly' is a TypeScript feature that prevents the property from being reassigned after the object is created.
   */
  @IsString()
  readonly name: string;

  /**
   * The @IsString() decorator validates that the 'promotion' property is a string.
   */
  @IsString()
  readonly promotion: string;

  /**
   * The @IsNumber({}, { each: true }) decorator validates that 'courses' is an array of numbers.
   * Each number in the array is expected to be a course ID.
   */
  @IsNumber({}, { each: true })
  readonly courses: number[];
}
