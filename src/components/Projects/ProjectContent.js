// React component for individual projects

import React, {Component} from 'react';

class ProjectContent extends Component {
    render() {
        return (
            <p>Hello World!</p>
        )
    }
}

export default (props) => <ProjectContent {...props} />;