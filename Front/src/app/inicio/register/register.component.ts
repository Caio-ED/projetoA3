import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Funcionario {
  nomeFuncionario: string;
  cpfFuncionario: string;
  emailFuncionario: string;
  passwordFuncionario: string;
  confirmPasswordFuncionario: string;
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
        recepcionista: "",
        enfermeiro: "",
  } 

  registerFn(form:NgForm){

    let passwordFuncionario = form.value.passwordFuncionario;
    let confirmPasswordFuncionario = form.value.confirmPasswordFuncionario;

    if(passwordFuncionario === confirmPasswordFuncionario && form.valid){
      console.log("Senha compatível");
      console.log(this.funcionario);
    }

    else{
      console.log("Senha não correspondente")
    }
  }

  constructor() { }


  ngOnInit(): void { }


}


