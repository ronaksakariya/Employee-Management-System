import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Input from "../components/Input";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        action=""
        className="flex flex-col gap-10 border-[#83C5BE] border-2 p-5 rounded-2xl"
      >
        <Input
          type="email"
          placeholder="Email"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "transparent",
              borderRadius: "25px",
              alignItems: "center",
              "& fieldset": {
                borderColor: "#83C5BE",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#006D77",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#006D77",
              },
            },
            "& .MuiOutlinedInput-input": {
              fontFamily: "Inter, sans-serif",
              color: "#EDF6F9",
              padding: "14px 10px",
              "&::placeholder": {
                color: "#EDF6F9",
                opacity: 1,
              },
            },
            "& .MuiInputAdornment-root": {
              color: "#EDF6F9",
            },
            "& input::placeholder": {
              color: "#EDF6F9",
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
            },
          }}
        />

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlineIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "transparent",
              borderRadius: "25px",
              alignItems: "center",
              "& fieldset": {
                borderColor: "#83C5BE",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#006D77",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#006D77",
              },
            },
            "& .MuiOutlinedInput-input": {
              fontFamily: "Inter, sans-serif",
              color: "#EDF6F9",
              padding: "14px 10px",
              "&::placeholder": {
                color: "#EDF6F9",
                opacity: 1,
              },
            },
            "& .MuiInputAdornment-root": {
              color: "#EDF6F9",
            },
            "& input::placeholder": {
              color: "#EDF6F9",
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
            },
          }}
        />

        <div className="flex justify-between items-center">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Remember me"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
              },
            }}
          />
          <Button
            variant="text"
            sx={{
              backgroundColor: "transparent",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#83C5BE",
            }}
          >
            Forgot Password
          </Button>
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#83C5BE",
            borderRadius: "30px",
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
