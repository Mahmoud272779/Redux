 import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from "redux";
import { counterReducer } from "../reducer/CounterReducer";
import { AuthReducer } from "../reducer/AuthReducer";




// //store
// export const store=configureStore({reducer: counterReducer})
 const rootReducer=combineReducers({
    counterReducer:counterReducer,
    authReducer:AuthReducer
 })
 export const store=configureStore({reducer: rootReducer})
 