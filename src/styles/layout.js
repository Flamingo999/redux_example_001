import jss from "jss";

/**
 * JSS FTW!!
 */

const styles = {
  layout__root: {
    display: "flex",
    "flex-direction": "column"
  },
  layout__top: {
    "font-size": 15,
    color: "maroon",
    "&:hover": {
      background: "maroon",
      color: "white",
      "font-size": 32
    }
  }
};

export const { classes } = jss.createStyleSheet(styles).attach();
