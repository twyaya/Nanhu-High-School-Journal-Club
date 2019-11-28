$(document).ready(function(){
  alert("建議用電腦觀看已達最佳效果");
  $("#thanks1").hide();
  $("#thanks2").hide();
  $("#school2").hide();
  $("#school3").hide();
  
  $("#btn1").click(function(){
    $("#school1").show();
    $("#school2").hide();
    $("#school3").hide();
   });
   
  $("#btn2").click(function(){
    $("#school1").hide();
    $("#school2").show();
    $("#school3").hide();
   });
   
  $("#btn3").click(function(){
    $("#school1").hide();
    $("#school2").hide();
    $("#school3").show();
   });
   
  $("#btn4").click(function(){
    $("#thanks1").show();
   });
  $("#btn5").click(function(){
    $("#thanks2").show();
   });
});
  
