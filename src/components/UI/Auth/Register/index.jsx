import { Dialog } from "@mui/material";
import cls from "./style.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ZInput from "components/UI/FormElements/ZInput";
import { useState } from "react";
import CheckIcon from "/src/assests/icons/checkIcon.svg";
import LoginForm from "../Login";
import { useEffect } from "react";
import CountDown from "../RegCountdown/countDown";
import InputMaskCustom from "components/UI/FormElements/InputMask";
import { useForm } from "react-hook-form";
import useAuth from "services/auth";

const statuses = ["initial", "password", "code", "gender"];

export default function RegisterForm({ open, handleClose, openLogin }) {
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);

  const [toggle, setToggle] = useState("male");

    const [status, setStatus] = useState(statuses[3]);
    
  // const stepChanger = ()=> {
  //     if(status === 'initial') {
  //         setStatus(statuses[1])
  //     }
  //     if(status === 'password') {
  //         setStatus(statuses[2])
  //     }
  //     if(status === 'code') {
  //         setStatus(statuses[3])
  //     }
  // }

  const { control, register, handleSubmit, watch, formState: {errors} } = useForm({
    
  });
    
    const {objectMutation} = useAuth({loginQueryProps: {}, table_slug: 'website_users'})

console.log('errors ', errors)
  console.log("WATCHER PHONE NUMBER", watch("phone"));

    const onSubmit = (data) => objectMutation.mutate({data:{ ...data, gender: [toggle] ,user_types_id:"8bc9ec1b-e619-4b49-a592-8a0d2379995d", birth_date: new Date(data.birth_date)}})
    
    console.log("gender ",status)

  return (
    <>
      <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "0" }}>
        <div className={cls.box}>
          <div className={cls.closeIcon} onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className={cls.title}>
            <h2>Регистрация</h2>
          </div>
          <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
            <InputMaskCustom
              register={register}
              name="phone"
              control={control}
              label="Номер телефона"
              mask="(99) 999-99-99"
              maskchar={null}
              alwaysShowMask={false}
              placeholder="Введите номер"
            />
            {status === "password" && (
              <>
                <ZInput
                  fullWidth
                  type="password"
                  label="Пароль"
                  placeholder="Введите пароль"
                />
                <ZInput
                  fullWidth
                  type="password"
                  label="Подтвердите пароль"
                  placeholder="Введите пароль"
                />
              </>
            )}
            {status === "code" && (
              <>
                  <ZInput
                  fullWidth
                  type="password"
                  label="Смс код"
                  placeholder="Введите Смс код"
                />
                <CountDown seconds={59} />
              </>
            )}
            {status === "gender" && (
              <div>
                <ZInput
                  register={register}
                  name="name"
                  fullWidth
                  type="text"
                  label="Имя"
                  placeholder="Введите ваше имя"
                />
                 <ZInput
                  register={register}
                  name="surname"
                  fullWidth
                  type="text"
                  label="Фамилия"
                  placeholder="Введите фамилию"
                />
                <ZInput
                  register={register}
                  name="second_name"
                  fullWidth
                  type="text"
                  label="Отчество"
                  placeholder="Введите отчество"
                />
                <ZInput
                  register={register}
                  name="email"
                  fullWidth
                  type="email"
                  label="E-mail"
                  placeholder="E-mail"
                />
                  <ZInput
                  register={register}
                  name="birth_date"
                  fullWidth
                  type="date"
                  label="Дата рождение"
                  placeholder="Выберите дату"
                />
                <div className={cls.genderChooseLabel}>
                  <label>Выберите пол</label>
                  <div className={cls.genderChoose} register={register}
                  name="gender">
                    <div className={cls.gender} onClick={() => setToggle("male")}>
                      Мужчина {toggle === "male" && <CheckIcon />}
                    </div>
                    <div className={cls.gender} onClick={() => setToggle("female")}>
                      Женщина {toggle === "female" && <CheckIcon />}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <Button type={status === 'gender' ? "submit" : "button"} onClick={() => status === 'gender' ? {} : stepChanger()}>Подвердить</Button> */}
            <Button type='submit'>Подвердить</Button>

          </form>
          <div className={cls.register}>
            <p>
              Уже с нами?{" "}
              <a
                href="#"
                onClick={(e) => {
                  openLogin(e);
                  handleClose(e);
                }}
              >
                Войдите
              </a>
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
}
