import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledWrapper, StyledLabel, StyledInput, ErrorLabel } from "./styles";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, name, ...props }, ref) => {
    return (
      <>
        <StyledWrapper hasError={!!error}>
          <StyledInput
            id={name}
            hasError={!!error}
            name={name}
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

export default Input;
