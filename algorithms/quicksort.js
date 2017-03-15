/*

Quick sort is a highly efficient sorting algorithm and is based on partitioning 
of array of data into smaller arrays. A large array is partitioned into two 
arrays one of which holds values smaller than the specified value, say pivot, 
based on which the partition is made and another array holds values 
greater than the pivot value.

Quick sort partitions an array and then calls itself recursively twice 
to sort the two resulting subarrays. This algorithm is quite efficient 
for large-sized data sets as its average and worst case complexity are of Ο(n2), 
where n is the number of items.

The quickSort function should recursively sort the subarray array[p..r].
- If the subarray has size 0 or 1, then it's already sorted, and so nothing 
  needs to be done.
- Otherwise, quickSort uses divide-and-conquer to sort the subarray.

The divide step should partition the array, the conquer step should recursively 
quicksort the partitioned subarrays, and the combine step should do nothing.

        **************************** 
        * Pseudocode for quicksort *
        ****************************

QUICKSORT(A, p, e)
  if p < e
  thenq ← PARTITION( A, p, e) 
    QUICKSORT(A, p, q – 1)
    QUICKSORT(A, q + 1, e)

  Initial call:QUICKSORT(A, 1, n)

*/

// Imperative solution in-place sort
function quickSort(arr, left, right) {
    
    var len = arr.length,
        pivot,
        partitionIndex
        
    if (left < right) {
        pivot = right
        partitionIndex = partition(arr, pivot, left, right)
        
        // sort left and right
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }    
    
    return arr
}

function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left
        
    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex)
            partitionIndex++
        }
    }    
    swap(arr, right, partitionIndex) 
    return partitionIndex
}

function swap(arr, i , j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


const q1 = quickSort([11,8,14,3,6,2,7],0,6); 
//[2, 3, 6, 7, 8, 11, 14]
const q2 =  quickSort([11,8,14,3,6,2,1, 7],0,7);
//[1, 2, 3, 6, 7, 8, 11, 14]
const q3 = quickSort([16,11,9,7,6,5,3, 2],0,7);
//[2, 3, 5, 6, 7, 9, 11, 16]

console.log(q1,q2,q3)

function quickSortF(arr) {
    if (!arr.length) return []
    
    const [head, ...tail] = arr,
          left = tail.filter( e => e < head),
          right = tail.filter( e => e >= head)
    
    return quickSortF(left).concat(head, quickSortF(right))           

}

const q7 = quickSortF([11,8,14,3,6,2,7]); 
//[2, 3, 6, 7, 8, 11, 14]
const q8 =  quickSortF([11,8,14,3,6,2,1, 7]);
//[1, 2, 3, 6, 7, 8, 11, 14]
const q9 = quickSortF([16,11,9,7,6,5,3, 2]);
//[2, 3, 5, 6, 7, 9, 11, 16]

console.log(q7,q8,q9)

