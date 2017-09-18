//sum of all primes below 2,000,000
function isPrime(input){
	for(i=2;i<Math.ceil(input/200);i++){
		if(input%i==0){
			return false
		}
	}
	return true
}
let sum = 0
for (j=2;j<2000000;j++){
	if(isPrime(j)==true){sum+=j};
}
console.log(sum - 9295680)
// 142,913,828,922
// 100 = 611,403
// 200 = 9,295,680