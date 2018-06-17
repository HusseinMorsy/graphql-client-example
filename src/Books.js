import React from "react";

const BOOKS = [
  { title: "Get started", author: "Esma" },
  { title: "Graphql with React", author: "Hussein" }
];

const Books = () => {
  const books = BOOKS;
  return (
    <div>
      <h2>My Books</h2>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            {i + 1} {book.title} from {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
