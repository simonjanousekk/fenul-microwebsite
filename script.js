var title = document.getElementById("title");
var duration = 1000;
// wght 100-900
// wdth 0-100

title.addEventListener("click", randomizeTitleStyle);
title.style.transitionDuration = duration + "ms";

const interval = setInterval(randomizeTitleStyle, duration);

// function randomizeTitleStyle() {
//   var randomWGHT = Math.round(map01(Math.random(), 100, 900));
//   var randomWDHT = Math.round(map01(Math.random(), 0, 100));
//   title.style.fontVariationSettings =
//     '"wght" ' + randomWGHT + ', "wdth" ' + randomWDHT;
// }

function randomizeTitleStyle() {
  var WGHT = Math.random() > 0.5 ? 100 : 900;
  var WDHT = Math.random() > 0.5 ? 0 : 100;
  console.log(WGHT, WDHT);

  title.style.fontVariationSettings = '"wght" ' + WGHT + ', "wdth" ' + WDHT;
}

const map = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

const map01 = (num, outMin, outMax) => num * (outMax - outMin) + outMin;

var glyphSample = document.getElementById("glyph-sample");

var italic = false;
document.getElementById("italic").addEventListener("click", toggleItalic);
function toggleItalic() {
  italic = !italic;
  glyphSample.style.fontStyle = italic ? "italic" : "normal";
}

var selectorWGHT = document.getElementById("selector-WGHT");
selectorWGHT.addEventListener("change", updateWGHT);
function updateWGHT(e) {
  glyphSample.style.fontVariationSettings = '"wght" ' + e.target.value;
}

// vyrad menit velikost
// misto selectu slider
// title menit velikost
