// *****
// ****
// ***
// **
// *

function patt(n){
    if (typeof n !=='number' || n<=0 || null){
        return 'enter valid input';
    }
    else{
        res = ""
        for(let i = n ; i>0 ;i--){
            for(let j =1 ;j <= i; j++){
                res +='*' ;
            }
            res += '\n';
        }
        return res
        
    }
}

const pattern = patt(5);
console.log(pattern)