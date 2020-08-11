require('dotenv').config();
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'red' },
  /*
   ** Global CSS
   */
  css: ['~/assets/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/timeago'],

  /*
   ** Router Exam
   */
  router: {
    linkActiveClass: 'active'
  },

  /*
   ** Nuxt.js env
   */

  env: {},

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/dotenv'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/moment', '@nuxtjs/apollo'],

  // Give apollo module options
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        wsEndpoint: 'ws://localhost:4000/graphql'
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }

  /*
   ** Server Middleware
   */
  // serverMiddleware: ['~/api/index']
};
