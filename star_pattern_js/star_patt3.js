// 11111
// 2222
// 333
// 44
// 5
function patt(n){
    if (n<0){
        return 'enter valid input';
    }
    else{
        res = ""
        for(let i = 1 ; i<=5 ;i++){
            for(let j =i ;j <= 5; j++){
                res += i ;
            }
            res += '\n';
        }
        return res
        
    }
}

const pattern = patt(5);
console.log(pattern)