import { Component, OnInit } from '@angular/core';
import { BlogListarService } from './blog-listar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-listar',
  templateUrl: './blog-listar.component.html',
  styleUrls: ['./blog-listar.component.scss'],
})
export class BlogListarComponent implements OnInit {
  datapost: any = [];
  comments: any = [];
  constructor(
    private _blogListarService: BlogListarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregaDados();
  }
  carregaDados() {
    this._blogListarService.getTodo().subscribe((response) => {
      this.datapost = response;
      console.log(this.datapost);
      this._blogListarService.getComments().subscribe((response) => {
        this.datapost = response;
        console.log(this.datapost);

      })
    })
    }
    redirectEditar(id: any){
      this.router.navigate([`/blog-editar/${id}`])
}
}

