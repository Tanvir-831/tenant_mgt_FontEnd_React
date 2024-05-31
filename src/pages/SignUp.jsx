import React from 'react'

const worldclass = {
  top: 100,
  right: 200,
  bottom: 100,
};

const h1color = {
  color: 'white',
};

const h2color = {
  color: '#ffffff',
};

const h4color = {
  color: 'black',
  fontWeight: 'bold',
};

const boxStyle = {
  width: '1000px',
  height: '650px',
  backgroundColor: 'rgba(200, 200, 200, 0.5)',
  border: '1px solid #333',
  padding: '20px',
  borderRadius: '20px',
  //marginTop:'20px',
  //marginBottom: '20px',
  margin: 'auto',
};

const inputStyle = {
  width: '400px',
  height: '25px',
  backgroundColor: '#87CEEB',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
 // alignItems: 'center',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: '10px',
  padding: '20px',
};

const inputStyle1 = {
  width: '820px',
  height: '25px',
  backgroundColor: '#87CEEB',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
 // alignItems: 'center',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: '10px',
  padding: '20px',
};

const rowStyle = {
  display: 'flex',
};

const boxStyle1 = {
  width: '500px',
  height: '25px',
  backgroundColor: 'rgba(200, 200, 200, 0.5)',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontWeight: '',
  fontSize: '12px',
  borderRadius: '20px',
  padding: '20px',
};




const buttonRowStyle = {
  display: 'flex', // Display buttons in a row
  justifyContent: 'center', // Center-align buttons horizontally
  //marginBottom: '20px', // Add margin for spacing
};

const buttonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '10px 20px',
  margin: '0 0px', // Add margin between buttons
  borderRadius: '15px',
  cursor: 'pointer',
}; 

const p={
  position: 'relative',
  //top: '10px',
  right: '130px',
  


}

const textWrapperStyle = {
  position: 'relative',
  //top: '10px',
  right: '50px', // Set the desired fixed width for text wrapping
  width: '800px',
  overflow: 'hidden', // Hide text that overflows the container
  whiteSpace: 'normal', // Prevent line breaks in the text
  //textOverflow: 'ellipsis', // Add an ellipsis (...) for text that overflows
};

const SignUp = () => {
  return(
<div style={worldclass} class="container" align="center">
    

    <div style={boxStyle}  class="container">
      <div style={h4color} ><h4>Registration</h4></div>
     

<div style={rowStyle}>
        <div ><input type="text" placeholder="Name" style={inputStyle1} /></div>
      </div>
      <div style={rowStyle}>
        <div ><input type="text" placeholder="City / Town" style={inputStyle1} /></div>
      </div>
<div style={rowStyle}>
        <div ><input type="text" placeholder="NID" style={inputStyle} /></div>
        <div ><input type="text" placeholder="Occupation" style={inputStyle} /></div>
      </div>
      <div style={rowStyle}>
        <div ><input type="text" placeholder="Email" style={inputStyle} /></div>
        <div ><input type="text" placeholder="Plot Number" style={inputStyle} /></div>
      </div>
      <div style={rowStyle}>
        <div ><input type="text" placeholder="Phone Number" style={inputStyle} /></div>
        <div ><input type="text" placeholder="Building Name" style={inputStyle} /></div>
      </div>
      <div style={rowStyle}>
        <div ><input type="text" placeholder="Username" style={inputStyle1} /></div>
      </div>
      <div style={p} >
        <p style={p}>* The username must contain at least 5 characters.</p>
      </div>
      <div style={rowStyle}>
        <div ><input type="text" placeholder="Passward" style={inputStyle1} /></div>
      </div>
      <div className="text-wrapper" style={textWrapperStyle}><p>* Your password must be between 8 and 48 characters and include at least 1 lowercase letter, 1 capital letter, 1 number, and no spaces.</p></div>


     <div style={buttonRowStyle}>
      <button style={buttonStyle}>Create Account</button>
      
         
    </div>
<br />
     


    </div>
    
  </div>
    
  )
}
export default SignUp