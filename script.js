var code2collegeEducators = ["Samuel" , "Sam" , "Trey" , "Matt"];


var code2collegeStudents = ["Alexis", "Abi" , "Isaac" , "Evila" ,"Spencer" , "Garret" , "George" , "Tim", "Richard" , "Adrian" , "Thomas"];

$("#teacherButton").click(function(){
    $("#teacherDisplay").html(code2collegeEducators [Math.floor(Math.random()*code2collegeEducators.length)]);

});

$("#studentButton").click(function(){
   $("#studentDisplay").html(code2collegeStudents [Math.floor(Math.random()*code2collegeStudents.length)]);
});

$("#submitastudent").click(function(){
    code2collegeStudents.push($("#pickastudent").val());
});

$("#submitateacher").click(function(){
    code2collegeEducators.push($("#pickateacher").val());
});