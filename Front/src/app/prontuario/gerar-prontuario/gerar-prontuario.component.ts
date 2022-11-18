import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prontuario } from 'src/app/models/prontuario'

@Component({
  selector: 'app-gerar-prontuario',
  templateUrl: './gerar-prontuario.component.html',
  styleUrls: ['./gerar-prontuario.component.scss']
})
export class GerarProntuarioComponent implements OnInit {

  prontuario= {
    cpfProntuario: "",
    inicioTratamento: "",
    tipoDoenca: "",
    gravidade: "",
    medicamento: "",
    observacoes: "",
  }

  gerarProntuario(form:NgForm){
    this.httpClient.post<Prontuario>('http://localhost:5000/prontuarios/cadastro', this.prontuario).subscribe((prontuarioGerado) =>{
    alert('Prontuário gerado com sucesso!')
    var limparForm= <HTMLFormElement>document.getElementById('gerarProntuario');
    limparForm.reset();
    console.log(this.prontuario);
    })
  }
  

  constructor(
    private httpClient: HttpClient,) { }

  ngOnInit(): void {
  }

}
