import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook,useDispatch,useSelector } from 'react-redux'
import { AccountSlice } from './features/accountSlice';

export const store = configureStore({
    reducer:{
        account:AccountSlice.reducer
    }
})
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;