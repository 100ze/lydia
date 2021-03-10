// variables
// colors
var _colors = [
    "#596e65",
    "#405761",
    "#723812",
    "#ae2206",
    "#d15519",
    "#f57c17",
    "#718273",
    "#53767c",
    "#728781",
    "#7c2709",
    "#79561a",
    "#300a06",
    "#2b0c02",
    "#6d2712",
    "#2f1f0f",
    "#ed6720",
    "#ee7623",
    "#91937e",
    "#4d370d",
    "#ec5819",
    "#9d2805",
    "#1d0c05",
    "#3c1104"
]

function _chooseColor(){
  // defining an index randomly
  let max = _colors.length - 1;
  let index = Math.floor(
    Math.random() * (max - 0 + 1)
  ); 

  return _colors[index]
}
