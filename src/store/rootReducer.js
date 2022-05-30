import { combineReducers } from "@reduxjs/toolkit";
import  counterStore  from "./counterStore";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userStore from "./userStore";

const rootReducer = combineReducers({
    counter: counterStore,
    user: userStore,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter'],   //buraya yazdığımız değişkenler local storage de kaydoluyor. // 'user' ı eklersek oda local storage tutulur 
                             // counter gibi
}

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;