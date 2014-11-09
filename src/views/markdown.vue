<style lang="stylus">
  .markdown
    height 100%
    color #333
    > div
      height 100%
      box-sizing border-box
      vertical-align top

    textarea
      border none
      border-right 1px solid #ccc;
      resize none
      outline none
      background-color #f6f6f6
      width 100%
      height 100%
      padding 20px
</style>

<template>
  <div class="row markdown">
    <div class="col-lg-6"><textarea v-model="input"></textarea></div>
    <div class="col-lg-6"><div v-html="input | marked"></div></div>
  </div>
</template>

<script>
  var marked = require('marked')

  module.exports = {
    data: function () {
      return {
        input: '# タイトル\n\nここに入力したMarkdownが右にプレビューされます。'
      }
    },
    filters: {
      marked: marked
    }
  }
</script>