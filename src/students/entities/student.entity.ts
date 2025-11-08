import { Course } from '../../courses/entities/course.entity';

/**
 * An entity represents the structure of a data model.
 * In a larger application, this class would be decorated with decorators from a library like TypeORM to map it to a database table.
 * For now, it just defines the shape of a Student object.
 */
export class Student {
  /**
   * The unique identifier for the student.
   */
  id: number;

  /**
   * The name of the student.
   */
  name: string;

  /**
   * The promotion or class the student belongs to.
   */
  promotion: string;

  /**
   * The list of courses the student is enrolled in.
   */
  courses: Course[];
}
