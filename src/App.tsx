import React from "react";
import Events from "./components/events";
import SelectedEvents from "./components/selectedEvents";
import { Provider } from "react-redux";
import store from "./utils/reduxstore/store";
import "./app.css";
const App = () => {
  return (
    <div className="app-container">
      <Provider store={store}>
        <Events />
        <SelectedEvents />
      </Provider>
    </div>
  );
};

export default App;
