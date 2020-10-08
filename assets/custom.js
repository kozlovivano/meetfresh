/* Helper functions */
let _l = (param) => {
  console.log(param);
}

let setCart = (param) => {
  localStorage.setItem('CART_ITEMS', JSON.stringify(param));
}
let getCart = () => {
  if(localStorage.getItem('CART_ITEMS')){
    return JSON.parse(localStorage.getItem('CART_ITEMS'));
  }else{
    return [];
  }
}
let emptyCart = () => {
  localStorage.removeItem('CART_ITEMS');
}
