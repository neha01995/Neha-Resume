// var navTags = document.querySelectorAll(".nav-menu a");

// for (var i = 0; i <= navTags.length; i++) {
//   navTags[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     var targetsectionId = this.textContent.trim().toLowerCase();
//     console.log(targetsectionId);

//     var targetSection = document.getElementById(targetsectionId);
//     console.log(targetSection);

//     var targetcoordinates = targetSection.getBoundingClientRect();
//     // console.log(targetcoordinates.top);
//     // var target = parseInt(targetcoordinates.top);
//     var interval = setInterval(function () {
//       if (targetcoordinates.top <= 0) {
//         clearInterval(interval);
//       }
//       targetcoordinates = targetSection.getBoundingClientRect();
//       console.log(targetcoordinates.top);
//       //   target = target - 1;
//       window.scrollBy(0, 5);
//     }, 1);
//   });
// }

var navTags = document.querySelectorAll(".nav-menu a");
var interval;

for (var i = 0; i < navTags.length; i++) {
  navTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetsectionId = this.textContent.trim().toLowerCase();
    console.log(targetsectionId);

    var targetSection = document.getElementById(targetsectionId);
    console.log(targetSection);

    interval = setInterval(function () {
      scrollvertically(targetSection);
    }, 50);
  });
}
function scrollvertically(targetSection) {
  var targetcoordinates = targetSection.getBoundingClientRect();
  if (targetcoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }

  //   target = target - 1;
  window.scrollBy(0, 50);
}

// var exp = document.getElementById("experience");
// var coordinates = exp.getBoundingClientRect();
// var targetpos = 9.425000190734863;
// var currpos = 1909.425048828125;
// var scrollInterval = setInterval(function () {
//   if (currpos <= targetpos) {
//     clearInterval(scrollInterval);
//     return;
//   }
//   currpos += 50;
//   window.scrollBy(0, 50);
// }, 100);

var progressbar = document.querySelectorAll(".skill-progress >div");
var skillContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animationDone = false;

function initialiseBars() {
  for (let bar of progressbar) {
    bar.style.width = 0 + "%";
  }
}
initialiseBars();

function fillBars() {
  for (let bar of progressbar) {
    let targetwidth = bar.getAttribute("data-bar-width");
    console.log(targetwidth);
    let currWidth = 0;
    let interval = setInterval(function () {
      if (currWidth > targetwidth) {
        clearInterval(interval);
        return;
      }
      currWidth++;
      bar.style.width = currWidth + "%";
    }, 25);
  }
}

function checkScroll() {
  // you have to check whether skill container is visible
  var coordinates = skillContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top <= window.innerHeight) {
    animationDone = true;
    console.log("skills section visible");
    fillBars();
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}
