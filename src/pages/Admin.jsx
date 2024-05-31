import React from 'react'

const worldclass = {
  top: 150,
  right:100,
  left:70,
}

const h1color = {
  color: 'white',
}

const h2color = {
  color: '#ffffff',
}

const h4color = {
  color: 'black',
  fontWeight: 'bold',
}

const boxStyle = {
  width: '500px',
  height: '300px',
  backgroundColor: 'rgba(200, 200, 200, 0.5)',
  border: '1px solid #333',
  padding: '20px',
  borderRadius: '20px',
}

const inputStyle = {
  width: '70%',
  border: '2px solid #3498db', // Change the border color
  fontSize: '18px',
  backgroundColor: '#f7f7f7', // Change the background color
  padding: '10px',
  borderRadius: '10px',
}

const buttonStyle = {
  backgroundColor: '#3498db', // Background color of the button
  color: '#fff', // Text color
  borderRadius: '50px', // Roundness of the corners
  padding: '10px 20px', // Button size (width and height)
  cursor: 'pointer', // Mouse cursor style
  fontSize: '12px', // Font size
}

const Admin = () => {
  return (
    
    <div style={worldclass} class="container" align="center">
      <div class="container" style={h1color}>
        <h1>World Class Property Management System</h1>
      </div>

      <div class="container" style={h2color}>
        <h2>Your Property . Our Property</h2>
      </div>
      <br />

      <div style={boxStyle} class="container">
        <div style={h4color}>
          <h4>Admin Log In</h4>
        </div>
        <div>
          {/* Add an input element here */}
          <input type="text" placeholder="Username" style={inputStyle} />
        </div>
        <br />
        <div>
          {/* Add an input element here */}
          <input type="text" placeholder="Password" style={inputStyle} />
        </div>

        <div class="button container">
          <br />
          <a className="btn btn-primary" href="/Admind" role="button">
            Sign In
          </a>
        </div>
        <br />
        <div>
          <h7>Forgot Your Username / Passward ? </h7>
        </div>
      </div>
    </div>
  )
}

export default Admin
