// (function(){
//     console.log("hello");
// }) ()

// let f1=function(){
//     console.log("hey!!");
// }

//  f1();
//  f1();

//  let f2=function(){
//     console.log("second function");
//  }
//  f2();

//  let f3=function(a,b){
//     return a+b;
//  }
//  console.log(f3(10,30));

// console.log(f3(20,20));

 
//   let arrowfunction = ()=>{
//     console.log("hello");
//  }

//  arrowfunction();

//  let add = (a,b)=>{
//     console.log("addition of a and b is");
//     return a+b;
//  }
//  console.log(add(10,20));
 
//  let add2 = (a,b)=>a+b;
//  console.log(add2(10,20));

let prime = (a)=>{
    let x=0;
    for(let i=1;i<=a;i++){
        if(a % i == 0){
            x=x+1;        
        }
    }
    if(x == 2){
        console.log("prime");
    }
    else{
        console.log("not prime");
    }
}
prime(90);



// let prime = (a) => {
//     let x = 0;
//     for (let i = 1; i <= a; i++) {
//         if (a % i == 0) {
//             x = x + 1;
//         }
//     }
//     if (x == 2) {
//         return "prime";
//     } else {
//         return "np";
//     }
// }

// console.log(prime(11)); 
// console.log(prime(17)); 


// let a = "       dhawalSaini     "
// console.log(a);
// console.log(typeof a);
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// for(let i of a){
//     console.log(i);
// }

// console.log(a.length);
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.indexOf("i"));
// console.log(a.slice(7,3));
// console.log(a.slice(3,-3));
// console.log(a.repeat(3));
// console.log(a.replace("l","n"));
// console.log(a.replaceAll("a","n"));
// console.log(a.includes("alS"));
// console.log(a.charAt(7));
// console.log(a.charCodeAt(7));
// console.log(a.trimStart());
// console.log(a.trimEnd());
// console.log(a.trim());
// let b=a.trim()
// console.log(b.length);


// let a=[10,20,30,40,50,60,70,80,90,100];
// console.log(a.slice(4,9));
// a.splice(3,4,"aman");
// console.log(a);


// function output(x){
    // console.log(x);
    // x();
// }

// function show(){
//     console.log("hello ");
// }

// output(function(){
//     console.log("hello");
// })
// output(show)

