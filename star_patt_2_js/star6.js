//     *
//    **
//   ***
//  ****
// *****
function patt(n){
    if (typeof n !=='number' || n<=0 || null){
        return 'enter valid input';
    }
    else{
        res = ""
        for(let i =1 ; i<=n ;i++){
            // add left space
            for(let j =0 ;j <=5-i; j++){
                res +=' ' ;
            }
            // add left *
            for(let k=1;k<=i;k++){
                res += '*';
            }
            

            res += '\n';
        }
        return res
        
    }
}

const pattern = patt(5);
console.log(pattern)