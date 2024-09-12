import {configureStore} from '@reduxjs/toolkit'
import BasketSlice from "@/lib/redux/features/Basket/basketSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            basket: BasketSlice
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']