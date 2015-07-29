'use strict';

// MODULES //

var betainc = require( 'compute-betainc/lib/numbers.js' );


// FUNCTIONS //

var floor = Math.floor;


// CDF //

/**
* FUNCTION: cdf( x, n, p )
*	Evaluates the cumulative distribution function (CDF) for a Binomial distribution with number of trials `n` and success probability `p` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} n - number of trials
* @param {Number} p - success probability
* @returns {Number} evaluated CDF
*/
function cdf( x, n, p ) {
	if (x < 0) {
		return 0;
	}
	if ( x >= n ) {
		return 1;
	}
	x = floor(x + 1e-7);
	return betainc.upper( p, x + 1, n - x );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
