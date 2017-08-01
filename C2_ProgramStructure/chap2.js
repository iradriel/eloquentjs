// Ex.1 Looping a triangle

// WHILE LOOP

(function() {

    'use strict';

    function triangle(width) {
        var string = '#';
        while (string.length <= width) {
            console.log(string);
            string += '#';
        }
    }
    triangle(7);
})();

// FOR LOOP

(function() {

    'use strict';

    function triangle(width) {
        var string = '#';
        for (var i = 0; i <= width; i++) {
            console.log(string);
            string += '#';
        }
    }
    triangle(7);
})();

// Ex.2 FizzBuzz

(function() {
    'use strict'

    function fizzbuzz() {
        for (var i = 0; i <= 100; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log('FizzBuzz');
            } else if ((i % 3 === 0) && (i % 5 !== 0)) {
                console.log('Fizz');
            } else if ((i % 3 !== 0) && (i % 5 === 0)) {
                console.log('Buzz')
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz();
})();

// Ex.3 Chess board

(function() {
        'use strict'

        function chessBoard(size) {
            var row = '';

            for (var i = 0; i < size; i++) {
                if (i % 2 === 0) {
                    row = '#';
                } else {
                    row = '_';
                }

                for (var j = 0; j < size - 1; j++) {
                    if (row.slice(-1) === '#') {
                        row += '_';
                    } else {
                        row += '#'
                    }
                }
                console.log(row);
            }
        }
            chessBoard(8);
        })();
