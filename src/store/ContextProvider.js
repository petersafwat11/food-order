import Ctx from './Context';
import { useReducer } from 'react';

const defaultVal = {
    items:[],
    totalAmount : 0
}
const reducerCart= (state, action)=>{
    if(action.type=== 'ADD'){
        let exist = state.items.filter(item =>(item.title===action.item.title));
        if (exist.length > 0){
             exist[0] = {...exist[0], amount:exist[0].amount + action.item.amount }; 
            const otherItems = state.items.filter(item=>(item.title !== action.item.title));
            const newTotalAmount = state.totalAmount + action.item.amount * action.item.price;
            return {items:otherItems.concat(exist[0]), totalAmount: newTotalAmount}
        }
        const newTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        return {items:state.items.concat(action.item), totalAmount: +newTotalAmount.toFixed(2)}
    }
    if (action.type=== 'REMOVE'){
        
        let exist= state.items.filter(item=>(item.title=== action.item.title));
        if(exist[0].amount >1){
            exist[0]= {...exist[0], amount: exist[0].amount-action.item.amount};
            console.log(exist[0])
            const otherItems= state.items.filter(item=>(item.title !== action.item.title));
            const newTotalAmount = state.totalAmount- action.item.price; 
            return {items: otherItems.concat(exist[0]), totalAmount: newTotalAmount.toFixed(2)}
        }
        const newTotalAmount = state.totalAmount- action.item.price; 
        const newItems= state.items.filter(item=>(item.title !== action.item.title));
        return {items: newItems, totalAmount: newTotalAmount.toFixed(2)}
    }
    if (action.type==='CLEAR'){
        return {items: [], totalAmount: 0}
    }
    return defaultVal;
}
const ContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(reducerCart, defaultVal);
    
    const addItem= (item)=>{
        dispatchCartAction({type: 'ADD', item: item})
    };
    const removeItem= (item)=>{
        dispatchCartAction({type: 'REMOVE', item: item})
    };
    const clearItems= ()=>{
        dispatchCartAction({type: 'CLEAR'})
    }
    const context ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        removeItem: removeItem,
        clearItems : clearItems
    };
  return (
        <Ctx.Provider value={context}>
            {props.children}
        </Ctx.Provider>
    )
}

export default ContextProvider;
