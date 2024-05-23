import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioEditarService } from './formulario-editar.service';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.scss'],
})
export class FormularioEditarComponent implements OnInit {
  mock: any = [
    { nome: 'Samuel', cpf: '21312321321', cep: '123123', data: '23123' },
  ];
  form!: FormGroup;
  data: any = [];
  mensagem = 'válida';
  invalido = false;
  datapost: any = []
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _formularioEditarService: FormularioEditarService
  ) {}
  id: any = '';

  ngOnInit(): void {
    this.createForm();
    this.id = this.route.snapshot.paramMap.get('id');
    this.preencherFormulario();
    this.carregaDados();
  }
  createForm() {
    this.form = this.fb.group({
      nome: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }
  carregaDados() {
    this._formularioEditarService.getTodo().subscribe((response) => {
      this.datapost = response;
      console.log(this.datapost);
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
  preencherFormulario() {
    console.log(this.mock.nome);
    this.form.patchValue({
      nome: this.mock[0].nome,
      cpf: this.mock[0].cpf,
      cep: this.mock[0].cep,
      data: this.mock[0].data,
    });
  }
}
