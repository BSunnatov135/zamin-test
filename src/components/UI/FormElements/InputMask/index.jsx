import React from "react";
import InputMask from "react-input-mask";
import { Typography } from "@mui/material";
import styles from "./style.module.scss";

export default function InputMaskCustom(props) {
  return (
    <div className={styles.inputMaskWrapper}>
      {props.label && (
        <label htmlFor="phoneNumber">
          <Typography variant="labelText">{props.label}</Typography>
        </label>
      )}
      <InputMask
        mask={props.mask}
        placeholder={props.placeholder}
        value={props.value}
        maskChar={props.maskChar}
        className={styles.input}
        required
        name={props.name}
        style={props.error ? { borderColor: "red" } : {}}
        {...props}
      />
    </div>
  );
}
