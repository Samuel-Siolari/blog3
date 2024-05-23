import { Component, OnInit } from '@angular/core';
import { BlogEditarService } from './blog-editar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-editar',
  templateUrl: './blog-editar.component.html',
  styleUrls: ['./blog-editar.component.scss'],
})
export class BlogEditarComponent implements OnInit {
  datapost: any = [];
  id: any = '';
  comments:any = []
  constructor(
    private _blogEditarService: BlogEditarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id', this.id);
    this.carregaDados();
  }
  carregaDados() {
    this._blogEditarService
      .getTodoById(Number(this.id))
      .subscribe((response) => {
        this.datapost = response;
      });
      this._blogEditarService
      .getComentsById(Number(this.id))
      .subscribe((response) => {
        this.comments = response;
        console.log(this.comments);
      });
  }
}
