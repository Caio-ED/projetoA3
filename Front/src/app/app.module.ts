import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './inicio/login/login.component';
import { RegisterComponent } from './inicio/register/register.component';
import { VisualizarPacienteComponent } from './pacientes/visualizar-paciente/visualizar-paciente.component';
import { CadastroPacientesComponent } from './pacientes/cadastro-pacientes/cadastro-pacientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GerarProntuarioComponent } from './prontuario/gerar-prontuario/gerar-prontuario.component';
import { VisualizarProntuarioComponent } from './prontuario/visualizar-prontuario/visualizar-prontuario.component';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CadastroPacientesComponent,
    VisualizarPacienteComponent,
    PerfilComponent,
    GerarProntuarioComponent,
    VisualizarProntuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false // ao salvar, vai manter a mascara
    }),

    RouterModule.forRoot ([
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent} 
    
    ])
    
  ],
  providers: [ 
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
