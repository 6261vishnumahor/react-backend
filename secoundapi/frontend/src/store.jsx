import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.jsx';
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key:'root',
    storage
}
const persistedReducer = persistReducer(persistConfig,userReducer) 

const store = configureStore({
    reducer:{
        user:persistedReducer,
    }
});
export {store};
export const persistor = persistStore(store)