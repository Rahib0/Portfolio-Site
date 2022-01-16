import React, { useState } from 'react'
import { useTheme } from '../../ThemeContext'
import './style.css'

export default function Icon({ icon }) {
    const [ dancing, setDancing ] = useState("")
    const [ selected, setSelected ] = useState("")
    const darkTheme = useTheme()
    
    const iconName = icon[0].replace(/\.[^/.]+$/, "")
    const iconPath = icon[1]
    let className = `icon_img${dancing}`

    function handleIconClick() {
        if (dancing) {
            setDancing("")
        } else {
            setDancing(" dancing")
        }
        if (selected) {
            setSelected("")
        } else {
            setSelected(" selected")
        }
    }

    
    return (
        <div className={`icon_container${darkTheme + selected}`}>
            <img src={iconPath} title={iconName} alt={iconName} onClick={handleIconClick} className={className}></img>
        </div>
    )
}
