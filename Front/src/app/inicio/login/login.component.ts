import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  sla() {

    const body = {
      email: "dev@root.com",
      senha: "123456"
    };

    this.httpClient.post('http://localhost:4000/usuarios/login', body).subscribe((usuarioLogado) => {
      console.log(usuarioLogado);

    })
  }
}
