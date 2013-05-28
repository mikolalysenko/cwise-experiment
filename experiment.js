var ndarray = require("ndarray")
var ops = require("ndarray-ops")
var cacheAware = require("./cache-aware.js")
var proposals = [
  require("./column-major.js"),
  require("./row-major.js"),
  cacheAware(1),
  cacheAware(8),
  cacheAware(64),
  cacheAware(512),
  require("./cache-oblivious.js")
]

function padTo(str, nchars, where) {
  if (str.length < nchars) {
    if (where === "left") // left pad
      str = (new Array(nchars + 1 - str.length)).join(' ') + str
    else // right pad
      str += (new Array(nchars + 1 - str.length)).join(' ')
  }
  return str
}

function doTest(a, b) {
  console.log("Running experiment with dimensions = ", a.shape.join("x"), " and strides ", a.stride.join("x"), " and ", b.stride.join("x"))
  
  for(var i=0; i<proposals.length; ++i) {
    ops.assigns(a, 0.0)
    ops.assigns(b, 0.0)
    var p = proposals[i]
    p(a, b)
    var start = Date.now()
    for(var j=0; j<100; ++j) {
      p(a, b)
    }
    var runTime = Date.now() - start
    console.log("   Proposal", "#" + padTo((i + 1).toString(), 2),
                padTo(p.test_name, 40),
                "Execution =", padTo(runTime.toString(), 8, "left"))
  }
}

var N = 1024

doTest(ndarray.zeros([N, N]), ndarray.zeros([N, N]))
doTest(ndarray.zeros([N, N], "float64", [0,1]), ndarray.zeros([N, N], "float64", [0,1]))
doTest(ndarray.zeros([N, N]), ndarray.zeros([N, N], "float64", [0, 1]))
doTest(ndarray.zeros([N, N], "float64", [0,1]), ndarray.zeros([N, N]))
