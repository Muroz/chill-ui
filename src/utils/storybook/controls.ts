export const colorControls = {
  colorControls: {
    name: "Color Controls",
    description: "Enable color controls for further configuration",
    defaultValue: false,
    control: "boolean"
  },
  bg: {
    if: { arg: "colorControls" },
    table: {
      category: "Colors"
    }
  },
  backgroundColor: {
    if: { arg: "colorControls" },
    table: {
      category: "Colors"
    }
  },
  color: {
    if: { arg: "colorControls" },
    table: {
      category: "Colors"
    }
  }
};

export const typographyControls = {
  typographyControls: {
    name: "Typography Controls",
    description: "Enable typography controls for further configuration",
    defaultValue: false,
    control: "boolean"
  },
  fontFamily: {
    if: { arg: "typographyControls" },
    type: "string",
    table: {
      category: "Typography",
      disable: true
    }
  },
  fontSize: {
    if: { arg: "typographyControls" },
    type: "string",
    table: {
      category: "Typography"
    }
  },
  fontStyle: {
    if: { arg: "typographyControls" },
    type: "select",
    options: ["normal", "italic", "oblique", "initial", "inherit"],
    table: {
      category: "Typography"
    }
  },
  fontWeight: {
    if: { arg: "typographyControls" },
    options: [
      "normal",
      "bold",
      "bolder",
      "lighter",
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      "initial",
      "inherit"
    ],
    table: {
      category: "Typography"
    }
  },
  letterSpacing: {
    if: { arg: "typographyControls" },
    type: "string",
    table: {
      category: "Typography"
    }
  },
  lineHeight: {
    if: { arg: "typographyControls" },
    type: "string",
    table: {
      category: "Typography"
    }
  },
  textAlign: {
    if: { arg: "typographyControls" },
    type: "select",
    options: ["left", "right", "center", "justify", "initial", "inherit"],
    table: {
      category: "Typography"
    }
  }
};

export const spaceControls = {
  spaceControls: {
    name: "Space Controls",
    description: "Enable space controls for further configuration",
    defaultValue: false,
    control: "boolean"
  },
  margin: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  m: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  marginTop: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  mt: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  marginRight: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  mr: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  marginBottom: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  mb: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  marginLeft: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  ml: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  marginX: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  mx: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  marginY: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  my: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  padding: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  p: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  paddingTop: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  pt: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  paddingRight: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  pr: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  paddingBottom: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  pb: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  paddingLeft: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  pl: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  paddingX: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  px: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  paddingY: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  },
  py: {
    if: { arg: "spaceControls" },
    type: "string",
    table: { category: "Space" }
  }
};

export const borderControls = {
  borderControls: {
    name: "Border Controls",
    description: "Enable border controls for further configuration",
    defaultValue: false,
    control: "boolean"
  },
  border: {
    if: { arg: "borderControls" },
    type: "string",
    table: { category: "Border" }
  },
  borderRadius: {
    if: { arg: "borderControls" },
    type: "string",
    table: { category: "Border" }
  }
};

export const layoutControls = {
  layoutControls: {
    name: "Layout Controls",
    description: "Enable layout controls for further configuration",
    defaultValue: false,
    control: "boolean"
  },
  width: {
    if: { arg: "layoutControls" },
    type: "string",
    table: { category: "Layout" }
  },
  height: {
    if: { arg: "layoutControls" },
    type: "string",
    table: { category: "Layout" }
  },
  display: {
    if: { arg: "layoutControls" },
    type: "select",
    options: [
      "inline",
      "block",
      "contents",
      "flex",
      "grid",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "inline-table",
      "list-item",
      "run-in",
      "none",
      "initial",
      "inherit"
    ],
    table: { category: "Layout" }
  },
  minWidth: {
    if: { arg: "layoutControls" },
    type: "string",
    table: { category: "Layout" }
  },
  minHeight: {
    if: { arg: "layoutControls" },
    type: "string",
    table: { category: "Layout" }
  },
  maxWidth: {
    if: { arg: "layoutControls" },
    type: "string",
    table: { category: "Layout" }
  },
  maxHeight: {
    if: { arg: "layoutControls" },
    type: "string",
    table: { category: "Layout" }
  }
};
