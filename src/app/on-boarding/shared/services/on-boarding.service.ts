import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Student } from '../interfaces/student';
import { elementStyleProp } from '@angular/core/src/render3';
import { OnBoardingFormEditAndView } from '../interfaces/onboardingFormEditAndView';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {
  students$: BehaviorSubject<Student[]> = new BehaviorSubject([]);
  studentId$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  editAndViewStudentData$: BehaviorSubject<OnBoardingFormEditAndView> = new BehaviorSubject<OnBoardingFormEditAndView>(null);

  constructor(private http: HttpClient) { }

  getStudents() {
    let key = 'studentsData';
    if (this.students$.value.length === 0) {
      let studentsData = JSON.parse(localStorage.getItem(key));
      this.students$.next(studentsData);
    }

    return this.students$;
  }

  addNewStudent(student: Student) {
    let key = "studentsData";
    let studentsDataPresent = localStorage.hasOwnProperty(key);
    let studentsData = [];
    if (student.studentId === 0) {
      if (studentsDataPresent === false) {
        student.studentId = 1;
      }
      else {
        studentsData = JSON.parse(localStorage.getItem(key));
        student.studentId = studentsData.length + 1;
      }

      studentsData.push(student);
      localStorage.setItem(key, JSON.stringify(studentsData));
    }
    else{
      studentsData = JSON.parse(localStorage.getItem(key));
      let x;
      for (let index = 0; index < studentsData.length; index++) {
        const element = studentsData[index];
        if(element.id === student.studentId){
          x = index;
          break;
        } 
      }
      studentsData.splice(x, 1);
      studentsData.push(student);
      localStorage.setItem(key, JSON.stringify(studentsData));
    }
    this.students$.next(studentsData);
  }

  setStudentId(studentId: number) {
    this.studentId$.next(studentId);
  }

  getStudentId() {
    return this.studentId$.value;
  }

  getStudentById(id: number): Student {
    let key = 'studentsData';
    let studentsData = JSON.parse(localStorage.getItem(key));
    var student;

    for (let index = 0; index < studentsData.length; index++) {
      if (studentsData[index].studentId === id) {
        student = studentsData[index];
        break;
      }
    }
    return student;
  }

  setEditAndViewStudentData(formData: OnBoardingFormEditAndView) {
    this.editAndViewStudentData$.next(formData);
  }

  getEditAndViewStudentData() {
    var retVal = this.editAndViewStudentData$.getValue();
    this.editAndViewStudentData$.next(null);
    return retVal;
  }

  deleteStudent(studentId){
    let key = 'studentsData';
    let studentsData = JSON.parse(localStorage.getItem(key));
    let deleteIndex = null;

    for (let index = 0; index < studentsData.length; index++) {
      if (studentsData[index].studentId === studentId) {
        deleteIndex = index;
        break;
      }
    }
    if(deleteIndex !== null){
      studentsData.splice(deleteIndex, 1);
      localStorage.setItem(key, JSON.stringify(studentsData));
    }
    this.students$.next(studentsData);
  }
}
