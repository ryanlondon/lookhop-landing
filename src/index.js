function composeEmail() {
  window.open('mailto:cbf1224@yahoo.com?subject=Hello Lookhop!');
}

window.addEventListener('load', function() {
  const email = document.getElementById('email').addEventListener('click', composeEmail);
});