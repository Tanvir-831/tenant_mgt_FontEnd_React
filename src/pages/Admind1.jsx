import React from 'react'
/*const worldclass = {
 position: 'fixed',
  top: '100px',
  right: '0px',
  left: '',
};*/
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
  width: '800px',
  height: '600px',
  backgroundColor: 'rgba(220, 220, 220, 0.7)',
  border: '1px solid #333',
  padding: '20px',
  borderRadius: '10px',
  position: 'fixed',
  top: '100px',
  right: '145px',
};

const boxStyle1 = {
  width: '800px',
  height: '40px',
  backgroundColor: '#3B0F06',
  border: '5px solid #3B0F06',
  padding: '20px',
  //margin: '10px',
 // display: 'flex',
  alignItems: 'center',
  borderRadius: '10px',
  position: 'fixed',
  top: '100px',
  right: '145px',
};

const inputStyle = {
  width: '70%',
  border: '2px solid #3498db', // Change the border color
  fontSize: '18px',
  backgroundColor: '#f7f7f7', // Change the background color
  padding: '10px',
  borderRadius: '10px',
};

/*const buttonStyle = {
  backgroundColor: '#3498db',  // Background color of the button
  color: '#fff',             // Text color
  borderRadius: '50px',       // Roundness of the corners
  padding: '10px 20px',      // Button size (width and height)
  cursor: 'pointer',         // Mouse cursor style
  fontSize: '12px',          // Font size
};*/

const buttonRowStyle = {
  display: 'flex', // Display buttons in a row
  justifyContent: 'center', // Center-align buttons horizontally
  marginTop: '20px', // Add margin for spacing
};

const buttonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '10px 20px',
  margin: '0 30px', // Add margin between buttons
  borderRadius: '30px',
  cursor: 'pointer',
};

const p = {
  letterSpacing: '10px', // Adjust the letter spacing as needed
  fontSize: '15px',
  fontWeight: 'bold',
  align: 'center',
  color:'white',
  position: 'fixed',
  top: '115px',
  right: '470px',
};

const p1 = {
  letterSpacing: '10px', // Adjust the letter spacing as needed
  fontSize: '15px',
  fontWeight: 'bold',
  align: 'center',
  color:'white',
  position: 'fixed',
  top: '387px',
  right: '470px',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center align items vertically
  justifyContent: 'center', // Center align items horizontally
  height: '', // Adjust the container height as needed
};

const rowStyle = {
  display: 'flex',
};

const boxStyle2 = {
  width: '150px',
  height: '150px',
  backgroundColor: '#CB2805',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontWeight: '',
  fontSize: '12px',
  borderRadius: '0px',
  padding: '20px',
};

const boxStyle3 = {
  width: '150px',
  height: '30px',
  backgroundColor: '#A2857F',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '15px',
  borderRadius: '0px',
  padding: '20px',
  position: 'fixed',
  top: '290px',
  right: '715px',
  letterSpacing: '0px',

};
const boxStyle4 = {
  width: '150px',
  height: '30px',
  backgroundColor: '#A2857F',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '15px',
  borderRadius: '0px',
  padding: '20px',
  position: 'fixed',
  top: '290px',
  right: '545px',
  letterSpacing: '0px',

};

const boxStyle5 = {
  width: '150px',
  height: '30px',
  backgroundColor: '#A2857F',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '15px',
  borderRadius: '0px',
  padding: '20px',
  position: 'fixed',
  top: '290px',
  right: '375px',
  letterSpacing: '0px',

};

const boxStyle6 = {
  width: '150px',
  height: '30px',
  backgroundColor: '#A2857F',
  margin: '10px',
  display: 'flex',
  //justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '15px',
  borderRadius: '0px',
  padding: '20px',
  position: 'fixed',
  top: '290px',
  right: '205px',
  letterSpacing: '0px',

};

const boxStyle7 = {
  width: '800px',
  height: '40px',
  backgroundColor: '#3B0F06',
  border: '5px solid #3B0F06',
  padding: '20px',
  //margin: '10px',
 // display: 'flex',
  alignItems: 'center',
  borderRadius: '0px',
  position: 'fixed',
  top: '370px',
  right: '145px',
};
const table={
  width: '750px',
  height: '50px',
  borderRadius: '0px',
  position: 'fixed',
  align:"center",
  top: '440px',
  right: '170px',
}
const AdminDash = () => {
  return (
   // < style={worldclass} class="container" align="">
     <div style={boxStyle}  class="container">

      <div style={boxStyle1} class="container">
       <p style={p} align="center" > ADMIN DASHBOARD </p>

      </div>
      <br /> <br /><br />

      <div style={containerStyle}>
      <div style={rowStyle}>
        <div style={boxStyle2}>Payment<br/>Management
        <div style={boxStyle3}><a href="/">VIEW</a></div>
        </div>
        <div style={boxStyle2}>vacant<br/>Units
        <div style={boxStyle4}><a href="/">VIEW</a></div>
        </div>
        <div style={boxStyle2}>Building<br/>Owners
        <div style={boxStyle5}><a href="./LandLord">VIEW</a></div>
        </div>
        <div style={boxStyle2}>Annual<br/>Reports
        <div style={boxStyle6}><a href="/">VIEW</a></div>
        </div>

      </div>
      
    </div>

    <div style={boxStyle7} class="container">
       <p style={p1} align="center" > NEWEST TENENT </p>

      </div>

      <div class="container">
      <table style={table} class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Building</th>
      <th scope="col">Date of Entry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Shawon</td>
      <td>01758931596</td>
      <td>25B2</td>
      <td>10/09/23</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>01523654789</td>
      <td>24C1</td>
      <td>13/09/23</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>01345962354</td>
      <td>15D2</td>
      <td>25/09/23</td>
    </tr>
  </tbody>
</table>


      </div>

    </div>
      



    
    
 // </div>
  )
}

export default AdminDash
