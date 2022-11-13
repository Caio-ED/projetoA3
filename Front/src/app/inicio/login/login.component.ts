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

  inputUsario = '';
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
      email: this.inputUsario,
      senha: this.inputSenha,
      msg: '',
      auth: false
    };

    this.httpClient.post<Login>('http://localhost:4000/usuarios/login', body).subscribe((usuarioLogado) => {
      console.log(usuarioLogado);
      this.mostra = !usuarioLogado.auth;
      body.auth = usuarioLogado.auth;

      window.sessionStorage.setItem('','')
        this.mostra = false 
        this.rota.navigate(['/home']);
    })
    this.mostra = true
}
}

