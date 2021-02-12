import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Owner} from '../models/owner';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  url: string = `${environment.baseUrl}/owners`;

  constructor(private http: HttpClient) { }

  getOwners() {
    return this.http.get<Owner[]>(`${this.url}`);
  }

  getOwnersById(id:number) {
    return this.http.get<Owner>(`${this.url}/${id}`);
  }
}

