<template>
  <Layout>
    <main class="px-4 container mx-auto pt-16 lg:pt-28">
      <section class="pt-16 pb-24 lg:pt-40 lg:pb-32">
        <p
          class="text-2xl lg:text-5xl font-bold leading-snug max-w-xl lg:max-w-5xl pr-8"
        >
          I’m <g-link class="link" to="/about">Roos</g-link>, a user researcher
          and interaction designer. I have a strong background in Psychology and
          HCI and enjoy creating human-centred, meaningful experiences. I’m best
          at user research, ideation, end-to-end product design, and
          prototyping.
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
      }
    }
  }
}
</static-query>

<script>
import ProjectSection from '@/components/ProjectSection'
export default {
  components: {
    ProjectSection,
  },
  metaInfo: {
    title: 'Roos van Greevenbroek',
  },
}
</script>
