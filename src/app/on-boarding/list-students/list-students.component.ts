import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../shared/interfaces/student';
import { OnBoardingService } from '../shared/services/on-boarding.service';
import { Router } from '@angular/router';
import { OnBoardingFormEditAndView } from '../shared/interfaces/onboardingFormEditAndView';
import { MatDialog } from '@angular/material';
import { DeleteStudentModalComponent } from '../delete-student-modal/delete-student-modal.component';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students: Student[];
 
  constructor(private onBoardingService: OnBoardingService, private router: Router, public dialog: MatDialog) {    
  }

  ngOnInit() {
    const subs = this.onBoardingService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  editStudentData(student){
    let editFormData: OnBoardingFormEditAndView = {
    isFormDisabled : false,
    studentData : student
    }
    this.onBoardingService.setEditAndViewStudentData(editFormData);
    this.router.navigate(['/onboard/form']);
  }

  viewStudentData(student){
    let editFormData: OnBoardingFormEditAndView = {
    isFormDisabled : true,
    studentData : student
    }
    this.onBoardingService.setEditAndViewStudentData(editFormData);
    this.router.navigate(['/onboard/form']);
  }

  openDialog(studentId: number): void {

    const dialogRef = this.dialog.open(DeleteStudentModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result === true){
       this.onBoardingService.deleteStudent(studentId);
     }
    });
  }


}
