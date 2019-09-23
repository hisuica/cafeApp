import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  mainImgUrl = 'https://www.goteborg.com/globalassets/bilder---produkter/c/cuckoos-nest/cuckoos-nest-2019-1-43.jpg';

  constructor() { }

  ngOnInit() {
  }

}
