import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPageComponent} from 'src/app/add-page/add-page.component'

const routes: Routes = [
  {path:'home',component:AddPageComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
