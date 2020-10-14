let ordered_articles = [];

window.onload = () => {
  _l('---------------------- CART STARTED -----------------------');
  ordered_articles = [...getCart()];
  renderCheckoutItems();
  renerPrices();
}
let renderCheckoutItems = () => {
  let tag = '';
  if(ordered_articles.length == 0){
    tag = '<p class="f-md f-bold center mt-2">No items in cart.</p>';
  }else{
    ordered_articles.forEach(item => {
      tag += `
        <div class="ordered-item d-flex justify-around py-5 w-100">
          <div class="w-20 d-flex justify-center align-start">
            <img class="w-50" src="${item.article.image}" alt="" style="border-radius: 20px;">
          </div>
          <div class="w-50 d-flex flex-column justify-center align-start">
            <div class="d-flex justify-between w-100">
              <p class="f-xs f-bold">${item.article.description}</p>
              <p class="f-xs f-bold">*${item.qty}</p>
            </div>
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
          <div class="w-30 center">
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
        </div>
      `;
    })
  }
  document.querySelector('.ordered-items').innerHTML = tag;
}
let renerPrices = () => {
  let price_sum = 0;
  ordered_articles.forEach(item => {
    price_sum += item.qty * parseFloat(item.article.price);
    item.toppings_primary.forEach(_item => {
      price_sum += _item.qty * 0.1;
    })
    item.toppings_secondary.forEach(_item => {
      price_sum += _item.qty * 0.5;
    })
  })
  document.querySelectorAll('.total-price').forEach(item => {
    item.innerText = '$' + (price_sum * 1.2).toFixed(2);
  })
  document.querySelector('.sum-price').innerText = '$' + price_sum.toFixed(2);
  document.querySelector('.tax-price').innerText = '$' + (price_sum * 0.2).toFixed(2);
  document.querySelector('.coupon-price').innerText = '$0.00';
}
let clearCart = () => {
  ordered_articles = [];
  emptyCart();
  renderCheckoutItems();
  renerPrices();
}
