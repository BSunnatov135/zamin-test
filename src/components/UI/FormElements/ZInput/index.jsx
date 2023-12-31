import classNames from "classnames";
import styles from "./style.module.scss";

//small, medium, large

// false, true

// const  obj = { type: 'tttt' }

export default function ZInput({
  fullWidth,
  size = "medium",
  name,
  register,
  className,
  label,
  isShowPassword,
  type = "text",
  placeholder,
  ...restProps
}) {
  return (
    <div className={`${className} ${styles.input}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...restProps}
        className={classNames(styles[size], {
          [styles.fullWidth]: fullWidth,
        })}
        {...register(name)}
      />
      {/* {type==="password" && <div className={styles.icon}><ShowPasswordIcon /></div>} */}
    </div>
  );
}
