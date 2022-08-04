// React component for Timeline

import { TimelineElement } from './TimelineElement';

interface BasicTimelineElementProps {
  title: string;
  subtitle: string;
  date: string;
  content: JSX.Element;
}

interface TimelineProps {
  data: Array<BasicTimelineElementProps>;
  start: number;
  range: number;
}

/**
 * @param {map} data - data for timeline
 */
// timeline functional component
// takes in a data object as data
// and generates the "necessary timeline"
export const Timeline = (props: TimelineProps): JSX.Element[] => {
  const { data, start, range } = props;

  if (data) {
    const result = [];
    // convert data into array of timeline elements
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      // value of hue
      const h = start + (range * i) / data.length;
      const hnext = start + (range * (i + 1)) / data.length;
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
        </TimelineElement>,
      );
    }
    return result;
  }
  return null;
};

export default Timeline;
