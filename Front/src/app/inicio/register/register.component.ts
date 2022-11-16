import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface Funcionario {
  nomeFuncionario: string;
  cpfFuncionario: string;
  emailFuncionario: string;
  passwordFuncionario: string;
  recepcionista: string;
  enfermeiro: string;

}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // funcionarios = new FormGroup(''){}

  funcionario= {
        nomeFuncionario: "",
        cpfFuncionario: "",
        emailFuncionario: "",
        passwordFuncionario: "",
        confirmPasswordFuncionario: "",
        tipoAcesso: "",
  } 

  senhaNaoCompativel = false;

  registerFn(form:NgForm){

    let passwordFuncionario = form.value.passwordFuncionario;
    let confirmPasswordFuncionario = form.value.confirmPasswordFuncionario;


    if(passwordFuncionario === confirmPasswordFuncionario && form.valid){
      this.httpClient.post<Funcionario>('http://localhost:4000/usuarios', this.funcionario).subscribe((usuarioCadastrado) => {
        console.log(this.funcionario);
        this.senhaNaoCompativel = false;
        this.rota.navigate(['/login'])
    })
    }

    else{
      console.log('senha não compativel')
      this.senhaNaoCompativel= true;
    }
  }

  constructor(  
    private httpClient: HttpClient,
    private rota: Router) { 

  }


  ngOnInit(): void { }


}


