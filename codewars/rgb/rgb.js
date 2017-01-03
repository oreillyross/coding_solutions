function rgb(...nums) {
    
    return nums.map(function(n) {
         const dig = (n < 0) ? 0 : (n > 255) ? 255 : n 
         return (dig === 0) ? '00' : dig.toString(16).toUpperCase() 
    }).join("")
}




module.exports = rgb

