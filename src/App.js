import { Component } from 'react';
import { Container } from 'react-bootstrap';

// import components
import Header from './components/Header';

export default class App extends Component {
    render() {
        return (
            <Container fluid>
                <Header />
            </Container>
        )
    }
}