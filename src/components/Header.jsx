import '../styles/header.css'

function Header({ homeRef, aboutRef, motiveRef }) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className='header'>
        <div className="brand"><span>Mk</span></div>
        <nav>
            <ul className="nav-items">
                <li onClick={() => scrollToSection(homeRef)}>Home</li>
                <li onClick={() => scrollToSection(aboutRef)}>About Me</li>
                <li onClick={() => scrollToSection(motiveRef)}>Why SovTech</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header