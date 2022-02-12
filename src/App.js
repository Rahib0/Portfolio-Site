import React from 'react';
import { ContactsBox, FeaturedReposList, IconList, WelcomeCard } from './components';
import * as screenshot from './assets/screenshot'
import './App.css'


const featuredList = [
    {
        name: "GlobeTrotter",
        screenshot: screenshot.globeTrotter,
        desc: "Trip adviser/ reccomendation site. Helps plan ideal trip and provide flight information",
        gitUrl: "https://github.com/PeterAndrewBriscoe/GlobeTrotter",
        liveUrl: "https://globetrotter-app.netlify.app/"
    },
    {
        name: " Daily Habit Tracker",
        screenshot: screenshot.habit,
        desc: "Track your habits",
        gitUrl: "https://github.com/Rahib0/habit-tracking",
        liveUrl: "https://tusmcbhtct-habit-tracker.netlify.app"
    },
    {
        name: "Postify",
        screenshot: screenshot.postify,
        desc: "A website to make, comment, react posts with gifs",
        gitUrl: "https://github.com/Rahib0/journaling_website",
        liveUrl: "https://postify-journal.netlify.app/"
    },
    {
        name: "GitHub Repo Finder",
        screenshot: screenshot.repoFinder,
        desc: "Enter a github username and retrieve a paginated list of their public repos",
        gitUrl: "https://github.com/Rahib0/Github-Repo-Tracker"
    },
    {
        name: "Anon Journalling Site",
        screenshot: screenshot.anon,
        desc: "Create an anonymous entry under a pseudonym and share your unique link with others to view your post",
        gitUrl: "https://github.com/Rahib0/anonymous-posts-site"
    }
    
    // {
    //     name: "Google Imitation",
    //     screenshot: "",
    //     desc: "An attempt at copying google's search page which displays results from a search term that matches a prewritten list of results",
    //     gitUrl: "https://github.com/Rahib0/Google-Imitation"
    // }
]


function App() {
    
    
    
    return (
        <>
            <WelcomeCard />
            <ContactsBox contacts={ { resume: true, email: true, linkedin: true, github: true, key: "relg" } } />
            {/* <p>My tech stack:</p> */}
            <IconList />
            <FeaturedReposList list={featuredList} />
            <ContactsBox contacts={ { email: true, linkedin: true, github: true, key: "elg" } } />

        </>
    )
}

export default App;
