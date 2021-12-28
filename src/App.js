// React components for pages

import { Component } from 'react';
// import Fade from 'react-reveal';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// import components
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ExperienceEducation from './components/ExperienceEducation/ExperienceEducation';
import Extracurriculars from './components/Extracurriculars/Extracurriculars';
import Achievements from './components/Achievements/Achievements';
import Notes from './components/Notes/Notes';
import ContactMe from './components/ContactMe/ContactMe';

import ProjectContent from './components/Projects/ProjectContent';
import NotFound from './components/404NotFound/404NotFound';

// home page
class HomePage extends Component {

    componentDidMount() {
        // scroll to hash element if any
        console.log(this.props.location.hash);
        if (this.props.location.hash !== '') {
            document.querySelector(this.props.location.hash).scrollIntoView();
        }
    }

    render() {
        return (
            <>
                <Header />
                <Welcome />
                <AboutMe />
                <Projects />
                {/* <Experience />
                <Education /> */}
                <ExperienceEducation />
                <Extracurriculars />
                <Achievements />
                <Notes />
                <ContactMe />
            </>
        )
    };

}

class IndividualProjectPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header />
                <ProjectContent {...this.props} />
                <ContactMe />
            </>
        );
    }
}

class NotFoundSection extends Component {
    render() {
        return (
            <>
                <Header />
                <NotFound />
                <ContactMe />
            </>
        )
    }
}

export default class App extends Component {

    render() {
        return (
            <Router forceRefresh={true} basename={`${process.env.PUBLIC_URL}`}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    {/* <Route exact path="/projects" component={ProjectsPage} /> */}
                    <Route exact path="/projects/:projectId" component={IndividualProjectPage} />
                    {/* <Route exact path="/experience" component={ExperiencePage} /> */}
                    {/* <Route exact path="/education" component={EducationPage} /> */}
                    {/* <Route exact path="/extracurriculars" component={ExtracurricularsPage} /> */}
                    {/* <Route exact path="/achievements" component={AchievementsPage} /> */}
                    {/* <Route exact path="/notes" component={NotesPage} /> */}
                    {/* <Route exact path="/credits" component={CreditsPage} /> */}
                    <Route component={NotFoundSection} />
                </Switch>
            </Router>
        )
    }
}
