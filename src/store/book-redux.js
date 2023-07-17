import { createSlice } from "@reduxjs/toolkit";
let defaultItem = [];

const bookSlice = createSlice({
  name: "bookSearch",
  initialState: {
    items: defaultItem,
    URL: "",
  },
  reducers: {
    searchFinder(state, action) {
      const bookData = action.payload;
      if (bookData) {
        bookData.map((items) => {
          state.items.push(items);
        });
      }
    },
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice.reducer;
