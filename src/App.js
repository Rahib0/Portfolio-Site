import React from 'react';
import { ContactsBox, FeaturedReposList, IconList, WelcomeCard } from './components';
import * as screenshot from './assets/screenshot'
import './App.css'


const featuredList = [
    {
        name: "GlobeTrotter",
        screenshot: screenshot.globeTrotter,
        desc: "Trip adviser/ reccomendation site. Helps plan ideal trip and provide flight information",
        expanded: "GlobeTrotter is a Trip Adviser/Reccomendation web application designed to provide suggestions and information on various places based on prerequisite conditions - i.e. Categories such as Golf, Nightlife, Beach and users can also select based on average historical temperature for the location. The site can also provide a detailed view for each selected location wherein users can see hotels around the area that are available for booking and also get a link to flights available to airports in that location. Users are also able to Register and login in order to save Trips to various locations with details of their trips such as dates and flight information.",
        gitUrl: "https://github.com/PeterAndrewBriscoe/GlobeTrotter",
        liveUrl: "https://globetrotter-app.netlify.app/"
    },
    {
        name: "Party Parrot Quiz",
        screenshot: screenshot.ppquiz,
        desc: "Multiplayer Quiz app made using sockets and data from free external API. Share links to games with unique url",
        gitUrl: "https://github.com/Rahib0/party-parrot-quiz",
        liveUrl: "https://party-parrot-quiz.netlify.app/"
    },
    {
        name: " Daily Habit Tracker",
        screenshot: screenshot.habit,
        desc: "Create Habits and track them daily and view your history/ completion streak",
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
