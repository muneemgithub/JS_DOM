// 1. Select and Style Elements
//    a. Selects an element by its ID and changes its background color to lightblue.  
const innerTextData = document.querySelector("#domassign");
innerTextData.style.backgroundColor = "lightblue"
console.log(innerTextData.style);


// b. Selects all elements with the class name "highlight" and changes their font size to 20px.
const getitem = document.querySelectorAll(".litem");
getitem.forEach((e) => {
    e.style.fontSize = "20px";
});

// 2. Create and Append Elements
//    a. Creates a new `<div>` element with the text "Hello, World!" and appends it to the body of the document. 

const madeone = document.createElement("div");
madeone.innerHTMl = "Muneem Ahmed"
document.body.appendChild(madeone)
console.log(madeone);


// b. add a class name "new-div" to the created `<div>` and set its background color to yellow.

const another = document.createElement("div");
another.innerHTML = "Muneem Ahmed"
another.className = "new"
another.style.backgroundColor = "yellow"
document.body.appendChild(another)
console.log(another);


// 3. Remove Elements
//    a. Removes an element with a specific ID from the DOM.  


const anothernew = document.createElement('div');
anothernew.innerHTML = "Muneem Ahmed Memon"
anothernew.style.backgroundColor = "yellow"

document.body.appendChild(anothernew)
console.log(anothernew);
another.remove();

