import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: false
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  newBook: Book = { title: '', author: '', year: new Date().getFullYear(), genre: '' };
  searchTerm = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  addBook() {
    if (!this.newBook.title.trim()) return;
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.newBook = { title: '', author: '', year: new Date().getFullYear(), genre: '' };
      this.loadBooks();
    });
  }

  updateBook(book: Book) {
    this.bookService.updateBook(book).subscribe(() => this.loadBooks());
  }

  deleteBook(id?: string) {
    if (!id) return;
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }

  get filteredBooks() {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
