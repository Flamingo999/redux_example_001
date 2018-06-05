import jss from "jss";

/**
 * JSS FTW!!
 */

const styles = {
  error: {
    "font-size": 24,
    "font-weight": "bolder",
    color: "red"
  }
};

export const { classes } = jss.createStyleSheet(styles).attach();
