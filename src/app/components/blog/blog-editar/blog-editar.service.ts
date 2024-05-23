import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogEditarService {
  constructor(private http: HttpClient) {}

  getTodoById(id: number) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
    getComentsById(id: number){
      return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
  }
}
