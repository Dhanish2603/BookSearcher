import React, { useRef, useState } from "react";
import Cards from "./Cards";
function Searchbar() {
  const URL = "http://openlibrary.org/search.json?title=";
  const [books, setBooks] = useState([
    {
      id: null,
      author: "",
      cover_id: null,
      edition_count: null,
      first_publish_year: null,
      title: "",
    },
  ]);
  const inputRef = useRef("");
  const searchHandler = async (event) => {
    try {
      console.log("working");
      const response = await fetch(`${URL}${inputRef.current.value}`);
      const data = await response.json();
      const { docs } = data;
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBooks(newBooks);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    searchHandler();
    console.log(books);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button onClick={submitHandler}>Search</button>
      </form>
      <div className="hello">
        {books.map((item, index) => {
          return <Cards key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Searchbar;
