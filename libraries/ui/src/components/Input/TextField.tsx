import { styled, TextField } from "@mui/material";
import React from "react";
import TextFieldProps from "./TextField.types";

const StyledContainer = styled("div")``;
const StyledLabel = styled("p")`
  color: ${(props) => props.theme.typography.body1.color};
  background-color: ${(props) => props.theme.palette.primaryButtonColor1.main};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  text-align: left;
`;

const StyledTextField = styled(TextField)`
  background-color: ${(props) => props.theme.palette.primaryButtonColor1.main};
  & input::placeholder {
    font-style: ${(props) => props.theme.typography.caption.fontStyle};
    color: ${(props) => props.theme.typography.caption.color};
    font-size: ${(props) => props.theme.typography.caption.fontSize};
  }
`;

const TextFields = ({
  name,
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  ...props
}: TextFieldProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>

      <StyledTextField
        {...props}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        // label={label ? label : undefined}
        variant="standard"
      />
    </StyledContainer>
  );
};

export default TextFields;
