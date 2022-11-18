import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    private httpClient: HttpClient,) { 
  }

  ngOnInit(): void {
    const fillForm = (address) =>{
      (document.querySelector('#rua') as HTMLInputElement).value = address.logradouro;
      (document.querySelector('#complemento') as HTMLInputElement).value= address.complemento;
      (document.querySelector('#bairro') as HTMLInputElement).value = address.bairro;
      (document.querySelector('#cidade') as HTMLInputElement).value = address.localidade;
      (document.querySelector('#estado') as HTMLInputElement).value= address.uf;
    }

    const searchCep = async() => {
      const cep = (document.querySelector('#cep') as HTMLInputElement).value;
      const url = `http://viacep.com.br/ws/${cep}/json/`;
      const dados = await fetch(url);
      const address = await dados.json()
      fillForm(address)
    };

    document.querySelector('#cep').addEventListener('focusout', searchCep)
    
  }

}
