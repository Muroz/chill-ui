import styled from "styled-components";

interface StyleProps {
  hasError?: boolean;
}

export const StyledWrapper = styled.div<StyleProps>`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  font-family: sans-serif;
  font-size: 1rem;
`;

export const StyledLabel = styled.label<StyleProps>`
  background: white;
  color: ${({ hasError, theme }) => hasError && theme.colors.error};
  left: 1rem;
  padding: 0 0.5rem 0 0.5rem;
  position: absolute;
  top: 1rem;
  transition: transform 0.4s ease-in-out, padding 1s;
  transform-origin: 0;

  ${StyledWrapper}:focus-within & {
    color: ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.primary};
    transform: translate(-0.5rem, -1.5rem) scale(0.9);
  }
`;

export const StyledInput = styled.input<StyleProps>`
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.baseGray};
  border-radius: 2px;
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 1rem 1rem;

  &:valid,
  &:focus {
    border: 1px solid
      ${({ hasError, theme }) =>
        hasError ? theme.colors.error : theme.colors.primary};

    & + ${StyledLabel} {
      color: ${({ hasError, theme }) =>
        hasError ? theme.colors.error : theme.colors.primary};
      transform: translate(-0.5rem, -1.5rem) scale(0.9);
    }
  }
`;

export const ErrorLabel = styled.p`
  color: ${(props) => props.theme.colors.error};
  margin: 0.5rem 1.5rem;
  transform-origin: 0;
  transform: scale(0.8);

  font-family: sans-serif;
  font-size: 1rem;
`;
