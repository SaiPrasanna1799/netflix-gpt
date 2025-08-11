import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSLice';

const appStore = configureStore({
    reducer : {
        user : userReducer
    },
})

export default appStore;