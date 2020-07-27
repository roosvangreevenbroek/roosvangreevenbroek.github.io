// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'Roosvangreevenbroek',
  siteUrl: 'https://roosvangreevenbroek.github.io',
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/touchicon.png',
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project', // Required
        baseDir: './content/projects', // Where .md files are located
        pathPrefix: '/projects', // Add route prefix. Optional
        template: './src/templates/Project.vue', // Optional
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
}
