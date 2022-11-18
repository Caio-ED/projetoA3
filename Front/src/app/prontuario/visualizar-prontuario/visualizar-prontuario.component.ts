import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prontuario } from 'src/app/models/prontuario';

@Component({
  selector: 'app-visualizar-prontuario',
  templateUrl: './visualizar-prontuario.component.html',
  styleUrls: ['./visualizar-prontuario.component.scss']
})
export class VisualizarProntuarioComponent implements OnInit {

  prontuario= {
    cpfProntuario: "",
    inicioTratamento: "",
    tipoDoenca: "",
    gravidade: "",
    medicamento: "",
    observacoes: "",
  }

  Prontuario = []
  cpfPesquisa = ''

  visualizarProntuario() {
    return this.httpClient.get<Prontuario[]>(`http://localhost:5000/prontuarios/pesquisa?cpfProntuario=${this.cpfPesquisa}`).subscribe((visualizarProntuario) =>{
      this.Prontuario = visualizarProntuario;
      console.log('prontuarios achados: ', visualizarProntuario)
    })
  }

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

}
