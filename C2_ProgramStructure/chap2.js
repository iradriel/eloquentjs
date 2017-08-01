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

// Ex.2 Chess board

(function() {
  'use strict'

  function chessBoard (size) {
    var string = '#'
  }

  chessBoard();
})();
