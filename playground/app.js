function rot13(str) { // LBH QVQ VG!
 
 var charCodes = [];
 for (var i = 0; i < str.length; i++) {
   var code = (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ? 
     ((str.charCodeAt(i) - 65 + 13) % 26) + 65 : str.charCodeAt(i)
   charCodes.push(code);

  }
   
  return String.fromCharCode.apply(null, charCodes);
 
}

// Change the inputs below to test

console.log(
rot13("SERR PBQR PNZC")
);