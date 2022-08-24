import { DefaultTheme } from "styled-components";

import {
  valueEntry,
  TypographyProps,
  ColorProps,
  SpaceProps,
  BorderProps,
  LayoutProps
} from "../../types/styles";

const getValue = (theme?: DefaultTheme, values?: valueEntry[]) => {
  const stylesObject: any = {};
  values &&
    values.forEach((entry) => {
      const [category, key, value, fallback] = entry;
      if (!theme) {
        if (value) {
          return { [key]: value };
        }
        return;
      }

      if (value) {
        const themeValue = theme?.[category]?.[value];

        if (themeValue) {
          stylesObject[key] = themeValue;
          return;
        }

        stylesObject[key] = value;
        return;
      } else if (fallback) {
        const fallbackValue = theme?.[category]?.[fallback];

        if (fallbackValue) {
          stylesObject[key] = fallbackValue;
        }
        return;
      }

      return;
    });

  return stylesObject;
};

// TODO: define presets
// TODO: update getValue to only rewrite values if defined
export const typography = (props: TypographyProps) => {
  const {
    theme,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    fontStyle,
    preset
  } = props;

  const { preset: presetObject } = getValue(theme, [
    ["typography", "preset", preset]
  ]);

  const styleObject = getValue(theme, [
    ["typography", "fontFamily", fontFamily],
    ["typography", "fontSize", fontSize],
    ["typography", "fontWeight", fontWeight],
    ["typography", "lineHeight", lineHeight],
    ["typography", "letterSpacing", letterSpacing],
    ["typography", "textAlign", textAlign],
    ["typography", "fontStyle", fontStyle]
  ]);

  return { ...presetObject, ...styleObject };
};

export const color = (props: ColorProps) => {
  const { theme, bg, backgroundColor, color } = props;

  const styleObject = getValue(theme, [
    ["colors", "color", color, "main"],
    ["colors", "backgroundColor", bg || backgroundColor, "secondary"]
  ]);

  return styleObject;
};

export const space = (props: SpaceProps) => {
  const {
    theme,
    margin,
    m,
    marginTop,
    mt,
    marginRight,
    mr,
    marginBottom,
    mb,
    marginLeft,
    ml,
    marginX,
    mx,
    marginY,
    my,
    padding,
    p,
    paddingTop,
    pt,
    paddingRight,
    pr,
    paddingBottom,
    pb,
    paddingLeft,
    pl,
    paddingX,
    px,
    paddingY,
    py
  } = props;

  const styledObject = getValue(theme, [
    ["space", "margin", m || margin],
    ["space", "marginRight", mx || marginX],
    ["space", "marginLeft", mx || marginX],
    ["space", "marginTop", my || marginY],
    ["space", "marginBottom", my || marginY],
    ["space", "marginTop", mt || marginTop],
    ["space", "marginRight", mr || marginRight],
    ["space", "marginBottom", mb || marginBottom],
    ["space", "marginLeft", ml || marginLeft],
    ["space", "padding", p || padding],
    ["space", "paddingRight", px || paddingX],
    ["space", "paddingLeft", px || paddingX],
    ["space", "paddingTop", py || paddingY],
    ["space", "paddingBottom", py || paddingY],
    ["space", "paddingTop", pt || paddingTop],
    ["space", "paddingRight", pr || paddingRight],
    ["space", "paddingBottom", pb || paddingBottom],
    ["space", "paddingLeft", pl || paddingLeft]
  ]);

  return styledObject;
};

export const border = (props: BorderProps) => {
  const { border, borderRadius, theme } = props;

  // TO BE DEFINED AS NOT ALL ITEMS SHOULD HAVE DEFAULTS IN THE THEME
  const styledObject = getValue(theme, [
    ["space", "border", border],
    ["space", "borderRadius", borderRadius]
  ]);

  return styledObject;
};

export const layout = (props: LayoutProps) => {
  const {
    theme,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    display
  } = props;

  // TO BE DEFINED AS NOT ALL ITEMS SHOULD HAVE DEFAULTS IN THE THEME
  const styledObject = getValue(theme, [
    ["space", "width", width],
    ["space", "height", height],
    ["space", "minWidth", minWidth],
    ["space", "maxWidth", maxWidth],
    ["space", "minHeight", minHeight],
    ["space", "maxHeight", maxHeight],
    ["space", "display", display]
  ]);

  return styledObject;
};
