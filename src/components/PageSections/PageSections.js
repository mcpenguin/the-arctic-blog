// React component class for PageSections section
import React, { Component } from 'react';

import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Extracurriculars from '../Extracurriculars/Extracurriculars';
import Achievements from '../Achievements/Achievements';
import Notes from '../Notes/Notes';

// import stylesheet
import './PageSections.scss';

export default class PageSections extends Component {
    render() {
        return (
            <>
                <Projects />
                <Experience />
                <Education />
                <Extracurriculars />
                <Achievements />
                <Notes />
            </>
        );
    }
}
