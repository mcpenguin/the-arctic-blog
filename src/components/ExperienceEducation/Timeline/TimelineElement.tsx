// React component for Timeline Element
import React from 'react';

// takes in
// - title: the string for the title of the timeline element
// - subtitle: string

import './TimelineElement.scss';

export interface TimelineElementProps {
  title: string;
  subtitle: string;
  date: string;
  // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types
  link?: string;
  color: string;
  subcolor: string;
  nextcolor: string;
  children: React.ReactNode;
}

/**
 *
 * @param {string} title
 * @param {string} subtitle
 * @param {string} date
 * @param {string} link
 * @param {color_string} color
 * @param {color_string} subcolor
 * @param {color_string} nextcolor
 * @param {JSX} children
 * @returns {React.Component}
 */
export const TimelineElement = (props: TimelineElementProps): JSX.Element => {
  const {
    color, subcolor, nextcolor, children, title, subtitle, date,
  } = props;
  return (
    <div
      className="timeline-element"
      style={{
        // @ts-ignore
        '--color': color,
        '--subcolor': subcolor,
        '--nextcolor': nextcolor,
      }}
    >
      <div className="date">
        <h6>{date}</h6>
      </div>
      <div className="node" />
      <div className="desc">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <div className="body">
        <div className="connect">
          <div className="connect-line" />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
