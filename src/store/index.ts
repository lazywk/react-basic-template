import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from "./rootReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const middlewares: any[] = []

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.REACT_APP_NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(middlewares),
})

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store)
