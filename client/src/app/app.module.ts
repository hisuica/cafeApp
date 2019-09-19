import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticeComponent } from './component/notice/notice.component';
import { EventComponent } from './component/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NoticeComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
