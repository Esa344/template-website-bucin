let c = true
const position = [30, -30, 60, -60, 90, -90]
function cl() {
  if (c == true) {
    document.getElementById('content').style.height = '400px'
    document.getElementById('content').style.width = '400px'
    document.getElementById('bmt').style.display = 'inline'
    document.getElementById('bmw').style.display = 'inline'
    document.getElementById('opening').innerHTML = 'mau ku ajari coding ga?😆'
    c = false
  }
}

function gmw(){
    let x = Math.floor(Math.random() * 6);
    let y = Math.floor(Math.random() * 6);
    document.getElementById('bmt').style.margin=`${position[x]}px ${position[y]}px`
}
function next(){
  window.location.href='/next/index2.html'
}
