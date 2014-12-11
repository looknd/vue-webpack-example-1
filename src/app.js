require('./app.styl')
var socket = require('./socket')

module.exports = {
  template: require('./app.html'),
  data: function() {
    return {
    }
  },
  components: {
    'chat': require('./views/chat/'),
    'login-form': require('./views/login-form/')
  },
  created: function() {
    this.$on('logged-in', function(userName) {
      socket.connect(userName)
    })
  },
  ready: function() {
    this.$broadcast('auth-required')
  }
}
