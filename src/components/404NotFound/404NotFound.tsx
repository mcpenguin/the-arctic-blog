// import stylesheet
import './404NotFound.scss';

const NotFound = (props: object) => {
    return (
        <section className='section-not-found'>
            <div className='gradient'>
                <div className='desc'>
                    <h1>404 Error</h1>
                    <h3>Please check the page you are on is a valid page :D</h3>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
