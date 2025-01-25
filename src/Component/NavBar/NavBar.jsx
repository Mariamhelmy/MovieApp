import React from 'react'
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg  bg text-white hola"> */}
      <nav className={`${styles.navbar} ${styles.hola}  navbar navbar-expand-lg fixed`}>

  <div className="container">
    <Link className={`${styles.navbarBrand} navbar-brand`} href="#">Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`${styles.navLink} nav-link active`} to="Home" >Home</Link>
        </li>
        <li className={`${styles.navItem} nav-item`}>
          <Link className={`${styles.navLink} nav-link`} href="#">
          <div className="dropdown">
  <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
  Popular Movies
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><Link className="dropdown-item" to="Action">Action</Link></li>
    <li><Link className="dropdown-item" to="Comedy">Comedy</Link></li>
    <li><Link className="dropdown-item" to="Drama">Drama</Link></li>
    <li><Link className="dropdown-item" to="Romantic">Romantic</Link></li>

    <li><hr class="dropdown-divider"/></li>
  </ul>
</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`${styles.navLink} nav-link`}  to="Search">Search</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
      
    </div>
  )
}
