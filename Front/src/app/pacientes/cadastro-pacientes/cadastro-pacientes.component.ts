import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente'


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
    this.httpClient.post<Paciente>('http://localhost:3000/pacientes/cadastro', this.paciente).subscribe((pacienteCadastrado) =>{

    alert('Paciente cadastrado com sucesso!')
    var limparForm= <HTMLFormElement>document.getElementById('cadastrarPaciente');
    limparForm.reset();
    })
  }


  constructor(
    private httpClient: HttpClient,
    private rota: Router) { 

      
    }

  ngOnInit(): void {
    
  }

}
