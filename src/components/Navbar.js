import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// made function props
const Navbar = (props) => {
    return (

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                 {/* made title bt props.title */}
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        {/* <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;

// P is small 'p'
// as it is isRequred, and if it is not sent, then it shows error
Navbar.propTypes={title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}
Navbar.defaultProps={title: 'MyApp',
                    aboutText: 'About'};