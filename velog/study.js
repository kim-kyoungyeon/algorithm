const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) {  
            divisors.push([i,num/i]);
            // divisors.push(num / i);   //[[1,9],[3,3]] // 응용!
        } //map .
    } 
    return divisors;
 }

 

 console.log("get:", getDivisors(9))