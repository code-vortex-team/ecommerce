'use client'
import {Provider} from 'react-redux'
import {store} from '@/lib/redux/store'
import {useEffect} from "react";
import {setLocalData} from "@/lib/redux/features/Basket/basketSlice";

export default function StoreProvider({
                                          children
                                      }: {

    children: React.ReactNode
}) {


    useEffect(() => {
        setTimeout(() => {
            store.dispatch(setLocalData())
        }, 1000)
    }, []);
    return <Provider store={store}>{children}</Provider>
}