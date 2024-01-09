/*function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  */

let generateBtn=document.getElementById("#generate");

function randomNum(){
   let min=document.getElementById("min");
   let max=document.getElementById("max");
   let minValue=Number(min.value);
   let maxValue=Number(max.value);
   if(minValue>maxValue){
    minValue=maxValue+minValue;
    maxValue=minValue-maxValue;
    minValue=minValue-maxValue;
    min.value=minValue;
    max.value=maxValue;
   }
   let num=Math.floor(Math.random()* (maxValue - minValue + 1) + minValue);
   console.log(num);
   document.getElementById("result").innerText=num;
}
window.addEventListener("load",randomNum());
generateBtn.addEventListener("click",randomNum());