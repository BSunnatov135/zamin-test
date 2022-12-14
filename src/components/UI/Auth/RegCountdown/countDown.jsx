import { useEffect } from "react";
import { useRef } from "react";
import styles from './style.module.scss'
import { useState } from "react"

export default function countDown({ seconds }) {
    const [countDown, setCountdown] = useState(seconds);
    const timerID = useRef()
    useEffect(() => {
        timerID.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerID.current)
    }, [])
    useEffect(() => {
        if (countDown <= 0) {
            clearInterval(timerID.current)
        }
    }, [countDown])
    
    return (
        <div className = { styles.countDown }> <p>00:{countDown}</p> </div >
    )
}