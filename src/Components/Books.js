import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import  Read from './Read';
import OpenSearch from './OpenSearch';

const Books= ({allBooks, changeAllBooks})=>{
  return(
      <>
      <div className="list-books-title">
            <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
            <div>
              <CurrentlyReading allBooks={allBooks} changeAllBooks={changeAllBooks}></CurrentlyReading>
              <WantToRead allBooks={allBooks} changeAllBooks={changeAllBooks}></WantToRead>
              <Read allBooks={allBooks} changeAllBooks={changeAllBooks}></Read>
              <OpenSearch ></OpenSearch>
            </div>
      </div>
      </>
  )
}

export default Books;