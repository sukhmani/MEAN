import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersComponent } from './computers/computers.component';

const routes: Routes = [
  { path: 'heroes', component: ComputersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }