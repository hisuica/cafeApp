import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageSnippet} from '../../model/image-snippet';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(imageSnippet: ImageSnippet): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();

    formData.append('file', imageSnippet.file);
    formData.append('type', imageSnippet.type);
    formData.append('fileName', imageSnippet.fileName);

    const req = new HttpRequest('POST', '//localhost:8080/file-upload', formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
}
