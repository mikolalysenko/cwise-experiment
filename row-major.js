module.exports = function(a, b) {
  var a_ptr = a.offset
    , b_ptr = b.offset

  for(var i=0; i<a.shape[1]; ++i) {
    for(var j=0; j<a.shape[0]; ++j) {
      a.data[a_ptr] += b.data[b_ptr]

      //Advance pointers along axis 1:
      a_ptr += a.stride[0]
      b_ptr += b.stride[0]
    }
    //Advance pointers along axis 0:
    a_ptr += a.stride[1] - a.stride[0] * a.shape[1]
    b_ptr += b.stride[1] - b.stride[0] * a.shape[1]
  }
}

module.exports.test_name = "row major pointer arithmetic"