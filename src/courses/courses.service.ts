import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Initial Course',
      description: 'A default course.',
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === +id);
    if (!course) {
      throw new NotFoundException(`Course #${id} not found`);
    }
    return course;
  }

  create(createCourseDto: any) {
    const newCourse = {
      id: this.courses.length + 1,
      ...createCourseDto,
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  update(id: string, updateCourseDto: any) {
    const existingCourse = this.findOne(id);
    if (existingCourse) {
      Object.assign(existingCourse, updateCourseDto);
    }
    return existingCourse;
  }

  remove(id: string) {
    const courseIndex = this.courses.findIndex(
      (course) => course.id === +id,
    );
    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1);
    }
  }
}
