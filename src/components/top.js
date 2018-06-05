import React from "react";
import { connect } from "react-redux";
import { classes as layoutClasses } from "./../styles/layout";

console.log(layoutClasses);

/**
 * This could be replaced by a lens framework.
 */
const mapStateToProps = state => state;

/**
 * The top bar component
 */
const Component = ({ version }) => (
  <div className={layoutClasses.layout__top}>Version: {version}</div>
);

/**
 * Export the connected component
 */
export default connect(mapStateToProps)(Component);
