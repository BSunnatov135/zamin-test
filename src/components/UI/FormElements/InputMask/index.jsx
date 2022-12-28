import React from "react";
import InputMask from "react-input-mask";
import { Typography } from "@mui/material";
import styles from "./style.module.scss";
import { Controller } from "react-hook-form";

export default function InputMaskCustom({
  control,
  register,
  className,
  required,
  name,
  ...props
}) {
  return (
    <div className={`${className} ${styles.inputMaskWrapper}`}>
      {props.label && (
        <label htmlFor="phone">
          <Typography variant="labelText">{props.label}</Typography>
        </label>
      )}
      <Controller
        control={control}
        name={name}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputMask
            onChange={onChange}
            mask={props.mask}
            error={error}
            placeholder={props.placeholder}
            value={value}
            maskChar={props.maskChar}
            className={styles.input}
            style={{ borderColor: error ? "red" : "" }}
            {...props}
          />
        )}
      />
    </div>
  );
}
