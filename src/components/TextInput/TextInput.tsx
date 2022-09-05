import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledWrapper, StyledLabel, StyledInput, ErrorLabel } from "./styles";

export interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  name?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, name, ...props }, ref) => {
    return (
      <>
        <StyledWrapper hasError={!!error}>
          <StyledInput
            id={name}
            hasError={!!error}
            // placeholder=" "
            {...props}
            ref={ref}
          />
          {label && (
            <StyledLabel hasError={!!error} htmlFor={name}>
              {error ? "Error" : label}
            </StyledLabel>
          )}
        </StyledWrapper>
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </>
    );
  }
);

export default TextInput;
