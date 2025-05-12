// function Display(){
//    var val =  document.getElementById("Name").value
    //document.writeln("Hello")
    // document.writeln(val)
// }
// Display()

function Display(){
    // document.writeln(document.getElementById("Name").value) // paramater will show as output
   //var ele = document.getElementById("Name") // show an element (tag) in html 
   //var ele = document.getElementById("Name").value // show an parameter
   //var ele = document.getElementById("para1") // show an element (tag) in html 
   //var ele = document.getElementById("para1").textContent // show html paragraph data
   //var ele = document.getElementById("para1").innerHTML // show a data inside of an element 
//    var ele = document.getElementById("dle").innerHTML // inside of div tag data will show pargrah & span full
//    console.log(ele)
//    document.writeln(ele)// shows a html tag data inside of tag as new page 

// shows an para1 data into output data like in tag ways
// var ele = document.getElementById("para1").innerHTML 
// console.log(ele)  
// document.getElementById("output").innerHTML=ele;

// shows an para1 data into output data
// var ele = document.getElementById("para1").textContent 
// console.log(ele)  
// document.getElementById("output").innerHTML=ele;

var val = document.getElementById("Name").value
var ele = document.getElementById("para1").textContent
console.log(ele)
//document.getElementById("output").innerHTML=ele + " " + val

// to create an element para tag
console.log(document.createElement('p'));

// or 
var out = document.createElement('p')

// to create a id for a paragraph tag
out.setAttribute('id','output')
out.innerHTML =ele + " " + val
document.getElementById("body").appendChild(out)
console.log(out)
}