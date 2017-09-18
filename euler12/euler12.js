function numDivisors(input){
	let count = 1
	for(i=1;i<input;i++){
		if(input%i==0){count++}
	}
	return count
}
console.log(numDivisors(76576500))
let k = 2;
let j = 1;
while(numDivisors(j)<250){
	j+=k
	k++
}
console.log(j)