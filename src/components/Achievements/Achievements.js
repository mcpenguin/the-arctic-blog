// React component class for Achievements section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './Achievements.scss';

// class for individual achievement
// props:
// - title (eg Top 1% (Honour Roll - Group IV))
// - contestName (eg Canadian Senior Mathematics Competition (CSMC))
// - date (eg Nov 2019)
class AchievementEntry extends Component {
    render() {
        return (
            <div className='achievement'>
                <div className='description'>
                    <h5>{this.props.title}</h5>
                    <h6>{this.props.contestName}</h6>
                </div>
                <div className='date'>
                    <h6>{this.props.date}</h6>
                </div>
            </div>
        )
    }
}

export default class Achievements extends Component {
    render() { 
        return (
            <section id='achievements' className='section-achievements-page'>
                <h3>My Achievements</h3>
                <div className='achievements-container'>
                    <AchievementEntry 
                        title="Top 1% (Honour Roll - Group IV)"
                        contestName="Canadian Senior Mathematics Competition (CSMC)"
                        date="Nov 2019"
                    />
                </div>
            </section>
        ); 
    }
}