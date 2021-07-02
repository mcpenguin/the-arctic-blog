// React component class for PageSections section
import React, { Component } from 'react';

// "merges" the different page section pages together 

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChevronRight from '@material-ui/icons/ChevronRightTwoTone';

// import blobs
import blob_projects from './blobs/blob-projects.svg'
import blob_experience from './blobs/blob-experience.svg'
import blob_education from './blobs/blob-education.svg'
import blob_extracurriculars from './blobs/blob-extracurriculars.svg'
import blob_achievements from './blobs/blob-achievements.svg'
import blob_notes from './blobs/blob-notes.svg'
import blob_timeline from './blobs/blob-timeline.svg'
import blob_credits from './blobs/blob-credits.svg'

// import penguins
// commented out = not drawn yet 
import penguin_projects from './penguins/penguin-projects.png'
// import penguin_experience from './penguins/penguin-experience.png'
// import penguin_education from './penguins/penguin-education.png'
import penguin_extracurriculars from './penguins/penguin-extracurriculars.png'
import penguin_achievements from './penguins/penguin-achievements.png'
import penguin_notes from './penguins/penguin-notes.png'
// import penguin_timeline from './penguins/penguin-timeline.png'
// import penguin_credits from './penguins/penguin-credits.png'

// import stylesheet
import './PageSections.css';

// data for page sections as list of objects
const pageSectionData = [
    {
        class: 'my-projects',
        image: penguin_projects,
        title: 'My Projects',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
    {
        class: 'my-experience',
        image: penguin_projects,
        title: 'My Experience',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
    {
        class: 'my-education',
        image: penguin_projects,
        title: 'My Education',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
    {
        class: 'my-extracurriculars',
        image: penguin_extracurriculars,
        title: 'My Hobbies & Extracurriculars',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
    {
        class: 'my-achievements',
        image: penguin_achievements,
        title: 'My Awards',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
    {
        class: 'my-notes',
        image: penguin_notes,
        title: 'My Notes',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
    {
        class: 'my-timeline',
        image: penguin_projects,
        title: 'My Timeline',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
    {
        class: 'credits',
        image: penguin_projects,
        title: 'Credits and References',
        desc: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
        `,
    },
]

// class for page section
// props
// - psIsRight: prop that determines whether penguin is to the left of the (desktop) screen,
// or to the right
// - psClass: class name for page section (e.g. my-projects)
// - psImage: image (of penguin) corresponding to page section
// - psBlob: svg image of blob corresponding to page section
// - psTitle: title for page section (e.g. My Projects) (as string)
// - psDesc: description for page section (as string)
class PageSection extends Component {
    render() {
        // class of page section
        const psClass = this.props.psClass;
        return (
            <section class={`section-page section-${psClass}`} style={{
                // backgroundColor: !this.props.psIsRight 
                //     ? "#f5f5f5" 
                //     : "#e7e7e7",
                //     // : "#d5d5d5aa",
                //     // : "#dfe7f0",
            }}>
                <Container fluid>
                    <Row className={this.props.psIsRight ? "flex-row-reverse" : ""}>
                        <Col lg={6} className={`page-image-div ${psClass}-image-div`}>
                            <div>
                                <img 
                                    className={`page-image ${psClass}-image`} 
                                    src={this.props.psImage} 
                                />
                            </div>
                        </Col>
                        <Col lg={6} className={`page-text ${psClass}-text`}>
                            <div className={`page-text-div ${psClass}-text-div`}>
                                <h2>{this.props.psTitle}</h2>
                                <p>
                                    {this.props.psDesc}
                                </p>
                                <div className={`page-view ${psClass}-view`}>
                                    <button class="noselect">Find out more <ChevronRight className="page-icon" /></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default class PageSections extends Component {
    render() {
        let result = [];
        for (let i in pageSectionData) {
            let pageSection = pageSectionData[i];
            result.push(
                <PageSection
                    psIsRight={i % 2}
                    psClass={pageSection.class}
                    psDesc={pageSection.desc}
                    psImage={pageSection.image}
                    psTitle={pageSection.title}
                />
            )
        }
        return (
            <div class="section-page-sections">
                {result}
            </div>
        );
    }
}