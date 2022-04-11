// select elements
const grandparent = document.querySelector('#grandparent')
const parent = document.getElementById('parent')
const child = document.querySelector("#child")
const button = document.getElementById('button')
const inputBox = document.querySelector('#inputBox')
const buttons = document.querySelectorAll('.listbutton')



// addEventListener
grandparent.addEventListener('click', handleGrandparent)
parent.addEventListener('click', handleParent)
child.addEventListener('mouseover', e => {child.style.backgroundColor = 'orange'})
// document.addEventListener('mouseover', onmousemove)
button.addEventListener('click', e => {handleButtonClick(e)})
inputBox.addEventListener('keyup', e => {console.log(e.target.value)})





// callbacks
function handleGrandparent() {
    grandparent.style.border = "solid 10px red"
}

function handleParent(e) {
    console.log(e.target.id)
}

// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

const handleButtonClick = e => {
    console.log(e.target.textContent)
    if (e.target.textContent === "Press Me") {
        e.target.textContent = "Swapped Text!"
    } else {
        e.target.textContent = "Press Me"
    }
}


// Array.from
Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', e => {
        const li = e.target.parentElement
        li.remove();
    })
})