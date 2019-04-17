import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { ListStudentsComponent } from './list-students/list-students.component';

const routes: Routes = [
  {
    path: '',
    component: OnBoardingComponent
  },
  {
    path: 'onboardingform',
    component: OnBoardingComponent
  },
  {
    path: 'liststudents',
    component: ListStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
