import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { CoursesService } from '../courses/courses.service';
import { CreateStudentDto } from './dto/create-student.dto';

/**
 * The @Injectable() decorator marks this class as a provider that can be injected into other components (like controllers).
 */
@Injectable()
export class StudentsService {
  /**
   * This is a private, in-memory array of students.
   * In a real-world application, this would be replaced with a database connection.
   */
  private students: Student[] = [
    {
      id: 1,
      name: 'John',
      promotion: 'Fall-2025',
      courses: [],
    },
  ];

  constructor(private readonly coursesService: CoursesService) {}

  /**
   * Returns all students.
   * @returns {Student[]} An array of all students.
   */
  findAll() {
    return this.students;
  }

  /**
   * Finds a single student by their ID.
   * The '+' operator before 'id' converts the string ID from the URL to a number for the comparison.
   * If no student is found, it throws a NotFoundException.
   * @param {string} id - The ID of the student to find.
   * @returns {Student} The found student.
   */
  findOne(id: string) {
    const student = this.students.find((student) => student.id === +id);
    if (!student) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return student;
  }

  /**
   * Creates a new student.
   * It pushes the new student data onto the in-memory array.
   * @param {CreateStudentDto} createStudentDto - The data for the new student.
   * @returns {Student} The newly created student data.
   */
  create(createStudentDto: CreateStudentDto) {
    const courses = createStudentDto.courses.map((courseId) =>
      this.coursesService.findOne(String(courseId)),
    );
    const newStudent = {
      id: this.students.length + 1,
      name: createStudentDto.name,
      promotion: createStudentDto.promotion,
      courses,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  /**
   * Updates an existing student.
   * It first finds the student by ID.
   * The current implementation only logs the existing student and does not yet update the data.
   * @param {string} id - The ID of the student to update.
   * @param {any} updateStudentDto - The new data for the student.
   */
  update(id: string, updateStudentDto: any) {
    const existingStudent = this.findOne(id);
    if (existingStudent) {
      // In a real implementation, you would merge the updateStudentDto into the existingStudent.
      // For example: Object.assign(existingStudent, updateStudentDto);
      console.log(existingStudent);
    }
  }

  /**
   * Removes a student by their ID.
   * It finds the index of the student in the array and removes them using splice.
   * @param {string} id - The ID of the student to remove.
   */
  remove(id: string) {
    const studentIndex = this.students.findIndex(
      (student) => student.id === +id,
    );
    if (studentIndex >= 0) {
      this.students.splice(studentIndex, 1);
    }
  }

  /**
   * Adds a course to a student.
   * @param studentId The ID of the student.
   * @param courseId The ID of the course.
   * @returns {Student} The updated student.
   */
  addCourseToStudent(studentId: string, courseId: string) {
    const student = this.findOne(studentId);
    const course = this.coursesService.findOne(courseId);
    if (student && course) {
      student.courses.push(course);
    }
    return student;
  }
}
