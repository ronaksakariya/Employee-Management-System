import { TextField } from "@mui/material";

const Input = (props) => {
  return (
    <TextField
      label={props.label}
      type={props.type}
      placeholder={props.placeholder}
      variant="outlined"
      fullWidth
      slotProps={props.slotProps}
    />
  );
};

export default Input;
