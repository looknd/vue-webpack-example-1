<style lang="stylus">
  body
    padding 70px 0 30px 0

  html, body, .container, #app
    height 100%

  .view
    position absolute
    transition opacity 10s ease
    &.v-enter, &.v-leave
      opacity 0
</style>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Demo</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li v-repeat="navs"><a href="#{{url}}">{{title}}</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>

  <div class="container" role="main" v-component="{{view}}" v-transition>
  </div>
</template>

<script>
  module.exports = {
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
      'home-view': require('./views/home.vue'),
      'bootstrap-view': require('./views/bootstrap.vue'),
      'markdown-view': require('./views/markdown.vue')
    }
  }
</script>