import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  public API = '//localhost:8080';
  public NOTICE_API = this.API + '/news';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.NOTICE_API + '-list');
  }

  getNotices(): Observable<any> {
    return this.http.get(this.NOTICE_API + '/notices');
  }

  getEvents(): Observable<any> {
    return this.http.get(this.NOTICE_API + '/events');
  }

  get(id: string) {
    return this.http.get(this.NOTICE_API + '/' + id);
  }

  save(notice: any): Observable<any> {
    if (notice.href) {
      return this.http.put(notice.href, notice);
    } else {
      return this.http.post(this.NOTICE_API, notice);
    }
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
