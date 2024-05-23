import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormularioEditarService {
  constructor(private http: HttpClient) {}

  // getTodoById(id: number) {
  //   return this.http.get<any>(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   );
  // }

  getTodo() {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/posts`
    );
  }
}
