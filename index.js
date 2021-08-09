var inputgroupels = document.querySelectorAll (".input-group")

const date = new Date();

console.log(date.getHours());

var currenthours = date.getHours();

for(var i=0; i < inputgroupels.length; i ++) {
    console.log (inputgroupels [i]) 
    var blockhour = inputgroupels [i] .id
    console.log (blockhour)
}
