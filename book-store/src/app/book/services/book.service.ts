import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BookModel } from '../models/book.model';

// Dependency Injection
@Injectable({
  providedIn: 'root' // available in entire application.
})
export class BookService {

  constructor(private http: HttpClient) { 

  }

  getBooks(){
    // new HttpClient();
    // calling api. (client->server communication)
    return this.http.get("http://localhost:3100/api/Book")
      .pipe(map((res: BookModel[])=> res));
  }
}



// Observer/Publisher/Notifier Pattern
// Let us notify you.
// provide email/phone
// you are notified.

// 1. Product is being observed (Observable item)
// 2. Amazon Notifier System (Observer, Notifier, Publisher)
// 3. Subscriber/Listener Customer, You

