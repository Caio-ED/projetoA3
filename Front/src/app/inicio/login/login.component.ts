import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputUsuario = '';
  inputSenha = '';
  mostra = false;

  constructor(
    private httpClient: HttpClient,
    private rota: Router) {

  }

  ngOnInit(): void {

  }

  login() {
    
    let body = {
      emailFuncionario: this.inputUsuario,
      passwordFuncionario: this.inputSenha,
      auth: false
    };

    this.mostra = true

    this.httpClient.post<Login>('http://localhost:4000/usuarios/login', body).subscribe((usuarioLogado) => {
      this.mostra = false
      window.sessionStorage.setItem('nomeFuncionario',usuarioLogado.nomeFuncionario)
      window.sessionStorage.setItem('emailFuncionario',usuarioLogado.emailFuncionario)
      window.sessionStorage.setItem('tipoAcesso',usuarioLogado.tipoAcesso)
        this.rota.navigate(['/home']);
    })
    
}
}

