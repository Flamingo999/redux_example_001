/**
 * Initial state of the application
 */
const initialState = {
  version: "1"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "get-customers--started":
      return { ...state, started: true };
    case "get-customers--success":
      return { ...state, customers: action.payload, started: null };
    case "new-customer":
      return {
        ...state,
        newCustomer: action.payload
      };
    case "add-customer":
      return {
        ...state,
        customers: [...state.customers, action.payload],
        newCustomer: null
      };
    case "error-message":
      return {
        ...state,
        error: action.payload
      };
    case "clear-error-message":
      return {
        ...state,
        error: null
      };
    default:
      return { ...state };
  }
};
