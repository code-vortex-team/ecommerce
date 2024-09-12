import {createSlice} from '@reduxjs/toolkit'

interface Interface {
    list: Array<unknown>
}

const initialState: Interface = {
    list: []
}

const BasketSlice = createSlice({
    reducers: {
        addItem: () => {

        }
    },
    name: "basket",
    initialState,

})
export const {addItem} = BasketSlice.actions

export default BasketSlice.reducer