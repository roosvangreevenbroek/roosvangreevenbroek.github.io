import React from 'react'

import Layout from '../components/layout'
import TitleDash from '../components/title-dash'
import EducationBlock from '../components/education-block'
import roosImage from '../assets/images/roos.jpg'

const About = () => (
  <Layout classes="pt-10-l">

    <section className="about-section about-section--contact">

      <div className="about-section__title dn db-m mb-2">
        <TitleDash classes="dn db-m mb-1" />
        <h2 className="font-heavy uppercase">Why UX</h2>
      </div>
      <div className="about-section__inner">
        <article>
          <TitleDash classes="db dn-m mb-1" />
          <h2 className="about-section__title db dn-m mb-3">Why UX</h2>

          <h1 className="body">
            <strong>Hi! I’m Roos, a user experience designer based in Amsterdam.</strong>
          </h1>

          <p>
            Prior to ux design, I studied psychology.
            During my study I did a lot of clinical research on client needs and gained
            experience with client care. I loved interviewing clients and analyzing problems
            but I missed the creativity and concrete way of solving problems.
            User experience design is the ideal combination between these elements for me.
          </p>

          <p>
            I consider myself an empathical, hands-on, open-minded, and analytical user experience designer.
            I am interested in the experiences of others and their pain points.
            My aim is to understand people thoroughly and make them feel understood by a design
            that suits their needs. I believe that seamlessly fitting products can add
            meaning and positivity to people’s lives.
          </p>

          <p>
            I thrive the most when I can brainstorm within a team. During collaboration,
            others describe me as someone with a lot of social empathy, tact and energy.
            I think it is important to look critically at every design decision,
            to communicate open-mindedly and to have a pleasant working environment.
            I’m looking forward to further develop my ux skills in an
            exciting digital design environment.
          </p>
        </article>

        <aside>
          <img src={roosImage} alt="Roos van Greevenbroek" className="about-section__portrait" />

          <div className="about-section__contact-block">
            <div>
              <h5>Contact</h5>
              <p>
                <a href="mailto:roosvangreevenbroek@gmail.com"
                  className="link">
                  roosvangreevenbroek@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h5>Resume</h5>
              <p>
                <a href="https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn
                </a>,
                <a href="#"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer">
                  PDF
                </a>
              </p>
            </div>

            <div>
              <h5>Interests</h5>
              <p className="font-medium lh-18">
                Drawing, cooking and eating, nature, traveling, sudoku, sexuology
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section className="about-section">
      <h2 className="about-section__title mb-3 font-heavy uppercase">Education</h2>

      <div className="about-section__inner">
        <EducationBlock
          date="2018"
          title="UX Crash-course"
          description="Certificate in user experience design"
          organisation={{ title: 'Humanoids', link: 'https://humanoids.nl/' }}
        />

        <EducationBlock
          date="2014 - 2016"
          title="Master of Science"
          description="Clinical Psychology (cum laude)"
          organisation={{ title: 'Vrije Universiteit Amsterdam', link: 'https://www.vu.nl/en' }}
        />

        <EducationBlock
          date="2011 - 2014"
          title="Bachelor of Science"
          description="Psychology"
          organisation={{ title: 'Vrije Universiteit Amsterdam', link: 'https://www.vu.nl/en' }}
        />
      </div>
    </section>

    <section className="about-section about-section--skills">
      <h2 className="about-section__title mb-3 font-heavy uppercase">Skills</h2>

      <div className="about-section__inner">
        <div>
          <h4>Research</h4>
          <ul>
            <li>Surveys</li>
            <li>Interviews</li>
            <li>Competitive analysis</li>
            <li>Persona's</li>
            <li>Usability testing</li>
          </ul>
        </div>

        <div>
          <h4>Interaction design</h4>
          <ul>
            <li>User journey</li>
            <li>Task analysis</li>
            <li>Information architecture</li>
            <li>Paper prototyping</li>
            <li>Wireframing</li>
            <li>Mockups</li>
          </ul>
        </div>

        <div>
          <h4>Tools</h4>
          <ul>
            <li>Sketch</li>
            <li>Invision</li>
            <li>Zeplin</li>
            <li>Marvel</li>
            <li>Principle</li>
            <li>Adobe Photoshop</li>
            <li>SPSS</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
