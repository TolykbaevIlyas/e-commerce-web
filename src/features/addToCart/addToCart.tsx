import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    Cart:[
    ],
}

export const addToCart = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addCart: (state:any,action:PayloadAction<any>)=>{
        //state.FavouriteCard.Card.isFavou = !state.FavouriteCard.Card.isFavou;
        return{
            ...state,
            Cart:[
                ...state.Cart, 
                action.payload,
            ],       
        }
    },
    delCart:(state,action:PayloadAction<any>)=>{
        state.Cart = state.Cart.filter((obj:any) => obj.id !== action.payload.id)
        //state.Cards[action.payload.id] = Object.keys(state.Cards).filter((obj) => obj[action.payload.id] !== action.payload.id && obj.size !== action.payload.size)
        //Object.keys(state.Cards).filter((obj) => console.log(obj))
        // return state.Cards.filter(c => c[action.payload.id] !== action.payload.id)
        // state.Cards[action.payload.id] = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const {addCart,delCart} = addToCart.actions

export default addToCart.reducer