// React component class for AdBlockerJumbotron section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

// import stylesheet
import './AdBlockerJumbotron.css';

// is this necessary?? excluded for now

export default class AdBlockerJumbotron extends Component {
    render() { 
        // if user is blocking ads, display banner
        if (!window.hasOwnProperty('google_render_ad') || window.google_render_ad === undefined) { 
            console.log("Blocking ads!")
        }
        else {
            console.log("Not blocking ads!")
        }

        return (
            <section class="section-adblocker-jumbotron">
                <Jumbotron fluid>
                    <div class="adblocker-text">
                        <h3>The website may not load properly if you use an AdBlocker.</h3>
                        <p>Don't worry, there's no ads here - just that some adblockers might classify the images I used as ads.</p>
                    </div>
                </Jumbotron>
            </section>
        ); 
    }
}