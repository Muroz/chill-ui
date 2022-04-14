import styled, { css } from "styled-components";

export interface ButtonStyleProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What color to use
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button variant
   */
  variant?: "text" | "outlined" | "default";
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
  font-family: sans-serif;

  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
          width: 6rem;
        `;
      case "large":
        return css`
          font-size: 1.5rem;
          font-weight: 600;
          padding: 1rem 2rem;
          width: 10rem;
        `;
      default:
        return css`
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.8rem 1.5rem;
          width: 8rem;
        `;
    }
  }}

  ${(props) => {
    let backgroundColor;
    let color;
    let onHoverColor;
    switch (props.variant) {
      case "text":
        backgroundColor = props.backgroundColor || "transparent";
        color = props.color || "#87ceeb";
        onHoverColor = props.color
          ? `${props.color}1A`
          : "#7bd3f71a";

        return css`
          background: ${backgroundColor};
          border: none;
          color: ${color};

          &:hover {
            background: ${onHoverColor};
          }
        `;
      case "outlined":
        backgroundColor = props.backgroundColor || "transparent";
        color = props.color || "#87ceeb";
        onHoverColor = props.color
          ? `${props.color}1A`
          : "#7bd3f71a";

        return css`
          background: ${backgroundColor};
          border: 1px solid ${color};
          color: ${color};

          &:hover {
            background: ${onHoverColor};
          }
        `;
      default:
        backgroundColor = props.backgroundColor || "#87ceeb";
        color = props.color || "white";
        onHoverColor = props.backgroundColor
          ? `${props.backgroundColor}CC`
          : "#91cae1";

        return css`
          background: ${backgroundColor};
          border: none;
          color: ${color};

          &:hover {
            background: ${onHoverColor};
          }
        `;
    }
  }}
`;
