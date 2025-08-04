import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    
    name:"cart",
    initialState:JSON.parse(localStorage.getItem('cart')) || [],

    reducers:{
   AddItem:(state , action)=>{
     const existingItem = state.find((item)=>item.id === action.payload.id)
     if(existingItem){
        existingItem.quantity +=1 
     }else{
        state.push({...action.payload , quantity:1})
     }

    },
    IncrementQty:(state , action)=>{
        const item =  state.find((item)=> item.id === action.payload)
        if(item){
            item.quantity +=1
        }
    },
    DecrementQty:(state , action)=>{
        const item =  state.find((item)=> item.id === action.payload)
        if(item && item.quantity > 1){
            item.quantity -=1
        }
    },
    RemoveItem:(state ,action)=>{
       return state.filter((item )=>item.id !== action.payload);
    },

    LoadCart:(state,action)=>{
        return action.payload
    },
    ClearCart:()=>{
        return [] ;
    }

}
})

export const {AddItem ,RemoveItem ,IncrementQty ,DecrementQty ,LoadCart ,ClearCart} = cartSlice.actions ;
export default cartSlice.reducer 
