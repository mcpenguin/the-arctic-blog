// React component class for Extracurriculars section

// import stylesheet
import './Extracurriculars.scss';

export default function Extracurriculars() {
    return (
        <section id="extracurriculars" className='section-extracurriculars-page'>
            <div className='sub'>
                <h3>My Extracurriculars and Hobbies</h3>

                <div className='extracurriculars-container'>
                    <div className='one'>
                        <div className='tedx'>
                            <div className='gradient'>
                                <div className='title'>
                                    <h3>Curator @ TEDxSunwayUniversity</h3>
                                    <h4>2019 Committee</h4>
                                </div>
                            </div>
                        </div>
                        <div className='sue'>
                            <div className='gradient'>
                                <div className='title'>
                                    <h3>Trombonist @ Sunway University Ensemble</h3>
                                    <h4>2018 - 2021</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='two'>
                        <div className='rc'>
                            <div className='gradient'>
                                <div className='title'>
                                    <h3>Rock Climbing</h3>
                                    <h4>5+ years experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='three'>
                        <div className='piano'>
                            <div className='gradient'>
                                <div className='title'>
                                    <h3>Pianist</h3>
                                    <h4>12+ years experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// const Extracurriculars = (props) => {
//     return <>

//     </>
// }

// export default Extracurriculars;