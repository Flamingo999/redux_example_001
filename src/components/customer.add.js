import React from "react";
import { connect } from "react-redux";
import { addCustomer, registerNewCustomer } from "./../services/customers";

/**
 * This could be replaced by a lens framework.
 */
const mapStateToProps = state => state;

/**
 * Exteral onChange call....React mess, ignore
 */
const onChange = e => registerNewCustomer(e.target.value);

/**
 * The component
 */
const Component = ({ started, newCustomer }) =>
  started ? null : (
    <div>
      <h2>Add a new Customer (by name):</h2>
      <p>Never, ever, try to add Vincent!!</p>
      <div>
        <label htmlFor="new-customer">Customer Name:</label>
        <input
          id="new-customer"
          onChange={onChange}
          value={newCustomer || ""}
        />
      </div>
      <button
        onClick={() => addCustomer(newCustomer)}
        disabled={!!!newCustomer}
      >
        Submit
      </button>
      <hr />
    </div>
  );

/**
 * Export the connected component
 */
export default connect(mapStateToProps)(Component);
