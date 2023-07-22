import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { StudentsModule } from './pages/students/students.module';
import { SharedModule } from '../shared/modules/shared.module';
import { NavComponent } from './layout/nav/nav.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    StudentsModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
