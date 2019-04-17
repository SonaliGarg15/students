import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { ListStudentsComponent } from './list-students/list-students.component';

@NgModule({
  declarations: [OnBoardingComponent, ListStudentsComponent],
  imports: [
    CommonModule,
    OnBoardingRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class OnBoardingModule { }
