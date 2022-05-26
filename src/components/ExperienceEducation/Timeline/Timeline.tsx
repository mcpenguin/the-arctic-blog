// React component for Timeline

import {TimelineElement} from './TimelineElement';

interface BasicTimelineElementProps {
    title: string,
    subtitle: string,
    date: string,
    content: JSX.Element
}

interface TimelineProps {
    data: Array<BasicTimelineElementProps>,
    start: number,
    range: number
}

/**
 * @param {map} props.data - data for timeline
 */
// timeline functional component
// takes in a data object as props.data 
// and generates the "necessary timeline"
export function Timeline(props: TimelineProps): JSX.Element {
    if (props.data) {
        let result = [];
        // convert data into array of timeline elements
        for (let i = 0; i < props.data.length; i++) {
            let element = props.data[i];
            // value of hue
            let h = props.start + props.range * i / props.data.length;
            let hnext = props.start + props.range * (i + 1) / props.data.length;
            result.push(
                <TimelineElement
                    key={i}
                    title={element.title}
                    subtitle={element.subtitle}
                    date={element.date}
                    color={`hsla(${h}, 80%, 90%, 1)`}
                    subcolor={`hsla(${h}, 40%, 40%, 1)`}
                    nextcolor={`hsla(${hnext}, 40%, 40%, 1)`}
                >
                    {element.content}
                </TimelineElement>
            );
        }
        return <>{result}</>;
    }
    return null;
}

export default Timeline;
