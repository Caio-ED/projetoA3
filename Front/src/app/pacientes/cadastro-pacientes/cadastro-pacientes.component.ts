import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    console.log(this.paciente);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
