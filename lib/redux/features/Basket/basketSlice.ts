import {createSlice} from '@reduxjs/toolkit'

interface Interface {
    totalPrice: number
    list: Array<{
        _id: string
        name: string
        price: number
        image: string
        count: string
    }>
}

const initialState: Interface = {
    totalPrice: 0,
    list: []
}

const BasketSlice = createSlice({
    reducers: {
        addItem: (state, action) => {
            const {_id, name, price, image} = action.payload
            const isInList = state.list.filter(item => item._id === _id)

            if (isInList.length > 0) {
                state.list = state.list.map(item => {
                    if (item._id === _id) {
                        item.count++
                    }
                    return item
                })
            } else {
                state.list.push({
                    _id, name, price, image, count: 1
                })

            }
            state.totalPrice += parseInt(price)


        },
        removeItem: (state, action) => {
            const {_id} = action.payload
            const isInList = state.list.filter(item => item._id === _id)

            if (isInList.length > 0) {
                state.totalPrice -= parseInt(isInList[0].price)
                if (isInList[0].count >= 2) {
                    state.list = state.list.map(item => {
                        if (item => item._id === _id) {
                            item.count--
                        }
                    })
                } else {
                    state.list = state.list.filter(item => item._id != _id)
                }

            }


        }
    },
    name: "basket",
    initialState,

})
export const {addItem, removeItem} = BasketSlice.actions

export default BasketSlice.reducer