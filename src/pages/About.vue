<template>
  <Layout>
    <main class="px-4 container mx-auto pt-16 lg:pt-28">
      <section class="pt-12 lg:pt-20 mb-16 lg:mb-32">
        <g-image src="~/assets/images/roos.jpg" />
      </section>

      <section class="md:flex mb-20 lg:mb-32">
        <div class="md:w-1/2 lg:pr-12 text-lg lg:text-xl mb-8">
          <p class="mb-8">
            Analysing and helping people has been interesting and important to
            me for a while. I first studied psychology and did a masters in
            Clinical Psychology. I've treated clients and learned much about
            understanding and predict human behaviour. However, I missed the
            creativity and solving problems in a practical way. This I found in
            interaction design.
          </p>

          <p class="mb-8">
            Through a UX crash course, internship and (second) masters in HCI, I
            supplemented my psychological skills with knowledge of and practical
            experience in interaction design. I developed a profound
            understanding of design thinking processes and advanced in my
            sketching, prototyping and user-testing skills.
          </p>

          <p>
            I believe technology can be a great way to support people in
            self-development and live more consciously and relaxed - if
            researched and designed thoughtfully. Currently, I am looking for
            new opportunities to contribute in this.
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
                href="/Resume_Roos-van-Greevenbroek_2020.pdf"
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
            <span class="block">Human Computer Interaction</span>
            <span class="block">
              <a href="#" class="link">University College of London (UCL)</a>
            </span>
          </div>

          <div class="mb-8">
            <span class="block text-black font-bold">2018</span>
            <span class="block">UX Crash-course</span>
            <span class="block">Certificate in UX design</span>
            <span class="block">
              <a href="#" class="link">Humanoids</a>
            </span>
          </div>

          <div class="mb-8">
            <span class="block text-black font-bold">2014 - 2016</span>
            <span class="block">Master of Science</span>
            <span class="block">Clinical Psychology (high distinction)</span>
            <span class="block">
              <a href="#" class="link">Vrije Universiteit Amsterdam</a>
            </span>
          </div>

          <div class="mb-8">
            <span class="block text-black font-bold">2011 - 2014</span>
            <span class="block">Bachelor of Science</span>
            <span class="block">Psychology</span>
            <span class="block">
              <a href="#" class="link">Vrije Universiteit Amsterdam</a>
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
              <div>User interviews</div>
              <div>Competitive analysis</div>
              <div>Personas</div>
              <div>Usability testing</div>
            </div>

            <div class="mb-8">
              <h5 class="text-black uppercase font-bold mb-4">
                Interaction design
              </h5>

              <div>User journey</div>
              <div>Task analysis</div>
              <div>Information architecture</div>
              <div>Paper prototyping</div>
              <div>Wireframing</div>
              <div>Cdivckable protoypes</div>
            </div>

            <div class="mb-8">
              <h5 class="text-black uppercase font-bold mb-4">Tools</h5>

              <div>Sketch</div>
              <div>Invision</div>
              <div>Zeplin</div>
              <div>Adobe XD</div>
              <div>Jira / Trello</div>
              <div>Arduino</div>
              <div>SPSS</div>
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
