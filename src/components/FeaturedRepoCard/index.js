import React, { useState, useRef } from 'react'
import { useTheme } from '../../ThemeContext'
import './style.css'

export default function FeaturedRepoCard({ repoData }) {
    const darkTheme = useTheme()
    const [ isExpanded, setIsExpanded ] = useState(false)
    const descStart = useRef()

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    function buttClick(){
        if(isExpanded) {
            setIsExpanded(false)
            descStart.current.scrollIntoView()
        } else {
            setIsExpanded(true)
        }
    }

    return (
        <div className='featured_card' ref={descStart}>
            <h3 className={`featured_card_name${darkTheme}`}>{repoData.name}</h3>
            <img src={repoData.screenshot} className='screenshot' alt={repoData.name}></img>
            {/* <p className={`desc${darkTheme}`}>{repoData.desc}</p> */}
            <div>
                { isExpanded ? 
                <div>
                    <p className={`desc${darkTheme}`}>{repoData.expanded ? repoData.expanded : 
                    <>
                        {repoData.desc}
                        <span><br></br><i>More to be added</i></span>
                    </>
                    }</p>
                    <div>
                        { ("technologies" in repoData) ?
                        <>
                            <p className={`desc${darkTheme}`}>Technologies</p>
                            <ul className={`list desc${darkTheme}`}>
                                {repoData.technologies.map(( tech, n ) => <li key={n}>{tech}</li>)}
                            </ul>
                        </>
                        :
                        <></>
                        }
                    </div>
                </div>:
                <div>
                    <p className={`desc${darkTheme}`}>{repoData.desc}</p> 
                </div> 
                }
                { ("expanded" in repoData) ? 
                <button onClick={buttClick} className="show_butt">{ isExpanded ? "show less": "show more" }</button>:
                <></> }
                
            </div>
            
            <div className='card_butt_container'>
                <button className={`card_butt github${darkTheme}`} onClick={() => openInNewTab(repoData.gitUrl)}>Github</button>
                {repoData.liveUrl && <button className={`card_butt live${darkTheme}`} onClick={() => openInNewTab(repoData.liveUrl)}>Live Website</button>}
            </div>
            
        </div>
    )
}
