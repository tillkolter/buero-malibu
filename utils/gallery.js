import {PhotoSwipeUIDefault} from 'photoswipe/dist/photoswipe-ui-default'
const PhotoSwipe = require('photoswipe')

export const openPhotoSwipe = function (store, element) {
  var images = store.getters['wordpress/featuredImages']
  var items = []
  var counter = 0
  for (var i = 0; i < images.length; i++) {
    let src = images[i]
    // var url = URL.createObjectURL(src)
    var img = new Image()

    img.onload = function () {
      counter = counter + 1
      // var img = new Image()
      // img.src = child.src
      items.push({
        src: this.src,
        w: this.width,
        h: this.height
      })
      if (counter === images.length) {
        var pswpElement = document.querySelectorAll('.pswp')[0]

        // define options (if needed)
        var options = {
          index: 0, // start at first slide
          getThumbBoundsFn: function (index) {
            // get window scroll Y
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll

            // get position of element relative to viewport
            var rect = element.getBoundingClientRect()

            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          },
          showHideOpacity: true,
          bgOpacity: 0.7,
          closeEl: true,
          captionEl: true,
          fullscreenEl: true,
          zoomEl: true,
          shareEl: true,
          counterEl: true,
          arrowEl: true,
          preloaderEl: true
        }

        let bgElement = document.getElementById('pswp__bg')
        // let sheet = document.createElement('style')

        let elementStyle = window.getComputedStyle(element)
        bgElement.style.backgroundColor = elementStyle.backgroundColor

        console.log(JSON.stringify(element))
        console.log(`background color: ${bgElement.style.backgroundColor} ${elementStyle.backgroundColor}`)
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, items, options)
        // console.log(JSON.stringify(items))
        gallery.init()
      }
      console.log('image loaded')
    }
    img.src = src
  }
}

export const onOpenGallery = function (store, element) {
  openPhotoSwipe(store, element)
}
