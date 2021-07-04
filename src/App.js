// React component for home page

import { Component } from 'react';
import Fade from 'react-reveal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import components
import AdBlockerJumbotron from './components/AdBlockerJumbotron/AdBlockerJumbotron';
import Header from './components/Header/Header';
import TopCarousel from './components/TopCarousel/TopCarousel';
import AboutMe from './components/AboutMe/AboutMe';
import Timeline from './components/Timeline/Timeline';
import Notes from './components/Notes/Notes';
import ContactMe from './components/ContactMe/ContactMe';

import PageSections from './components/PageSections/PageSections';

// import sections to link to pages
// import MyProjects from './components/MyProjects/MyProjects';
// import MyExperience from './components/MyExperience/MyExperience';
// import MyEducation from './components/MyEducation/MyEducation';
// import MyExtracurriculars from './components/MyExtracurriculars/MyExtracurriculars';
// import MyAchievements from './components/MyAchievements/MyAchievements';
// import MyNotes from './components/MyNotes/MyNotes';
// import MyTimeline from './components/MyTimeline/MyTimeline';
// import Credits from './components/Credits/Credits';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                {/* <AdBlockerJumbotron /> */}
                <TopCarousel />
                <AboutMe />
                <PageSections />
                {/* <MyProjects />
                <MyExperience />
                <MyEducation />
                <MyExtracurriculars />
                <MyAchievements />
                <MyNotes />
                <MyTimeline />
                <Credits /> */}
                {/* <Timeline /> */}
                {/* <Notes/> */}
                <ContactMe />

                <Switch>
                    <Route path="/projects">
                        <></>
                    </Route>
                    <Route path="/experience">
                        <></>
                    </Route>
                    <Route path="/education">
                        <></>
                    </Route>
                    <Route path="/extracurriculars">
                        <></>
                    </Route>
                    <Route path="/achievements">
                        <></>
                    </Route>
                    <Route path="/notes">
                        <></>
                    </Route>
                    <Route path="/credits">
                        <></>
                    </Route>
                </Switch>
            </Router>
        )
    }
}