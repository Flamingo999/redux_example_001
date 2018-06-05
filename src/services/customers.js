/**
 * S001 - CUSTOMER SERVICES
 * ----------------------------------------------
 *
 * This file contains all the customer services.
 * (Always number your service catalog!)
 */
import { getState } from "./../setup";
import { wrapDelayedAction, notify } from "./../eventQueue";

/**
 * Customer-01 - This service will get a list of customers async
 */
const _getCustomers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ name: "Carlos" }, { name: "Femke" }]);
    }, 3000);
  });
};

/**
 * Customer-02 - Add a new customer name to the store
 */
export const registerNewCustomer = newCustomerName => {
  notify("new-customer", newCustomerName);
};

/**
 * Costomer-03 - Validate a customer name and if valid pass
 *               pass to our store.
 */
export const addCustomer = customerName => {
  const { customers } = getState();

  const customerAlreadyExists = !!customers.find(
    customer => customer.name === customerName
  );

  if (customerAlreadyExists) {
    notify("error-message", "Cannot add a customer twice!");
    setTimeout(() => {
      notify("clear-error-message");
    }, 3000);
  } else if (customerName !== "Vincent") {
    notify("add-customer", { name: customerName });
  } else {
    notify("error-message", "Vincent is never going to be a customer!");
    setTimeout(() => {
      notify("clear-error-message");
    }, 3000);
  }
};

// export the wrapped action, you wioll usually do this in a different module!!
export const getCustomers = wrapDelayedAction("get-customers", _getCustomers);
