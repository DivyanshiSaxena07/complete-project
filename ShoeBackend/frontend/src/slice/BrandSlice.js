import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../servies/WebApi";
import WebService from "../servies/WebService";

export const fetchBrand=createAsyncThunk('brand/fetchBrand',async()=>{
    let response=await WebService.getApi(WebApi.LOAD_BRAND);
    if( response.data.status)
    return response.data.brandList;
})
const brandSlice=createSlice({
    name:'brand',
    initialState:{
        value:{
            brandList:[],
            isLoading:true,
            err:""
        }
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBrand.pending,(state,action)=>{
            
            state.value.isLoading=false;
        })
        builder.addCase(fetchBrand.fulfilled,(state,action)=>{
            state.value.brandList=action.payload;
            state.value.isLoading=false
        })
        builder.addCase(fetchBrand.rejected,(state,action)=>{
            state.value.err="Oops! something wents wrong";
            state.value.brandList=[];
            state.value.isLoading=false;
        })
    }
})
export default brandSlice.reducer