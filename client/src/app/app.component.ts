import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  searchIcon = 'https://img.icons8.com/material-rounded/64/000000/search.png';

  scroll(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
}
