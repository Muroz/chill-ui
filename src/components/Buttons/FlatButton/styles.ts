import styled from "styled-components";
import { ButtonContainer } from "../common/styles";

export const FlatButtonContainer = styled(ButtonContainer)`
  border: none;

  &:hover {
    background: ${({ bg, backgroundColor, theme }) => {
      const definedBackgroundColor = bg || backgroundColor;

      if (definedBackgroundColor) {
        return `${
          theme.chillUI.colors[definedBackgroundColor] || definedBackgroundColor
        }CC`;
      }
    }};
  }
`;
