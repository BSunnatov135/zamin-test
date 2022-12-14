import { useEffect } from "react";
import { useRef } from "react";
import styles from './style.module.scss'
import { useState } from "react"

export default function countDown({ seconds, resendCode }) {
    const [countDown, setCountdown] = useState(seconds);
    const timerID = useRef()

    const countHandler = () => {
        timerID.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerID.current)
    }
    useEffect(() => {
        countHandler()
    }, [])
    useEffect(() => {
        if (countDown <= 0) {
            clearInterval(timerID.current)
        }
    }, [countDown])



    const sendCode = () => {
        resendCode();
        setCountdown(seconds)
        countHandler()
    }
    
    return (
        <>
            {countDown > 0 && <div className={styles.countDown}>
                <p>00:{countDown < 10 ? '0' + countDown : countDown}</p>
            </div >}
            {countDown <= 0 && <button type='button' onClick={sendCode} className={styles.submitButton}>Отправить смс еще раз</button>
            }
        </>
    )
}
