let container = document.getElementsByClassName('container')
let inp = document.getElementById('inp')
let btntxtclr = document.getElementById('btntxtclr')
let btnbgclr = document.getElementById('btnbgclr')

let savedText = localStorage.getItem("inputText")
let savedBgClr = localStorage.getItem("bgClr")
let savedtxtClr = localStorage.getItem("txtClr")
if(savedText) {
    inp.value = savedText
}
if(savedBgClr) {
    inp.style.backgroundColor = savedBgClr
}
if(savedtxtClr) {
    inp.style.color = savedtxtClr
}

  
//let text = 'This is the text'
btntxtclr.addEventListener('click',(event)=>{ //event is event object it gives information about event occured
    console.log(`The button is ${event.target.textContent} was clicked`)
    console.log(event.type)
    let red = Math.round(Math.random()*255)
    let green = Math.round(Math.random()*255)
    let blue = Math.round(Math.random()*255)
    let txtColor = `rgb(${red},${green},${blue})`
    console.log(inp)
    inp.style.color = txtColor
    // inp.style.color = 'red'
    // inp.value = 'I am value
    localStorage.setItem("txtClr",txtColor)
    
})


btnbgclr.addEventListener('click',(event)=>{
    //console.log(`The button ${event.target.textContent} was clicked`)
    let red = Math.round(Math.random()*255)
    let green = Math.round(Math.random()*255)
    let blue = Math.round(Math.random()*255)
    
    let color = `rgb(${red},${green},${blue})`
    console.log(color)
    inp.style.background = color


    localStorage.setItem("bgClr",color)
} 



)

inp.addEventListener('input',()=> {
    localStorage.setItem("inputText", inp.value )
})
