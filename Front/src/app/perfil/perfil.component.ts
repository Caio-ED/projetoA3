import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  
  nomeFuncionario: string;
  emailFuncionario: string;
  tipoAcesso: string;
  
  constructor() { }
  
  
  ngOnInit(): void {
    this.nomeFuncionario= window.sessionStorage.getItem('nomeFuncionario')
    this.emailFuncionario= window.sessionStorage.getItem('emailFuncionario')
    this.tipoAcesso= window.sessionStorage.getItem('tipoAcesso')
  }

}
