import { Component } from '@angular/core';

@Component({
  // Used to render components
  selector: 'app-root',
  // locates html part of component
  templateUrl: './app.component.html',
  // locates css part of component.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store';
}

// Angular Components
// 3 parts (1. HTML, 2. CSS, 3. TS)