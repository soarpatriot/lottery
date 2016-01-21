
$ = require("jquery");
var data = require("./people.json");
function randomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}   
$(function(){
  var id;
  var tip = function(){
    var i=0;
    var people = data.people
    var number = randomNum(0,people.length-1);

    var personCode = people[number].id;

    var codeArr = personCode.split('')
    console.log(codeArr); 
    $("#first-number").text(codeArr[0])
    $("#second-number").text(codeArr[1])
    $("#third-number").text(codeArr[2])
    $("#forth-number").text(codeArr[3])
    $("#fifth-number").text(codeArr[4])

  }
  $("#start-lottery").click(function(){
    id = window.setInterval(tip,10)
    console.log("click"); 
  })
  $("#btn-end").click(function(){
    window.clearInterval(id)
    console.log("click end"); 
  })

})
