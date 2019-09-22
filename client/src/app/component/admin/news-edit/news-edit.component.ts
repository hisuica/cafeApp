import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NoticeService} from '../../../shared/notice.service';
import {NgForm} from '@angular/forms';
import {error} from 'util';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit, OnDestroy {
  notice: any = {};
  types = ['Event', 'Notice'];

  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noticeService: NoticeService
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

  save(form: NgForm) {
    this.noticeService.save(form).subscribe(result => {
      this.gotoList();
    });
  }

  remove(href) {
    this.noticeService.remove(href).subscribe(result => {
      this.gotoList();
    });
  }
}
