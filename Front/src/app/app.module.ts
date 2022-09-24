import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './inicio/login/login.component';
import { RegisterComponent } from './inicio/register/register.component';
import { VisualizarPacienteComponent } from './pacientes/visualizar-paciente/visualizar-paciente.component';
import { CadastroPacientesComponent } from './pacientes/cadastro-pacientes/cadastro-pacientes.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot ([

      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent} 
    
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
