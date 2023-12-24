import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IThemeConfig } from './types'




const initialState:IThemeConfig = {
    textColor: 'white',
    backgroundColor: 'black',
    buttonColor:
}

export const switchTheme = createSlice({
  name: 'switchTheme',
  initialState,
  reducers: {
    ChangeTheme: (state:any,action:PayloadAction<any>)=>{
        //state.FavouriteCard.Card.isFavou = !state.FavouriteCard.Card.isFavou;
        return{
            textColor: action.textColor,
            
        }
    },
    addTheme:(state,action:PayloadAction<any>)=>{
        //state.Cards[action.payload.id] = Object.keys(state.Cards).filter((obj) => obj[action.payload.id] !== action.payload.id && obj.size !== action.payload.size)
        //Object.keys(state.Cards).filter((obj) => console.log(obj))
        // return state.Cards.filter(c => c[action.payload.id] !== action.payload.id)
        // state.Cards[action.payload.id] = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const {ChangeTheme,addTheme} = addToCart.actions

export default addToCart.reducer