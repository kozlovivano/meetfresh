let ice_level = 'regular';
let sugar_level = 'regular';
let toppings_primary = []; // 0.1 topping
let toppings_secondary = []; // 0.5 topping
let qty = 1;
let selected_article = [];

let ordered_articles = [];
/* API functions */

// 1. Get category //
let getCategory = () => {
  return [...CATEGORIES];
}
// 2. Get groups //
let getGroups = (category_id) => {
  return [...GROUPS.filter(item => item.category_id == category_id)];
}
// 3. Get articles //
let getArticles = (group_id) => {
  return [...ARTICLES.filter(item => item.group_id == group_id)];
}
// 4. Get article //
let getArticle = (id) => {
  return [...ARTICLES.filter(item => item.id == id)];
}
/* APP start */
window.onload = () => {
  _l('---------------------- MENU STARTED -----------------------');
  ordered_articles = [...getCart()];
  updateCart();
  let categories = getCategory();
  let tag = "";
  categories.forEach(item => {
    tag += `
      <div class="category-item h-50 w-30 bg-white" data-category-id="${item.id}">
        <p class="center f-sm mt-1 f-bold">${item.description}</p>
        <p class="center f-xs f-bold">${item.description_chinese}</p>
      </div>
    `;
  })
  document.querySelector('.category').innerHTML = tag;
  selectCategory(categories[0].id);

  document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function(){
      selectCategory(item.getAttribute('data-category-id'));
    })
  })
}

let selectCategory = (category_id) => {
  document.querySelectorAll('.category-item').forEach(item => {
    item.classList.remove('active');
  })
  document.querySelector(`div[data-category-id="${category_id}"]`).classList.add('active');
  // Render menu
  let tag = '';
  getGroups(category_id).forEach(item => {
    tag += `
      <div class="menu-item d-flex flex-row align-center relative" data-group-id="${item.id}">
        <div class="image w-25">
          <img src="${item.image}" alt="MeetFresh item image">
        </div>
        <div class="description w-60">
          <p class="f-md f-bold">${item.description}</p>
          <p class="f-xxs gray mt-1">${item.description_chinese}</p>
        </div>
        <div class="center w-15">
          <i class="fa fa-caret-down gray f-lg"></i>
        </div>
        <div class="menu-item-details absolute bg-white hide"></div>
      </div>
    `;
  })
  document.querySelector('.menu').innerHTML = tag;

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(){
      this.querySelector('.menu-item-details').classList.toggle('hide');
      if(this.querySelector('.menu-item-details').innerHTML == ''){
        selectGroup(item.getAttribute('data-group-id'));
      }
    })
  })
}

let selectGroup = (group_id) => {
  let tag = '';
  getArticles(group_id).forEach(item => {
    tag += `
      <div class="menu-item-detail d-flex" data-article-id="${item.id}">
        <div class="w-25">
          <img src="${item.image}" alt="MeetFresh item image">
        </div>
        <div class="w-75 d-flex flex-column justify-center">
          <p class="f-xs">${item.description}</p>
          <p class="f-xxs gray mt-1">${item.description_chinese}</p>
        </div>
      </div>
    `;
  })
  document.querySelector(`div[data-group-id="${group_id}"] .menu-item-details`).innerHTML = tag;

  document.querySelectorAll('.menu-item-detail').forEach(item => {
    item.onclick = () => {
      let tag = '';
      modal.style.display = 'flex';
      selectArticle(item.getAttribute('data-article-id'));
    }
  })
}

let selectArticle = (article_id) => {
  let tag = '';
  getArticle(article_id).forEach(item => {
    tag += `
      <div class="w-40 d-flex justify-center align-center">
        <img src="${item.image}" alt="MeetFresh image">
      </div>
      <div class="w-60 d-flex flex-column justify-center align-start ml-3">
        <p class="f-md f-bold">${item.description}</p>
        <p class="f-xxs gray">${item.description_chinese}</p>
        <p class="f-xxs dark mt-1 f-bold">Grass Jelly, Grass Jelly Shaved Ice, Read Beans, Peanuts, Boba</p>
        <p class="f-ss gray mt-1">Icy Grass Jelly #3</p>
        <p class="f-ss danger mt-1">*Contains Peanuts / peanut</p>
      </div>
    `;
    selected_article = [item];
  })
  document.querySelector('.item-details').innerHTML = tag;

  getAddons(article_id);
}

let getAddons = (article_id) => {
  let tag = `<div class="addon">
    <div class="accordion">
      ICE / CH <span class="f-ss">*Required</span>
      <i class="fa fa-caret-down dark f-lg"></i>
    </div>
    <div class="panel">
      <div class="d-flex flex-row justify-around p-5">
        <div class="bg-light-gray w-20 panel-item active ice-level" data-ice-level="regular">
          <p class="center f-xxs f-bold">REGULAR</p>
          <p class="center f-xxs">CH</p>
        </div>
        <div class="bg-light-gray w-20 panel-item ice-level" data-ice-level="less">
          <p class="center f-xxs f-bold">LESS ICE</p>
          <p class="center f-xxs">CH</p>
        </div>
        <div class="bg-light-gray w-20 panel-item ice-level" data-ice-level="no">
          <p class="center f-xxs f-bold">NO ICE</p>
          <p class="center f-xxs">CH</p>
        </div>
        <div class="bg-light-gray w-20 panel-item ice-level" data-ice-level="hot">
          <p class="center f-xxs f-bold">HOT</p>
          <p class="center f-xxs">CH</p>
        </div>
      </div>
    </div>
  </div>
  <div class="addon">
    <div class="accordion">
      SUGAR / CH <span class="f-ss">*Required</span>
      <i class="fa fa-caret-down dark f-lg"></i>
    </div>
    <div class="panel">
      <div class="d-flex flex-row justify-around p-5">
        <div class="bg-light-gray w-20 panel-item active sugar-level" data-sugar-level="regular">
          <p class="center f-xxs f-bold">REGULAR</p>
          <p class="center f-xxs">CH</p>
        </div>
        <div class="bg-light-gray w-20 panel-item sugar-level" data-sugar-level="less">
          <p class="center f-xxs f-bold">LESS SUGAR</p>
          <p class="center f-xxs">CH</p>
        </div>
        <div class="bg-light-gray w-20 panel-item sugar-level" data-sugar-level="no">
          <p class="center f-xxs f-bold">NO SUGAR</p>
          <p class="center f-xxs">CH</p>
        </div>
      </div>
    </div>
  </div>
  <div class="addon">
    <div class="accordion">
      $0.1 TOPPING / $0.1 CH <span class="f-ss">*Optional</span>
      <i class="fa fa-caret-down dark f-lg"></i>
    </div>
    <div class="panel">
      <div class="toppings">
        <div class="topping d-flex flex-row justify-around px-5 py-2 align-center">
          <div class="w-50 f-xs center" style="border-radius: 20px;">Topping name</div>
          <div class="bg-light-gray w-10 f-lg center" style="border-radius: 20px;">1</div>
          <i class="f-xl fa fa-plus-circle bg-white yellow"></i>
          <i class="f-xl fa fa-minus-circle bg-white yellow"></i>
        </div>
        <div class="topping d-flex flex-row justify-around px-5 py-2 align-center">
          <div class="w-50 f-xs center" style="border-radius: 20px;">Topping name</div>
          <div class="bg-light-gray w-10 f-lg center" style="border-radius: 20px;">1</div>
          <i class="f-xl fa fa-plus-circle bg-white yellow"></i>
          <i class="f-xl fa fa-minus-circle bg-white yellow"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="addon">
    <div class="accordion">
      $0.1 TOPPING / $0.5 CH <span class="f-ss">*Optional</span>
      <i class="fa fa-caret-down dark f-lg"></i>
    </div>
    <div class="panel">
      <div class="toppings">
        <div class="topping d-flex flex-row justify-around px-5 py-2 align-center">
          <div class="w-50 f-xs center" style="border-radius: 20px;">Topping name</div>
          <div class="bg-light-gray w-10 f-lg center" style="border-radius: 20px;">1</div>
          <i class="f-xl fa fa-plus-circle bg-white yellow"></i>
          <i class="f-xl fa fa-minus-circle bg-white yellow"></i>
        </div>
        <div class="topping d-flex flex-row justify-around px-5 py-2 align-center">
          <div class="w-50 f-xs center" style="border-radius: 20px;">Topping name</div>
          <div class="bg-light-gray w-10 f-lg center" style="border-radius: 20px;">1</div>
          <i class="f-xl fa fa-plus-circle bg-white yellow"></i>
          <i class="f-xl fa fa-minus-circle bg-white yellow"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="addon">
    <div class="accordion">
      QUANTITY / CH <span class="f-ss">*Required</span>
      <i class="fa fa-caret-down dark f-lg"></i>
    </div>
    <div class="panel">
      <div class="d-flex flex-row justify-around p-5">
        <div class="bg-light-gray w-20 f-lg center qty" style="border-radius: 20px;">1</div>
        <i class="f-xl fa fa-plus-circle bg-white yellow plus-qty"></i>
        <i class="f-xl fa fa-minus-circle bg-white yellow minus-qty"></i>
      </div>
    </div>
  </div>`;
  document.querySelector('.addons').innerHTML = tag;
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

  // Ice and sugar level
  document.querySelectorAll('.ice-level').forEach(item => {
    item.addEventListener('click', function(){
      document.querySelector('.ice-level.active').classList.remove('active');
      this.classList.add('active');
      ice_level = this.getAttribute('data-ice-level');
    })
  })
  document.querySelectorAll('.sugar-level').forEach(item => {
    item.addEventListener('click', function(){
      document.querySelector('.sugar-level.active').classList.remove('active');
      this.classList.add('active');
      sugar_level = this.getAttribute('data-sugar-level');
    })
  })

  // Qty
  document.querySelector('.plus-qty').addEventListener('click', function(){
    qty++;
    document.querySelector('.qty').innerHTML = qty;
  })
  document.querySelector('.minus-qty').addEventListener('click', function(){
    if(qty != 1){
      qty--;
      document.querySelector('.qty').innerHTML = qty;
    }
  })
}


/* Page functions */
let addToCart = () => {
  ordered_articles.push({
    id: new Date().getTime(),
    article: selected_article[0],
    qty: qty,
    sugar_level: sugar_level,
    ice_level: ice_level,
    toppings_primary: [],
    toppings_secondary: []
  });
  updateCart();
  modalClose();
  // Reset
  selected_article = [];
  qty = 1;
  sugar_level = 'regular';
  ice_level = 'regular';
  toppings_primary = [];
  toppings_secondary = [];
}
let clearCart = () => {
  ordered_articles = [];
  emptyCart();
  updateCart();
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
    })
    document.querySelector('.price').innerHTML = '$' + price.toFixed(2);
  }
}
let modal = document.querySelector('.modal');

let modalClose = () => {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
