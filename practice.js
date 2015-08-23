console.log("hello");

function getFileExtension(string) {
    //  string may not have a file extension.
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


