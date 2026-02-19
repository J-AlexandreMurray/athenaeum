
import { Book } from "../types/Book";

export class BookManager {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

  searchBook(title: string, author: string): Book | undefined {
    return this.books.find(
      b =>
        b.title.toLowerCase() === title.toLowerCase() &&
        b.author.toLowerCase() === author.toLowerCase()
    );
  }

  buyBook(title: string, author: string, qty: number): string {
    const book = this.searchBook(title, author);

    if (!book) return "Book not found";
    if (qty > book.stock) return "Not enough stock";

    book.stock -= qty;
    return `Purchased. Total: ${book.price * qty}`;
  }
}
