

 // var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    function countWords(inputWords) {
      
       
    return inputWords.reduce(function(map, idx){
      map[idx] = (map[idx]||0)+1;
      return map;
    }, {});
      
    }
    
    module.exports = countWords
    
   // console.log(countWords(inputWords))
    
// Official solution
/*
    function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords
    
*/