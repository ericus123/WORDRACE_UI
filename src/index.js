import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { NotificationContainer } from "react-notifications";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NotificationContainer />
      </PersistGate>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
