


function fibs(n){
    let count = 1;
    let fset =[0,1]
    let i = 0;
    while(count<n){
        fset.push(fset[i]+fset[i+1]);
        count++;
        i++;
    }

    return fset;
}

let fset =[];

function fibsRec(n){
    
    if(n<=1)return n;
    return fibsRec(n-1)+ fibsRec(n-2);
}
function helpFibRec(n){
    let fset = [];
    let num = 0;
    while(num<=n){
        fset.push(fibsRec(num));
        num++;
    }
    return fset;
}
console.log(helpFibRec(10))