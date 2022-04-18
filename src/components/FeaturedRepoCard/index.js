import React, { useState } from 'react'
import { useTheme } from '../../ThemeContext'
import './style.css'

export default function FeaturedRepoCard({ repoData }) {
    const darkTheme = useTheme()
    const [ isExpanded, setIsExpanded ] = useState(false)

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    function buttClick(){
        if(isExpanded) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }
    }

    return (
        <div className='featured_card'>
            <h3 className={`featured_card_name${darkTheme}`}>{repoData.name}</h3>
            <img src={repoData.screenshot} className='screenshot' alt={repoData.name}></img>
            {/* <p className={`desc${darkTheme}`}>{repoData.desc}</p> */}
            <div>
                { isExpanded ? 
                <div>
                    <p>Placeholder</p>
                    <button onClick={buttClick}>show less</button>
                </div>:
                <div>
                    <p className={`desc${darkTheme}`}>{repoData.desc}</p> 
                    <button onClick={buttClick}>show more</button>
                </div> 
                }
                
            </div>
            
            <div className='card_butt_container'>
                <button className={`card_butt github${darkTheme}`} onClick={() => openInNewTab(repoData.gitUrl)}>Github</button>
                {repoData.liveUrl && <button className={`card_butt live${darkTheme}`} onClick={() => openInNewTab(repoData.liveUrl)}>Live Website</button>}
            </div>
            
        </div>
    )
}
