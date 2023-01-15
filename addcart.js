var addItemId=0;
function addcart(item)
{
  var selecteditem  = document.createElement('div');
  selecteditem.classList.add('cart');
  selecteditem.setAttribute('id',addItemId);
  var img = document.createElement('img');
  img.setAttribute('src',item.children[0].currentSrc);
  var cartItems = document.getElementById('title');
  selecteditem.append(selecteditem);
  cartItems.append(selecteditem);




}