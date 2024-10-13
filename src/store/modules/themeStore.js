import {createSlice} from '@reduxjs/toolkit'

const styleStore = createSlice({
    name:'myThemes',
    initialState:{
        myTheme:'light'
    },
    reducers:{
        addTheme(state,action){
            state.myTheme = action.payload
        }

    }
})

const { addTheme } = styleStore.actions
const myThemesReducer = styleStore.reducer
export {addTheme}
export default myThemesReducer