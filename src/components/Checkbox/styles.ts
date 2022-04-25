import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface CheckboxStyleProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Define if the checkbox is checked
   */
  checked?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What color to use for the checked icon
   */
  color?: string;
  /**
   * What background color to use when the checkbox is unchecked
   */
  unCheckedBackgroundColor?: string;
}

export const Label = styled.span`
  font-family: sans-serif;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const IconFrame = styled.svg.attrs({ viewBox: "0 0 24 24" })`
  fill: none;
  stroke-width: 2px;
`;

export const CheckMarkIcon = styled.polyline.attrs({
  points: "20 6 9 17 4 12"
})``;

export const StyledCheckbox = styled.div<CheckboxStyleProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) =>
    props.checked
      ? props.backgroundColor || "#87ceeb"
      : props.unCheckedBackgroundColor || "transparent"};
  border: 1px solid #b2beb5;
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #87ceeb;
  }

  ${IconFrame} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    stroke: ${(props) => props.color || "white"};
  }
`;

export const StructureGrid = styled.div<{
  labelPlacement?: "top" | "bottom" | "left" | "right";
}>`
  display: grid;
  grid-gap: 1rem;

  ${(props) => {
    switch (props.labelPlacement) {
      case "top":
        return css`
          grid-auto-flow: row;

          ${Label} {
            grid-row-start: 1;
          }

          ${StyledCheckbox} {
            margin: auto;
          }
        `;
      case "left":
        return css`
          grid-auto-flow: column;

          ${Label} {
            grid-column-start: 1;
          }
        `;
      case "bottom":
        return css`
          grid-auto-flow: row;

          ${StyledCheckbox} {
            margin: auto;
          }
        `;
      default:
        return css`
          grid-auto-flow: column;
        `;
    }
  }}
`;
