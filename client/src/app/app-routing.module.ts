import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './component/index/index.component';
import {NewsListComponent} from './component/admin/news-list/news-list.component';
import {NewsEditComponent} from './component/admin/news-edit/news-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'news',
    component: NewsListComponent
  },
  {
    path: 'news-add',
    component: NewsEditComponent
  },
  {
    path: 'news-edit/:id',
    component: NewsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
