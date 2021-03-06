import { Component, OnInit } from '@angular/core';
import {Notice} from '../../model/notice';
import {NoticeService} from '../../service/notice/notice.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private notices: Array<Notice>;

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    this.noticeService.getEvents().subscribe( data => {
      this.notices = data;
    });
  }
}
