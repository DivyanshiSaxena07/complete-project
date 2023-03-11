import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../servies/WebApi";
import WebService from "../servies/WebService";

export const fetchProduct = createAsyncThunk("product/fetchProduct",async ()=>{
  let response = await  WebService.getApi(WebApi.LOAD_PRODUCT);
  console.log(response.data);  
  if(response.data.status)
   return response.data.productList;
});

const slice = createSlice({
    name: "product",
    initialState:{
      value:{
        productList: [],
        isLoading: true,
        error: ""
      }
    },
    reducers:{
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
           state.value.isLoading = false;
        });
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.value.productList = action.payload;
            state.value.isLoading = false;
        });
        builder.addCase(fetchProduct.rejected,(state)=>{
           state.value.error = "Oops! something went wrong..";
           state.value.isLoading = false;
           state.value.productList = [];
        })
    }
});

export default slice.reducer;