
/** Write a list comprehension that builds the list of all Pythagorean triples 
 * with elements between 1 and n.
 * 
 * A Pythagorean triple is a triple of positive integers a, b, and c such that a right triangle 
 * exists with legs a,b and hypotenuse c. By the Pythagorean theorem, this is equivalent to finding 
 * positive integers a, b, and c satisfying a^2+b^2=c^2.  
 * The smallest and best-known Pythagorean triple is (a,b,c)=(3,4,5). 
 * The right triangle having these side lengths is sometimes called the 3, 4, 5 triangle.
 **/
 
 // Haskell has the most elegant solution as lists are Monads 
 // pyth n = [(x,y,z) | x <- [1..n], y <- [x..n], z <- [y..n], x^2 + y^2 == z^2]
 
 http://rosettacode.org/wiki/List_comprehensions#JavaScript