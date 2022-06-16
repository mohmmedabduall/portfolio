var imglist = Array.from(document.querySelectorAll(".itms img"));
var lightboxcontiner = document.getElementById("lightboxcontiner");
var lightboxitem = document.getElementById("lightboxitem");
var prev = document.getElementById("prev");
let btn = document.getElementById("btn");
var next = document.getElementById("next");
var close = document.getElementById("close");
let about = document.getElementById("ABOUT");
var currentslideindex = 0;
for (i = 0; i < imglist.length; i++) {
  imglist[i].addEventListener("click", function (e) {
    var imgSrC = e.target.getAttribute("src");
    currentslideindex = imglist.indexOf(e.target);
    lightboxitem.style.backgroundImage = `url(${imgSrC})`;
    lightboxcontiner.classList.replace("d-none", "d-flex");
  });
}
function nextslide() {
  if (currentslideindex == 5) {
    currentslideindex = 0;
  }

  currentslideindex++;
  var imgSrC = imglist[currentslideindex].getAttribute("src");
  lightboxitem.style.backgroundImage = `url(${imgSrC})`;
}

next.addEventListener("click", function () {
  nextslide();
});
function prevslide() {
  if (currentslideindex == 0) {
    currentslideindex = 5;
  }

  currentslideindex--;
  var imgSrC = imglist[currentslideindex].getAttribute("src");
  lightboxitem.style.backgroundImage = `url(${imgSrC})`;
}

prev.addEventListener("click", function () {
  prevslide();
});

function deliat() {
  lightboxcontiner.classList.add("d-none");
}

close.addEventListener("click", function () {
  deliat();
});
document.body.addEventListener("keyup", function (e) {
  console.log(e.code);
  if (e.code == "ArrowRight") {
    nextslide();
  }

  if (e.code == "ArrowLeft") {
    prevslide();
  }

  if (e.code == "Escape") {
    deliat();
  }
});


btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll" , function(){
  if (scrollY >= 400) {
    btn.classList.replace("d-none", "d-flex");
  } else {
    btn.classList.add("d-none");
  }
})
window.addEventListener("scroll" , function(){
  if (scrollY >= 210) {
    about.classList.replace("d-none", "d-flex");
  }
})












