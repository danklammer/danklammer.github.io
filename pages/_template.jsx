import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import '../static/css/tinyset.css'
import '../static/css/base.css'

class Template extends React.Component {
    render() {
        const {location, children} = this.props

        return (
            <div className={ location.pathname === prefixLink('/') ? "wrapper home" : "wrapper" }>
              { children }
            </div>
            );
    }
}

Template.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
}

export default Template