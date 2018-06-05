import React from "react";
import { Provider } from "react-redux";
import { store } from "./../setup";
import Top from "./top";
import Customers from "./customers";
import Error from "./error";
import AddCustomers from "./customer.add";

/**
 * The root of the application
 */
export const Root = () => (
  <Provider store={store}>
    <div>
      <Top />
      <AddCustomers />
      <Customers />
      <Error />
    </div>
  </Provider>
);
