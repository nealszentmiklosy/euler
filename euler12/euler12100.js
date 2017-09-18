function numDivisors(input){
	let count = 1
	for(i=1;i<Math.ceil((input/100)+1);i++){
		if(input%i==0){count++}
	}
	return count
}
let k = 2;
let j = 1;
while(numDivisors(j)<500){
	j+=k
	k++
}
console.log(numDivisors(j))
console.log(j)
//76,576,500 (12,375)