// *****
// *****
// *****
// *****
// *****

function patt(n){
    if (n<0){
        return 'enter valid input';
    }
    else{
        res = ""
        for(let i = n ; i>0 ;i--){
            for(let j =1 ;j <= 5; j++){
                res +='*' ;
            }
            res += '\n';
        }
        return res
        
    }
}

const pattern = patt(5);
console.log(pattern)