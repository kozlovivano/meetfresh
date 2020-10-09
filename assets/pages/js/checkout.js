let ordered_articles = [];

window.onload = () => {
  _l('---------------------- CART STARTED -----------------------');
  ordered_articles = [...getCart()];
  renderCheckoutItems();
  renerPrices();
}
let renderCheckoutItems = () => {
  let tag = '';
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
          <p class="f-ss mt-1">Topping: read Bean * 1, Caramel Pudding * 1, Grass Jelly * 1, Black Sugar Boba * 2</p>
        </div>
        <div class="w-30 center">
          <p class="f-lg f-bold">$${(item.qty * parseFloat(item.article.price)).toFixed(2)}</p>
        </div>
      </div>
    `;
  })
  document.querySelector('.ordered-items').innerHTML = tag;
}
let renerPrices = () => {
  let price_sum = 0;
  ordered_articles.forEach(item => {
    price_sum += item.qty * parseFloat(item.article.price);
  })
  document.querySelectorAll('.total-price').forEach(item => {
    item.innerText = '$' + (price_sum * 1.2).toFixed(2);
  })
  document.querySelector('.sum-price').innerText = '$' + price_sum.toFixed(2);
  document.querySelector('.tax-price').innerText = '$' + (price_sum * 0.2).toFixed(2);
  document.querySelector('.coupon-price').innerText = '$0.00';
}
