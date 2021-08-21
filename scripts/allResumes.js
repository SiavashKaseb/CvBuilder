document.getElementById("navbar").addEventListener("mouseenter", func);

document.getElementById("icons").addEventListener("mouseenter", func);

document.getElementById("navbar").addEventListener("mouseleave", func2);

document.getElementById("menu-icon").addEventListener("mouseenter", func);

function func() {
  document.getElementById("navbar").style.left = "-110vh";
  document.getElementById("icons").className += " fade-in";
}

function func2() {
  document.getElementById("navbar").style.left = "-170vh";
  document.getElementById("icons").className -= " fade-in";
}
