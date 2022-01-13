import React from 'react'
import './style.css'

export default function Icon({ icon }) {
    const iconName = icon[0].replace(/\.[^/.]+$/, "")
    const iconPath = icon[1]
    
    return (
        <div className='icon_container'>
            <img src={iconPath} alt={iconName} className='icon_img'></img>
        </div>
    )
}
