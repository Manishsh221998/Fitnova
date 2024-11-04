import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance/axiosInstance"
import { end_points } from "../../api/api_url"
  
let api=end_points.user


// Sign up thunk
export const signUp=createAsyncThunk("auth/signUp",
    async (userData)=>{
        const res=await axiosInstance.post(api,userData)
        console.log("axios res for sign up:",res);
        return res;
    }
)

// Sign in thunk
export const signIn=createAsyncThunk("auth/signIn", 
    async ()=>{
        const res=await axiosInstance.get(api)
        console.log("axios res for sign in:",res);
        return res?.data
    }
)
 
// profile thunk
export const profile=createAsyncThunk("auth/profile", 
    async ()=>{
        const res=await axiosInstance.get(api)
        console.log("axios res for profile:",res);
        return res?.data
    }
)


const initialValue={
    isLoading:false,
    status:0,
    userValue:[],
    error:null,
 }

export const authSlice=createSlice({
    name:'auth',
    initialState:initialValue,
    extraReducers:(builder)=>{
        console.log("Authslice builder:",builder)
        //Sign up reducer
        builder.addCase(signUp.pending,(state,action)=>{
            console.log("sign up,action for pending state:",action)
            state.isLoading=true
         })
         builder.addCase(signUp.fulfilled,(state,action)=>{
            console.log("sign up,action for fulfilled state:",action)
            if(action.status===200){
                console.log('action.status',action.status)
            state.isLoading=false
            state.userValue=action.payload
            state.error=null
        }
         })
         builder.addCase(signUp.rejected,(state,action)=>{
            console.log("sign up,action for rejected state:",action)
              state.error=action.error.message
         })

          //Sign in reducer
        builder.addCase(signIn.pending,(state,action)=>{
            console.log("sign in,action for pending state:",action)
            state.isLoading=true
         })
         builder.addCase(signIn.fulfilled,(state,action)=>{
            console.log("sign in,action for fulfilled state:",action)
            if(action.status===200){
            state.isLoading=false
            state.userValue=action.payload
             state.error=null
        }
         })
         builder.addCase(signIn.rejected,(state,action)=>{
            console.log("sign in,action for rejected state:",action)
              state.error=action.error.message
         })

          //Profile reducer
        builder.addCase(profile.pending,(state,action)=>{
            console.log("profile,action for pending state:",action)
            state.isLoading=true
         })
         builder.addCase(profile.fulfilled,(state,action)=>{
            console.log("profile,action for fulfilled state:",action)
            if(action.status===200){
            state.isLoading=false
            state.userValue=action.payload
            console.log("uservalue",state.userValue)
            state.error=null
        }
         })
         builder.addCase(profile.rejected,(state,action)=>{
            console.log("profile,action for rejected state:",action)
              state.error=action.error.message
         })
    }
})

export default authSlice.reducer
 