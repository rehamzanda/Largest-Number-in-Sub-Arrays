//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


//first define a function
//var len to store the length of first loop
//var to creat a new array to put the max values in it
//creat a for loop inside the array
//creat var max to initialize the first element of each sub-aray as it si the max element by default
//creat for loop to iritate inside sub-array , it has the length of arr[i] sub-arrays
// if condition to copare the max value with the next number inside each sub-arr
//push the max values of each sub-array inside the new arr after each sub-arr loop is finish
//return the new arr
// call the fun with our array example

function largestOfFour(arr) {
    let len = arr.length;
    let arrMax = [];
    for(let i=0; i < len; i++ ){
        let max = arr[i][0]; 

        for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > max) {
            max = arr[i][j];
        }
    }
        arrMax.push(max);
  }

  return arrMax;
}
const newarr= largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Returns [5,27,39,1001]
console.log(newarr)