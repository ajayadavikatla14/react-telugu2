import { combineReducers } from "redux";
import playeroneReducer from "./Playerone";
import playertwoReducer from "./playertwo";

const reducer=combineReducers({
    playerone : playeroneReducer,
    playertwo : playertwoReducer
})

export default reducer;