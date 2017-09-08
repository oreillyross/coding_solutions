import R from 'ramda'

const { map, prop, pipe, curry } = R
const double = (x) => x * 2

const input = [1,2,3,4,5]

const doubleList = map(double)
console.log(doubleList(input))

const rawArray = [{'type': 1, 'name': 'Roo'},{'type': 2, 'name': 'Too'}, 
                  {'type': 3, 'name': 'Tada'}]
/*                  
const prettyPrint = (raw) => {
    const types = map(prop('type'))(raw)
    const output = JSON.stringify(types)
    console.log(types)
}
*/

const trace = curry((a, b) => {
  console.log(a, b)
  return b
})

const prettyPrint2 = pipe(
        trace('type'),
        map(prop('type')),
        JSON.stringify,
        console.log
      )
                  

//prettyPrint(rawArray)
prettyPrint2(rawArray)



