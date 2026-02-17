import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="">
        <div className="text-3xl font-medium">Hello</div>
        <div className="text-4xl font-semibold">Username👋</div>
      </div>
      <Button variant="contained" color="error" size="large">
        Log out
      </Button>
    </div>
  );
};

export default Header;
