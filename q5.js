var n;
var read = require('readline-sync');
n=read.questionFloat("enter the length: ")
var fare=[]
for( let i=0;i<=n;i++){
    fare[i]=read.question("enter the fare: ")

}
oddevenindex(fare,n)

function oddevenindex(fare,n){
    let oddindex=1;
    let evenindex=0;
    while(true){

        while (evenindex < n && fare[evenindex] % 2 == 0) 
            evenindex += 2; 
        while (oddindex < n && fare[oddindex] % 2 == 1) 
            oddindex += 2; 
        if (evenindex < n && oddindex < n)
        {
            let temp;
            temp = fare[evenindex]; 
            fare[evenindex] = fare[oddindex]; 
            fare[oddindex] = temp; 
        }    
        else
            break; 
    } 
    console.log(fare)
} 

