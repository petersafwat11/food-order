import React from "react";
import Select from "./Select";
//import {useEffect } from 'react';
const Book = ({id, title, auther, backgroundImage, cat, allBooks, changeAllBooks, type, result, changeResult })=>{

  return(
    <li id={id}>
    <div className="book">
      <div className="book-top">
        <img
          className="book-cover"
            alt={title}
            src={backgroundImage}
                
        ></img>
        <div className="book-shelf-changer">
            <Select allBooks={allBooks} changeAllBooks={changeAllBooks} cat={cat} result={result} type={type} changeResult={changeResult}></Select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{auther}</div>
    </div>
  </li>
   )
}
export default Book;