console.log("hello");

function getFileExtension(string) {
    // string may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false
  if (string.indexOf(".") !== -1) {
    return string.substring(string.lastIndexOf(".")+1);
    } else {
    return false;
   }
}

console.log(getFileExtension("happy.gif"));



function longestString(array) {
    // return the longest string in the array
    var longest = 0;
    var longestString = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longest && typeof array[i] =="string") {
        longest = array[i].length;
        longestString = array[i];
        }
    }
    return longestString;
}

console.log(longestString([123, ["hello", 67, 888888], "try", {key: "key", value: "this is the longest String"}]))



function arraySum(obj) {
// i will be an array, containing integers, strings and/or arrays like itself.
// Sum all the integers you find, anywhere in the nest of arrays. DO CONVERT a number string into an integer
    var sum = 0;
    var num = Number(obj);

    if (typeof obj === 'boolean') {
        return 0;
    }

    if (typeof num === 'number' && !isNaN(num)) {
        return num;
    }

    if (typeof obj !== 'object') {
        return 0;
    }

    if (obj.length) {
        for (var i = 0; i < obj.length; i++) {
            sum += arraySum(obj[i]);
        }
    }
    else {
        for (var p in obj) {
            sum += arraySum(obj[p]);
        }
    }

    return sum;
}

var a = [1, 2, 3, ["Here is a string", "67", 67], {key: "55", value: 55 }, true, 56];
console.log(arraySum(a));


function arraySum(i) {
  // i will be an array, containing integers, strings and/or arrays like itself.
  // Sum all the integers you find, anywhere in the nest of arrays. DO NOT CONVERT a number string into an integer
  var ret = [], flatten

  (flatten = function(arr) {
    arr.forEach(function(item) {
      if (Array.isArray(item)) {
        flatten(item)
      }
      else if (typeof item === 'number') {
        ret.push(item)
      }
    })
  })(i)

  return ret.reduce(function(memo, item) {
    return memo + item
  })
}
