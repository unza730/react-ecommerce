import { createStore } from "redux";
import rootReducer from "./reducer/handle";

const store = createStore(rootReducer);
export default store;