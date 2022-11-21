import '../styles/motive.css'

function Motive({ motiveRef }) {
  return (
    <div className='motive' ref={motiveRef}>
      <h1>Why I want to join SovTech</h1>
      <div className="motive-info">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sequi suscipit optio velit neque officiis consequatur ducimus laboriosam corporis architecto?</p>
        <br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto tempore sit amet, asperiores itaque voluptatum similique eligendi atque eveniet illum ab natus cupiditate odio quidem magnam! Soluta incidunt voluptatibus culpa pariatur distinctio nisi, facilis nam alias maiores ullam atque cum unde veniam necessitatibus voluptatem debitis iure voluptates saepe esse fugit.</p>
      </div>
    </div>
  )
}

export default Motive