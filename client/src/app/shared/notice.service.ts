import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  public API = '//localhost:8080';
  public NOTICE_API = this.API + '/notice';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.NOTICE_API);
  }
}
