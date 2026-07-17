const display = document.getElementById("display")
let timer = null 
let startTime=0
let elapseTime=0
let isRunning=false
function start(){
if(!isRunning) {
startTime= Date.now() - elapseTime
timer = setInterval(update , 10 )
isRunning = true
}
console.log(startTime)
}
function stop(){
if(isRunning) {
    clearInterval(timer)
    elapseTime = Date.now() - startTime
    isRunning= false
}
}
function reset() {
clearInterval (timer)
  timer = null 
  startTime=0
  elapseTime=0
  isRunning=false
display.textContent= "00:00:00:00"
}
function update() {
 const currenttime= Date.now();
 elapseTime = currenttime- startTime
 let hours=Math.floor( elapseTime / (1000 * 60 *60))
let minutes = Math.floor(elapseTime / (1000*60) %60)
let seconds = Math.floor(elapseTime/100 %60)
let milliseconds = Math.floor(elapseTime%1000/10)

hours = String(hours).padStart(2,"0")
minutes = String(minutes).padStart(2,"0")
seconds = String(seconds).padStart(2,"0")
milliseconds = String(milliseconds).padStart(2,"0")


display.textContent = `${hours} :${minutes} : ${seconds}: ${milliseconds}`
}