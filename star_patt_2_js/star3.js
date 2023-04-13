//     * 
//    * * 
//   *   * 
//  *     * 
// ********* 
function patt(n){
    if (typeof n !=='number' || n<=0 || null){
        return 'enter valid input';
    }
    else{
        res = ""
        for(let i =1 ; i<=n-1 ;i++){
            // add left space
            for(let j =0 ;j <=n-1-i; j++){
                res +=' ' ;
            }
            res+='*';

            // add left space
            for(k=1;k<i;k++){
                res += ' ';
            }
            //add right space and *
            for(l=1;l<i-1;l++){
                res+=' '
            }
            if(i !==1){
            res += '*';}

            res += '\n';
        }
        for(let m =0; m<(2*n)-1 ;m++){
            res += '*';
        }
        return res
        
    }
}

const pattern = patt(5);
console.log(pattern)