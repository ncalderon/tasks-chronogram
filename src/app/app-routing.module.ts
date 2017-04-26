import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProjectComponent} from './components/project/edit/project.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./components/login/guard/auth-guard";
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
  /*{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },*/
  { path: 'login', component: LoginComponent },
  { path: '', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'projects/:id', canActivate: [AuthGuard], component: ProjectComponent },
  /*{ path: 'project',     component: ProjectComponent }*/
  // otherwise redirect to home
  /*{ path: '**', redirectTo: '' }*/
];

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forRoot(routes)
  ]
  , exports: [ RouterModule ]
  , declarations: []
})
export class AppRoutingModule { }
