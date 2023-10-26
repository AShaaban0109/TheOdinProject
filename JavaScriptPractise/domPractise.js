const container = document.querySelector("#container")

const redP = document.createElement("p")
redP.textContent = "Red"
redP.style.color = "red"
redP.style.cssText += "background-color: black; font-size: 30px"
container.appendChild(redP)

const mainDiv = document.createElement("div")
mainDiv.style.cssText = `border-color:black; 
                     border-style: solid; 
                     background-color:pink`
mainDiv.textContent = "Pink and Black"
container.appendChild(mainDiv)

const div2 = document.createElement("div")
div2.textContent = "If I got locked away... And we lost it all today..."
mainDiv.appendChild(div2)

mainDiv.appendChild(document.createElement("p"))
const test = document.querySelector("div div p")
test.textContent = "t"