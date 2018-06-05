import React from "react";
import { connect } from "react-redux";
import { getCustomers } from "./../services/customers";

/**
 * initialize the customers...
 */
getCustomers();

/**
 * This could be replaced by a lens framework.
 */
const mapStateToProps = state => state;

/**
 * The component
 */
const Component = ({ started, customers }) =>
  started ? (
    <div>retrieving customer data</div>
  ) : (
    <ul>
      {customers.map(customer => <li key={customer.name}>{customer.name}</li>)}
    </ul>
  );

/**
 * Export the connected component
 */
export default connect(mapStateToProps)(Component);
