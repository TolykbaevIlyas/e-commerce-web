import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IThemeConfig } from './types'




const initialState:IThemeConfig = {
    status: false,
    textColor: 'text-white',
    backgroundColor: 'bg-black',
    buttonColor: 'text-orange-700',
    iconColor: 'white'
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
            buttonColor: 'text-orange-700',
            iconColor: 'white'
          }
        }
          else{
            return{
              textColor: 'text-black',
              backgroundColor: 'bg-white',
              buttonColor: 'text-orange-700',
              iconColor: 'black'
              
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