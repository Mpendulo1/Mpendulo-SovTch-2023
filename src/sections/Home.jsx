import React from 'react'

import '../styles/home.css'

function Home({ homeRef, aboutRef }) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className='home' ref={homeRef}>
        <h1>Hi there 👋, my name is <span>Mpendulo `Mk` Khoza</span></h1>
        <p>I like writing code, bringing designs into life and blah blah blah...</p>
        <button onClick={() => scrollToSection(aboutRef)}>Get to know know me</button>
    </div>
  )
}

export default Home