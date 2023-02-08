import { forwardRef } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import { TextField, InputAdornment } from "@mui/material";
import { ArrowIcon } from "/public/icons/icons";
import CloseIcon from "@mui/icons-material/Close";
import useTranslation from "next-translate/useTranslation";

registerLocale("ru", ru);

const DataPickerInput = forwardRef((props, ref) => {
  const handleReload = (e) => {
    window.location.reload();
  };
  const { t } = useTranslation("common")
  const placeholder = t("placeholder")
  return (
    <TextField
      variant="standard"
      inputRef={ref}
      {...props}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <CloseIcon
              fontSize="small"
              style={{ cursor: "pointer" }}
              onClick={(e) => handleReload(e)}
            />
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  );
});

const CRangePicker = ({ value, onChange }) => {
  var date = new Date()
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getMonth() + 1, 0);
  return (
    <div>
      {console.log(lastDay)}
      <ReactDatePicker
      style={{fontSize: '30px'}}
        selected={value[0]}
        onChange={onChange}
        startDate={value[0]}
        endDate={value[1]}
        selectsRange
        showPopperArrow={false}
        dateFormat="MM.yyyy"
        locale="ru"
        monthsShown={1}
        showMonthYearPicker
        customInput={<DataPickerInput />}
      />
    </div>
  );
};

export default CRangePicker;
