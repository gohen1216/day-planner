var inputgroupels = document.querySelectorAll (".input-group")

var savebuttonhours = document.querySelectorAll("button")
const date = new Date();

console.log(date.getHours());

var currenthours = date.getHours();

for(var i=0; i < inputgroupels.length; i ++) {
    
    var blockhour = Number(inputgroupels [i] .id)
    console.log (blockhour) 
    if(blockhour<currenthours){
        inputgroupels[i].childNodes[3].classList.add("past")
    }
    else if(blockhour===currenthours){
        inputgroupels[i].childNodes[3].classList.add("present")
    }
    else{
        inputgroupels[i].childNodes[3].classList.add("future")
    }
}
for(var i=0; i <  savebuttonhours.length; i ++){
    savebuttonhours[i].addEventListener("click",function(event){
        console.log (event.target.previousSibling.previousSibling.value)
    })
}

