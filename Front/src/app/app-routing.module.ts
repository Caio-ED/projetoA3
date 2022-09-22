import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './inicio/login/login.component';
import { RegisterComponent } from './inicio/register/register.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'pacientes', component: PacientesComponent},
  { path: '', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
