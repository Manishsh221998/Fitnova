import { configureStore } from '@reduxjs/toolkit'
 import authReducer  from '../authSlice/AuthSlice'
import  productReducer  from '../productSlice/ProductSlice'
import  adminReducer  from '../adminSlice/adminSlice'
import  cartReducer  from '../cartSlice/CartSlice'

const Store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        admin:adminReducer,
        cart:cartReducer,
    }
})

export default Store