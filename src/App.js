import { Component } from 'react';
import Fade from 'react-reveal';

// import components
import AdBlockerJumbotron from './components/AdBlockerJumbotron/AdBlockerJumbotron';
import Header from './components/Header/Header';
import TopCarousel from './components/TopCarousel/TopCarousel';
import AboutMe from './components/AboutMe/AboutMe';
import Timeline from './components/Timeline/Timeline';
import Notes from './components/Notes/Notes';
import ContactMe from './components/ContactMe/ContactMe';


export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <AdBlockerJumbotron />
                <TopCarousel/>
                <AboutMe/>
                <Timeline />
                <Notes/>
                <ContactMe/>
            </>
        )
    }
}