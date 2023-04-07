// *
// **
// ***
// ****
// *****
function patt(n){
    if (n<0){
        return 'enter valid input';
    }
    else{
        res = ""
        for(let i = 1 ; i<=5 ;i++){
            for(let j =0 ;j <i; j++){
                res += '*' ;
            }
            res += '\n';
        }
        return res
        
    }
}

const pattern = patt(5);
console.log(pattern)