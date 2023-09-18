import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './Component/contact/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7198/api/Photo';
  AddPhoto(data: Photo) {
    return this.http.post<Photo>(this.apiUrl, data);
  }
}
