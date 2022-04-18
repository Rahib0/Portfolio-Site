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
        technologies: ["HTML", "CSS", "JavaScript", "React", "Python", "Django", "PostGreSQL", "Jest", "Pytest"],
        gitUrl: "https://github.com/PeterAndrewBriscoe/GlobeTrotter",
        liveUrl: "https://globetrotter-app.netlify.app/"
    },
    {
        name: "Party Parrot Quiz",
        screenshot: screenshot.ppquiz,
        desc: "Multiplayer Quiz app made using sockets and data from free external API. Share links to games with unique url",
        expanded: "The Party Parrot Quiz is an online quiz web application that lets users create quiz lobbies from which others can join via custom urls or through the games join game menu option using the unique lobby ID. Users can customize the quiz when they first create it, being able to change the number of questions, category and difficulty of the quiz. Once in game players can change the name they appear with - the game starts when everyone has readied. Once the quiz has finished players are able to see the scores of everyone in the lobby and can see their own answers to each question along with the correct answers. Users scores are also tracked on a leaderboards.",
        technologies: ["HTML", "CSS", "JavaScript", "React + Redux", "Node", "Express", "Socket.io", "Jest", "Docker", "MongoDB" ],
        gitUrl: "https://github.com/Rahib0/party-parrot-quiz",
        liveUrl: "https://party-parrot-quiz.netlify.app/"
    },
    {
        name: " Daily Habit Tracker",
        screenshot: screenshot.habit,
        desc: "Create Habits and track them daily and view your history/ completion streak",
        expanded: "A project to create an app to track daily habits. A user creates an account and can then add any habits they want to track and how much they want to do each day. They can see the habits that they are currently tracking, add information about activities completed that day, see their most recent completion streak, and delete a habit if they no longer want to track it. They can also see the days in the past that they have tracked a particular habit.",
        technologies: ["HTML", "CSS", "JavaScript", "Node", "Express", "PostGreSQL", "Jest", "Docker"],
        gitUrl: "https://github.com/Rahib0/habit-tracking",
        liveUrl: "https://tusmcbhtct-habit-tracker.netlify.app"
    },
    {
        name: "Postify",
        screenshot: screenshot.postify,
        desc: "A website to make, comment, react posts with gifs",
        expanded: "Postify is a community journaling website which allows users to anonymously post journal entries, or posts. These posts contain a title, text and an optional gif. The gifs selected in the entry page make use of the gify API to return results related to the users search term. Users can view posts on the homepage and can scroll down to load more posts. Users can leave anonymous comments on posts using a comment button and can also react to the post with three different emojis - Like, Love, Funny.",
        technologies: ["HTML", "CSS", "JavaScript", "Node", "Express", "Jest"],
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
