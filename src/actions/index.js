import { SET_LOCATION } from "./types";

export const setLocation = theLocation => ({
   type: SET_LOCATION,
   payload: theLocation
});
