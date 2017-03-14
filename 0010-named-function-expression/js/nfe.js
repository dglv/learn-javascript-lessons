var factorial = function innerFactorial(n){
	return n ? n * innerFactorial(n-1) : 1;
}