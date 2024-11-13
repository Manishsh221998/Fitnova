import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { end_points } from "../../api/api_url"
import axiosInstance from "../../api/axiosInstance/axiosInstance"

let admin_api=end_points.admin
console.log("admin api:",admin_api)

export const adminLogin=createAsyncThunk("admin/adminLogin",async ()=>{
    const res=await axiosInstance.get(admin_api)
    console.log("axios res for admin login :",res)
    return res
})

const initialValue={
    isloading:false,
    inputValue:[],
    error:null
}
export const adminSlice=createSlice({
    name:'admin',
    initialState:initialValue,
    extraReducers:(builder)=>{
        console.log("ADMIN BUILDER :",builder)
        builder.addCase(adminLogin.pending,(state,action)=>{
            console.log("Admin login,action for pending state :",action)
            state.isloading=true
            state.error=null
        })
        builder.addCase(adminLogin.fulfilled,(state,action)=>{
            console.log("Admin login,action for fulfilled state :",action)
            if(action?.payload?.status===200){
            state.isloading=false
            state.inputValue=action?.payload?.data
            state.error=null
        }
        })
        builder.addCase(adminLogin.rejected,(state,action)=>{
            console.log("Admin login,action for rejected state :",action)
             state.error=action?.error?.message
        })
    }
})
export default adminSlice.reducer