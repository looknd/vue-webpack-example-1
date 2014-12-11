var socket = require('../../socket')

module.exports = {
  template: require('./index.html'),
  replace: true,
  data: function () {
    return {
      username: ''
    }
  },
  created: function() {
    this.$on('auth-required', function() {
      $(this.$el).find('.modal').modal('show')
    });
    socket.on('logged in', function() {
      $(this.$el).find('.modal').modal('hide')
    }.bind(this))
  },
  methods: {
    setUsername: function(e) {
      e.preventDefault()
      socket.connect(this.username)
      this.$root.username = this.username
    }
  }
}