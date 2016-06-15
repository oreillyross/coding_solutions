/*

For the given integer n, consider an increasing sequence consisting of all positive integers that are either 
powers of n, or sums of distinct powers of n.

Your task is to find the kth (1-based) number in this sequence.

Example

For n = 3 and k = 4, the output should be
kthTerm(n, k) = 9.

For n = 3, the sequence described above begins as follows: 1, 3, 4, 9, 10, 12, 13....
The 4th number in this sequence is 9, which is the answer.Array

*/


// terse 

kthTerm = _ = (n, k) => k && k%2 + n*_(n, k >> 1)

// succint

kthTerm = (n, k) => parseInt(k.toString(2), n)


// More verbose
kthTerm = (n, k, p) => {
    s=[]
    while(!s[k]) {
        p=p*n||1
        x=[p]
        i=1
        for(e of s) {
            x[i++]= p+e
        }
        s.push(...x)
    }
    return s[k-1]
}
