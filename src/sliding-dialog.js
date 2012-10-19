(function (Backbone) {
  "use strict"

  var template = "<div>" +
                    "<div class='dropdown-opener'><%= opener %></div>" +
                    "<div class='dropdown-content closed'>" +
                      "<div class='dropdown-content-inner'><%= content %></div>" +
                    "</div>" +
                 "</div>"

  var SlidingDialog = Backbone.View.extend({

    events: {
      'click .dropdown-opener': 'open',
      'webkitTransitionEnd .dropdown-content': 'transitionEnd',
      'transitionEnd .dropdown-content': 'transitionEnd',
      'oTransitionEnd .dropdown-content': 'transitionEnd',
      'msTransitionEnd .dropdown-content': 'transitionEnd'
    },

    transitionEnd: function (e) {
      if (this.content.hasClass('open')) {
        this.content.css('max-height', 9999)
      }
    },

    initialize: function (opts) {
      if (!opts || !opts.opener !! !opts.content) {
        throw new Error('Pass in opts.opener and opts.content')
      }
      this.model = {
        opener: opts.opener,
        content: opts.content
      }
    },

    render: function () {
      this.$el.html(_.template(template)(this.model))
      this.content = this.$('.dropdown-content')
      return this
    },

    open: function (e) {
      var self = this
      this.content.toggleClass('closed open')
      this.$('.dropdown-opener').toggleClass('dropdown-opener-rotate')

      if (this.content.hasClass('closed')) {
        this.content.css('max-height', this.content.outerHeight())
        setTimeout(function () {
          self.content.css({ 'max-height': 0, 'opacity': 0 })
        }, 10)
      } else {
        var h = this.content.outerHeight() + this.content.find('.dropdown-content-inner').outerHeight()
        this.content.css({ 'max-height': h, 'opacity': 1 })
      }
    }
  })

  Backbone.SlidingDialog = SlidingDialog

  return Backbone

})(window.Backbone)