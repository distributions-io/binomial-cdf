'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( n, p )
*	Partially applies number of trials `n` and success probability `p` and returns a function for evaluating the cumulative distribution function (CDF) for a Binomial distribution.
*
* @param {Number} n - number of trials
* @param {Number} p - success probability
* @returns {Function} CDF
*/
function partial( n, p ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Binomial distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
