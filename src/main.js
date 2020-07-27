// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@/assets/styles/global.scss'
import DefaultLayout from '~/layouts/Default.vue'
import VueScrollReveal from 'gridsome-scroll-reveal'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollReveal, {
    delay: 200,
    class: 'v-scroll-reveal',
    scale: 1,
    distance: '100px',
    mobile: false,
  })

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&display=swap',
  })
}
