var scrollAnimationElm = document.querySelectorAll('.scani');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + 300) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

/*
const mainner = document.querySelectorAll('section .main');
mainner.onclick = function() {
  window.location.href = this.parentElement.id;
}
*/

/*var Fapi = Boolean(window.File);
if (Fapi) {
  var fileInfomationFunc = function(){
    var files = import("https://LQEC87.github.io/daily/prougramming/day1.html");
    const info = document.querySelector('#day1 #info');
    info.textContent = "FileName:" + files.name + "<br />FileType:" + files.type + "FileSize:" + files.size + " Byte<br />";
  }
  window.addEventListener('load', fileInfomationFunc);
} */
