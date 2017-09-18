//find pythagorean triple where a + b + c = 1000
for(c=1;c<=1000;c++){
	for(b=1;b<=1000;b++){
		for(a=1;a<=1000;a++){
			if(((a+b)+c)==1000){
				if(((a*a)+(b*b))==(c*c)){
				console.log("A: " + a + " B: " + b + " C: " + c + "Product: " + (a*b*c))
				}
			}
		}
		a=1
	}
	b=1
}
console.log