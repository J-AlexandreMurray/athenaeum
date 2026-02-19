
import React, { useState } from "react";
import { BookManager } from "./lib/BookManager";
import { Book } from "./types/Book";

const manager = new BookManager();

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function addBook() {
    const newBook: Book = {
      id: crypto.randomUUID(),
      title,
      author,
      publisher: "Unknown",
      price: 10,
      stock: 1
    };

    manager.addBook(newBook);
    setBooks([...manager.getBooks()]);
    setTitle("");
    setAuthor("");
  }

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>📚 Personal Book Database Prototype</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <h2>Your Library</h2>
      <ul>
        {books.map(b => (
          <li key={b.id}>
            {b.title} — {b.author} (stock: {b.stock})
          </li>
        ))}
      </ul>
    </div>
  );
}
