var marked = require('marked')
require('./markdown.styl')

module.exports = {
  template: require('./markdown.html'),
  data: function () {
    return {
      input: '# タイトル\n\nここに入力したMarkdownが右にプレビューされます。'
    }
  },
  filters: {
    marked: marked
  }
}