import "../styles/about.css";

function About({ aboutRef }) {
  return (
    <div className="about" ref={aboutRef}>
      <h1>About Me</h1>
      <div className="info">
        <div className="info-details">
          <h3>
            About<span>Mk</span>
          </h3>
          <p>
            A very down to earth individual that is dedicated to work. I am able
            to adapt to any given work environment, communicate and I am able to
            pay attention to detail. I keep a positive mind even if I am In a
            position of rush. I work well In a team and as an individual. I like
            to keep my body in shape and healthy, I play Rugby and also an
            Athlete.
          </p>
          <br />
          <p>
            As a Software Developer, my goal is to continually increase my
            programming skills in order to present better solutions to my
            employers and their clients. I enjoy uncovering new ideas and would
            use them to advance SovTech's mission to deliver viable solutions
            for digital storage.
          </p>
        </div>
        <div className="info-summary">
          <h3>Skills and Experience</h3>
          <p>JavaScript Developer</p>
          <p>Wordpress Developer</p>
          <p>Web Dev Bootcamp Graduate</p>
          <p>Bootstrap Developer</p>
          <p>Web Dev Bootcamp Graduate</p>
          <p>MySQL & SQL Developer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
