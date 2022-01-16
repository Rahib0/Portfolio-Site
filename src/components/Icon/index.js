import React, { useState } from 'react'
import { useTheme } from '../../ThemeContext'
import './style.css'

export default function Icon({ icon }) {
    const [ dancing, setDancing ] = useState("")
    const darkTheme = useTheme()
    
    const iconName = icon[0].replace(/\.[^/.]+$/, "")
    const iconPath = icon[1]
    let className = `icon_img${dancing}`

    function handleMouseOver() {
        if (dancing) {
            setDancing("")
        } else {
            setDancing(" dancing")
        }
    }

    
    return (
        <div className={`icon_container${darkTheme}`}>
            <img src={iconPath} title={iconName} alt={iconName} onClick={handleMouseOver} className={className}></img>
        </div>
    )
}
