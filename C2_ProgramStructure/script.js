// Ex.1
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######


var sharp = '#';
for (var i = 0; i <= 7; i++) {
	console.log(sharp);
	sharp += '#';
}

