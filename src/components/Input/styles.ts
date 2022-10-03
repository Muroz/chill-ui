import styled, { css } from "styled-components";

interface StyleProps {
  hasError?: boolean;
}

const labelMixin = css<StyleProps>`
  color: ${({ hasError, theme }) =>
    hasError ? theme.chillUI.colors.error : theme.chillUI.colors.primary};
  transform: translate(0, -1.5rem);
  font-size: 14px;
`;

export const StyledWrapper = styled.div<StyleProps>`
  display: flex;
  flex-direction: column-reverse;
  font-family: sans-serif;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  position: relative;
`;

export const StyledLabel = styled.label<StyleProps>`
  background: white;
  color: ${({ hasError, theme }) => hasError && theme.chillUI.colors.error};
  left: 0.5rem;
  padding: 0 0.2rem;
  margin: 0 0.3rem;
  position: absolute;
  top: 1rem;
  transition: transform 0.2s ease-in-out, padding 1s, font-size 0.2s;
  transform-origin: 0;

  ${StyledWrapper}:focus-within & {
    ${labelMixin}
  }
`;

export const StyledInput = styled.input<StyleProps>`
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.chillUI.colors.error : theme.chillUI.colors.baseGray};
  border-radius: 2px;
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 1rem 1rem;

  &:valid,
  &:focus {
    border: 1px solid
      ${({ hasError, theme }) =>
        hasError ? theme.chillUI.colors.error : theme.chillUI.colors.primary};

    & + ${StyledLabel} {
      ${labelMixin}
    }
  }
`;

export const ErrorLabel = styled.p`
  color: ${(props) => props.theme.chillUI.colors.error};
  margin: 0.5rem 1.5rem;
  transform-origin: 0;
  transform: scale(0.8);

  font-family: sans-serif;
  font-size: 1rem;
`;
