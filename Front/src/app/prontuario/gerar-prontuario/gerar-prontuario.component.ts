import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface prontuario {
  nomeProntuario: string;
  inicioTratamento: string;
  tipoDoenca: string;
  gravidade: string;
  medicamente: string;
  observacoes: string;
}

@Component({
  selector: 'app-gerar-prontuario',
  templateUrl: './gerar-prontuario.component.html',
  styleUrls: ['./gerar-prontuario.component.scss']
})
export class GerarProntuarioComponent implements OnInit {

  prontuario= {
    nomeProntuario: "",
    inicioTratamento: "",
    tipoDoenca: "",
    gravidade: "",
    medicamento: "",
    observacoes: "",
  }

  gerarProntuario(form:NgForm){
    console.log(this.prontuario);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
