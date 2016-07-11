import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='nav lg-nav width-full align-center py4'>
              <Link to="/" className={ location.pathname === prefixLink('/')
               ? "font-size-5 underline-none lowercase px3 py2 color-white bg-blue"
               : "font-size-5 underline-none lowercase px3 py2 color-gray dim-bg-black" } style={ { borderRadius: '.25rem 0 0 .25rem' } }>
                Articles
              </Link>
              <Link to="/work" className={ location.pathname === prefixLink('/work') || location.pathname === prefixLink('/work/')
               ? "font-size-5 underline-none lowercase px3 py2 color-white bg-blue"
               : "font-size-5 underline-none lowercase px3 py2 color-gray dim-bg-black" }>
                Work
              </Link>
              <Link to="/about" className={ location.pathname === prefixLink('/about') || location.pathname === prefixLink('/about/')
               ? "font-size-5 underline-none lowercase px3 py2 color-white bg-blue"
               : "font-size-5 underline-none lowercase px3 py2 color-gray dim-bg-black" }>
                About
              </Link>
              <Link to="/contact" className={ location.pathname === prefixLink('/contact') || location.pathname === prefixLink('/contact/')
               ? "font-size-5 underline-none lowercase px3 py2 color-white bg-blue"
               : "font-size-5 underline-none lowercase px3 py2 color-gray dim-bg-black" } style={ { borderRadius: '0 .25rem .25rem 0' } }>
                Contact
              </Link>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav