module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'buero-malibu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Büro Malibu' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    browserBaseURL: 'wp-json/'
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      config.resolve.alias['masonry'] = 'masonry-layout'
      config.resolve.alias['isotope'] = 'isotope-layout'
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
