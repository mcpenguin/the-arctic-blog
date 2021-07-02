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
        image: penguin_extracurriculars,
        title: 'My Coding Projects',
        // desc: `
        //     Explore the various coding projects I am working on now and have
            // completed over my programming career, including the languages, libraries
            // and tools I used to make them.
            // A React website that displays Waterloo courses as
            // a network, a Python-based application that fetches Malaysian COVID-19 data
            // automatically using the BeautifulSoup library, and more!
        // `,
        desc: <p>
            Check out <i>My Course Graph</i>, a React website I designed which displays Waterloo courses 
            as a network to help students easily visualize the prerequisites for each course, 
            alongside my countless other projects.
        </p>,
    },
    {
        class: 'my-experience',
        image: penguin_extracurriculars,
        title: 'My Experience',
        desc: <p>
            {/* Check out my work and volunteer experience, both for technical and
            non-technical roles. */}
            Learn about my responsiblities and accomplishments at my first coop job
            as a Data Analyst at eMedAsia, alongside a list of my other
            internships and volunteer experiences.
        </p>,
    },
    {
        class: 'my-education',
        image: penguin_extracurriculars,
        title: 'My Education',
        desc: <p>
            View the subjects I took in Waterloo, the grades I achieved for my
            A-Level subjects as well as a list of the clubs I joined in both high school
            and university.
        </p>,
    },
    {
        class: 'my-extracurriculars',
        image: penguin_extracurriculars,
        title: 'My Hobbies & Extracurriculars',
        desc: <p>
            Enjoy a gallery of my hobbies and extracurriculars,
            including my piano arrangements 
            of <i>Unravel</i> and <i>Shinzo wo Sasageyo</i> as well as my 
            roles and experiences as a Curator 
            in TEDxSunwayUniversity. 
        </p>,
    },
    {
        class: 'my-achievements',
        image: penguin_achievements,
        title: 'My Awards',
        desc: <p>
            Check out my various achievements, including my ATCL Diploma in Piano Recital, 
            my Grade 6 in Trombone, and the collection of mathematics
            and computer science competition awards I amassed over the past 4 years.
        </p>,
    },
    {
        class: 'my-notes',
        image: penguin_notes,
        title: 'My Notes',
        desc: <p>
            Read and download the notes I curated for my university courses and high school studies,
            including my notes for MATH 145/6/7/8 and Cambridge GCE A-Level Further Mathematics.
        </p>,
    },
    {
        class: 'my-timeline',
        image: penguin_extracurriculars,
        title: 'My Timeline',
        desc: <p>
            Here, you can find a comprehensive timeline of everything mentioned in
            the previous sections.
        </p>,
    },
    {
        class: 'credits',
        image: penguin_extracurriculars,
        title: 'Credits and References',
        desc: <p>
            View the languages, frameworks, references, libraries and tools I used
            to design and develop this website.
        </p>,
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
                                {this.props.psDesc}
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