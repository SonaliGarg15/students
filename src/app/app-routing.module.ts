import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnBoardingModule } from './on-boarding/on-boarding.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component : AppComponent
  },
  {
    path: 'onboardingform',
    loadChildren : './on-boarding/on-boarding.module#OnBoardingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), OnBoardingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
