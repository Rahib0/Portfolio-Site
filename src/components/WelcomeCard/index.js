import React, { useEffect, useRef } from 'react'
import { useThemeUpdate } from '../../ThemeContext'
import './style.css'

export default function WelcomeCard() {
    const toggleTheme = useThemeUpdate()
    const darkButton = useRef()

    useEffect(() => {
        setInterval( () => {darkButton.current.classList.toggle("glow")}, 2500 )
    }, [])

    return (
        <div className={`welcome_card`}>
            <h1 className={`name`}>Rahib Rahman<span className='blink_me'>.</span></h1>
            <p className={`desc`}>Full stack developer and Economics Graduate</p>
            <p className={`second_line`}><span ref={darkButton} className={`darkmode_butt`} onClick={toggleTheme}>[ Dark Mode ]</span> appreciator</p>
        </div>
    )
}
