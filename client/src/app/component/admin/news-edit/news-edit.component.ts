import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NoticeService} from '../../../service/notice/notice.service';
import {NgForm} from '@angular/forms';
import {ImageSnippet} from '../../../model/image-snippet';
import {FileUploadService} from '../../../service/upload/file-upload.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})

export class NewsEditComponent implements OnInit, OnDestroy {
  notice: any = {};
  types = ['Event', 'Notice'];
  selectedFile: ImageSnippet;

  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noticeService: NoticeService,
    private fileUloadService: FileUploadService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      const id = params.id;
      if (id) {
        this.noticeService.get(id).subscribe((notice: any) => {
          if (notice) {
            this.notice = notice;
            this.notice.href = notice._links.self.href;
          } else {
            console.log(`存在しないID:'${id}'。リストへ戻ります。`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoList(): void {
    this.router.navigate(['/news']);
  }

  processFile(imageInput: any): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(file.type);
      this.selectedFile.fileName = 'file' + Date.now() + '.' + this.selectedFile.type;
      this.notice.imgName = this.selectedFile.fileName;
    });

    reader.readAsDataURL(file);
  }

  save(form: NgForm) {
    console.log(form);
    this.noticeService.save(form).subscribe(result => {
      if (this.selectedFile !== undefined) {
        this.fileUloadService.pushFileToStorage(this.selectedFile).subscribe(res => {
          console.log('File is completely uploaded!');
        }, error => {
          console.log(error);
        });
      }
      this.gotoList();
    }, error => {
      console.log(error);
    });
  }

  remove(href) {
    this.noticeService.remove(href).subscribe(result => {
      this.gotoList();
    });
  }
}
