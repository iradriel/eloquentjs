// Ex.1 Minimum
(function() {

    'use strict'

    function min(x, y) {
        if (x <= y) {
            return y;
        } else {
            return x;
        }
    }

    console.log(min(0, -12));

})();

// Ex.2 Recursion

(function() {

    'use strict'

    function isEven(x) {
        if (x === 0) {
            return true;
        } else if (x === 1) {
            return false;
        } else {
            return isEven(Math.abs(x) - 2);
        }
    }

    console.log(isEven(-2));

})();

// Ex.3 Character counting

(function() {

    'use strict'

    function countChar(string, char) {
        var count = [];
        for (var i = 0; i <= string.length; i++) {
            if (string.charAt(i) === char) {
                count.push(string.charAt(i));
            }

        }
        return count.length;
    }
    console.log(countChar('dfdshUIIHsdkUYIK', 's'))

})();