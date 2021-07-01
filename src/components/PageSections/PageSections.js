// React component class for PageSections section
import React, { Component } from 'react';

// "merges" the different page section pages together 

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChevronRight from '@material-ui/icons/ChevronRightTwoTone';

// import penguins
import penguin_projects from './penguins/penguin-projects.png';

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
        image: penguin_projects,
        title: 'My Extracurriculars',
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
        image: penguin_projects,
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
        image: penguin_projects,
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
// - psTitle: title for page section (e.g. My Projects) (as string)
// - psDesc: description for page section (as string)
class PageSection extends Component {
    render() {
        // class of page section
        const psClass = this.props.psClass;
        return (
            <section class={`section-page section-${psClass}`}>
                <Container fluid>
                    <Row className={this.props.psIsRight ? "flex-row-reverse" : ""}>
                        <Col lg={6} className={`page-image-div ${psClass}-image-div`}>
                            <div>
                                <img className={`page-image ${psClass}-image`} src={this.props.psImage} />
                            </div>
                        </Col>
                        <Col lg={6} className={`page-text ${psClass}-text`}>
                            <div className={`page-text-div ${psClass}-text-div`}>
                                <h2>{this.props.psTitle}</h2>
                                <p>
                                    {this.props.psDesc}
                                </p>
                                <div className={`page-view ${psClass}-view`}>
                                    <button class="noselect">Find out more <ChevronRight className="page-icon"/></button>
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
        return result;
    }
}