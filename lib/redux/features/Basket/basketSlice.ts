import {createSlice} from '@reduxjs/toolkit'
import {getLocalStorage, setLocalStorage} from "@/components/utility";

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

            setLocalStorage("basket", state)

        },
        removeItem: (state, action) => {
            const {_id, price} = action.payload
            const itemInList = state.list.find(item => item._id === _id)

            if (itemInList) {
                if (itemInList.count > 1) {
                    itemInList.count--
                } else {
                    state.list = state.list.filter(item => item._id !== _id)
                }

                // کاهش قیمت کل
                state.totalPrice -= parseInt(price)
            }

            setLocalStorage("basket", state)
        },
        clearItem: (state, action) => {
            const {_id} = action.payload
            const itemInList = state.list.find(item => item._id === _id)

            if (itemInList) {
                state.totalPrice -= parseInt(itemInList.price) * itemInList.count

                state.list = state.list.filter(item => item._id !== _id)
            }

            setLocalStorage("basket", state)
        },
        clearAll: (state, action) => {
            state.list = []
            state.totalPrice = 0

            setLocalStorage("basket", state)
        },
        setLocalData: (state) => {
            const data = getLocalStorage("basket", initialState)
            state.list = data.list
            state.totalPrice = data.totalPrice
        }

    },
    name: "basket",
    initialState,

})
export const {addItem, clearItem, clearAll, removeItem, setLocalData} = BasketSlice.actions

export default BasketSlice.reducer