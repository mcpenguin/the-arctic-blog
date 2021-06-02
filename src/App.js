import { Component } from 'react';
import Fade from 'react-reveal';

// import components
import Header from './components/Header/Header';
import TopCarousel from './components/TopCarousel/TopCarousel';
import AboutMe from './components/AboutMe/AboutMe';
import Notes from './components/Notes/Notes';
import ContactMe from './components/ContactMe/ContactMe';


export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <TopCarousel/>
                <AboutMe/>
                <Notes/>
                <ContactMe/>
            </>
        )
    }
}