// *
// **
// * *
// *  *
// *****
function patt(n){
    if (typeof n !=='number' || n<=0 || null){
        return 'enter valid input';
    }
    else{
        res = "*\n";
        for(let i =0 ; i<n-2 ;i++){
            res +='*'
            for(let j =0 ;j <i; j++){
                res +=' ' ;
            }
            res +='*'
            
            res += '\n';
        }
        for(let i=0;i<n;i++){
            res+='*'
        }
        return res
        
    }
}

const pattern = patt(5);
console.log(pattern)