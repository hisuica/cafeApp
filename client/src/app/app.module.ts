import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticeComponent } from './component/notice/notice.component';
import { EventComponent } from './component/event/event.component';
import { NewsListComponent } from './component/admin/news-list/news-list.component';
import { NewsEditComponent } from './component/admin/news-edit/news-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NoticeComponent,
    EventComponent,
    NewsListComponent,
    NewsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
