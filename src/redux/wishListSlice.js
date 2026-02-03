import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({

    name: "wishlist",
    initialState: [],

    reducers: {
        AddtoWish: (state, action) => {
            const exists = state.find(item => item.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
            }
        },
        RemoveFromWish: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
         LoadWish:(state,action)=>{
        return action.payload
    },
        ClearWish:()=>{
        return [] ;
       }



    }
})

export const { AddtoWish , RemoveFromWish ,LoadWish ,ClearWish} = wishlistSlice.actions
export default wishlistSlice.reducer