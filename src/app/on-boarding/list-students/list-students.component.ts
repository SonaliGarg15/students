import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/interfaces/student';
import { OnBoardingService } from '../shared/services/on-boarding.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteStudentModalComponent } from '../delete-student-modal/delete-student-modal.component';
import { categories } from '../shared/constants';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})

export class ListStudentsComponent implements OnInit {
  students: Student[];
  categories = categories;
  noDataFound: boolean = false;

  constructor(private onBoardingService: OnBoardingService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.onBoardingService.getStudents().subscribe(data => {
      if(data.length === 0){
        this.noDataFound = true;
      }
      this.students = data;
    });
  }

  editStudentData(student) {
    this.router.navigate(['/onboard/edit', student.studentId]);
  }

  viewStudentData(student) {
    this.router.navigate(['/onboard/view', student.studentId]);
  }

  openDeleteModal(studentId: number): void {
    const dialogRef = this.dialog.open(DeleteStudentModalComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.onBoardingService.deleteStudent(studentId);
      }
    });
  }
}
