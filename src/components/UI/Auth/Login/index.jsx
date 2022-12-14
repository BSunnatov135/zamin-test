import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import cls from "./style.module.scss"
import ZInput from 'components/UI/FormElements/ZInput';
import RegisterForm from '../Register';
import { useState } from 'react';
import CountDown from "../RegCountdown/countDown";
import InputMaskCustom from 'components/UI/FormElements/InputMask'
import { useForm } from 'react-hook-form';
import useAuth from "services/auth";
import { otpCredentials } from "utils/authCredentials";
import { setUser } from "store/authSlice/authSlice";
import { useDispatch } from "react-redux";

export default function LoginForm({
  open,
  handleClose
}) {
  const [state, setState] = useState({
    smsId: ''
  })
  const dispatch = useDispatch()
  const statuses = ["initial", "code"];
  const [openRegister,setOpenRegister]=useState(false)
  const { control, register, handleSubmit, reset, watch, formState: {errors} } = useForm();
  const [status, setStatus] = useState(statuses[0]);
  
  const handleRegister = (event) => {
    event && event.preventDefault()
    setOpenRegister(prev=>!prev);
    handleClose()
  };

  const handleCloseRegister = ()=>{
    setOpenRegister(prev=>!prev)
  }
  const { sendCode, verifyUser } = useAuth({
    sendCodeQueryProps: {
      onSuccess: (value) => {
        setState(prev => ({
          ...prev,
          smsId: value.data.sms_id
        }))
        setStatus(statuses[1])
        reset()
      }
    },
    verifyUserQueryProps: {
      onSuccess: (value) => {
        console.log(value);
        dispatch(setUser(value.data.client_platform));
        setStatus(statuses[0]);
        reset();
        handleClose()
        
      }
    },
    verifyParams: {
      otp: watch('otp'), smsId: state.smsId
    }
  })
  const onSubmit = (data) => {
    console.log('data===>', data);
    if (status === 'initial') {
      sendCode.mutate({
        "client_type": "SITE_USER",
        "recipient": `+998${data.recipient.replace(/[- )(]/g, '')}`,
        "text": "Код подтверждения"
        
      }
     )
      return
    }
    if (status === 'code') {
      console.log('data===>', data)
      verifyUser.mutate(otpCredentials)
      console.log();
      return
    }
  }
console.log('error=',verifyUser.status);
  return(
    <>
    <Dialog open={open} onClose={handleClose} 
    sx={{ borderRadius: '0' }}
    >
      <div className={cls.box}>
          <div className={cls.closeIcon} onClick={(e) => {
              handleClose(e);
              reset()
              setStatus(statuses[0])
                  }
          }>
          <CloseIcon/>
        </div>
        <div className={cls.title}>
          <h2>Вход на сайт</h2>
        </div>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
            {status === 'initial' &&
              <InputMaskCustom
                control={control}
                register={register}
                name="recipient"
                label='Номер телефона'
                mask="(99) 999-99-99"
                maskchar={null}
                alwaysShowMask={false}
                placeholder='Введите номер'
              />}
            {status === "code" && (
              <>
                <InputMaskCustom
              name="recipient"
              control={control}
              label="Номер телефона"
              mask="(99) 999-99-99"
              maskchar={null}
              alwaysShowMask={false}
              placeholder="Введите номер"
            />
                <ZInput
                  register={register}
                  
                  name="otp"
                  fullWidth
                  type="password"
                  label="Код подтверждения"
                  placeholder="Введите код подтверждения"
                  className= {verifyUser.status == 'error' ? cls.borderRed : " "}
                />
                <CountDown seconds={59} />
              </>
            )}
            <Button type='submit' className={cls.button}>Войти</Button>
        </form>
        
        <div className={cls.register}>
        <p>Ещё не с нами? <a href='#' onClick={handleRegister} >Зарегистрироваться</a></p>
        </div>
      </div>
      
    </Dialog>
    <RegisterForm open={openRegister} handleClose={handleCloseRegister} openLogin={handleClose}/>
    </>
  )
}