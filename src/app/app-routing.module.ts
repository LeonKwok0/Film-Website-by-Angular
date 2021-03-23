import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MylistComponent } from './components/mylist/mylist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'mylist', component: MylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  

 }
