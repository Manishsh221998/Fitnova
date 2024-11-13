import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { end_points } from "../../Api/api";
import axiosInstance from "../../Api/axiosInstance";

const api=end_points.auth;

//==================Registration================================
export const sign_up=createAsyncThunk("user/sign_up", async()=>{
    const res= await axiosInstance.get(api);
    console.log("axios res",res);
    return res?.data
});
//========================Login=================================
export const sign_in=createAsyncThunk("user/sign_in", async()=>{
    const res= await axiosInstance.get(api);
    console.log("axios res for login",res);
    window.sessionStorage.setItem("user", JSON.stringify(res.data));
    return res?.data
});
//========================Profile=============================
export const profile=createAsyncThunk("user/profile",async(id)=>{
    const res = await axiosInstance.get(api);
    console.log("profile res",res);
    return res?.data
});
//-------------------------------------------Slice-------------------------------------------------

const initial_value={
    isLoading:false,
    status:0,
    data:[],
    error:null
};

export const authSlice=createSlice({
    name:"user",
    initialState:initial_value,
    extraReducers:(builder)=>{
        //========== sign_up ==============
        builder.addCase(sign_up.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(sign_up.fulfilled,(state,action)=>{
            state.isLoading=false;
            console.log("action fullfilled",action);
            if(action.payload.status==200){
                state.status=action.payload.status;
                state.data=action.payload.data;
                state.error=null;
            }
        });
        builder.addCase(sign_up.rejected,(state,action)=>{
            state.isLoading=false;
            console.log("rejected action",action);
            state.error=action.error.message;
        });
        //==============sign_in====================
        builder.addCase(sign_in.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(sign_in.fulfilled,(state,action)=>{
            state.isLoading=false;
            console.log("action fullfilled",action);
            if(action.payload.status==200){
                state.status=action.payload.status;
                state.data=action.payload.data;
                state.error=null;
            }
        });
        builder.addCase(sign_in.rejected,(state,action)=>{
            state.isLoading=false;
            console.log("rejected action",action);
            state.error=action.error.message;
        });
        //==================profile=====================
        builder.addCase(profile.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(profile.fulfilled,(state,action)=>{
            state.isLoading=false;
            console.log("action fullfilled",action);
            // if(action.payload.status==200){
                state.status=action.payload.status;
                state.data=action.payload.data;
                state.error=null;
            // }
        });
        builder.addCase(profile.rejected,(state,action)=>{
            state.isLoading=false;
            console.log("rejected action",action);
            state.error=action.error.message;
        });
    }
})
export default authSlice.reducer;