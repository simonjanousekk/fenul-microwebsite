var title = document.getElementById("title");
var duration = 2000;

title.style.transitionDuration = duration + "ms";

randomizeTitleStyle();
const interval = setInterval(randomizeTitleStyle, duration);

function randomizeTitleStyle() {
  var WGHT = Math.random() > 0.5 ? 100 : 900;
  var WDHT = Math.random() > 0.5 ? 0 : 100;
  // console.log(WGHT, WDHT);

  title.style.fontVariationSettings = '"wght" ' + WGHT + ', "wdth" ' + WDHT;
}

const map = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

const map01 = (num, outMin, outMax) => num * (outMax - outMin) + outMin;

var glyphSample = document.getElementById("glyph-sample");

var italic = false;
var glyphSampleWGHT = 400;
var glyphSampleWDTH = 100;
updateGlyphSample();

document.getElementById("selector-WGHT").addEventListener("change", (e) => {
  glyphSampleWGHT = e.target.value;
  updateGlyphSample();
});

document.getElementById("selector-WDHT").addEventListener("change", (e) => {
  glyphSampleWDTH = e.target.value;
  updateGlyphSample();
});

function updateGlyphSample() {
  glyphSample.style.fontVariationSettings =
    '"wght" ' + glyphSampleWGHT + ', "wdth" ' + glyphSampleWDTH;
}