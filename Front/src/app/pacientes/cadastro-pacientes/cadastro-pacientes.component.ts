import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface Paciente {
  nome: string;
  cpf: string;
  email: string;
  dataNascimento: string;
  cep: string;
  rua: string;
  numero: string;
  complemento:string;
  bairro:string;
  estado:string;
  cidade:string;
}

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent implements OnInit {

  paciente= {
    nome: "",
    cpf: "",
    email: "",
    dataNascimento: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    estado: "",
    cidade: "",
  }

  registrarPaciente(form:NgForm){
    this.httpClient.post<Paciente>('http://localhost:3000/pacientes/cadastro', this.paciente).subscribe((pacienteCadastrado) =>{
      console.log(this.paciente);
    })
  }

  constructor(
    private httpClient: HttpClient,
    private rota: Router) { }

  ngOnInit(): void {
  }

}
