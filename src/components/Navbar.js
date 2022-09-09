import React from 'react';
import PropTypes from 'prop-types'

// made function props
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         {/* made title bt props.title */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li>
          </ul>
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