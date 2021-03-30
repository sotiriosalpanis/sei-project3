import React from 'react'


const Home = () => {
  return (
    <>
      <div className='person-outer'>
        <div className='person-inner'>
          <h1> Olivia Flynn</h1>
          <div className="photo-container">
            <span className="btn"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQF6x3r13kR2Rg/profile-displayphoto-shrink_200_200/0/1615162371959?e=1620864000&v=beta&t=R1LTPi3GqqCzFrhhZx4TOWdWjPjyJuQcjU4wCGzmkFU" alt="olivia-img" /></span>
          </div>
          <br />
          <div className='about-info'>
          </div>
          <div className='info-section'>
            <p>Software Engineer from London.</p>
            <p>Likes: Aperol Spritzs in beer gardens, travelling <br/>and detailed spotify playlist names.</p>
            <p>Fun Fact: Has been to 24 countries.</p>
            <p><a href='https://www.linkedin.com/in/olivia-flynn-061518150/' target="blank">LinkedIn</a> | <a href='https://github.com/oliviafpersonal' target='blank'>GitHub</a></p>
          </div>
        </div>
        <div className='spotify-section'>
          <iframe width="450" height="300" src="https://www.youtube.com/embed/0HbagZwKBro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
      <div className='person-outer'>
        <div className='person-inner'>
          <h1> Michael Henderson</h1>
          <div className="photo-container">
            <span className="btn"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGMEdWdBetqYg/profile-displayphoto-shrink_200_200/0/1613654052738?e=1620864000&v=beta&t=A1slZ-XvNW9tTMhe7cZOtMf2j-Iti8hPeLm0rupa2l0" alt="michael-img" /></span>
          </div>
          <br />
          <div className='about-info'>
          </div>
          <div className='info-section'>
            <p>Software Engineer from London.</p>
            <p>Likes: Prosecco, Kate Bush, Mango Chutney, and the BioShock game series.</p>
            <p>Fun Fact: Color blind but can solve a Rubiks Cube.</p>
            <p><a href='https://www.linkedin.com/in/mhenderson24/' target="blank">LinkedIn</a> | <a href='https://github.com/Awyssa' target='blank'>GitHub</a></p>
          </div>
        </div>
        <div className='spotify-section'>
          <iframe width="450" height="300" src="https://www.youtube.com/embed/aXgSHL7efKg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </>
  )
}

export default Home

