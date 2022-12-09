import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import cls from "./style.module.scss"
import { Close } from '@mui/icons-material';
import ZInput from 'components/UI/FormElements/ZInput';
import { borders } from '@mui/system';
import RegisterForm from '../Register';
import { useState } from 'react';
import classNames from 'classnames';
import InputMaskCustom from 'components/UI/FormElements/InputMask'
import { useForm } from 'react-hook-form';

export default function LoginForm({
  open,
  handleClose
}) {

  const [phone, setPhone] = useState('');
  const handleInput = ({ target: { value } }) => setPhone(value);
  
  const [openRegister,setOpenRegister]=useState(false)

  const [toggle, setToggle] = useState(false)

  const { control, reset, hanldeSubmit, watch } = useForm({
    defaultValues: {
        phone: '998994912830'
    }
})

console.log(watch('phone'));

  const handleRegister = (event) => {
    event && event.preventDefault()
    setOpenRegister(prev=>!prev);
    handleClose()
  };

  const handleCloseRegister = ()=>{
    setOpenRegister(prev=>!prev)
  }
  return(
    <>
    <Dialog open={open} onClose={handleClose} 
    sx={{ borderRadius: '0' }}
    >
      <div className={cls.box}>
        <div className={cls.closeIcon} onClick={handleClose}>
          <CloseIcon/>
        </div>
        <div className={cls.title}>
          <h2>Вход на сайт</h2>
        </div>
        <form className={cls.form} >
          {/* <ZInput fullWidth type='tel' label='Номер телефона' placeholder='Введите номер'/> */}
          <InputMaskCustom 
          control={control}
          label='Номер телефона'
          mask="+\9\9\8 99 999 99 99"
          maskchar={null}
          alwaysShowMask={false}
          placeholder='Введите номер'
          name='phone'
          value={phone} 
          onChange={handleInput}
          />
          {toggle && (<div>
            <ZInput fullWidth type='password' label='Пароль' placeholder='Введите пароль'/>
            <div className={cls.forgotPassword}>
            <a href='#'>Забыли пароль?</a>
            </div>
          </div>)}
        </form>
        <Button onClick={() => setToggle(!toggle)} >Войти</Button>
        <div className={cls.register}>
        <p>Ещё не с нами? <a href='#' onClick={handleRegister} >Зарегистрироваться</a></p>
        </div>
      </div>
      
    </Dialog>
    <RegisterForm open={openRegister} handleClose={handleCloseRegister} openLogin={handleClose}/>
    </>
  )
}