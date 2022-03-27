import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SuporteComponent } from './views/suporte/suporte.component';


const routes: Routes = [
 { path:"", component: HomeComponent},
 { path:"login" , component: LoginComponent},
 { path:"suporte" , component: SuporteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
