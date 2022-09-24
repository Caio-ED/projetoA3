import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './inicio/login/login.component';
import { RegisterComponent } from './inicio/register/register.component';
import { CadastroPacientesComponent } from './pacientes/cadastro-pacientes/cadastro-pacientes.component';
import { VisualizarPacienteComponent } from './pacientes/visualizar-paciente/visualizar-paciente.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'CadastroPacientes', component: CadastroPacientesComponent},
  { path: 'VisualizarPaciente', component: VisualizarPacienteComponent},
  { path: '', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
