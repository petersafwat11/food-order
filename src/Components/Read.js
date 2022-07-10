import { useState, useEffect } from "react";
import Book from './Book';
const Read= ({allBooks, changeAllBooks})=>{
  const [readBooks, setReadBooks] = useState([]);
  useEffect(()=>{
    let read = allBooks.filter(book=>book.cat ==='read');
    setReadBooks(read);
  },[allBooks])
  const changeSomeBook = (books)=>{
    setReadBooks(books);
  }

  return(
    <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {readBooks.map(book =>(
           <Book  type={'bookshelf'} key={book.id} id={book.id} someBooks={readBooks} changeSomeBooks={changeSomeBook}  allBooks={allBooks} changeAllBooks={changeAllBooks} cat={book.cat} backgroundImage={book.backgroundImage} title={book.title} auther={book.auther} ></Book>
         ))}
      </ol>
    </div>
  </div>
  )
}

export default Read;