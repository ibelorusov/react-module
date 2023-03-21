import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basket.js";
import entranceReducer from "./reducers/entrance";
import cardPageReducer from "./reducers/cardPage";

export default configureStore({
  reducer: {
    basket: basketReducer,
    entrance: entranceReducer,    
    cardPage: cardPageReducer
  }
})

