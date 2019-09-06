/* Loadtime.js */

window.addEventListener("load", loadTime, false);
function loadTime() {
  var now = new Date().getTime();
  var page_load_time = (now - performance.timing.navigationStart) / 1000;
  document.getElementById('loadtime').innerHTML = page_load_time;
}