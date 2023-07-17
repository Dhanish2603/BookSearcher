import React, { useRef } from "react";
// import Cards from "./Cards";
import notFound from "../images/notFound.jpg";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../store/book-redux";

function Searchbar() {
  const inputRef = useRef("");
  const data =useSelector(state=>state.book.items);
  const dispatch = useDispatch();



  const submitHandler = async (event) => {
    event.preventDefault();
    const url = "http://openlibrary.org/search.json?title=";
    const { value } = inputRef.current;
    const response = await fetch(`${url}${value}`);
    const books = await response.json();
    console.log("dispatch run");
    const newBooks = books.docs.slice(0, 20).map((bookSingle) => {
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

    const bookWithCover = newBooks.map((mainData)=>{
      return{
      ...mainData,
      id:(mainData.id).replace("/works/",""),
       cover_img: mainData.id? `https://covers.openlibrary.org/b/id/${mainData.cover_id}-L.jpg`:notFound,
  }}); 
    dispatch(bookActions.searchFinder(bookWithCover));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button onClick={submitHandler}>Search</button>
      </form>
    
    
      <div className="cards"></div>
    </div>
  );
}

export default Searchbar;