

function integerDivision(dividend, divisor) {
    return Math.floor(dividend / divisor);
};

// Implementation of MergeSort
function mergeSort(arr,s,e){

    if( e - s +1 <= 1) return arr;

    // middle index of the array
    let m = integerDivision(s + e , 2);

    // sort the left half
    mergeSort(arr, s, m);

    // sort the right half
    mergeSort(arr, m+1,e);

    // merge sorted halfs
    merge(arr, s, m, e);

    return arr;

};

// merge in-place
function merge( arr, s, m, e ){

    // Copy the sorted left and right halfs to temp arrays
    let L = arr.slice( s, m+1 );
    let R = arr.slice( m+1, e+1 );

    let i = 0; // index for L
    let j = 0; // index for R
    let k = s; // index for arr

    // Merge the two sorted halfs into the original array
    while( i < L.length && j < R.length ){

        if (L[i] <= R[j]){

            arr[k] = L[i];
            i += 1;
        }
     
        else{

            arr[k] = R[j];
            j += 1;
        }    
        k += 1;
    }

    // One of the halfs will have elements remaining
    while ( i < L.length ){

        arr[k] = L[i];
        i += 1;
        k += 1;

    }
       
    while ( j < R.length ){

        arr[k] = R[j]
        j += 1;
        k += 1;
    }
     

};



function sort(arr){
 
    if( arr.length  > 0 ){
        
        let s = 0;
        let e = arr.length - 1;

        return mergeSort(arr, s , e);
    }
};


let nums = [3, 2, 1, 13, 8, 5, 0, 1];

let L = nums.slice( 0, 4 );
let R = nums.slice( 4, 8 );
console.log("left "+L);
console.log("right "+R)

console.log(sort(nums));