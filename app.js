// select elements
const grandparent = document.getElementById('grandparent')
const parent = document.querySelector('#parent')
const child = document.querySelector('#child')
const button = document.getElementById('button')
const input = document.getElementById('inputBox')
const buttons = document.querySelectorAll('.listbutton')




// addEventListener
grandparent.addEventListener('click', e => console.log('you clicked grandparent'))
parent.addEventListener('click', handleParent)
child.addEventListener('mouseover', () => child.textContent = 'HEYYYYYY')
button.addEventListener('click', e => handleButtonClick(e))
input.addEventListener('keyup', e => {console.log(e.target.value)})
document.addEventListener('click', e => console.log("document"))


// document.addEventListener('mouseover', onmousemove)



// callbacks
function handleParent(e) {
    console.log(e)
}

const handleButtonClick = e => {
    // console.log(e)
    if (e.target.textContent === "Press Me") {
        e.target.textContent = "Swapped Text!"
    } else {
        e.target.textContent = "Press Me"
    }
}


// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}



// Array.from(nodeList)
Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', e => {
        const li = e.target.parentElement
        li.remove();
    })
})