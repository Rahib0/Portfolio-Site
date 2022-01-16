import React from 'react'
import FeaturedRepoCard from '../FeaturedRepoCard'
import './style.css'

export default function FeaturedReposList({ list }) {
    
    
    return (
        <section id='featured_projects'>
            {list.map(( repo, n ) => <FeaturedRepoCard key={n} repoData={repo} />)}
        </section>
    )
}
