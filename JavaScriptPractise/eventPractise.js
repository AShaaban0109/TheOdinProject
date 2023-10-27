const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener('click', function (e) {
    const item = input.value
    input.value = ''

    const li = document.createElement("li")
    const span = document.createElement("span")
    const delButton = document.createElement("button")
    
    list.appendChild(li)
    li.appendChild(span)
    li.appendChild(delButton)

    span.textContent = item
    delButton.textContent = "Delete"

    delButton.addEventListener('click', () => list.removeChild(li))

    input.focus()
})