// React components for pages

import { Component } from 'react';
import Fade from 'react-reveal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";

// import components
import Header from './components/Header/Header';
import TopCarousel from './components/TopCarousel/TopCarousel';
import AboutMe from './components/AboutMe/AboutMe';
import PageSections from './components/PageSections/PageSections';
import Timeline from './components/Timeline/Timeline';
import ContactMe from './components/ContactMe/ContactMe';

// import components for pages
import Achievements from './components/Achievements/Achievements';
import Credits from './components/Credits/Credits';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Extracurriculars from './components/Extracurriculars/Extracurriculars';
import Notes from './components/Notes/Notes';
import Projects from './components/Projects/Projects';
import ProjectContent from './components/Projects/ProjectContent';
import Cover from './components/Cover/Cover';

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
                <TopCarousel />
                <AboutMe />
                <PageSections />
                <ContactMe />
            </>
        )
    };

}

class AchievementsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header />
                <Achievements />
                <ContactMe />
                <Timeline />
            </>
        );
    }
}

class CreditsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header />
                <Credits />
                <ContactMe />
            </>
        );
    }
}

class EducationPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header />
                <Education />
                <ContactMe />
            </>
        );
    }
}

class ExperiencePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <>
                <Header />
                <Experience />
                <ContactMe />
            </>
        );
    }
}

class ExtracurricularsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header />
                <Extracurriculars />
                <ContactMe />
            </>
        );
    }
}

class NotesPage extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <>
                <Header />
                <Notes />
                <ContactMe />
            </>
        );
    }
}

class ProjectsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header />
                <Projects />
                <ContactMe />
            </>
        );
    }
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

export default class App extends Component {

    render() {
        return (
            <Router forceRefresh={true}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/projects/:projectId" component={IndividualProjectPage} />
                    <Route exact path="/experience" component={ExperiencePage} />
                    <Route exact path="/education" component={EducationPage} />
                    <Route exact path="/extracurriculars" component={ExtracurricularsPage} />
                    <Route exact path="/achievements" component={AchievementsPage} />
                    <Route exact path="/notes" component={NotesPage} />
                    <Route exact path="/credits" component={CreditsPage} />
                </Switch>
            </Router>
        )
    }
}