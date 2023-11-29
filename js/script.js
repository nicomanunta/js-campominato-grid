



function createCell(num){
    let element = document.createElement("div")
    element.classList.add("square")
    element.innerText = num

    return element
}

let grid = document.getElementById("grid")

for(let i = 0; i<100; i++){
    
    let square = createCell(i+1)
    grid.appendChild(square)
}
