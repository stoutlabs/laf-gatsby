import { FETCH_CONTENT, SET_LOCATION } from "../actions/types";

const initialState = {
   theLocation: "ny"
};

export default (state = initialState, action) => {
   switch (action.type) {
      case FETCH_CONTENT:
         return action.payload;
      case SET_LOCATION:
         const newLocation = action.payload;
         console.log("set_location action.payload: ", action.payload);
         return { theLocation: newLocation };
      default:
         return state;
   }
};
