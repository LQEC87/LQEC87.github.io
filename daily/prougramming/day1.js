var scrollAnimationShowClass = 'show';
var triggerMarginDefault = 280;

var scrollAnimationElm = document.querySelectorAll('.scani');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = triggerMarginDefault;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset.scani_margin != null) {
      triggerMargin = parseInt(elm.dataset.scani_margin);
    }
    if(elm.dataset.scani_trigger) {
      showPos = document.querySelector(elm.dataset.scani_trigger).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      var delay = (elm.dataset.scani_delay)? elm.dataset.scanidelay : 0;
      setTimeout(function(index) {
        scrollAnimationElm[index].classList.add('show');
      }.bind(null, i), delay);
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
