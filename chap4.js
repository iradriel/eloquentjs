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

(function(){
'use strict'
	function reverseArray(array) {
		var newArray = [];
		for (var i = array.length - 1; i >= 0; i--) {
			newArray.push(array[i]);
		}
		return newArray;
	}


	// function reverseArrayInPlace(arr) {
	// 	var arr = [1, 2, 3, 4, 5]
	// 	for (var j = arr.length - 2; j <= 0; j--) {
	// 		arr.splice(arr[j]);
	// 		arr.push(item);
	// 		console.log(arr);
	// 	}

			

	// 	}
	// 	return arr;

	// }


	console.log('reverseArray ' + reverseArray([1, 2, 3, 4, 5, 6]));
	// console.log('reverseArrayInPlace ' + reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
})();
