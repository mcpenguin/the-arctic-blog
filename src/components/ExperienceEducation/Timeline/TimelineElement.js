// React component for Timeline Element

// takes in
// - title: the string for the title of the timeline element
// - subtitle: string

import "./TimelineElement.scss";

/**
 * 
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.date
 * @param {color_string} props.color
 * @param {color_string} props.subcolor
 * @param {JSX} props.children
 * @returns {React.Component}
 */
const TimelineElement = (props) => {
    // node: the "circle" node for the element
    return (
        <div className="timeline-element">
            <div className="date">
                <h6>{props.date}</h6>
            </div>
            <div className="node" style={{
                "--color": props.color,
                "--subcolor": props.subcolor
            }}></div>
            <div className="desc">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
            </div>
            <div className="body">
                {props.children}
            </div>
        </div>
    )
}

export default TimelineElement;
