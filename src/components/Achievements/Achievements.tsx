// React component class for Achievements section

// import stylesheet
import './Achievements.scss';

// import data
import data from './achievementsData';

interface AchievementEntryProps {
    title: string,
    contestName: string,
    date: string
}

const AchievementEntry = (props: AchievementEntryProps) => {
    return (
        <div className='achievement'>
            <div className='description'>
                <h5>
                    {props.title}

                </h5>
                <h6>
                    {props.contestName}
                </h6>
            </div>
            <div className='date'>
                <h6>
                    {props.date}
                </h6>
            </div>
        </div>
    )
}

const Achievements = (props) => {
    return (
        <section id='achievements' className='section-achievements-page'>
            <h3>My Achievements</h3>
            <div className='achievements-container'>
                {
                    data.map((props) => <AchievementEntry {...props} />)
                }
            </div>
        </section>
    );
}

export default Achievements;
