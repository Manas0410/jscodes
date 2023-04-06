// 0 100 200 300 400 500 600 700 800 900 1000
function pattern1(){
console.log("pattern 1");
for(let i=0 ; i<=1000 ; i+=100){
    console.log(i);
}}


// 1 2 4 8 16 32 64 128
function pattern2(){
console.log("pattern 2");
let j =1;
for(let i=1 ; i<=8 ; i++){
    console.log(j);
    j=j*2;
}}


// 0 2 4 6 8 10
function pattern3(){
console.log("pattern 3");
for(let i=0 ; i<=10 ; i+=2){
    console.log(i);
}}


// 3 6 9 12 15
function pattern4(){
console.log("pattern 4");
for(let i=3 ; i<=15 ; i+=3){
    console.log(i);
}}



// 9 8 7 6 5 4 3 2 1 0
function pattern5(){
console.log("pattern 5");
for(let i=9 ; i>=0 ; i--){
    console.log(i);
}}


// 1 1 1 2 2 2 3 3 3 4 4 4
function pattern6(){
console.log("pattern 6");
for(let i=1 ; i<=4 ; i++){
    console.log(i,i,i);
}}



// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
function pattern7(){
console.log("pattern 7");
for(let i =1;i<=3;i++){
for(let i=0 ; i<=4 ; i++){
    console.log(i);
}}}

pattern1()
pattern2()
pattern3()
pattern4()
pattern5()
pattern6()
pattern7()