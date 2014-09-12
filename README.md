#Trickle List

A simple jquery plugin for fading in children of an element in succession on hover. Can be used for a tickle list.

[Demo](http://iamhexcoder.github.io/trickleList/)

This plugin requires jQuery.

You can install this plugin via Bower:
`bower install tricklelist --save-dev`

##Options
```JavaScript
delayInc: 150,      // integer, length of delay between fadeIn
fadeTime: 400,      // integer, length of time for fadeIn
minWidth: 0,        // integer, minimum window width at which the effect initializes
childTarget: 'this' // string, element whose children should be targeted, defaults to $(this)
```