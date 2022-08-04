import './Piano.scss';

export default function Piano() {
  const videoWidth: number = 530;
  const videoHeight: number = 315;

  return (
    <section id="piano" className="section-piano-page">
      <div className="title">
        <h3>Piano Covers</h3>
      </div>
      <div className="description">
        <p>
          Although I am a classically-trained pianist with over 12 years of experience, one of my favorite pastimes is to instead compose and perform arrangements of various anime soundtracks, movie themes and pop songs.
        </p>
        <p>
          I post my best covers on my
          {' '}
          <a href="https://www.youtube.com/channel/UCIAQzTXPVtht2H0hoz8NNAg">YouTube channel</a>
          . Here are some of my favorite ones:
        </p>
      </div>
      <div className="videos">
        <iframe src="https://www.youtube.com/embed/35Xy8lVxx-c" title="Gurenge" width={videoWidth} height={videoHeight} />
        <iframe src="https://www.youtube.com/embed/V2fBT29-neg" title="Unravel" width={videoWidth} height={videoHeight} />
        <iframe src="https://www.youtube.com/embed/Jzz0SECcmQI" title="Swordland" width={videoWidth} height={videoHeight} />
        <iframe src="https://www.youtube.com/embed/pYs-qqKJhCM" title="No Game No Life" width={videoWidth} height={videoHeight} />
        <iframe src="https://www.youtube.com/embed/YxKdtDZdIgs" title="Dragonhearted" width={videoWidth} height={videoHeight} />
        <iframe src="https://www.youtube.com/embed/dvUAKXrpDYE" title="Dragonhearted" width={videoWidth} height={videoHeight} />
      </div>
    </section>
  );
}
