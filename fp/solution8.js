 function duckCount() {
     

  return Array.prototype.slice.call(arguments)
         .filter((arg) => {
             return Object.prototype.hasOwnProperty.call(arg, 'quack')
         })
         .length;
  
     
}

 module.exports = duckCount


/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount()
    
    */