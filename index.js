
const red = document.getElementById('btn-one')
const yellow = document.getElementById('btn-two')
const green = document.getElementById('btn-thre')
const backImg = document.querySelector('.svetofor')
const backI = document.querySelector('.light')
const backIm = document.querySelector('.traffic')
red.addEventListener('click', () => {
 setTimeout(() => {
   red.style.opacity = 1
   red.style.background = "red"
   backImg.innerHTML =`
     <div class="sv" id="back-fon class="text>
<h1 class="text">Toxtang</h1>
       </div>
   `
   setTimeout(() => {
       red.style.opacity = 0.3
       red.style.background = "red"
       backImg.innerHTML =`'`
   }, 7000);
 }, 20);

})

yellow.addEventListener('click', () => {
   setTimeout(() => {
     yellow.style.opacity = 1
     yellow.style.background = "yellow"
     backImg.innerHTML =`
     <div class="sr" id="back-fon class="text>
<h1 class="text">Tayirlaning</h1>
 </div>
`
     setTimeout(() => {
       yellow.style.opacity = 0.3
       yellow.style.background = "yellow"
        backImg.innerHTML =`'`
     }, 7000);
   }, 20);
 
  })

  green.addEventListener('click', () => {
   setTimeout(() => {
     green.style.opacity = 1
     green.style.background = "rgb(30, 255, 0)"
     backImg.innerHTML =`
     <div class="srr" id="back-fon class="text>
<h1 class="text">Yuring</h1>
 </div>
`
     setTimeout(() => {
       green.style.opacity = 0.3
       green.style.background = "rgb(30, 255, 0)"
           backImg.innerHTML =`'`
     }, 7000);
   }, 20);
 
  })
