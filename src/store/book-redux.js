import { createSlice } from "@reduxjs/toolkit";
let defaultItem = [];

const bookSlice = createSlice({
  name: "bookSearch",
  initialState: {
    items: [],
    URL: "http://openlibrary.org/search.json?title=",
  },
  reducers: {
   async SearchFinder(state, action) {
      try {
        const value = action.payload;
        // const response = await fetch(`${state.URL}${value}`);
        // const mainData = await response.json();
        // const { docs } = mainData;
        // console.log("docs",docs);
        // const title = docs[0].title;
        // console.log(docs[0].title);
        // // await state.items.push(docs[0].title);
          // console.log("dhasd",state.items);
          // console.log("dhasd",state.items);
        state.items.push("dhansih")
      } catch (error) {
        console.log(error)
      }
      
      
      console.log("dhasd",state.items);
        state.items.push("dhansih")
      
      // console.log(state.items);
    },
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice.reducer;

