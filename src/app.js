require('./app.styl')

module.exports = {
  template: require('./app.html'),
  data: {
    navs: [
      {
        url: '',
        title: 'ホーム'
      },
      {
        url: 'bs',
        title: 'Bootstrapサンプル'
      },
      {
        url: 'md',
        title: 'Markdownエディター'
      }
    ],
    view: ''
  },
  components: {
    'home-view': require('./views/home/home.js'),
    'bootstrap-view': require('./views/bootstrap/bootstrap.js'),
    'markdown-view': require('./views/markdown/markdown.js')
  }
}