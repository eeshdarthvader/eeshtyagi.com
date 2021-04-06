import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import Layout from '../components/layout'

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work resume"
            contentStyle={{ background: '#343a40', color: '#fff' }}
            date="Aug 2019 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #343a40' }}
            icon={() => {}}
          >
            <div className="f-20">Senior frontend developer</div>
            <div className="f-14">( Scalable Capital GmbH )</div>
            <h4 className="f-14">Munich, DE</h4>
            <div className="f-16">
              Working on all Web for B2B and B2C products at Scalable Capital
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#343a40', color: '#fff' }}
            date="2017 - 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #343a40' }}
            icon={() => {}}
          >
            <div className="f-20">Lead frontend dev</div>
            <div className="f-14">( Cleartrip Ltd. )</div>
            <h4 className="f-14">Bangalore, IN</h4>
            <div className="f-16">
              Creating PWA in react and working on performace optimisation
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work resume"
            contentStyle={{ background: '#343a40', color: '#fff' }}
            date="Sept 2015 - May 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #343a40' }}
            icon={() => {}}
          >
            <div className="f-20">Co-founder and UI head</div>
            <div className="f-14">( SQUARELOOP.IO )</div>
            <h4 className="f-14">Bangalore, IN</h4>
            <div className="f-16">
              Creating SDK's for social networking and dating platforms.
            </div>
            <a href="https://www.datingframework.com/">
              https://www.datingframework.com/
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#343a40', color: '#fff' }}
            date="Jul 2013 - Jun 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #343a40' }}
            icon={() => {}}
          >
            <div className="f-20">Senior Software developer</div>
            <div className="f-14">( Tesco HSC )</div>
            <h4 className="f-14">Bangalore, IN</h4>
            <div className="f-16">
              Working as a ASP.NET MVC developer in world's third largest Retail
              Brand.
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work resume"
            contentStyle={{ background: '#343a40', color: '#fff' }}
            date="Sept 2010 - Jul 2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #343a40' }}
            icon={() => {}}
          >
            <div className="f-20">Senior Software developer</div>
            <div className="f-14">( Infosys Technologies )</div>
            <h4 className="f-14">Mysore, IN</h4>
            <div className="f-16">Starting with the first Software Job.</div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Layout>
    )
  }
}
