<template>
  <Layout>
    <main class="px-4 container mx-auto pt-16 lg:pt-28">
      <section class="pt-12 lg:pt-20 mb-16 lg:mb-32">
        <g-image src="~/assets/images/roos.jpg" />
      </section>

      <section class="md:flex mb-20 lg:mb-32">
        <div class="md:w-1/2 lg:pr-12 text-lg lg:text-xl mb-8">
          <p class="mb-8">
            I’m interested in exploring how technology can impact human
            well-being positively. My interest in human well-being first brought
            me to finishing a MSc in Clinical Psychology (with distinction) in
            2016. I became experienced in designing and conducting research, and
            understanding people, but missed working with practical solutions
            and creativity, and noticed the value of technology in this.
          </p>

          <p class="mb-8">
            While exploring my way into HCI, I worked as Traffic manager where I
            developed management skills while improving customer experience. I
            then focussed on learning interaction design through a 3-month UX
            Course, following an 6-month internship as interaction designer. I
            worked on several projects within a scrum team, and developed a
            profound understanding of design thinking processes and advanced in
            my sketching, prototyping and user-testing skills.
          </p>

          <p>
            My enthusiasm grew, and I wanted to dig even deeper in the
            intersection of interaction design and user research. I applied for
            the HCI course at UCL, where I graduated from in 2020 with a
            distinction (top 5% student on the Dean’s list). I recently finished
            a 4-month project as a research assistant at UCL and am currently
            looking for new opportunities where I can contribute, as researcher
            and interaction designer, at the forefront of the innovation of
            products supporting people.
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
            <p class="mb-4">Cycling, cooking (and eating), sex-tech, drawing</p>

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

              <div>Surveys</div>
              <div>Interviews</div>
              <div>Personas</div>
              <div>Usability testing</div>
              <div>Participatory design</div>
              <div>Focus groups</div>
              <div>Competitive analysis</div>
              <div>Remote research</div>
              <div>User journeys</div>
              <div>Contextual inquiry</div>
              <div>Task analysis</div>
            </div>

            <div class="mb-8">
              <h5 class="text-black uppercase font-bold mb-4">
                Interaction design
              </h5>

              <div>Information architecture</div>
              <div>Paper prototyping</div>
              <div>Wireframing</div>
              <div>Interactive digital prototypes</div>
              <div>End-to-end product design</div>
            </div>

            <div class="mb-8">
              <h5 class="text-black uppercase font-bold mb-4">Tools</h5>

              <div>Sketch</div>
              <div>Invision</div>
              <div>Overflow</div>
              <div>Figma</div>
              <div>Zeplin</div>
              <div>Adobe XD</div>
              <div>Jira / Trello</div>
              <div>Arduino</div>
              <div>SPSS</div>
              <div>Atlas.ti/Nvivo</div>
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
    title: 'About us',
  },
}
</script>
