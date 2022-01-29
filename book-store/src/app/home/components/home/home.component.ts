import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Steps:
  // To call api from angular.
  // 1. call api from home component (Bad Practice)
      // because it violates single resposni..
      // component is responsible only ro handle html
  // 2. to create a service which will call api.
      // 


  // Constructor injection of dependencies.
  constructor(private bookService: BookService) { }

  books: BookModel[];

  // Lifecycle hook, component is initialized
  ngOnInit(): void {
    this.books = [];

    // const instanceOfBookService = new BookService();
    const bookObservable = this.bookService.getBooks();
    bookObservable.subscribe(
        (result)=>{this.books=result;},
        (err)=>{console.log(err)},
        ()=>{console.log("done")}
    )
  }

}



// class A{

//   add(){

//   }
// }

// new A().add();
