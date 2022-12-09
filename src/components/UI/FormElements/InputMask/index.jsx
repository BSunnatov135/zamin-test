import React from "react";
import InputMask from "react-input-mask";
import { Typography } from "@mui/material";
import styles from "./style.module.scss";
import { Controller } from "react-hook-form";

export default function InputMaskCustom({control, ...props}) {
  return (
    <div className={styles.inputMaskWrapper}>
      {props.label && (
        <label htmlFor="phone">
          <Typography variant="labelText">{props.label}</Typography>
        </label>
      )}
      <Controller 
        control={control}
        name={props.name}
        render={({field: { onChange, value }, fieldState: { error }}) => (
          <InputMask
            onChange={onChange}
            mask={props.mask}
            error={error}
            placeholder={props.placeholder}
            value={value}
            maskChar={props.maskChar}
            className={styles.input}
            required
            style={props.error ? { borderColor: "red" } : {}}
            {...props}
        />
        )} />
    </div>
  );
}
