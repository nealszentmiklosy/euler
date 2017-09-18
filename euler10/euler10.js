//sum of all primes below 2,000,000
function isPrime(input){
	for(i=2;i<input;i++){
		if(input%i==0){
			return false
		}
	}
	return true
}
let sum = 0
for (j=2;j<50000;j++){
	if(isPrime(j)==true){sum+=j};
}
console.log(sum)