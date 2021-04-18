const links = document.querySelectorAll(".btnlink, .btn");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
var submitted = false;
$('#gform').on('submit', function (e) {
  $('#gform *').fadeOut(100);

  $('#gform').prepend('<h2>Thank You</h2><br><p>We will be in touch, soon.</p>');
});
