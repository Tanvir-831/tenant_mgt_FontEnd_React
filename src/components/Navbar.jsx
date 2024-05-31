import React from 'react'
import Logo from '../assets/Logo.png'
import './ftstyle.css';
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-transparent">
        <a class="navbar-brand" href="/">
          <img src={Logo} class="lg" alt="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active mr-2 ml-2">
              <a class="nav-link" href="/">
                HOME <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active  mr-2">
              <a class="nav-link" href="/Available">
                AVAILABLE PROPERTIES
              </a>
            </li>
            <li class="nav-item active  mr-2">
              <a class="nav-link" href="/location">
                LOCATION
              </a>
            </li>
            <li class="nav-item active  mr-2">
              <a class="nav-link" href="/About">
                ABOUT US
              </a>
            </li>
            <li class="nav-item active  mr-2">
              <a class="nav-link" href="/Contact">
                CONTACT US
              </a>
            </li>
            <li class="nav-item dropdown mr-4">
              <a
                class="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
               LOG IN
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/Admin">
                  Admin
                </a>
                <a class="dropdown-item" href="/Owner">
                  Owner
                </a>
                <a class="dropdown-item" href="/Tenant">
                  Tenant
                </a>
              </div>
            </li>
            <li>
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-primary  my-2 my-sm-0"
                    type="submit">
                    Search
                  </button>
                </form>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
