import React from 'react';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <a href="/BuildingOwners" className="sidebar-link active">List Of Building Owners</a>
        </li>
        <li className="sidebar-nav-item">
          <a href="/Billing" className="sidebar-link">Billing & Invoice</a>
        </li>
        <li className="sidebar-nav-item">
          <a href="/Reports" className="sidebar-link">Reports</a>
        </li>
        <li className="sidebar-nav-item">
          <a href="/ListTenants" className="sidebar-link disabled">List Of Tinenats</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
