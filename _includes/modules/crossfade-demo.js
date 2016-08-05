var crossfade = document.getElementById('crossfade');
var crossfadeNoLayer = document.getElementById('crossfade-nolayer');

setInterval(function() {
  var topItem = crossfade.firstChild;
  crossfade.appendChild(topItem);
}, 3000);

setInterval(function() {
  var topItem = crossfadeNoLayer.firstChild;
  crossfadeNoLayer.appendChild(topItem);
}, 3000);