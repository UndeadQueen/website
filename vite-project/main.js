import './style.css'
import projects from "./projects"

document.querySelector('#app').innerHTML = `
<p class="name">Jessica Hayden</p>  
<div>
   <div id="Projects">
   <h1 class="title">Projects</h1>
   </div>
<button id="toggle">Light Mode</button>
   <div class="contact">
   <h1 class="title">Email</h1>
   <button id="contactbtn">Contact</button>
   </div>
   <div class="aboutme">
   <h1 class="title">About Me</h1>
   <div id="about">
   </div>
   </div>
   </div>
`
projects.forEach(function(p) {
  document.getElementById("Projects").innerHTML += `<a href=${p.Link}><h2 class="projectname">${p.Name}</h2> <p class="projectdesc">${p.desc}</p> </a>`
})
const toggle = document.getElementById('toggle')
let isDark
const bodycolor = document.querySelector('body')
toggle.addEventListener("click", () => {
  if (isDark) {
    isDark = false
    bodycolor.style.backgroundColor = "#1a1a1a"
    toggle.innerText = "Light Mode"
  } 
  else {
    isDark = true
    bodycolor.style.backgroundColor = "#FFFFFF"
    toggle.innerText = "Dark Mode"
  }
  console.log(isDark)
})
// const form = document.getElementById("form");
// form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

fetch('https://portfolioserver-9b3n.onrender.com/send-email', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
}
document.getElementById('contactbtn').addEventListener('click', function() {
  window.location.href = "mailto:valerie.hayden3@gmail.com"
})
// document.querySelector("form").addEventListener("submit", formSubmit)

fetch('./aboutme.txt').then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
  }
  return response.text()
}).then(text => {
  const textContentElement = document.getElementById("about")
  textContentElement.textContent = text
}).catch(error => {
  console.error(`Error fetching text file:`, error)
})