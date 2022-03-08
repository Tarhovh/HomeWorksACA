import React, { useState } from "react";
import "./App.css";
import Loading from "./Loading";

const Search = () => {
  return <div className="search-header">Find your book!</div>;
};

export default Search;

export const SearchBar = () => {
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState("");

  const [books, setBooks] = useState([]);
  let url = new URL("http://openlibrary.org/search.json");

  const changeValue = (newValue) => {
    setLoading(false);
    setCurrentValue(newValue);

    fetch(`http://openlibrary.org/search.json?q=${newValue}`).then(
      async (res) => {
        const json = await res.json();
        setBooks(json.docs);
        setLoading(true);
      }
    );
  };

  const onSubmit = (event) => {
    changeValue(event.target[0].value);
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} action={url} method="get" target="_blank">
      <label htmlFor="book-search">
        <span className="visually-hidden"></span>
      </label>
      <input
        defaultValue={currentValue}
        type="text"
        id="book-search"
        placeholder="Search your books"
        name="q"
      />
      <button type="submit">Search</button>
      {loading ? (
        books.map((book) => (
          <ul>
            <li> Title "{book.title}"</li>
            <ul>
              <li>Author "{book.author_name}" </li>
              <li>First_Pub_Year: {book.first_publish_year}</li>
              <li>Subject "{book.subject}"</li>
            </ul>
          </ul>
        ))
      ) : (
        <Loading />
      )}
    </form>
  );
};

//   const bookEntries = Object.entries(books);

//   bookEntries.forEach((key, index, array) => {
//     array.forEach((obj) => {
//       const { key, value } = obj;

//       //   console.log(obj[key]);
//     });
//   });
