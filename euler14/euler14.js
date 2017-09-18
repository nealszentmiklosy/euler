//longest collatz below 1mil
function collatz(input){
	let count=1
	while(input!==1){
		if(input%2==1){
			input=((3*input)+1);
			count++
		}
		input=input/2;
		count++
	}
	return count
}
let max = 0
let cmax = 0
for(i=1;i<=1000000;i++){
	if(collatz(i)>cmax){
		max=i;
		cmax=collatz(i);
	}
}
console.log(max);
console.log(cmax);