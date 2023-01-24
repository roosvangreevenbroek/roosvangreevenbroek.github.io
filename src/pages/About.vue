<template>
  <Layout>
    <main class="px-4 container mx-auto pt-16 lg:pt-28">
      <section class="pt-12 lg:pt-20 mb-16 lg:mb-32">
        <g-image src="~/assets/images/roos.jpg" />
      </section>

      <section class="md:flex mb-20 lg:mb-32">
        <div class="md:w-1/2 lg:pr-12 text-lg lg:text-xl mb-8">
          <p class="mb-8">
            I’m interested in researching and designing technology to improve 
            human well-being. My interest in human well-being first brought me 
            to finishing an MSc in Clinical Psychology in 2016. I became 
            experienced in designing and conducting research, and understanding 
            people, but missed working with practical solutions and creativity, 
            and noticed the value of technology in this.

          </p>

          <p class="mb-8">
            While exploring my way into HCI, I worked as Traffic manager where I 
            developed management skills while focusing on improving customer 
            experience. I then focussed on learning interaction design through a 
            3-month UX Course, following a 6-month internship as interaction 
            designer, where I worked on several projects within a scrum team.
          </p>

          <p>
            My enthusiasm grew, and I wanted to dig even deeper into the 
            intersection of interaction design and user research. I applied for 
            the HCI course at UCL, where I graduated in 2020 with a distinction 
            (Dean’s list). I just finished working on a project at UCL to set up 
            an innovative online sexual health clinic where I led research and 
            design, and am exploring my next step.
          </p>
        </div>

        <div class="md:w-1/2 flex">
          <div class="lg:ml-auto md:pl-16 lg:w-1/2 font-bold text-sm">
            <h6 class="uppercase text-xs opacity-50">Contact</h6>
            <a href="mailto:roosvangreevenbroek@gmail.com" class="link mb-4">
              roosvangreevenbroek@gmail.com
            </a>

            <h6 class="uppercase text-xs opacity-50">Resume</h6>
            <p class="mb-4">
              <a
                href="https://www.linkedin.com/in/roos-van-greevenbroek-7b1a24101/"
                class="link"
                target="_blank"
                rel="noopener"
              >
                LinkedIn </a
              >,
              <a
                href="/Resume_Roos-van-Greevenbroek_February2021.pdf"
                class="link"
                target="_blank"
                rel="noopener"
              >
                PDF
              </a>
            </p>

            <h6 class="uppercase text-xs opacity-50">Interests</h6>
            <p class="mb-4">Hiking, cooking, drawing, dancing, travelling</p>

            <h6 class="uppercase text-xs opacity-50">Achievements</h6>
            <p>Finalist Student Game Competition CHI2020 +</p>
            <a
              href="https://dl.acm.org/doi/abs/10.1145/3334480.3381657"
              class="link mb-2"
              target="_blank"
              rel="noopener"
            >
              publication
            </a>

            <p>Semi-finalist ASSETS2020 +</p>
            <a
              href="https://dl.acm.org/doi/fullHtml/10.1145/3373625.3417076"
              class="link mb-2"
              target="_blank"
              rel="noopener"
            >
              publication
            </a>

            <p>Psychology MSc. dissertation +</p>
            <a
              href="https://www.researchgate.net/publication/325241609_Sexual_Expression_and_It%27s_Determinants_in_People_Diagnosed_with_Psychotic_Disorders"
              class="link"
              target="_blank"
              rel="noopener"
            >
              publication
            </a>
          </div>
        </div>
      </section>

      <content-section>
        <template v-slot:title>
          Education
        </template>
        <template v-slot:body>
          <div class="mb-8">
            <span class="block text-black font-bold">2019 - 2020</span>
            <span class="block">Master of Science</span>
            <span class="block">
              Human Computer Interaction (high distinction)
            </span>
            <span class="block font-bold">
              University College of London (UCL)
            </span>
          </div>

          <div class="mb-8">
            <span class="block text-black font-bold">2018</span>
            <span class="block">UX Crash-course</span>
            <span class="block">Certificate in UX design</span>
            <span class="block font-bold">Humanoids </span>
          </div>

          <div class="mb-8">
            <span class="block text-black font-bold">2014 - 2016</span>
            <span class="block">Master of Science</span>
            <span class="block">Clinical Psychology (high distinction)</span>
            <span class="block font-bold">Vrije Universiteit Amsterdam</span>
          </div>

          <div class="mb-8">
            <span class="block text-black font-bold">2011 - 2014</span>
            <span class="block">Bachelor of Science</span>
            <span class="block">Psychology</span>
            <span class="block font-bold">
              Vrije Universiteit Amsterdam
            </span>
          </div>
        </template>
      </content-section>

      <content-section>
        <template v-slot:title>
          Skills
        </template>
        <template v-slot:body>
          <div class="md:flex justify-between">
            <div class="mb-8">
              <h5 class="text-black uppercase font-bold mb-4">Research</h5>

              <div>Qualitative research</div>
              <div>Quantitative research</div>
              <div>Surveys</div>
              <div>Interviews</div>
              <div>Contextual inquiry</div>
              <div>Personas</div>
              <div>Usability testing</div>
              <div>Concept testing</div>
              <div>Participatory design</div>
              <div>Focus groups</div>
              <div>Competitive analysis</div>
              <div>Task analysis</div>
              <div>User journey maps</div>
              <div>Service blueprints</div>
              <div>Customer journey maps</div>
            </div>

            <div class="mb-8">
              <h5 class="text-black uppercase font-bold mb-4">
                Design
              </h5>

              <div>Information architecture</div>
              <div>Rapid prototyping</div>
              <div>Paper prototyping</div>
              <div>Low to high fidelity wireframing</div>
              <div>Interactive digital prototypes</div>
              <div>End-to-end product design</div>
            </div>

            <div class="mb-8">
              <h5 class="text-black uppercase font-bold mb-4">Tools</h5>

              <div>Figma / Adobe XD / Sketch</div>
              <div>Invision</div>
              <div>Overflow</div>
              <div>Zeplin</div>
              <div>Jira / Trello / Atlassian</div>
              <div>Arduino</div>
              <div>SPSS</div>
              <div>Atlas.ti / Nvivo</div>
              <div>Miro</div>
            </div>
          </div>
        </template>
      </content-section>
    </main>
  </Layout>
</template>

<script>
import ContentSection from '@/components/ContentSection'

export default {
  name: 'About',
  components: {
    ContentSection,
  },
  metaInfo: {
    title: 'About me',
  },
}
</script>
