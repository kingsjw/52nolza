
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/normalize.css', 'node_modules/swiper/css/swiper.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader'],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // hooks: {
  //   // This hook is called before rendering the html to the browser
  //   'render:route': (url, result) => {
  //     console.log(url);
  //     if (url.indexOf('?code=') >= 0) {
  //       let html = result.html;
  //       html = html.replace(
  //         '<link data-n-head="ssr" rel="icon" type="image/x-icon" href="/favicon.ico">',
  //         `<link data-n-head="ssr" rel="icon" type="image/x-icon" href="https://cdn.bringprice.com/image/2019/ic-bp-on.png">`
  //       );
  //       // Update result html
  //       result.html = html;
  //     }
  //   }
  // }
};
