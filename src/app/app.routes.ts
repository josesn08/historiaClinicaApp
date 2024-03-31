import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {LabsComponent} from './pages/labs/labs.component';
import { Component } from '@angular/core';
import { HistoriaClinicaComponent } from './pages/historia-clinica/historia-clinica.component';
import { loginGuard } from './util/login.guard';

export const routes: Routes = [
  { path: '', redirectTo:'/src/app/pages/historia-clinica', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'historiaClinica', component:HistoriaClinicaComponent, canActivate: [loginGuard]}
];
