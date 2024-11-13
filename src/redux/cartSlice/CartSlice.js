import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance/axiosInstance"
import { end_points } from "../../api/api_url"
  
let api=end_points.cart


//All Cart data thunk
export const allCartData=createAsyncThunk("cart/allCartData", async ()=>{
    const res=await axiosInstance.get(api)
    console.log("All data :",res);
    return res?.data
})

// Add cart thunk
export const addCart=createAsyncThunk("cart/addCart",async (userData)=>{
        const res=await axiosInstance.post(api,userData)
        console.log("axios res for sign up:",res);
        let returnData={data:res?.data,status:res.status}
        return res;
    }
)

//Delete Cart product
export const deleteCart=createAsyncThunk("cart/deleteProduct",async(id)=>{
  const res=await axiosInstance.delete(`${api}/${id}`);
  console.log("axios res for delete product ",res);
 return res?.data;
})

const initialValue={
  isLoading:false,
  error:null,
  postValue:[]
}
export const cartSlice=createSlice({
  name:'cart',
  initialState:initialValue,
  extraReducers:(builder)=>{
      console.log("PRODUCT BUILDER:",builder)

  //Add product reducer
      builder.addCase(addCart.pending,(state,action)=>{
          console.log("addCart for pending state",action)
          state.isLoading=true
          state.error=null
      })
      builder.addCase(addCart.fulfilled,(state,action)=>{
          console.log("addCart,action for fulfilled state",action)
          state.isLoading=false
          state.postValue=action?.payload?.data
          state.error=null
      })
      builder.addCase(addCart.rejected,(state,action)=>{
          console.log("addCart,action for rejected state",action)
          state.isLoading=false
          state.error=action?.payload?.error
      })
      
  //Get product reducer
      builder.addCase(allCartData.pending,(state,action)=>{
          console.log("allCartData,action for pending state",action)
          state.isLoading=true
          state.error=null
      })
      builder.addCase(allCartData.fulfilled,(state,action)=>{
          console.log("allCartData,action for fulfilled state",action)
          if(action?.payload?.status===200){
          state.isLoading=false
          state.postValue=action?.payload?.data
          state.error=null
      }
      })
      builder.addCase(allCartData.rejected,(state,action)=>{
          console.log("allCartData,action for rejected state",action)
          state.isLoading=false
          state.error=action?.payload?.error
      })

      //  Delete product reducer
       builder.addCase(deleteCart.pending,(state,action)=>{
          console.log("Delete Cart,action for pending state",action)
          state.isLoading=true
          state.error=null
      })
      builder.addCase(deleteCart.fulfilled,(state,action)=>{
          console.log("Delete Cart,action for fulfilled state",action)
          // if(action?.payload?.status===200){
          state.isLoading=false
          state.postValue=action?.payload?.data
          state.error=null
      // }
      })
      builder.addCase(deleteCart.rejected,(state,action)=>{
          console.log("Delete Cart,action for rejected state",action)
          state.isLoading=false
          state.error=action?.payload?.error
      })
  }
})

export default cartSlice.reducer