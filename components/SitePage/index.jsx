import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import SiteSidebar from '../SiteSidebar'
import SiteNav from '../SiteNav'
import './style.css';

class SitePage extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data

        return (
            <div>
              <SiteSidebar {...this.props}/>
              <div className='lg-page lg-height-full'>
              <SiteNav {...this.props}/>
                <article className='lg-article lg-height-full lg-align-middle p3'>
                  <section className='center-block' style={ {  maxWidth: '34rem'  } }>

                      <h1 className='font-size-2'>{ post.title }</h1>
                      <div dangerouslySetInnerHTML={ {    __html: post.body} } />

                  </section>
                </article>

              </div>
            </div>
            );
    }
}

SitePage.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default SitePage