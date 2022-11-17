import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-visualizar-paciente',
  templateUrl: './visualizar-paciente.component.html',
  styleUrls: ['./visualizar-paciente.component.scss']
})
export class VisualizarPacienteComponent implements OnInit {

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

  Paciente = []
  cpfPesquisa = ''

  visualizarPaciente() {
    return this.httpClient.get<Paciente[]>(`http://localhost:3000/pacientes/pesquisa?cpf=${this.cpfPesquisa}`).subscribe((visualizarPaciente) =>{
      this.Paciente = visualizarPaciente;
      console.log(visualizarPaciente)
    })
  }

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

}
