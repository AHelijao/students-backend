import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './entitites/student.entity';

@Injectable()
export class StudentsService {
  private students: Student[] = [
    {
      id: 1,
      name: 'John',
      promotion: 'Fall-2025',
      courses: ['JS', 'Java'],
    },
  ];

  findAll() {
    return this.students;
  }

  findOne(id: string) {
    const student = this.students.find((student) => student.id === +id);
    if (!student) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return student;
  }

  create(createStudentDto: any) {
    this.students.push(createStudentDto);
    return createStudentDto;
  }

  update(id: string, updateStudentDto: any) {
    const existingStudent = this.findOne(id);
    if (existingStudent) {
      console.log(existingStudent);
    }
  }

  remove(id: string) {
    const studentIndex = this.students.findIndex(
      (student) => student.id === +id,
    );
    if (studentIndex >= 0) {
      this.students.splice(studentIndex, 1);
    }
  }
}
