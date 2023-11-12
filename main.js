let c = true
function cl() {
  if (c == true) {
    document.getElementById('content').style.height = '500px'
    document.getElementById('content').style.width = '400px'
    document.getElementById('content').style.marginTop = '90px'
    document.getElementById('bmt').style.display = 'inline'
    document.getElementById('bmw').style.display = 'inline'
    document.getElementById('opening').innerHTML = 'mau ku ajari coding ga?😆'
    c = false
  }
}

function gmw(){
  document.getElementById('bmt').style.display='none'
}
function next(){
  window.location.href='/next/index2.html'
}
