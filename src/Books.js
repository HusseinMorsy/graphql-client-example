import React from "react";

const BOOKS = [
  { title: "Get started", author: "Esma" },
  { title: "Graphql with React", author: "Hussein" }
];

const Books = () => (
  <div>
    <h2>My Books</h2>
    <ul>
      {BOOKS.map((book, i) => (
        <li key={i}>
          {i + 1} {book.title} from {book.author}
        </li>
      ))}
    </ul>
  </div>
);

export default Books;
