window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  }, { passive: false })

  var lastTouchEnd = 0
  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime()
    if (now - lastTouchEnd <= 100) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, { passive: false })

  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  }, { passive: false })
}