import { Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {LabsComponent} from './pages/labs/labs.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  }

];
