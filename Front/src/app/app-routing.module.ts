import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './inicio/login/login.component';
import { RegisterComponent } from './inicio/register/register.component';
import { CadastroPacientesComponent } from './pacientes/cadastro-pacientes/cadastro-pacientes.component';
import { VisualizarPacienteComponent } from './pacientes/visualizar-paciente/visualizar-paciente.component';
import { MarcarTratamentosComponent } from './tratamentos/marcar-tratamentos/marcar-tratamentos.component';
import { VisualizarTratamentosComponent } from './tratamentos/visualizar-tratamentos/visualizar-tratamentos.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'CadastroPacientes', component: CadastroPacientesComponent},
  { path: 'VisualizarPaciente', component: VisualizarPacienteComponent},
  { path: 'MarcarTratamentos', component: MarcarTratamentosComponent},
  { path: 'VisualizarTratamentos', component: VisualizarTratamentosComponent},
  { path: 'perfil', component: PerfilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
