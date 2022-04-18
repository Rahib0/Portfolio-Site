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
                    <p>{repoData.expanded ? repoData.expanded : 
                    <>
                        {repoData.desc}
                        <span><br></br>More to be added</span>
                    </>
                    }</p>
                    <div>
                        { ("technologies" in repoData) ?
                        <>
                            <p>Technologies</p>
                            <ul>
                                {repoData.technologies.map(( tech, n ) => <li key={n}>{tech}</li>)}
                            </ul>
                        </>
                        :
                        <></>
                        }
                    </div>
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
