var button = document.getElementById('slider');
button.onclick = () => {
  document.getElementById('container').scrollLeft += 150;
};
var button = document.getElementById('slidel');
button.onclick = () => {
  document.getElementById('container').scrollLeft -= 150;
};