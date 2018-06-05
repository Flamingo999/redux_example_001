import jss from "jss";
import preset from "jss-preset-default";
import "./styles/layout";
import "./styles/other";
import { reducer } from "./reducer";
import { createStore } from "redux";

// One time setup with default plugins and settings.
jss.setup(preset());

// One time setup and export of the store and the dispatch function
export const store = createStore(reducer);
export const dispatch = store.dispatch;
export const getState = store.getState;
