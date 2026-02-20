var num=document.getElementById("o")
var score=document.getElementById("score")
var result=document.getElementById("result")
var ran=Math.floor(Math.random()*100)+1
var sc=10
function check(){
    var num1=num.value  
if(ran==num1){
    console.log("Right")
     result.textContent="Right"
     alert("YOU WON....")
}

    else{
        if(sc==0){
            alert("Game Over! The correct number was "+ran)
            location.reload()
        }
        sc=sc-1
   score.textContent="Score:"+sc
      result.textContent="Wrong"
      if(ran>num1){
          console.log("Your guess is low")
          result.textContent="Your guess is low"
      }
      else{
          console.log("Your guess is high")
            result.textContent="Your guess is high" 
      }
     

   
}
}