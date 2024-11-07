// Q1:
// var num=window.prompt("Enter A Number:");
// var box=`<h1>output: ${num}</h1>`;
// var element=document.getElementById('demo');
// element.innerHTML=box; //in html page
// console.log(num); //in console
// ------------------------------------------------------------
// Q2:
// var num=Number(window.prompt("Enter A Number:"));
// if(isNaN(num)){
//     console.log("Enter A Valid Number");//in console
//     window.alert("Enter A Valid Number")//in html page
// }
// else if(num%3===0 && num%4===0){
//     console.log('Yes');//in console
//     var box=`<h1>output:Yes</h1>`;
//     var element=document.getElementById('demo');
//      element.innerHTML=box; //in html page
// }
// else{
//     console.log('No');//in console
//     var box=`<h1>output:No</h1>`;
//     var element=document.getElementById('demo');
//      element.innerHTML=box; //in html page
// }
// --------------------------------------------------------------------
// Q3:
// var num1=Number(window.prompt("Enter Number1:"));
// var num2=Number(window.prompt("Enter Number2:"));
// function maxNum(){
//     var maxElement = num1;
//     if(isNaN(num1&&num2)){
//         console.log("Enter A Valid Numbers");//in console
//         window.alert("Enter A Valid Numbers")//in html page
//     }
//     if (num2 > maxElement) {
//       maxElement = num2;
//     }
//     else{
//         maxElement = num1;
//     }
//     return maxElement;
// }
//     console.log(maxNum());//in console
//     var box=`<h1>The Max:${maxNum()}</h1>`;
//     var element=document.getElementById('demo');
//     element.innerHTML = box;//in html page 
//----------------------------------------------------------------------
// Q4:
// var num=Number(window.prompt("Enter a Number:"));
// if(isNaN(num)){
//         console.log("Enter A Valid Numbers");//in console
//         window.alert("Enter A Valid Numbers")//in html page
//     }
//     else if(num>0){
//         console.log("output:Positive");//in console
//         var box="<h1>output:Positive</h1>";
//         var element=document.getElementById('demo');
//          element.innerHTML=box;//in html page
//     }
//     else if(num<0){
//         console.log("output:Negative");//in console
//         var box="<h1>output:Negative</h1>";
//         var element=document.getElementById('demo');
//          element.innerHTML=box;//in html page
//     }
//     else{
//         console.log("The Numbers is Zero");//in console
//         var box="<h1>The Two Numbers is Zero</h1>";
//         var element=document.getElementById('demo');
//          element.innerHTML=box;//in html page
//     } 
// ---------------------------------------------------------------
// Q5:
//  var num1=Number(window.prompt("Enter Number1:"));
// var num2=Number(window.prompt("Enter Number2:"));
// var num3=Number(window.prompt("Enter Number3:"));
// if(isNaN(num1&&num2&&num3)){
//         console.log("Enter A Valid Numbers");//in console
//         window.alert("Enter A Valid Numbers")//in html page
//     }
//     var maxElement = num1;
//     var minElement = num1;

//     if (num2 > maxElement) {
//       maxElement = num2;
//     }
//     if (num3 > maxElement) {
//       maxElement = num3;
//     }
//     if (num2 < minElement) {
//       minElement = num2;
//     }
//     if (num3 < minElement) {
//       minElement = num3;
//     }
// console.log(`Max element = ${maxElement}   Min element = ${minElement}`)
//     var box=`<h1>Max element = ${maxElement} <br> Min element = ${minElement}</h1>`;
//     var element=document.getElementById('demo');
//     element.innerHTML = box;//in html page
//     -----------------------------------------------------------------------------------------------
// Q6:
// var num = Number(window.prompt("Enter A Number:"));
// if (isNaN(num)) {
//     console.log("Enter A Valid Number");  // In console
//     window.alert("Enter A Valid Number");  // In alert box
// } else if (num % 2 === 0) {
//     console.log('Even');  // In console
//     var box = `<h1>output: even</h1>`;
//     var element = document.getElementById('demo');
//     element.innerHTML = box; // In HTML page
// } else {
//     console.log('Odd');  // In console
//     var box = `<h1>output: odd</h1>`;
//     var element = document.getElementById('demo');
//     element.innerHTML = box; // In HTML page
// }
// ----------------------------------------------------------------------------------------------------
// Q7:
// var char=window.prompt('Enter a char:').toLowerCase();
// function isSingleLetter(char) {
//     return (
//       typeof char === "string" &&
//       char.length === 1 &&
//       ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
//     );
//   }
// if(isSingleLetter(char)){
//     if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//         console.log('vowel');//in console
//         var box=`<h1>output: vowel</h1>`;
//          var element=document.getElementById('demo');
//           element.innerHTML=box; //in html page
//     }
//     else{
//         console.log('consonant');//in console
//         var box=`<h1>output: consonant</h1>`;
//          var element=document.getElementById('demo');
//           element.innerHTML=box; //in html page
//     }
// }
// else{
//     console.log('Enter asingle char');
//     var box=`<h1>Enter asingle char</h1>`;
//          var element=document.getElementById('demo');
//           element.innerHTML=box; //in html page
// }
// ---------------------------------------------------------------------------
// Q8:
// var num=Number(window.prompt("Enter A Number:"));
// var box=`<h1>output:</h1>`;
// for(var i=1;i<=num;i++){
//     box+=`${i} `;
//              var element=document.getElementById('demo');
//                element.innerHTML=box; //in html page
//                for(j=i;j<=i;j++){box+=`, `}
//                console.log(i);//in console
// }
// -----------------------------------------------------------------------------
// Q9:
//  var num=Number(window.prompt("Enter A Number:"));
// var box=`<h1>output:</h1>`;
// for(var i=1;i<=12;i++){
//     box+=`${i*num} `;
//              var element=document.getElementById('demo');
//                element.innerHTML=box; //in html page
//                for(j=i;j<=i;j++){box+=`, `}
//                console.log(i);//in console
//                }
// ---------------------------------------------------------------------------------
// Q10:
//  var num=Number(window.prompt("Enter A Number:"));
// var box=`<h1>output:</h1>`;
// for(var i=1;i<=num;i++){
//     if(i%2===0){
//         box+=`${i} `;
//         var element=document.getElementById('demo');
//           element.innerHTML=box; //in html page
//           for(j=i;j<=i;j++){box+=`, `}
//           console.log(i);//in console
//     }
// }
//---------------------------------------------------------------------------------------
// Q11:
//  var num1=Number(window.prompt("Enter The Base:"));
//  var num2=Number(window.prompt("Enter The Power:"));
// var box=`<h1>output:</h1>`;
// for(var i=num2;i<=num2;i++){
//         box+=`${num1*num1} `;
//         var element=document.getElementById('demo');
// element.innerHTML=box; //in html page
// console.log(i);//in console
// }
// ------------------------------------------------------------------------------------------
// Q12:
// var sum=0;
// var ave=0
// var percent=0
//  for(var i=1;i<=5;i++){
//  var nums=Number(window.prompt("Enter The Numbers:"));
//  sum+=nums;}
//  ave+=sum/5;
//  percent+=(sum/500)*100;
//  console.log(sum);//in console
//  console.log(ave);//in console
//  console.log(percent);//in console
//  var box=`<h1>Total marks =${sum}<br>Average Marks =${ave}<br>Percentage =${percent}%</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// ---------------------------------------------------------------------------------------------
// Q13:
// var month = Number(window.prompt("Enter The Month:"));
// var days;

// function months() {
//     if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         days = 31;
//     } else if (month === 4 || month === 9 || month === 6 || month === 11) {
//         days = 30;
//     } else if (month === 2) {
//         days = "February has 28 or 29 days depending on the year.";
//     } else {
//         days = "Invalid month number. Please enter a number between 1 and 12.";
//     }
//     return days;
// }

// console.log(months()); // In console

// var box = `<h1>Number Of Days = ${months()}</h1>`;
// var element = document.getElementById('demo');
// element.innerHTML = box; // In HTML page
// ----------------------------------------------------------------------------------------------
// Q14:
// var sum=0;
// var perecentage=0
// for(var i=1;i<=6;i++){
//     var subject =Number(window.prompt(`subject${i}:`));
//     sum+=subject;
// }
// perecentage+=(sum/600)*100;
// if(perecentage >= 90){
// console.log(`perecentage:${perecentage}%:Grad A`);
//     var box=`<h1>perecentage:${perecentage}%:Grad A</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// }
// else if(perecentage >= 80){
//     console.log(`perecentage:${perecentage}%:Grad B`);
//     var box=`<h1>perecentage:${perecentage}%:Grad B</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// }
// else if(perecentage >= 70){
//     console.log(`perecentage:${perecentage}%:Grad C`);
//     var box=`<h1>perecentage:${perecentage}%:Grad C</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// }
// else if(perecentage >= 60){
//     console.log(`perecentage:${perecentage}%:Grad D`);
//     var box=`<h1>perecentage:${perecentage}%:Grad D</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// }
// else if(perecentage >= 50){
//     console.log(`perecentage:${perecentage}%:Grad E`);
//     var box=`<h1>perecentage:${perecentage}%:Grad E</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// }
// else if(perecentage >= 40){
//     console.log(`perecentage:${perecentage}%:Grad F`);
//     var box=`<h1>perecentage:${perecentage}%:Grad F</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// }
// ------------------------------------------------------------------------
// Q:15
// var month=Number(window.prompt("Enter The Month:"));
// var days;
// function months(){
//     switch(month){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             days=31;
//             break;
//            case 2:
//             days="February has 28 or 29 days depending on the year.";
//             break;
//         case 4:
//         case 9:
//         case 6:
//         case 11:
//             days=30;
//             break;
//         default:
//           days = "Invalid month number Please enter a number between 1 and 12.";
//             break;
//         }
//         return days
// }
// console.log(months());//in console
//  var box=`<h1>Number Of Days =${months()}</h1>`;
//  var element=document.getElementById('demo');
//  element.innerHTML=box; //in html page
// --------------------------------------------------------------------------------------------------
// Q16:
// var char=window.prompt('Enter a char:').toLowerCase();
// function isSingleLetter(char) {
//     return (
//       typeof char === "string" &&
//       char.length === 1 &&
//       ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
//     );
//   }
// if(isSingleLetter(char)){
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log('vowel');  // in console
//             var box = `<h1>output: vowel</h1>`;
//             break;
//         default:
//             console.log('consonant');  // in console
//             var box = `<h1>output: consonant</h1>`;
//             break;
//     }
//     var element = document.getElementById('demo');
//     element.innerHTML = box; // in HTML page
// } 
// else {
//     console.log('Enter a single char');
//     var box = `<h1>Enter a single char</h1>`;
//     var element = document.getElementById('demo');
//     element.innerHTML = box; // in HTML page
// }
// ---------------------------------------------------------------------------------
// Q17:
// var num1 = Number(window.prompt("Enter Number1:"));
// var num2 = Number(window.prompt("Enter Number2:"));
// function maxNum() {
//     switch (true) {
//         case (isNaN(num1) || isNaN(num2)):
//             console.log("Enter A Valid Numbers");  // In console
//             window.alert("Enter A Valid Numbers");  // In alert box
//             return;
//         case (num1 >= num2):
//             return num1; 
//         default:
//             return num2;  
//     }
// }
// console.log(maxNum());  // In console
// var box = `<h1>output: ${maxNum()}</h1>`;
// var element = document.getElementById('demo');
// element.innerHTML = box;  // In HTML page
// -------------------------------------------------------------------------------------------
// Q18:
// var num = Number(window.prompt("Enter A Number:"));
// switch (true) {
//     case isNaN(num):
//         console.log("Enter A Valid Number");  // In console
//         window.alert("Enter A Valid Number");  // In alert box
//         break;
//     case (num % 2 === 0):
//         console.log('Even');  // In console
//         var box = `<h1>output: even</h1>`;
//         var element = document.getElementById('demo');
//         element.innerHTML = box; // In HTML page
//         break;
//     default:
//         console.log('Odd');  // In console
//         var box = `<h1>output: odd</h1>`;
//         var element = document.getElementById('demo');
//         element.innerHTML = box; // In HTML page
//         break;
// }
// -----------------------------------------------------------------------------------------
// Q19:
// var num = Number(window.prompt("Enter a Number:"));
// switch (true) {
//     case isNaN(num):
//         console.log("Enter A Valid Numbers");  // In console
//         window.alert("Enter A Valid Numbers");  // In alert box
//         break;
//     case (num > 0):
//         console.log("output: Positive");  // In console
//         var box = `<h1>output: Positive</h1>`;
//         var element = document.getElementById('demo');
//         element.innerHTML = box;  // In HTML page
//         break;
//     case (num < 0):
//         console.log("output: Negative");  // In console
//         var box = `<h1>output: Negative</h1>`;
//         var element = document.getElementById('demo');
//         element.innerHTML = box;  // In HTML page
//         break;
//     default:
//         console.log("The Number is Zero");  // In console
//         var box = `<h1>The Number is Zero</h1>`;
//         var element = document.getElementById('demo');
//         element.innerHTML = box;  // In HTML page
//         break;
// }
// ---------------------------------------------------------------------------------------
// Q20:
// var num1=Number(window.prompt("Enter Number1:"));
// var num2=Number(window.prompt("Enter Number2:"));
// var operator = window.prompt("Enter The Operator:");
//  var result;
//  switch(operator) {
//      case '+':
//          result = num1 + num2;
//          break;
//      case '-':
//          result = num1 - num2;
//          break;
//      case '*':
//          result = num1 * num2;
//          break;
//      case '/':
//          if (num2 === 0) {
//   result = "Cannot divide by zero!";
//          } 
//          else {
//   result = num1 / num2;
//          }
//          break;
//      default:
//          result = "Invalid operator!";
//  }
//  console.log(`output: ${result}`);  // In console
//          var box = `<h1>output: ${result}</h1>`;
//          var element = document.getElementById('demo');
//          element.innerHTML = box;  // In HTML page