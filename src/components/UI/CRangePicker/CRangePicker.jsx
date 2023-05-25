import { forwardRef } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import uz from "date-fns/locale/uz";
import ru from "date-fns/locale/ru";
import en from "date-fns/locale/en-US";
import { TextField, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import useTranslation from "next-translate/useTranslation";

const DataPickerInput = forwardRef((props, ref) => {
  const { value } = props;
  const handleReload = (e) => {
    window.location.reload();
  };
  const { t } = useTranslation("common");
  const placeholder = t("placeholder");
  return (
    <TextField
      variant="standard"
      inputRef={ref}
      {...props}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {!value ? (
              <CalendarMonthIcon />
            ) : (
              <CloseIcon
                fontSize="small"
                style={{ cursor: "pointer" }}
                onClick={(e) => handleReload(e)}
              />
            )}
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  );
});

const CRangePicker = ({ value, onChange }) => {
  let { lang } = useTranslation();
  registerLocale("oz", uz);
  registerLocale("ru", ru);
  registerLocale("en", en);
  return (
    <div>
      <ReactDatePicker
        selected={value[0]}
        onChange={onChange}
        startDate={value[0]}
        endDate={value[1]}
        selectsRange
        showPopperArrow={false}
        maxDate={new Date()}
        dateFormat="MM.yyyy"
        locale={`${lang}`}
        monthsShown={1}
        showMonthYearPicker
        customInput={<DataPickerInput />}
      />
    </div>
  );
};

export default CRangePicker;
