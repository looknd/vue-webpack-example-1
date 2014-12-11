require('./index.styl')
var socket = require('../../socket')

module.exports = {
  template: require('./index.html'),
  replace: true,
  data: function () {
    return {
      messages: [],
      message: ''
    }
  },
  created: function() {
    socket.on('logged in', function(data) {
      this.messages.push({
        username: 'System',
        date: new Date(),
        message: '接続中のユーザー数は、' + data.numUsers + '名です。'
      })
    }.bind(this))

    socket.on('user joined', function(data) {
      this.messages.push({
        username: 'System',
        date: new Date(),
        message: data.username + 'さんが接続しました。接続中のユーザー数は、' + data.numUsers + '名です'
      })
    }.bind(this))

    socket.on('user left', function(data) {
      this.messages.push({
        username: 'System',
        date: new Date(),
        message: data.username + 'さんが切断しました。接続中のユーザー数は、' + data.numUsers + '名です'
      })
    }.bind(this))

    socket.on('new message', function(data) {
      this.messages.push(data)
    }.bind(this))
  },
  methods: {
    sendMessage: function(e) {
      e.preventDefault()
      this.messages.push({
        username: this.$root.username,
        date: new Date(),
        message: this.message
      })
      socket.send(this.message)
      this.message = ''
      this.$$.input.focus()
    }
  }
}