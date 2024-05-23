import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  ngOnInit(): void {}

  form!: FormGroup;
  data: any = [];
  mensagem = 'válida';
  invalido = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nome: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }
  salvar() {
    if (this.form.invalid) {
      this.invalido = true;
    } else {
      this.validaCPF(this.form.get('cpf')?.value);
      this.data.push(this.form.value);
    }
  }
  validaCPF(cpf: any) {
    console.log(cpf);
    let tamanho = cpf.length;
    if (tamanho > 11) {
      this.mensagem = 'inválido';
      this.invalido = true;
    } else {
      this.redirect();
    }
  }

  redirect() {
    let nome = this.form.get('nome')?.value;
    let cpf = this.form.get('cpf')?.value;
    this.router.navigateByUrl(`/final/${nome}/${cpf}`);
  }
}
