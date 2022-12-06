import { Dialog } from '@mui/material'
import cls from './style.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import ZInput from 'components/UI/FormElements/ZInput';
import { useState } from 'react';
import CheckIcon from '/src/assests/icons/checkIcon.svg'
import LoginForm from '../Login';
import { useEffect } from 'react';
import CountDown from '../RegCountdown/countDown';
import InputMaskCustom from 'components/UI/FormElements/InputMask'

const statuses = ['initial', 'password', 'code', 'gender']

export default function RegisterForm({
    open,
    handleClose,
    openLogin
    }) {
        const [phone, setPhone] = useState('');
        const handleInput = ({ target: { value } }) => setPhone(value);
        
        const [toggle, setToggle] = useState('m')

        const [status,setStatus]=useState(statuses[0])
        const onSubmit = ()=>{
            if(status === 'initial') {
                setStatus(statuses[1])
            }
            if(status === 'password') {
                setStatus(statuses[2])
            }
            if(status === 'code') {
                setStatus(statuses[3])
            }
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
            <h2>Регистрация</h2>
        </div>
        <form className={cls.form}>
            <InputMaskCustom 
            label='Номер телефона'
            mask="+\9\9\8 99 999 99 99"
            maskchar={null}
            alwaysShowMask
            placeholder='Введите номер'
            name='phoneNumber'
            value={phone} 
            autoFocus
            onChange={handleInput}
            />
            {status === 'password' && <>
                <ZInput fullWidth type='password' label='Пароль' placeholder='Введите пароль'/>
                <ZInput fullWidth type='password' label='Подтвердите пароль' placeholder='Введите пароль'/>
            </>}
            
                {status === 'code' && <>
                <ZInput fullWidth type='password' label='Смс код' placeholder='Введите Смс код'/>
                <CountDown seconds={59}/></>}
                {status === 'gender' && (<div ><ZInput fullWidth type='date' label='Дата рождение' placeholder='Выберите дату'/>
                    <div className={cls.genderChooseLabel}>
                    <label>Выберите пол</label>
                    <div className={cls.genderChoose}>
                        <div className={cls.gender}onClick={() => setToggle('m')}>Мужчина {toggle === 'm' && <CheckIcon/>}</div>
                        <div className={cls.gender} onClick={() => setToggle('w')}>Женщина {toggle === 'w' && <CheckIcon/>}</div>
                    </div>
                    </div>
                </div>
                
                )}
            
        </form>
        <Button onClick={onSubmit}>Подвердить</Button>
        <div className={cls.register}>
        <p>Уже с нами?  <a href='#' onClick={(e)=>{openLogin(e)
        handleClose(e)
        }}>Войдите</a></p>
        </div>
        </div>
        
      </Dialog>
      </>
    )
  }