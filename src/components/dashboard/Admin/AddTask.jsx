import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Input from "../../Input";

const AddTask = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <Input type="text" placeholder="Make a UI design" label="Task Title" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                fullWidth: true,
                variant: "outlined",
              },
            }}
          />
        </LocalizationProvider>
        <Input type="text" placeholder="Employee name" label="Assign to" />
        <Input type="text" placeholder="design, dev, etc..." label="Category" />
      </div>

      {/* strt with description */}
    </div>
  );
};

export default AddTask;
