var Vue = require('vue')
var Router = require('director').Router
var app = new Vue(require('./app.js'))
var router = new Router()

// Router settings
router.on('/', function (page) {
  window.scrollTo(0, 0)
  app.view = 'home-view'
})

router.on('/bs', function () {
  window.scrollTo(0, 0)
  app.view = 'bootstrap-view'
})

router.on('/md', function () {
  window.scrollTo(0, 0)
  app.view = 'markdown-view'
})

router.configure({
  notfound: function () {
    router.setRoute('/')
  }
})

router.init('/')

// Global directives
Vue.directive('splitter', require('./directives/splitter.js'))

// Global filters
Vue.filter('formatDate', require('./filters/format-date.js'))

app.$mount('#app')