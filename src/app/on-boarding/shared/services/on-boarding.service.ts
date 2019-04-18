import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {
  students$: BehaviorSubject<Student[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getStudents() {
    const url = '/assets/students.json';

    return this.http.get<Student[]>(url).pipe(
      tap(data => {
        this.students$.next(data);
      })
    );
  }

  fetchStudents() {
    const url = '/assets/employee.json';

    this.http.get<Student[]>(url).subscribe(data => {
      this.students$.next(data);
    });
  }

  addNewStudent(emp: Student) {
    const currentData = this.students$.getValue();
    const updatedData = [...currentData, emp];

    this.students$.next(updatedData);
    console.log(this.students$);
  }
}
