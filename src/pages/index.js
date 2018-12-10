import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Intro from '../components/intro'
import ProjectShowcase from '../components/project-showcase'
import SectionHeader from '../components/section-header'
import ProcessBlock from '../components/process-block'

import processImage from '../assets/images/process.jpg'
import '../assets/styles/main.scss'

const IndexPage = ({ data }) => (

  <Layout>
    <Intro />

    <SectionHeader title="Portfolio" />
    {
      data.allMarkdownRemark.edges.map(({ node }) => {
        const fm = node.frontmatter;

        return (
          <ProjectShowcase key={node.id} fm={fm} />
        )
      })
    }

    <SectionHeader title="Process" />

    <section>
      <div className="content--small mb-6">
        <img src={processImage} alt="" className="" />
      </div>

      <div className="process-block-container">
        <div>
          <ProcessBlock
            number={{ number: '01', color: '#263eb6' }}
            title="Research"
            text="To understand the problem, I’ll first conduct market research
              and work together with you to understand your goals and view."
          />

          <ProcessBlock
            number={{ number: '02', color: '#5e5c9d' }}
            title="Empathize with user"
            text="I rely on my psychological skills to discover and understand the (unmet) needs,
              thoughts and behaviour of users during interviews, user tests and usability evaluation."
          />

          <ProcessBlock
            number={{ number: '03', color: '#85788e' }}
            title="Define problem"
            text="While translating the collected data into the actual flow your user is following,
              I’ll accentuate their goals and pain-points to frame and define the problem
              by making persona’s, user journeys and empathy maps."
          />

          <ProcessBlock
            number={{ number: '04', color: '#efc66f' }}
            title="Develop solutions"
            text="To define concepts for solutions, I’ll use the feedback from users, stakeholders,
              and team brainstorm sessions to sketch my ideas. After a lot of sketching,
              I create a storyboard with the best suited solution and new improved interaction."
          />
        </div>

        <div>
          <ProcessBlock
            number={{ number: '05', color: '#9db48b' }}
            title="Visualize interaction"
            text="To communicate the solutions to the user, I’ll create wireframes as early as
              possible and, depending which stage, low or high fidelity prototypes so I can
              get perspective and test the new interactions with users."
          />

          <ProcessBlock
            number={{ number: '06', color: '#6ba9a1' }}
            title="Test prototype"
            text="People often don’t know what they want exactly.
              To collect usefull and honest feedback about the prototype,
              I mainly observe users behaviour during the usertest.
              This often reflects their needs more than what users express verbally.
              I’ll also ask users to think out loud and note their expectations and
              thoughts about the prototype."
          />

          <ProcessBlock
            number={{ number: '07', color: '#5892a4' }}
            title="Design UI"
            text="Once the prototype is refined after multiple iterations,
              I’ll focus on the visual design, adding colour and typography,
              matching your brand and purpose."
          />

          <ProcessBlock
            number={{ number: '08', color: '#3e68ad' }}
            title="Test UI"
            text="Because the UI can affect the view of your user,
              I’ll perform another test and check if the users needs are met."
          />
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 12
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            supertitle
            goal
            image {
              childImageSharp {
                sizes(maxWidth: 600, quality:100) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
