import { createContext } from "react";

 const Ctx = createContext({
  totalAmount: 0, 
  items : [],
  addItem: (item)=>{},
  removeItem : (id)=>{},
  clearItems: ()=>{}
 }) 



export default Ctx ;
