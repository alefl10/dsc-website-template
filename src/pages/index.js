import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/index/Header'
import Overview from '../components/index/Overview'
import Opportunities from '../components/index/Opportunities'
import Technologies from '../components/index/Technologies'
import Teams from '../components/index/Teams'
import Faqs from '../components/index/Faqs'
import Workshops from '../components/index/Workshops'

export const teamsQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        university
        lang
        register
        mail
        social {
          telegram
        }
      }
    }
  }
`

export default ({
  data: {
    site: {
      siteMetadata: { university, register },
    },
  },
}) => (
  <Layout>
    <Header {...{ university, register }} />
    <Workshops/>
    <Overview />
    <Opportunities />
    <Technologies />
    <Teams />
    <Faqs register={register} />
  </Layout>
)
