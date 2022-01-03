// React component for Timeline Element
import React from 'react';

// takes in
// - title: the string for the title of the timeline element
// - subtitle: string

import "./TimelineElement.scss";

export interface TimelineElementProps {
    title: string,
    subtitle: string,
    date: string,
    color: string,
    subcolor: string,
    nextcolor: string,
    children: React.ReactNode,
}

/**
 * 
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.date
 * @param {color_string} props.color
 * @param {color_string} props.subcolor
 * @param {color_string} props.nextcolor
 * @param {JSX} props.children
 * @returns {React.Component}
 */
export function TimelineElement(props: TimelineElementProps) {
    // node: the "circle" node for the element
    return (
        <div className="timeline-element"
            style={{
                // @ts-ignore
                "--color": props.color, 
                "--subcolor": props.subcolor, 
                "--nextcolor": props.nextcolor, 
            }}
        >
            <div className="date">
                <h6>{props.date}</h6>
            </div>
            <div className="node"></div>
            <div className="desc">
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
            </div>
            <div className="body">
                <div className="connect">
                    <div className="connect-line"></div>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
            {/* <div className="body">
                {props.children}
            </div> */}
        </div>
    )
}
