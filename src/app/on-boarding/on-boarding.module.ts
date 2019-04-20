import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule, MatNativeDateModule, MatCardModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DeleteStudentModalComponent } from './delete-student-modal/delete-student-modal.component';

@NgModule({
  declarations: [OnBoardingComponent, ListStudentsComponent, DeleteStudentModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [DeleteStudentModalComponent]
}) 
export class OnBoardingModule { }
