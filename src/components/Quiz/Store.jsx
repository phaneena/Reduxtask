import { configureStore } from "@reduxjs/toolkit";
import Quizslice from './Quizslice'

export default configureStore({
    reducer:{
        counts:Quizslice
    }
})