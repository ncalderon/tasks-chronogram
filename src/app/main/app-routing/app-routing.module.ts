import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {ProjectComponent} from '../../components/project/project.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'projects/:id', component: ProjectComponent }
  /*{ path: 'project',     component: ProjectComponent }*/
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
