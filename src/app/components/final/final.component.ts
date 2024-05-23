import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
})
export class FinalComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  nome: any = '';
  cpf: any = '';

  ngOnInit(): void {
    this.nome = this.route.snapshot.paramMap.get('nome');
    this.cpf = this.route.snapshot.paramMap.get('cpf');
  }
  redirect() {
    this.router.navigateByUrl('/formulario');
  }
}
