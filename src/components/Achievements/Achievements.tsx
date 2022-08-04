// React component class for Achievements section

// import stylesheet
import './Achievements.scss';

// import data
import data from './achievementsData';

interface AchievementEntryProps {
  title: string;
  contestName: string;
  date: string;
}

const AchievementEntry = (props: AchievementEntryProps) => {
  const { title, contestName, date } = props;
  return (
    <div className="achievement">
      <div className="description">
        <h5>{title}</h5>
        <h6>{contestName}</h6>
      </div>
      <div className="date">
        <h6>{date}</h6>
      </div>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const Achievements = (_props: any) => (
  <section id="achievements" className="section-achievements-page">
    <h3>My Achievements</h3>
    <div className="achievements-container">
      {data.map((props) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <AchievementEntry {...props} />
      ))}
    </div>
  </section>
);

export default Achievements;
