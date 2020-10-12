let ordered_articles = [];

window.onload = () => {
  _l('---------------------- MEMBER STARTED -----------------------');
  ordered_articles = [...getCart()];
  updateCart();
}
let updateCart = () => {
  if(ordered_articles.length == 0){
    document.querySelector('.cart').classList.add('hide');
    document.querySelector('.badge').classList.add('hide');
    document.querySelector('.empty-cart').classList.remove('hide');
  }else{
    document.querySelector('.cart').classList.remove('hide');
    document.querySelector('.badge').classList.remove('hide');
    document.querySelector('.empty-cart').classList.add('hide');

    document.querySelector('.badge').innerHTML = ordered_articles.length;
    let price = 0;
    ordered_articles.forEach(item => {
      price += parseFloat(item.article.price) * item.qty;
    })
    document.querySelector('.price').innerHTML = '$' + price.toFixed(2);
  }
}
let clearCart = () => {
  ordered_articles = [];
  emptyCart();
  updateCart();
  window.location.href = '../index.html';
}
