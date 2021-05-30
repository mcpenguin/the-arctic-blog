import { Component } from 'react';
import { Container } from 'react-bootstrap';

// import components
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <AboutMe />
            </>
        )
    }
}