import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_BOOKS = gql`
  query {
    books {
      title
      author
    }
  }
`;

const Books = () => {
  return (
    <Query query={GET_BOOKS}>
      {({ loading, error, data }) => {
        if (loading) {
          console.log(loading);
          return <p>Loading ...</p>;
        }
        if (error) return <p>Error: {error}</p>;
        return (
          <div>
            <h2>My Books</h2>
            <ul>
              {data.books.map((book, i) => (
                <li key={i}>
                  {i + 1} {book.title} from {book.author}
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default Books;
