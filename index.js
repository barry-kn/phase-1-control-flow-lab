function scuberGreetingForFeet(a){
let result;
if (a <=400){
return result='This one is on me!'
}

else if (a >=2000 && a<=2499){
  return result='I will gladly take your thirty bucks.'
}
else (a>=2500);{
 return result='No can do.'
}
}
scuberGreetingForFeet(300)


function ternaryCheckCity(b){
let result;
if(b==='NYC'){
  return result='Ok, sounds good.'
}
else{
  return result='No go.'
}
}
ternaryCheckCity("nairobi")


function switchOnCharmFromTip(c){
let result;
if (c==="generous"){
  return result="Thank you so much."
}
else if( c==='not as generous'){
  return result='Thank you.'
}
else{
  return result='Bye.'
}
}
switchOnCharmFromTip(generous)