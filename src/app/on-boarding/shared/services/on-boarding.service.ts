import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {
  studentsDataKey: string = "studentsData";
  students$: BehaviorSubject<Student[]> = new BehaviorSubject([]);
  studentId$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor() { }

  /**
   * get all the students from the local storage
   */
  getStudents() {
    if (this.students$.value.length === 0) {
      if (localStorage.hasOwnProperty(this.studentsDataKey)) {
        let studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
        this.students$.next(studentsData);
      }
    }
    return this.students$;
  }

  /**
   * add new student in local storage
   * @param student 
   */
  addStudent(student: Student) {
    let studentsDataPresent = localStorage.hasOwnProperty(this.studentsDataKey);
    let studentsData = [];
    if (studentsDataPresent === false) {
      student.studentId = 1; // this is the first student, set student id to 1
    }
    else {
      studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
      if (studentsData.length !== 0) {
        student.studentId = studentsData[studentsData.length - 1].studentId + 1; //set the student id, one greater than the last student added id
      }
      else {
        student.studentId = 1; // if studentsData array is empty, set the student id to 1
      }
    }

    studentsData.push(student);
    localStorage.setItem(this.studentsDataKey, JSON.stringify(studentsData));
    this.students$.next(studentsData);
  }

  /**
   * update the student
   * @param student 
   */
  updateStudent(student: Student) {
    let studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
    let objIndex = studentsData.findIndex((obj => obj.studentId === student.studentId));// find the index of student using student id
    studentsData[objIndex] = student;
    localStorage.setItem(this.studentsDataKey, JSON.stringify(studentsData));
    this.students$.next(studentsData);
  }

  /**
   * get student by id from the local storage
   * @param id 
   */
  getStudentById(id) {
    let studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
    let studentId = parseInt(id);
    let objIndex = studentsData.findIndex((obj => obj.studentId === studentId)); // find the index of student using student id
    return studentsData[objIndex];
  }

  /**
   * delete student from the local storage using student id
   * @param studentId 
   */
  deleteStudent(studentId) {
    let studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
    let deleteIndex = studentsData.findIndex((obj => obj.studentId === studentId)); // find the index of student using student id
    if (deleteIndex !== null) {
      studentsData.splice(deleteIndex, 1);
      localStorage.setItem(this.studentsDataKey, JSON.stringify(studentsData));
    }
    this.students$.next(studentsData);
  }
}
