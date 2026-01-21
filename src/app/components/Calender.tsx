import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { colors } from "../../mui/colour";
import BoxContainer from "./common/BoxContainer";

const Calender = () => {
  return (
    <BoxContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            width: 220,
            height: 270,
            margin: 0,
            "& .MuiDayCalendar-weekContainer": {
              height: "25px",
            },
          }}
          slotProps={{
            calendarHeader: {
              sx: {
                "&.MuiPickersCalendarHeader-root": {
                  margin: 0,
                  padding: 0,

                  ".MuiPickersCalendarHeader-labelContainer": {
                    fontWeight: 700,
                    fontSize: "14px",
                  },
                },
              },
            },
            day: {
              sx: {
                height: "25px",
                borderRadius: "20%",
                "&.MuiPickersDay-today": {
                  background: colors.gradients,
                  border: 0,
                  color: colors.white,
                  height: "25px",
                },

                "&:hover": { background: colors.gradients, height: "25px" },
              },
            },
          }}
        />
      </LocalizationProvider>
    </BoxContainer>
  );
};

export default Calender;
