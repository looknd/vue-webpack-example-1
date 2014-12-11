module.exports = {
  isLiteral: true,
  bind: function() {
    if ($.inArray(this.arg, ['top', 'bottom', 'left', 'right']) !== -1) {
      var $this = $(this.el)
      var $panes = $this.children()

      $this.addClass('split-pane').addClass('fixed-' + this.arg)

      // Add divider between panes
      var $divider = $('<div />').addClass('split-pane-divider')
      $this.append($divider)

      $panes.addClass('split-pane-component')
      var $fixedColumn, $otherColumn, sizeAttr

      if (this.arg === 'top' || this.arg === 'left') {
        $fixedColumn = $panes.eq(0)
        $otherColumn = $panes.eq(1)
      } else {
        $fixedColumn = $panes.eq(1)
        $otherColumn = $panes.eq(0)
      }

      if (this.arg === 'left' || this.arg === 'right') {
        sizeAttr = 'width'
      } else {
        sizeAttr = 'height'
      }

      var size = this.expression;
      if ($.isNumeric(size)) {
        size = size + 'px'
      }

      $fixedColumn.css(sizeAttr, size)
      $otherColumn.css(this.arg, size).css('margin-' + this.arg, '5px')
      $divider.css(this.arg, size).css(sizeAttr, '5px')
      $this.splitPane()
    }
  }
}