import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MylistComponent } from './components/mylist/mylist.component';
import {DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'mylist', component: MylistComponent },
  { path: 'watch/:media_type/:id', component: DetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  

 }
