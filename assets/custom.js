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

// Idle detection
let autoCancelTrans = () => {
	$('.countdown').remove();
	let countdown = $('<div class="countdown"></div>').css({
    'position': 'absolute',
    'width': '200px',
    'height': '200px',
    'left': 'calc(50% - 100px)',
    'top': 'calc(50%)',
    'border-radius': '50%',
    'font-size': '100px',
    'font-weight': '800',
		'display': 'none',
		'text-align': 'center',
		'background': 'var(--pink)',
		'line-height': '190px',
    'color': 'white',
		'z-index': '1001',
		'opacity': '1'
	});
	let layout = $('<div class="layout"></div>').css({
		'position': 'absolute',
		'width': '100%',
		'height': '100%',
		'background': 'rgba(0, 0, 0, 0.7)',
		'top': '0',
		'display': 'none',
    'z-index': '1000'
	});
	let alertDiv = $('<div class="alertDiv">Are you still there?</div>').css({
		'position': 'absolute',
		'width': '80%',
		'height': '40%',
		'top': '0',
		'background': 'white',
		'border-radius': '40px',
		'top': '30%',
		'left': '10%',
		'text-align': 'center',
		'font-size': '80px',
		'padding-top': '100px',
		'display': 'none',
    'z-index': '1000'
	})
	$('body').append(countdown);
	$('body').append(layout);
	$('body').append(alertDiv);
	let timeleft = 120; // 2 mins idle
	$(document).idleDetection({
	  onIdle: function() {
		  if((timeleft <= 10) && (timeleft > 0)){
			  $('.countdown').text(timeleft);
			  countdown.css({'display': 'block'});
			  layout.css({'display': 'block'});
			  alertDiv.css({'display': 'block'});
		  }else if(timeleft == 0){
        emptyCart();
        window.location.href="../index.html?cancel=1";
		  }else{

		  }
		  timeleft --;
	  },
	  onHide: function() {
		  //console.log('Hide');
	  },
	  onActive: function() {
		  //console.log('Active');
		  countdown.css({'display': 'none'});
		  layout.css({'display': 'none'});
		  alertDiv.css({'display': 'none'});
		  timeleft = 120;
	  },
	  onShow: function() {
		  //console.log('Show');
	  },
	  idleCheckPeriod: 1000
	});
}
if(window.location.href.indexOf('index.html') == -1){
  window.onload = autoCancelTrans();
}
