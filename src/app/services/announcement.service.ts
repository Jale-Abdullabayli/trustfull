import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announce } from 'src/app/models/announce';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  url: string = `${environment.baseUrl}/announcements`;

  constructor(private http: HttpClient) { }

  getAnnouncementsByCategoryId(categoryId:number) {
    return this.http.get<Announce[]>(`${this.url}?categoryId=${categoryId}`);
  }

  
  getAnnouncementsById(id:number) {
    return this.http.get<Announce>(`${this.url}/${id}`);
  }

  getFreeAnnouncements() {
    return this.http.get<Announce[]>(`${this.url}?price=0`);
  }
}
