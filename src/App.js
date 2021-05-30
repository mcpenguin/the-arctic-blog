import { Component } from 'react';

// import components
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Notes from './components/Notes/Notes';

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <AboutMe />
                <Notes />
            </>
        )
    }
}