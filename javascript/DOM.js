//innerText: using text, change text
//innerHTML: using any html tag

//DOM Quries ---> The Methods that finds the element in the DOM tree stracture
//document.getElementById(''): only one item
//document.getElementByClassName(''): collection of items [{},{}]
//document.getElementsByTagName(): collection of items [{},{}]
//document.getElementsByName(): collection of items [{},{}]
//document.querySelector(): only one item
//document.querySelectorAll(): collection of items


//Ex: document.getElementById('')
var heading = document.getElementById("myHeading");
console.log(heading);
console.dir(heading);

//innerText: using text, change text
//innerHTML: using any html tag
heading.innerText = "Custom Text By JavaScript";
heading.style.backgroundColor = "orange";

//Ex: document.getElementByClassName('')
var items = document.getElementsByClassName("item");
console.log(items);
//manpulate items its array
var firstItem = items[0];
firstItem.style.color = "#5ad";

//Ex: document.getElementsByTagName();
//Ex: p / h1 ...etc


//Ex: document.querySelector(): apply just for firstOne
var logo = document.querySelector('.logo');
logo.style.backgroundColor = "pink";

//Ex: document.querySelectorAll(): apply for all
var logoall = document.querySelectorAll('.logo');
for (let i = 0; i < logoall.length; i++) {
    logoall[i].style.backgroundColor = "blue";
}

//Ex: document.querySelectorAll(): apply for all-another for loop
var logoall2 = document.querySelectorAll('.logo');
for (l of logoall2) {
    l.style.color = "lightyellow";
}

//for (x in obj) //here names are assigned to x (loop-var) for obj loop ( in )
//for (l of array) //here names are assigned to l (loop-var) for array loop ( of )