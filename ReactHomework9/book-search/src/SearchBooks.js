import React, { useState, useEffect, useRef, useReducer } from "react";
import "./App.css";
import Loading from "./Loading";
// import { useSearchParams } from "react"
// import { render } from 'react-dom';

const Search = () => {
  return <div className="search-header">Find your book!</div>;
};

export default Search;

export const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  const [books, setBooks] = useState([]);
  let url = new URL("http://openlibrary.org/search.json");

  // const timerRef = useRef(null);

  const changeValue = (newValue) => {
    setCurrentValue(newValue);

    fetch(`http://openlibrary.org/search.json?q=${newValue}`).then(
      async (res) => {
        const json = await res.json();
        //   console.log(json.docs)
        // console.log(res.data.message)
        setBooks(json.docs);
        setLoading(true);
      }
    );
  };

  console.log(loading);

  const onSubmit = (event) => {
    changeValue(event.target[0].value);
    // console.dir(event.target[0].value);
    event.preventDefault();
  };

  const bookEntries = Object.entries(books);

  bookEntries.forEach((key, index, array) => {
    array.forEach((obj) => {
      const { key, value } = obj;

      //   console.log(obj[key]);
    });
  });

  return (
    <form onSubmit={onSubmit} action={url} method="get" target="_blank">
      <label htmlFor="book-search">
        <span className="visually-hidden"></span>
      </label>
      <input
        // onChange={onChange}
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
      ) : <Loading />
      }
    </form>
  );
};
