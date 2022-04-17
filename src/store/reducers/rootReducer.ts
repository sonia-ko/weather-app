import citiesReducer from "./citiesSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cities: citiesReducer
});
