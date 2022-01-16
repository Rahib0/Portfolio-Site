import React from 'react'
import { pdf } from '../../assets/files'
import { useTheme } from '../../ThemeContext'
import './style.css'

export default function ContactsBox({ contacts }) {
    const darkTheme = useTheme()
    
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='contacts_box' id={contacts.key}>
            {contacts.resume && <button className={`resume${darkTheme}`} onClick={() => openInNewTab(pdf)}>Resume</button>}
            <div className='links_container'>
                {contacts.github && <i className={`fab fa-github${darkTheme}`} title='GitHub' onClick={() => openInNewTab('https://github.com/Rahib0')}></i>}
                {contacts.email && <i className={`fas fa-envelope${darkTheme}`} title='Email' onClick={() => openInNewTab('mailto:rrahman829@outlook.com')} aria-hidden="true"></i>}
                {contacts.linkedin && <i className={`fab fa-linkedin${darkTheme}`} title='LinkedIn' onClick={() => openInNewTab('https://www.linkedin.com/in/rahib-rahman-a828651bb/')} aria-hidden="true"></i>}
            </div>
            

        </div>
    )
}
