# Sliding dialog view.

### TODO Broken: Only works for a single sliding dialog per document...

Uses css transitions to slide a dialog into view. Also rotates the handler used to control the dialog, similar to the cross with [Pie Menu](http://nikesh.github.com/Pie-Menu/#).

View an [example](http://spiderstrategies.github.com/sliding-dialog/)

### Usage

```
var dialog = new SlidingDialog({
  opener: '<html opener control>',
  content: '<content for dialog>'
}).render()
```
