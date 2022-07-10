import {Link} from "react-router-dom";
import Book from "./Book";
import * as Api from '../BooksAPI';
import { useState, useEffect, useCallback } from "react";


const Search = ({changeAllBooks, allBooks})=>{
  const [search,setSearch]= useState('');
  const [result, setResult]= useState([]);

  const searchHandeler = (e)=>{
   e.preventDefault();
   setSearch(e.target.value);
}
const compare = useCallback((bookId)=>{
  const existBook= allBooks.filter(book=>(book.id===bookId));
  if(existBook.length>0){
    return(existBook[0].cat)
  }
  },[allBooks])

useEffect(()=>{
  const getData = async()=>{
    const res = await Api.search(search, '30');
    const booksApi = (res.length>0&& res!==undefined) && res.map(book =>(
      {
        id: book.id,
        cat: compare(book.id)||'None',
        title: book.title,
        backgroundImage:book.imageLinks?book.imageLinks.thumbnail:book.imageLinks , 
        auther:book.authors,
      }
    ))
    setResult(booksApi);
}
const res1 = search.length!== 0  ? setTimeout(getData,400) :setResult([]);

return ()=>{
    clearTimeout(res1)
}
 },[search, compare]);
 const changeResult = (newResult)=>{
   setResult(newResult)
 }

  
    return (
  <div className="search-books">
    <div className="search-books-bar">
      <Link to="/" className="close-search"></Link>
      <div className="search-books-input-wrapper">
        <input
          value={search}
          onChange={searchHandeler}
          type="text"
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        
     { result.length>0 ? result.map(book =>(
    <Book type={'search'} changeResult={changeResult} key={book.id} id={book.id} allBooks={allBooks} changeAllBooks={changeAllBooks} cat={book.cat} backgroundImage={book.backgroundImage} title={book.title} auther={book.auther} result={result} ></Book>
  )): <li>there is no matches</li>}
      </ol>
    </div>
  </div>
  );
}
export default Search;