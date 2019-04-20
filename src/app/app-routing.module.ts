import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnBoardingModule } from './on-boarding/on-boarding.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { OnBoardingComponent } from './on-boarding/on-boarding/on-boarding.component';
import { ListStudentsComponent } from './on-boarding/list-students/list-students.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children:[
      {
        path:'login',
        component: LoginComponent       
      },
      {
        path:'register',
        component: RegisterComponent
      }]
  },
  {
    path:'onboard',
    children:[
      {
        path:'form',
        component: OnBoardingComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'students',
        component: ListStudentsComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), OnBoardingModule, AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
