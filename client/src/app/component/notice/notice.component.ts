import { Component, OnInit } from '@angular/core';
import { Notice } from '../../model/notice';
import {NoticeService} from '../../shared/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  private notices: Array<Notice>;

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    this.noticeService.getNotices().subscribe( data => {
      this.notices = data;
    });
  }

}
