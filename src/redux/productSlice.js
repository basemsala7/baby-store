import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//  npx json-server --watch data/db.json --port 3003
const initialState = {
  loading: false,
  error: false,
  data: [],
  cartList: [],
};
export const getData = createAsyncThunk(
  "products/getdata",
  async (_, ThunkApi) => {
    const { rejectedWithValue } = ThunkApi;
    try {
      const res = await fetch(
        "https://shoes-data-json-server.onrender.com/shose"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCard: (state, action) => {
      console.log(action.payload);
      state.cartList.push(action.payload);
    },
    filterlist: (state, action) => {
      console.log(state.cartList);
      let newData = state.cartList.filter((ele) => ele.id !== action.payload);
      state.cartList = newData;
    },
    increment: (state, action) => {
      let index = state.cartList.findIndex((ele) => ele.id === action.payload);
      state.cartList[index].count += 1;
    },
    decrement: (state, action) => {
      let index = state.cartList.findIndex((ele) => ele.id === action.payload);
      state.cartList[index].count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const { addCard, filterlist, increment, decrement } =
  productsSlice.actions;
export default productsSlice.reducer;

// src/App.css
//         modified:   src/components/Cart.js
//         modified:   src/components/Contact.js
//         modified:   src/components/Details.js
//         modified:   src/components/Shose.js
//         modified:   src/redux/productSlice.js
