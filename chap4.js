// Ex.1 Looping a triangle

// The sum of a range

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
