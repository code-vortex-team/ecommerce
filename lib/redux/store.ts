import {configureStore} from '@reduxjs/toolkit'
import BasketSlice from "@/lib/redux/features/Basket/basketSlice";

export const store = configureStore({
    reducer: {
        basket: BasketSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;