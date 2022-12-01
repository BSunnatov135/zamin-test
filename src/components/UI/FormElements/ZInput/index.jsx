import classNames from "classnames"
import styles from "./style.module.scss"
import ShowPasswordIcon from 'assests/icons/showPassword.svg'

//small, medium, large

// false, true

// const  obj = { type: 'tttt' } 

export default function ZInput({fullWidth, size = 'medium', label, isShowPassword, type = 'text', placeholder, ...restProps }){
    
    return (
        <div className={styles.input}>
            {label && <label>{label}</label>}
            <input type={type} placeholder={placeholder} {...restProps} className={classNames(styles[size],{
        [styles.fullWidth]: fullWidth,
        })}/>
        {/* {type==="password" && <div className={styles.icon}><ShowPasswordIcon /></div>} */}
        </div>
    )
}