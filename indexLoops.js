const number=5;
for(i=1;i<=10;i++){
    multi=number*i
    console.log(`${number} x ${i} = ${multi}`);

}
// sum of even numbers between 1 to 50
let sum=0
for(i=1;i<=50;i++){
    if(i%2==0)
        sum=sum+i;

}
console.log(sum)

// countdown timer
let N=2
let P
while(N<=20){
  P=1
  let Count=0
  while(P<=N){
    if(N%P==0){
      Count++
    }
    P++
  }
  if(Count==2){
    console.log(N+' is a prime number')
  }N++
}
// print odd numbers by using while loop
let Y=1
let sum1=0
while(Y<=20){
    if(Y%2 !==0) 
    {
        sum1=sum1+Y
    }
    Y++
}
console.log('sum of odd numbers between 1 to 20: '+sum1)

 //js to program to calculate the factorial of number using while loop
 let num=5
 let fact=1
 while(num>0){
    fact*=num
    num--
}
console.log(fact)

   

