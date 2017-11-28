import { combineReducers } from "redux";
import userList from "./user-list";

const appReducers = combineReducers({ userList });
export default appReducers;