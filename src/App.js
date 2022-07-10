import "./App.css";
import { useState,useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import  Search  from "./Components/Search";
import Books from './Components/Books';
import * as Api from './BooksAPI';

function App() {
const [allBooks, setAllBooks] = useState([]);
const changeAllBooks = (newBooks, book=book || null, shelf= shelf || null)=>{
  setAllBooks(newBooks);
  Api.update(book, shelf);
}
useEffect(()=>{
  const getAll = async ()=>{
    const res = await Api.getAll();
    setAllBooks(res.map(book=>({id: book.id,title:book.title, cat: book.shelf,backgroundImage:book.imageLinks.thumbnail,auther:book.authors })));
  }
  getAll();
},[])
  return (
    <Routes>
    <Route
      exact
      path="/"
      element={
        <Books allBooks={allBooks} changeAllBooks={changeAllBooks}/>
      }
    />
    <Route 
    path='/search'
    element={<Search allBooks={allBooks} changeAllBooks={changeAllBooks} />}/>
  </Routes>
  );
}

export default App;
