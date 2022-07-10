import { useState, useEffect } from "react";
import Book from "./Book";
const CurrentlyReading= ({allBooks, changeAllBooks})=>{
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  useEffect(()=>{
    let currentlyReading = allBooks.filter(book=>book.cat ==="currentlyReading");
    setCurrentlyReadingBooks(currentlyReading);
  },[allBooks])
  const changeSomeBook = (books)=>{
    setCurrentlyReadingBooks(books)
  }

 return(
    <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
         {currentlyReadingBooks.map(book =>(
           <Book type={'bookshelf'} key={ book.id} id={book.id} allBooks={allBooks} someBooks={currentlyReadingBooks} changeSomeBooks={changeSomeBook} changeAllBooks={changeAllBooks} cat={book.cat} backgroundImage={book.backgroundImage} title={book.title} auther={book.auther} ></Book>
         ))}
      </ol>
    </div>
  </div>
 )
}
export default CurrentlyReading;