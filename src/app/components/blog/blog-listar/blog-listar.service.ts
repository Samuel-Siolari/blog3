import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogListarService {
  constructor(private http: HttpClient, ht: HttpClient,) {}

  // getTodoById(id: number) {
  //   return this.http.get<any>(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   );
  // }
      getTodo() {
    return this.http.get<any>(
      `https:jsonplaceholder.typicode.com/posts`
    )
      }
      getComments() {
        return this.http.get<any>(
          `https://jsonplaceholder.typicode.com/posts/comments`
        )
          }
    }
