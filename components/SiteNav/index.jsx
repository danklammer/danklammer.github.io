import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='align-center'>
              <ul className='list-reset width-full'>
                <li className='inline-block p2'>
                  <Link to="/" className={ location.pathname === prefixLink('/') ? "current color-white underline-none p2 br2" : "dim-bg-black color-gray underline-none p2 br2 clickable" }>
                    Articles
                  </Link>
                </li>
                <li className='inline-block p2'>
                  <Link to="/about" className={ location.pathname === prefixLink('/about') ? "current color-white underline-none p2 br2" : "dim-bg-black color-gray underline-none p2 br2 clickable" }>
                    About
                  </Link>
                </li>
                <li className='inline-block p2'>
                  <Link to="/contact" className={ location.pathname === prefixLink('/contact') ? "current color-white underline-none p2 br2" : "dim-bg-black color-gray underline-none p2 br2 clickable" }>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav