import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { CoursesModule } from '../courses/courses.module';

/**
 * The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
 * Each module is a class decorated with @Module().
 */
@Module({
  /**
   * The set of imported modules that export the providers which are required in this module.
   * We are importing the CoursesModule to make the CoursesService available for injection.
   */
  imports: [CoursesModule],
  /**
   * The set of controllers defined in this module which have to be instantiated.
   * Here, we are including the StudentsController.
   */
  controllers: [StudentsController],
  /**
   * The set of providers that will be instantiated by the Nest injector and that may be shared at least across this module.
   * We are providing the StudentsService, making it available for dependency injection.
   */
  providers: [StudentsService],
})
/**
 * The StudentsModule encapsulates all the student-related functionality.
 */
export class StudentsModule {}
