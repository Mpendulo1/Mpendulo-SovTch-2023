import '../styles/about.css'

function About({ aboutRef }) {
  return (
    <div className='about' ref={aboutRef}>
      <h1>About Me</h1>
      <div className="info">
        <div className="info-details">
          <h3>About<span>Mk</span></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti excepturi incidunt modi commodi consectetur dolorem omnis quo veritatis debitis illum?</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam, molestiae omnis vel ullam veritatis voluptas accusamus illo perspiciatis saepe tempore dolorum ipsam expedita distinctio eveniet facere nihil temporibus? Eveniet sequi saepe hic magnam, animi minima excepturi sunt temporibus sed cum alias aliquid, qui adipisci beatae aperiam nisi esse earum?</p>
        </div>
        <div className="info-summary">
          <h3>Skills and Experience</h3>
          <p>JavaScript Developer</p>
          <p>Wordpress Developer</p>
          <p>Web Dev Bootcamp Graduate</p>
          <p>Wordpress Developer</p>
          <p>Web Dev Bootcamp Graduate</p>
          <p>JavaScript Developer</p>

        </div>
      </div>
    </div>
  )
}

export default About