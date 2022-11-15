let btn=document.getElementById("btn")

//for  example add name attribute in it

btn.setAttribute("name","form1")
// btn.setAttribute("class","form1")


//find attribute::
// let val =btn.getAttribute("id");
// console.log(val);



//remove attribute
// let val =btn.removeAttribute("name");
// console.log(val);


//find is hsving or not
//retrun true or false
let val=btn.hasAttribute("name")
console.log(val);