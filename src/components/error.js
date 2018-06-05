import React from "react";
import { connect } from "react-redux";
import { classes } from "./../styles/other";

/**
 * This could be replaced by a lens framework.
 */
const mapStateToProps = ({ error }) => ({
  error
});

/**
 * The component
 */
const Component = ({ error }) => <div className={classes.error}>{error}</div>;

/**
 * Export the connected component
 */
export default connect(mapStateToProps)(Component);
