// React component class for Projects section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// import stylesheet
import './Projects.css';

import test_img from './test-img.png';

// import icons dict
import { icons_dict, icons_names_dict } from './tool_icons/tool_icons';

// tooltip for icon images
// props:
// - iconId: id of icon
// - iconName: name of icon 
class IconTooltip extends Component {
    renderTooltip = (props) => (
        <Tooltip {...props}>
          {this.props.iconName}
        </Tooltip>
    );

    render() {
        return (
            <OverlayTrigger
                placement="bottom"
                delay={{show: 100, hide: 100}}
                overlay={this.renderTooltip}
            >
                <img className={icons_dict[this.props.iconId]} src={icons_dict[this.props.iconId]} />
            </OverlayTrigger>
        )
    }
}

// class for 'folder' to 'store' the project
// props:
// - projectName: project name (as string, max length = 25 chars)
// - iconsUsed: list of tools used (as list, max length = 4)
class ProjectFolder extends Component {
    render() {
        return (
            <div className="project-folder">
                <div className="title">
                    <h4>{this.props.projectName}</h4>
                </div>
                {/* image has to be at least twice as long as high */}
                <div className="project-image">
                    <img src={test_img} />
                </div>
                <div className="tools-used">
                    {this.props.iconsUsed.map(id => 
                        // <img className={icons_dict[id]} src={icons_dict[id]} />
                        <IconTooltip 
                            iconId={id}
                            iconName={icons_names_dict[id]}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default class Projects extends Component {
    render() {
        return (
            <section class="section-projects-page">
                <Container fluid>
                    <h2>My Projects</h2>
                    <p>
                        Projects description would go here.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ac odio tempor orci dapibus ultrices in
                        iaculis nunc sed. Amet risus nullam eget felis eget nunc
                        lobortis mattis aliquam. Orci a scelerisque purus semper eget
                        duis. Eu augue ut lectus arcu bibendum at varius vel.
                    </p>
                    <Row>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="My Course Graph"
                                iconsUsed={['mongodb', 'expressjs', 'react', 'nodejs']}
                            />
                        </Col>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="Skyblock Calculator"
                                iconsUsed={['html', 'css', 'js']}
                            />
                        </Col>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="Malaysia COVID-19 Data"
                                iconsUsed={['python', 'pandas', 'mysql', 'metabase']}
                            />
                        </Col>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="Student Attendance GUI"
                                iconsUsed={['joget', 'java', 'mysql']}
                            />
                        </Col>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="Linear Collatz"
                                iconsUsed={['html', 'tableau']}
                            />
                        </Col>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="Joget FB Marketplace"
                                iconsUsed={['html']}
                            />
                        </Col>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="Pure Math Club Website"
                                iconsUsed={['html']}
                            />
                        </Col>
                        <Col xl={4} md={6}>
                            <ProjectFolder 
                                projectName="Compass Initiative Website"
                                iconsUsed={['wordpress', 'bluehost']}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}