import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bubble } from './bubble.type';

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  private apiURL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  post(bubble: Bubble) {
    return this.http.post<Bubble[]>(`${this.apiURL}/thoughts`, bubble);
  }

  getAll() {
    return this.http.get<Bubble[]>(`${this.apiURL}/thoughts?_sort=id&_order=desc`);
  }
}
