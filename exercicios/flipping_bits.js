function flippingBits(n) {
    // Write your code here
    return ~n+2**32
  // return ~(n) >>> 0  
}

let signedinteger = 123456
flippingBits(signedinteger)
