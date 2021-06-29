import { Component } from 'react';
import Fade from 'react-reveal';

// React component for home page

// import components
import AdBlockerJumbotron from './components/AdBlockerJumbotron/AdBlockerJumbotron';
import Header from './components/Header/Header';
import TopCarousel from './components/TopCarousel/TopCarousel';
import AboutMe from './components/AboutMe/AboutMe';
import Timeline from './components/Timeline/Timeline';
import Notes from './components/Notes/Notes';
import ContactMe from './components/ContactMe/ContactMe';

// import sections to link to pages
import MyProjects from './components/MyProjects/MyProjects';
import MyExperience from './components/MyExperience/MyExperience';
import MyEducation from './components/MyEducation/MyEducation';
import MyExtracurriculars from './components/MyExtracurriculars/MyExtracurriculars';
import MyAchievements from './components/MyAchievements/MyAchievements';
import MyNotes from './components/MyNotes/MyNotes';
import MyTimeline from './components/MyTimeline/MyTimeline';
import Credits from './components/Credits/Credits';


export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                {/* <AdBlockerJumbotron /> */}
                <TopCarousel/>
                <AboutMe/>
                <MyProjects />
                <MyExperience />
                <MyEducation />
                <MyExtracurriculars />
                <MyAchievements />
                <MyNotes />
                <MyTimeline />
                <Credits />
                {/* <Timeline /> */}
                {/* <Notes/> */}
                <ContactMe/>
            </>
        )
    }
}