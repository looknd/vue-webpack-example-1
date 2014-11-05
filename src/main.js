var Vue = require('vue')
var Router = require('director').Router
var app = new Vue(require('./app.js'))
var router = new Router()

router.on('/home', function (page) {
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
    router.setRoute('/home')
  }
})

router.init('/home')

app.$mount('#app')