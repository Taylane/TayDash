import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bubble } from './bubble.type';

@Injectable({
  providedIn: 'root',
})
export class ThoughtsService {
  private apiURL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Bubble[]>(`${this.apiURL}/thoughts`);
  }
}
