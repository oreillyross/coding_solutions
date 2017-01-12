function getLengthOfMissingArray(arrayOfArrays) {
  
  const lengths = arrayOfArrays.reduce((a,b, idx, arr) => {
    const val = arr[idx].length
    return a.concat(val)
  },[])
  
  //if (lengths.length === 0) return 0
  const sorted = lengths
    .sort((a,b) => (a - b))
  if (sorted[0] === 0 ) return 0
  const retVal = sorted
    .find((elem, idx, arr) => {
      return arr[idx + 1] - arr[idx] != 1
  })
  return (retVal === 0) ? retVal : retVal + 1
  
   
}
console.log(getLengthOfMissingArray([[2],
[],
[2, 1],
[2, 3, 0, 2, 2, 3],
[0, 3, 3],
[0, 0, 4, 1]]))