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
            width: "100%",
            height: 270,
            margin: 0,
          }}
          slotProps={{
            calendarHeader: {
              sx: {
                "&.MuiPickersCalendarHeader-root": {
                  margin: 0,
                  padding: 0,
                  fontWeight: 500,

                  ".MuiPickersCalendarHeader-labelContainer": {
                    fontWeight: 700,
                  },
                },
              },
            },
            day: {
              sx: {
                borderRadius: "20%",
                "&.MuiPickersDay-today": {
                  background: colors.gradients,
                  border: 0,
                  color: colors.white,

                  "& .Mui-selected": {
                    background: colors.gradients,
                  },
                },

                "&:hover": { background: colors.gradients },
              },
            },
          }}
        />
      </LocalizationProvider>
    </BoxContainer>
  );
};

export default Calender;
