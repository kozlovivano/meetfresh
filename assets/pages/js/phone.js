let phone_number = '';
let formatted_phone_number = '';

let formatToPhone = (pn) => {
  let ret = '';
  // I am lazy and don't like to type things more than once
  const input = pn.replace(/\D/g,'').substring(0,10); // First ten digits of input only
  const zip = input.substring(0,3);
  const middle = input.substring(3,6);
  const last = input.substring(6,10);

  if(pn > 6){ret = `(${zip}) ${middle} - ${last}`;}
  else if(pn > 3){ret = `(${zip}) ${middle}`;}
  else if(pn > 0){ret = `(${zip}`;}
  return ret;
};

document.querySelectorAll('.keyboard p.key').forEach(item => {
  item.addEventListener('click', function(){
    if(phone_number.length < 10){
			if((phone_number == '') && (item.innerText == '0')){
        // Leading number can't be zero
      }else{
        phone_number += item.innerText;
  			formatted_phone_number = formatToPhone(phone_number);
  			document.querySelector('.phone-number').innerText = formatted_phone_number;
      }
		}
  })
})
document.querySelector('.clear').addEventListener('click', function(){
  phone_number = '';
  formatted_phone_number = '';
  document.querySelector('.phone-number').innerText = formatted_phone_number;
})
document.querySelector('.back').addEventListener('click', function(){
  phone_number = phone_number.substring(0, phone_number.length - 1);
  formatted_phone_number = formatToPhone(phone_number);
  document.querySelector('.phone-number').innerText = formatted_phone_number;
})

let phoneEnter = () => {
  if(phone_number.length < 10){
    // Add exception for invalid phone number
    console.log('Phone number invalid');
  }else{
    // Do actions here
    console.log('Phone number: ' + phone_number, 'Formatted phone number: ' + formatted_phone_number);
  }
}
