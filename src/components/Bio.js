import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Dmitry Schegolihin`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          <a href="https://twitter.com/schegolikhin">Dmitry Schegolihin</a> writes about his front-end experience for platforms Magento2, Vue Storefront and performance optimizations. I help businesses earn more by developing and optimizing web apps.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
