// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import dayjs from 'dayjs'
import DefaultLayout from '~/layouts/Default.vue'
import './main.css'

export default function (Vue, { router, head, isClient }) {
  Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(value).format(format)
  })

  Vue.mixin({
    data () {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
