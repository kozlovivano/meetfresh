$('.items .item').click(function(){
  if($(this).find('.item-details').hasClass('hide')){
    $(this).find('.item-details').removeClass('hide')
  }else{
    $(this).find('.item-details').addClass('hide')
  }
})
