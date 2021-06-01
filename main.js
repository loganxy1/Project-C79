name_array = [];
var i = 0;
function submit(){
   if(i <= 48){
    var n1 = document.getElementById("stu1").value;
    var n2 = document.getElementById("stu2").value;
    var n3 = document.getElementById("stu3").value;
    var n4 = document.getElementById("stu4").value;
    name_array.push(n1);
    name_array.push(n2);
    name_array.push(n3);
    name_array.push(n4);
    console.log(name_array);
    document.getElementById("display_names").innerHTML = name_array;
    i = i + 4;
   }
}
function sorting(){
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_names").innerHTML = name_array;
}