import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { StyledFieldBox, StyledInput, StyledLabel } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

export const Input = forwardRef(
   ({ label, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <StyledFieldBox>
            {label ? <StyledLabel htmlFor={rest.name}>{label}</StyledLabel> : null}
            <StyledInput id={rest.name} name={rest.name} ref={ref} type="text" {...rest} />
            {error ? <p>{error.message}</p> : null}
         </StyledFieldBox>
      );
   }
);
