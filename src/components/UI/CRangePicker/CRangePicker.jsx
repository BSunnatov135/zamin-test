import { forwardRef } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import { TextField, InputAdornment } from "@mui/material";
import { ArrowIcon } from "/public/icons/icons";

registerLocale("ru", ru);

const DataPickerInput = forwardRef((props, ref) => {
  return (
    <TextField
      variant="standard"
      inputRef={ref}
      {...props}
      placeholder="Bыберите период"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <ArrowIcon />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  );
});

const CRangePicker = ({ value = [null, null], onChange }) => {
  return (
    <div>
      <ReactDatePicker
        selected={value[0]}
        onChange={onChange}
        startDate={value[0]}
        endDate={value[1]}
        selectsRange
        showPopperArrow={false}
        dateFormat="dd.MM.yyyy"
        locale="ru"
        monthsShown={2}
        customInput={<DataPickerInput />}
      />
    </div>
  );
};

export default CRangePicker;
