// React component for individual projects

import React, { Component } from 'react';

// import markdown parser
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';

// import data
import project_data from './projectsData';
import project_images from './project_images/project_images';
import * as project_content from './project_content/project_content';

import './ProjectContent.scss';

class ProjectContent extends Component {

    projectId = this.props.match.params.projectId;
    md = new MarkdownIt();

    constructor(props) {
        super(props);
        this.state = {
            txt: "",
        }
    }

    componentDidMount() {
        fetch(project_content[this.projectId])
            .then(res => res.text())
            .then(txt => this.setState({txt}));
    }

    render() {
        let link = project_data[this.projectId].projectLink;
        return (
            <section className='project-content'>
                <div className='project-cover' style={{
                    backgroundImage: `url(${project_images[this.projectId]})`,
                }}>
                    <div className='sub'>
                        <div className='title'>
                            <h1>{project_data[this.projectId].projectName}</h1>
                            <h4>
                                <i className='icon fas fa-globe'></i> 
                                {typeof link !== "undefined" ? <a href={link}>Project Link</a> : "No project link available"}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='project-description'>
                    <div className='description'>
                        {parse(this.md.render(this.state.txt))}
                    </div>
                </div>
            </section>
        )
    }
}

export default (props) => <ProjectContent {...props} />;