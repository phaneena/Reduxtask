import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}
const Quizslice=createSlice({
    name:'quiz',
    initialState,
    reducers:{
        count:(state)=>{
            state.count+=1
        }
    }

})
export const {count}=Quizslice.actions
export default Quizslice.reducer