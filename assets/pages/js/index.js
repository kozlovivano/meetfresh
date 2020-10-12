let lbtn = 0;
let rbtn = 0;

document.querySelectorAll('.admin').forEach(item => {
  item.addEventListener('click', function(){
    if(item.innerHTML == 'LEFT'){
      lbtn = Date.parse(new Date())/1000;
    }else{
      rbtn = Date.parse(new Date())/1000;
    }
    if(Math.abs(lbtn - rbtn) <= 5){
      window.location.href = 'pages/admin.html';
    }
  })
})
