import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import SiteNav from '../SiteNav'
import './style.css'

class SiteSidebar extends React.Component {
    render() {
        const {location, children} = this.props
        const isHome = location.pathname === prefixLink('/')

        let header = (
        <header className='p4'>
          <Link to={ prefixLink('/') }>
            <svg viewBox="0 0 32 32" width="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5%" aria-hidden="true" className="color-blue">
                <path d="M10 9 L10 24 C10 28 13 30 16 30 19 30 22 28 22 24 L22 6 C22 3 20 2 18 2 16 2 14 3 14 6 L14 23 C14 24 15 25 16 25 17 25 18 24 18 23 L18 9"></path>
            </svg>
          </Link>
          { isHome ? (
            <h1 className='font-size-4 bold'><Link style={ {  textDecoration: 'none', borderBottom: 'none', color: 'inherit'  } } to={ prefixLink('/') }> { config.siteAuthor } </Link></h1>
            ) :
            <h2 className='font-size-4 bold'><Link style={ {  textDecoration: 'none', borderBottom: 'none', color: 'inherit'  } } to={ prefixLink('/') }> { config.siteAuthor } </Link></h2> }
          
            <h4 className='font-size-5'>Designer &amp; Developer</h4>

            <p className='font-size-5 my4' style={ { maxWidth: '19rem' } }>
              { config.siteDescr }
            </p>
        </header>
        )

        return (
            <div className='lg-nav align-middle align-center bg-slate color-white relative'>
              { header }
                <footer className='absolute b1 width-full sm-hide'>
                  <p className='copyright align-center'>
                    &copy; All rights reserved.
                  </p>
                </footer>
            </div>
            );
    }
}

SiteSidebar.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteSidebar