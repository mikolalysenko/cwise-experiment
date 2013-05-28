module.exports = function(B) {
  var result = function(a, b) {
    var shape = a.shape
    for(var i=0; i<shape[0]; i+=B) {
      for(var j=0; j<shape[1]; j+=B) {
        var a_ptr = i * a.stride[0] + j * a.stride[1]
        var b_ptr = i * b.stride[0] + j * b.stride[1]
        for(var k=0; k<B; ++k) {
          for(var l=0; l<B; ++l) {
            a.data[a_ptr] += b.data[b_ptr]
            a_ptr += a.stride[1]
            b_ptr += b.stride[1]
          }
          a_ptr += a.stride[0] - a.stride[1] * B
          b_ptr += b.stride[0] - b.stride[1] * B
        }
      }
    }
  }
  result.test_name = "cache aware algorithm, B=" + B
  return result
}
