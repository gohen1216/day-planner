var inputgroupels = document.querySelectorAll (".input-group")

var savebuttonhours = document.querySelectorAll("button")
const date = new Date();

console.log(date.getHours());

var saveToLocalStorage = function (hour,value) 
  {
    localStorage.setItem(hour,value)
}
var getfromLocalStorage = function (hour) 
  {
    return localStorage.getItem(hour)
}
var currenthours = date.getHours();

    for(var i=0; i < inputgroupels.length; i ++) {
       

    var blockhour = Number(inputgroupels [i] .id) 
    
    console.log (blockhour) 
    inputgroupels[i].childNodes[3].value=getfromLocalStorage(blockhour)
    
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
        var uservalue = event.target.previousSibling.previousSibling.value
        var hourvalue = event.target.parentNode.id
        saveToLocalStorage(hourvalue,uservalue)
    })
}



