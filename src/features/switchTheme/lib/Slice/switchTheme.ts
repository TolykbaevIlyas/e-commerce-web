import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IThemeConfig } from './types'




const initialState:IThemeConfig = {
    status: false,
    textColor: 'text-white',
    backgroundColor: 'bg-black',
    buttonColor: 'bg-orange-600',
    disabledButtonColor: 'bg-slate-600',
    iconColor: 'white',
    CardsColor: 'bg-slate-100',
    CardsTextColor: 'text-black'
}

export const switchTheme = createSlice({
  name: 'switchTheme',
  initialState,
  reducers: {
    ChangeTheme: (state:any,action:PayloadAction<any>)=>{
        if(action.payload){
          return {
            textColor: 'text-white',
            backgroundColor: 'bg-black',
            buttonColor: 'bg-orange-600',
            disabledButtonColor: 'bg-slate-600',
            iconColor: 'white',
            CardsColor: 'bg-slate-100',
            CardsTextColor: 'text-black'
          }
        }
          else{
            return{
              textColor: 'text-black',
              backgroundColor: 'bg-white',
              buttonColor: 'bg-orange-600',
              disabledButtonColor: 'bg-slate-600',
              iconColor: 'black',
              CardsColor: 'bg-black',
              CardsTextColor: 'text-white'
              
            }
          }
        }

    },
    addTheme:(state,action:PayloadAction<any>)=>{

    }
  },
)

// Action creators are generated for each case reducer function
export const {ChangeTheme,addTheme} = switchTheme.actions

export default switchTheme.reducer