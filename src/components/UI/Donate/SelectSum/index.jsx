import React from "react";
import SelectMenu, { components } from "react-select";
import { Controller } from "react-hook-form";
import { Box, Typography } from "@mui/material";

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    borderWidth: "1px",
    borderColor: isFocused ? "var(--primary-color)" : "#E5E9EB",
    boxShadow: "none",
    height: "36px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all .25s ease-in-out",
    ":hover": {
      borderColor: "var(--primary-color)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected, base }) => {
    //   const color = chroma(data.color);
    return {
      ...styles,
      ...base,
      cursor: isDisabled ? "not-allowed" : "default",
      backgroundColor: isFocused ? "rgba(0, 180, 39, 0.1)" : "#fff",
      color: isFocused && "#000",
      fontSize: "14px",
      lineHeight: "24px",
      ":active": {
        ...styles[":active"],

        //     ? isSelected
        //       ? data.color
        //       : color.alpha(0.3).css()
        //     : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#9AA6AC",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    fontSize: "14px",
    lineHeight: "24px",
    color: "var(--text-color)",
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      {/* <AngleRightIcon /> */}
    </components.DropdownIndicator>
  );
};

export default function UncontrolledSelect({
  placeholder,
  selectRef,
  options,
  label,
  inputId,
  defaultValue,
  name = "",
  value,
  isSearchable = false,
  isDisabled = false,
  isOptionDisabled = () => {},
  onChange,
}) {
  return (
    <Box display="flex" flexDirection="column" sx={{ rowGap: "4px" }}>
      {label && (
        <label htmlFor={inputId}>
          <Typography variant="labelText">{label}</Typography>
        </label>
      )}
      <SelectMenu
        className="basic-single"
        classNamePrefix="select"
        options={options}
        placeholder={placeholder}
        styles={colourStyles}
        ref={selectRef}
        openMenuOnFocus={true}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
        isOptionDisabled={isOptionDisabled}
        value={value}
        auto
        onChange={onChange}
        id={inputId}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
      />
    </Box>
  );
}
