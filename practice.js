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


function getFileExtension(i) {
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false

    var filenameArray = i.split(”.”);

    if(filenameArray.length <= 1) {
        //  i.e. “foo” becomes [“foo”] (array with 1 member)
        return false;
    } else {
        //  must be an array with more than 1 member.  The extension must be at the end.
        return filenameArray[filenameArray.length - 1];
    }
}


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


function longestString(i) {
    // i will be an array.
    // return the longest string in the array

    var longest = ””,
        n, len;

    for(n=, len=i.length; n<len; n++) {
        if(typeof n[i] !== “string”) {
            //  not a string, go to next iteration of the loop
            continue;
        }

        if(n[i].length > longest.length) {
            //  Current string is longer, so set it as the new longest string
            longest = n[i];
        }
    }
}



function arraySum(obj) {
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
  // Sum all the integers you find, anywhere in the nest of arrays.
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
