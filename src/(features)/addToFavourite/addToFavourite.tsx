import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//     FavouriteCard:{
//         cards: [
//              id: "",
//              name:"",
             
//         ],
// }

const initialState = {
    Cards:{
        [0]:{

        }
    }
}

export const addToFavourite = createSlice({
  name: 'addToFavourite',
  initialState,
  reducers: {
    addFav: (state,action:PayloadAction<any>)=>{
        //state.FavouriteCard.Card.isFavou = !state.FavouriteCard.Card.isFavou;
        return{
            Cards:{
                ...state.Cards,
                [action.payload.id]:{
                    ...action.payload,
                    btnText: 'Delete to Card',
                    isFavor: true,
                }   
            }
        }
    },
    delFav:(state,action:PayloadAction<any>)=>{
       state.Cards[action.payload.id] = Object.keys(state.Cards).filter((obj) => obj[action.payload.id] !== action.payload.id && obj.size !== action.payload.size)
        //Object.keys(state.Cards).filter((obj) => console.log(obj))
        // return state.Cards.filter(c => c[action.payload.id] !== action.payload.id)
        // state.Cards[action.payload.id] = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const {addFav,delFav} = addToFavourite.actions

export default addToFavourite.reducer