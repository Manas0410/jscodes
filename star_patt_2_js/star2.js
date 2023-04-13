// *********
//  *******
//   *****
//    ***
//     *

function patt(n){
    if (typeof n !=='number' || n<=0 || null){
        return 'enter valid input';
    }
    else{
        res = ""
        for (let i =1 ; i<=n ;i++){
            // add left space
            for(let k=1;k<i;k++){
                res += ' ';
            }
            
             // add left *
            for(let j =n ;j >=i; j--){
                res +='*' ;
            }
            //add right *
            for(let l=n;l>i;l--){
                res+='*'
            }

            res += '\n';
        }
        return res
        }
        
        
    }

const pattern = patt(5);
console.log(pattern);