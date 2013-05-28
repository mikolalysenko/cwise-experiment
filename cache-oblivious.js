var cwise = require("cwise")

module.exports = cwise({
  args: ["array", "array"],
  body: function(a, b) {
    a += b
  }
})

module.exports.test_name = "cache oblivious"