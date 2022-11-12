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

  constructor(private httpClient: HttpClient,
              private rota: Router) { 

    
  }
    
  ngOnInit(): void {

  }

  // sla() {

  //   const body = {
  //     email: "dev@root.com",
  //     senha: "123456"
  //   };

  //   this.httpClient.post('http://localhost:4000/usuarios/login', body).subscribe((usuarioLogado) => {
  //     console.log(usuarioLogado);

  //   })
  // }
}
