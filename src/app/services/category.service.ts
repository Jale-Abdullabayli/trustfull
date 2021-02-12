import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Category} from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = `${environment.baseUrl}/categories`;
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(`${this.url}`);
  }
}
