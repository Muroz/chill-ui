import React from "react";
import { StyledWrapper, StyledLabel, StyledInput, ErrorLabel } from "./styles";

export interface TextInputProps {
  label?: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, error, ...props }) => {
  return (
    <>
      <StyledWrapper hasError={!!error}>
        <StyledInput id="input" hasError={!!error} placeholder=" " {...props} />
        {label && (
          <StyledLabel hasError={!!error} htmlFor="input">
            {error ? "Error" : label}
          </StyledLabel>
        )}
      </StyledWrapper>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};

export default TextInput;
