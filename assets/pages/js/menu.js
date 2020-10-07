let modal = document.querySelector('.modal');

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function(){
    this.querySelector('.menu-item-details').classList.toggle('hide');
  })
})

document.querySelectorAll('.menu-item-detail').forEach(item => {
  item.onclick = () => {
    modal.style.display = 'flex';
  }
})

document.querySelectorAll('.accordion').forEach(item => {
  item.addEventListener('click', function(){
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }else{
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  })
})

let modal_close = () => {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
