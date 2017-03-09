import R from 'ramda'

const { map, prop } = R
const double = (x) => x * 2

const input = [1,2,3,4,5]

const doubleList = map(double)
console.log(doubleList(input))

const rawArray = [{'type': 1, 'name': 'Roo'},{'type': 2, 'name': 'Too'}, 
                  {'type': 3, 'name': 'Tada'}]
                  
const prettyPrint = (raw) => {
    const types = map(prop('name'))(raw)
    const output = JSON.stringify(types)
    console.log(types)
}                  

prettyPrint(rawArray)



