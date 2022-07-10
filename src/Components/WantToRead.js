import { useState, useEffect } from "react";
import Book from './Book';
const WantToRead= ({allBooks, changeAllBooks})=>{

  const [wantToReadBooks, setWantToReadBooks] = useState([]);
   useEffect(()=>{
     let wantToRead = allBooks.filter(book=>book.cat ==='wantToRead');
    setWantToReadBooks(wantToRead);
   },[allBooks])
   const changeSomeBook = (books)=>{
    setWantToReadBooks(books);
   }

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {wantToReadBooks.map(book =>(
           <Book type={'bookshelf'} key={book.id} id={book.id}  someBooks={wantToReadBooks} changeSomeBooks={changeSomeBook} allBooks={allBooks} changeAllBooks={changeAllBooks} cat={book.cat} backgroundImage={book.backgroundImage} title={book.title} auther={book.auther} ></Book>
         ))}
          </ol>
        </div>
      </div>
    )
}

export default WantToRead;