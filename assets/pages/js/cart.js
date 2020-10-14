let ordered_articles = [];

window.onload = () => {
  _l('---------------------- CART STARTED -----------------------');
  ordered_articles = [...getCart()];
  updateCart();
  renderCartItems();
}
let renderCartItems = () => {
  let tag = '';
  if(ordered_articles.length == 0){
    tag = '<p class="f-md f-bold center">No items in cart.</p>';
  }else{
    ordered_articles.forEach(item => {
      tag += `
        <div class="cart-item" data-item-id="${item.id}">
          <div class="cart-item-details d-flex w-100">
            <div class="w-40 d-flex justify-center align-center">
              <img class="w-50" src="${item.article.image}" alt="" style="border-radius: 20px;">
            </div>
            <div class="w-60 d-flex flex-column justify-center align-start">
              <p class="f-xs">${item.article.description}</p>
              <p class="f-xs">${item.article.description_chinese}</p>
              <p class="f-ss mt-1">Ice Level: ${item.ice_level.toUpperCase()} Sweet Level: ${item.sugar_level.toUpperCase()}</p>
              <p class="f-ss mt-1">Topping: ${
                (() => {
                  let ret = '';
                  item.toppings_primary.forEach(_item => {
                    ret += `${_item.description} * ${_item.qty} `;
                  })
                  item.toppings_secondary.forEach(_item => {
                    ret += `${_item.description} * ${_item.qty} `;
                  })
                  return ret;
                })()
              }</p>
            </div>
          </div>
          <div class="cart-item-parameters d-flex w-100 mt-2">
            <div class="w-40 d-flex justify-center align-center flex-column">
              <p class="f-lg i-price">$${(item.qty * parseFloat(item.article.price)).toFixed(2)}</p>
              <p class="f-xs gray i-price"> + $${(() => {
                  let topping_price = 0;
                  item.toppings_primary.forEach(_item => {
                    topping_price += parseFloat(_item.qty) * 0.1;
                  })
                  item.toppings_secondary.forEach(_item => {
                    topping_price += parseFloat(_item.qty) * 0.5;
                  })
                  return topping_price.toFixed(2);
                  })()}
              </p>
            </div>
            <div class="w-60 d-flex justify-between align-center">
              <div class="bg-light-gray w-20 f-lg center i-qty" style="border-radius: 20px;">${item.qty}</div>
              <i class="f-xl fa fa-plus-circle bg-white yellow i-plus"></i>
              <i class="f-xl fa fa-minus-circle bg-white yellow i-minus"></i>
              <div class="w-30 white bg-yellow f-xs px-2 py-1 center i-delete" style="border-radius: 50px;">
                Delete
              </div>
            </div>
          </div>
        </div>
      `;
    })
  }
  document.querySelector('.cart-items').innerHTML = tag;
  if(ordered_articles.length != 0){
    document.querySelectorAll('.cart-item').forEach(item => {
      item.querySelector('.i-plus').addEventListener('click', function(){
        ordered_articles.map(article => {
          if(article.id == item.getAttribute('data-item-id')){
            article.qty++;
            item.querySelector('.i-qty').innerHTML = article.qty;
            item.querySelector('.i-price').innerHTML = '$' + (article.qty * parseFloat(article.article.price)).toFixed(2);
          }
        })
        updateCart();
      })
      item.querySelector('.i-minus').addEventListener('click', function(){
        ordered_articles.map(article => {
          if(article.id == item.getAttribute('data-item-id')){
            if(article.qty != 1){
              article.qty--;
              item.querySelector('.i-qty').innerHTML = article.qty;
              item.querySelector('.i-price').innerHTML = '$' + (article.qty * parseFloat(article.article.price)).toFixed(2);
            }
          }
        })
        updateCart();
      })
      item.querySelector('.i-delete').addEventListener('click', function(){
        ordered_articles = [...ordered_articles.filter(article => article.id != item.getAttribute('data-item-id'))];
        item.parentElement.removeChild(item);
        updateCart();
      })
    })
  }
}

let clearCart = () => {
  ordered_articles = [];
  emptyCart();
  updateCart();
  renderCartItems();
}
let updateCart = () => {
  setCart(ordered_articles);
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
      item.toppings_primary.forEach(_item => {
        price += _item.qty * 0.1;
      })
      item.toppings_secondary.forEach(_item => {
        price += _item.qty * 0.5;
      })
    })
    document.querySelector('.price').innerHTML = '$' + price.toFixed(2);
  }
}
