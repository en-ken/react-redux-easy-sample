import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import appReducers from "./reducers";

import UserList from "./containers/user-list";


const store = createStore(
  appReducers
);

/**
 * 最上位コンポーネント
 */
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
      </Switch>
    </Router>
  </Provider>
);

export default App;