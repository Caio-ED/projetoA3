import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './inicio/login/login.component';
import { RegisterComponent } from './inicio/register/register.component';
import { CadastroPacientesComponent } from './pacientes/cadastro-pacientes/cadastro-pacientes.component';
import { VisualizarPacienteComponent } from './pacientes/visualizar-paciente/visualizar-paciente.component';
import { GerarProntuarioComponent } from './prontuario/gerar-prontuario/gerar-prontuario.component';
import { VisualizarProntuarioComponent } from './prontuario/visualizar-prontuario/visualizar-prontuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuardService } from './guards/auth-guard.service';

// , canActivate: [AuthGuardService]

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'CadastroPacientes', component: CadastroPacientesComponent},
  { path: 'VisualizarPaciente', component: VisualizarPacienteComponent},
  { path: 'GerarProntuario', component: GerarProntuarioComponent},
  { path: 'VisualizarProntuario', component: VisualizarProntuarioComponent},
  { path: 'perfil', component: PerfilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
