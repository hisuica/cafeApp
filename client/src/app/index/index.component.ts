import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../shared/notice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private notices: Array<any>;

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    this.noticeService.getAll().subscribe( data => {
      console.log(data);
      this.notices = data;
    });
  }

}
