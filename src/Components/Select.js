const Select = ({allBooks, changeAllBooks, cat, type, result, changeResult})=>{
    const selectChnge = (e)=>{
        const id = (e.target.parentNode.parentNode.parentNode.parentNode.id);
        const val =e.target.value;
        if(type === 'bookshelf'){
          const element = allBooks.filter(ele => ele.id === id);
          element[0].cat=val;
          console.log(element[0])
          const otherElements = allBooks.filter(ele => ele.id !== id);
          changeAllBooks(otherElements.concat(element[0]), element[0],element[0].cat);  
        }
        if(type === 'search'){
          const element2 = result.filter(ele => ele.id === id);
          element2[0].cat=val;
          const existItem =allBooks.filter(book=>(book.id===element2[0].id));
          const otherElements =allBooks.filter(book=>(book.id!==element2[0].id));
          if(val!== 'none'){
            
            changeAllBooks(otherElements.concat(element2[0]), element2[0],element2[0].cat);
          }
          if(val==='none'){
            existItem.length>0 && changeAllBooks(otherElements, element2[0],element2[0].cat);
          }
          
        }

      }
   return(
   <select defaultValue={ 'default' || 'none'} onChange={selectChnge}>
        <option  value={'none'===cat?'default' : 'none'}  >none</option>
       <option  value={'read'===cat?'default' : 'read'}  > read </option>
       <option  value={'currentlyReading'===cat?'default' : 'currentlyReading'}  > currentlyReading </option>
       <option  value={'wantToRead'===cat?'default' : 'wantToRead'}  >wantToRead</option>
       <option  value={'moveTo'===cat?'default' : 'moveTo'}  >moveTo </option>
     
  </select>
   )   
}
export default Select;