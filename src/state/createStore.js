import { createStore as reduxCreateStore } from "redux";
import SET_LOCATION from "../actions/types";

const reducer = (state, action) => {
   //console.log("action.type:", action.type);
   if (action.type === "set_location") {
      const newLocation = action.payload;
      //console.log("set_location action.payload: ", action.payload);
      return { theLocation: newLocation };
   }
   return state;
};

const initialState = { theLocation: "new-york" };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
