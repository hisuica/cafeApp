import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../../shared/notice.service';
import {Notice} from '../../../model/notice';

@Component({
  selector: 'app-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  private notices: Array<Notice>;

  constructor(
    private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.noticeService.getAll().subscribe(data => {
      this.notices = data;
    });
  }

}
