import React from 'react'

const worldclass = {
  position: 'fixed',
  top: 150,
  right: 50,
}

const h1color = {
  color: 'white',
}
const h2color = {
  color: ' #ffffff',
}

const h4color = {
  color: 'black',
}

const boxStyle = {
  width: '1000px', // Set the width of the box
  height: '270px', // Set the height of the box
  backgroundColor: 'rgba(200, 200, 200, 0.5)', // Set the background color
  border: '1px solid #333', // Add a border
  padding: '20px', // Add padding inside the box
  borderRadius: '10px',
}

const About = () => {
  return (
    <div style={worldclass} class="container" align="center">
      <div class="container" style={h1color}>
        <h1>World Class Property Management System </h1>
      </div>

      <div class="container" style={h2color}>
        <h2>Your Property . Our Property </h2>
      </div>
      <div class="container" style={h1color}>
        <br />
        <br />
        <h1> About Us </h1>
      </div>
      <div style={boxStyle}>
        <p>
          <h4>
            Housing refers to the development of living facilities for people.
            The UN housing policy guideline for developing countries states that
            the concept of housing is more than merely a physical shell. Housing
            encompasses all auxiliary services and community facilities which
            are necessary to human beings. As a basic need housing is a
            fundamental human right. In Bangladesh existence of human
            settlements or housing have been found as early as prehistoric
            times. Since then style and pattern of housing have evolved in
            adaptation to environmental, economic and social needs and guided by
            climatic and geographical locations.
          </h4>
        </p>
      </div>
    </div>
  )
}

export default About
