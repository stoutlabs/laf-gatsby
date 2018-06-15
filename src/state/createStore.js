import { createStore as reduxCreateStore } from "redux";
//import SET_LOCATION from "../actions/types";

const reducer = (state, action) => {
   if (action.type === "set_location") {
      const newLocation = action.payload;
      return { theLocation: newLocation };
   }
   return state;
};

const initialState = {};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
