// *
// **
// ***
// ****
// *****
function patt(n){
    if (typeof n !=='number' || n<=0 || null){
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