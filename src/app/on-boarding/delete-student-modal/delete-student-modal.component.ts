import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'delete-student-modal',
    templateUrl: './delete-student-modal.component.html',
    styleUrls: ['./delete-student-modal.component.css']
  })
  export class DeleteStudentModalComponent {
  
    constructor(
      public dialogRef: MatDialogRef<DeleteStudentModalComponent>){}
  
    onNoClick(): void {
      this.dialogRef.close();
    }  
  }