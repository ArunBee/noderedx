import { combineReducers } from "redux";// it is called for combined all the reducers
import CardItem from "./reducer";

export default combineReducers({
    CardItem,// Called all the reducers here if more than one we use (,) for seprate them
})
