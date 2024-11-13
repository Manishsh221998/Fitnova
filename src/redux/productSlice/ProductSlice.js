import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { end_points } from "../../api/api_url"
import axiosInstance from "../../api/axiosInstance/axiosInstance"

const product_api=end_points.product

//add product
export const addProduct=createAsyncThunk("product/addProduct",async (prodData)=>{
        const res=await axiosInstance.post(product_api,prodData);
        console.log("axios res for Add Product",res);
        let returnData={data:res?.data,status:res?.status}
        return returnData;
    }
)
//Get product list
export const getProduct=createAsyncThunk("product/getProduct",async()=>{
        const res=await axiosInstance.get(product_api)
        console.log("axios res for Get Product list",res)
        return res?.data
    }
)
//get Single Product  
export const getSingleProd=createAsyncThunk("product/getProduct",async(id)=>{
    const res=await axiosInstance.get(`${product_api}/${id}`)
    console.log("axios res for Get Single Product",res)
    return res?.data
}
)
//Delete product
export const deleteProduct=createAsyncThunk("product/deleteProduct",async(id)=>{
     const res=await axiosInstance.delete(`${product_api}/${id}`);
    console.log("axios res for delete product ",res);
    return res?.data;
})
//Update product
export const upateProduct=createAsyncThunk("product/upateProduct",async(dataId)=>{
    console.log("IDDDD===",dataId.newid)
    const res=await axiosInstance.put(`${product_api}/${dataId.newid}`,dataId.newData);
    console.log("axios res for delete product ",res);
    return res?.data;
})

const initialValue={
    isLoading:false,
    error:null,
    postValue:[]
}
export const productSlice=createSlice({
    name:'product',
    initialState:initialValue,
    extraReducers:(builder)=>{
        console.log("PRODUCT BUILDER:",builder)

    //Add product reducer
        builder.addCase(addProduct.pending,(state,action)=>{
            console.log("Add Product,action for pending state",action)
            state.isLoading=true
            state.error=null
        })
        builder.addCase(addProduct.fulfilled,(state,action)=>{
            console.log("Add Product,action for fulfilled state",action)
            state.isLoading=false
            state.postValue=action?.payload?.data
            state.error=null
        })
        builder.addCase(addProduct.rejected,(state,action)=>{
            console.log("Add Product,action for rejected state",action)
            state.isLoading=false
            state.error=action?.payload?.error
        })
        
    //Get product reducer
        builder.addCase(getProduct.pending,(state,action)=>{
            console.log("Get Product,action for pending state",action)
            state.isLoading=true
            state.error=null
        })
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            console.log("Get Product,action for fulfilled state",action)
            if(action?.payload?.status===200){
            state.isLoading=false
            state.postValue=action?.payload?.data
            state.error=null
        }
        })
        builder.addCase(getProduct.rejected,(state,action)=>{
            console.log("Get Product,action for rejected state",action)
            state.isLoading=false
            state.error=action?.payload?.error
        })

         //Delete product reducer
         builder.addCase(deleteProduct.pending,(state,action)=>{
            console.log("Delete Product,action for pending state",action)
            state.isLoading=true
            state.error=null
        })
        builder.addCase(deleteProduct.fulfilled,(state,action)=>{
            console.log("Delete Product,action for fulfilled state",action)
            // if(action?.payload?.status===200){
            state.isLoading=false
            state.postValue=action?.payload?.data
            state.error=null
        // }
        })
        builder.addCase(deleteProduct.rejected,(state,action)=>{
            console.log("Delete Product,action for rejected state",action)
            state.isLoading=false
            state.error=action?.payload?.error
        })
    }
})

export default productSlice.reducer