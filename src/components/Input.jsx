import { TextField } from "@mui/material";

const Input = (props) => {
  return (
    <TextField
      type={props.type}
      placeholder={props.placeholder}
      variant="outlined"
      fullWidth
      slotProps={props.slotProps}
      sx={props.sx}
    />
  );
};

export default Input;
