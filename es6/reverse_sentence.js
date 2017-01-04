const sentence = "I am reversed!"

// Immediately-invoked arrow functions
const reversed = ( () => {
    
    // Iteration over the string gives us code points
    // (better for reversal than characters)
    const arr = [...sentence]
    console.log(arr)
    arr.reverse()
    return arr.join('')
})()