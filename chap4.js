// Ex.1 The sum of a range

(function() {
    'use strict'

    var arr = [];

    function range(start, end, step = 1) {
        if (start <= end) {
            for (var i = start; i <= end; i += step)
                arr.push(i);
        } else {
            for (i = start; i >= end; i += step) {
                arr.push(i);
            }
        }
        return arr;
    }

    function sum(array) {
        var result = 0;
        for (var j = 0; j < array.length; j++) {
            result += array[j];
        }
        return result;
    }

    console.log(range(5, 2, -1));
    console.log(sum(arr));

})()

// Ex.2 Reversing an array

(function() {
    'use strict'

    function reverseArray(array) {
        var newArray = [];
        for (var i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    }

    function reverseArrayInPlace(arr) {
        for (var j = 0; j < arr.length / 2; j++) {

            var temp = arr[j];
            arr[j] = arr[arr.length - 1 - j];
            arr[arr.length - 1 - j] = temp;
        }
        return arr;
    }

    console.log('reverseArray ' + reverseArray([1, 2, 3, 4, 5, 6]));
    console.log('reverseArrayInPlace ' + reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9]));

})();

// Ex.3 A list

(function() {
    'use strict'

    function arrayToList(array) {

        for (var i = 1; i <= array.length; i++) {

            var list = {
                value: array[array.length - i],
                rest: list
            }
        }
        return list;
    }

    var newList = arrayToList([1, 2, 3, 4]);

    console.log(newList);

      function listToArray(list) {
        var newArray = [];
        for (var node = list; node; node = node.rest) {
            newArray.push(node.value);
        }
        return newArray;
    }

    console.log(listToArray(newList));

    function prepend(value, list) {
      var updatedList = {
        value: value,
        rest: list
      }
      return updatedList;
    }

    console.log(prepend(5, newList));


    function nth(n, list) {
        for (var node = list, i = 0; node; node = node.rest, i++) {
            if (n === 0) {
                return list;
            } else if (n - 1 === i) {
                return node.rest;
            }
        }
    }

    console.log('nth: ' + nth(3, newList));







})();
