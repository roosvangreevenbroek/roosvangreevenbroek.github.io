<template>
  <Layout>
    <main class="px-4 container mx-auto pt-16 lg:pt-28">
      <section class="pt-16 pb-24 lg:pt-40 lg:pb-32">
        <p
          class="text-2xl lg:text-5xl font-bold leading-snug max-w-xl lg:max-w-5xl pr-8"
        >
          Hi! I’m <g-link class="link" to="/about">Roos</g-link> - a UX designer with 
          a strong research background <span class="lg:hidden">creating</span><span aria-hidden="true" class="text-blue hidden lg:inline-block">{{word}}</span> human-centred, impactful experiences.
        </p>
      </section>

      <section id="portfolio" class="lg:pt-32">
        <project-section
          v-for="(edge, idx) in $static.projects.edges"
          :key="edge.node.id"
          :index="idx"
          :node="edge.node"
          :image-mode="idx === 2 ? 'cover' : 'contain'"
          :outline="edge.node.outline"
          :comingSoon="edge.node.comingSoon"
        />
      </section>
    </main>
  </Layout>
</template>

<static-query>
query Projects {
  projects: allProject(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        path
        title
        overviewIntro
        color
        headingSmall
        outline
        comingSoon
      }
    }
  }
}
</static-query>

<script>
import ProjectSection from '@/components/ProjectSection'

const words = ['creating',  'researching', 'ideating', 'prototyping','designing']

export default {
  components: {
    ProjectSection,
  },
  metaInfo: {
    title: 'Roos van Greevenbroek',
  },
  data() {
    return {
      word: '',
      wordIndex: 0
    }
  },  
  mounted() {
    this.setWord()
    setInterval(() => {
      this.wordIndex = this.wordIndex < words.length - 1 ? this.wordIndex + 1 : 0
      this.setWord()
    }, 3000)
  },
  methods: {
    setWord() {
      this.word = words[this.wordIndex];
    }
  }
}
</script>
