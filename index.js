const nav = document.getElementById("nav");
const ul = nav.childNodes[1];
const liOdos = ul.childNodes[3];
const liMyInfo = ul.childNodes[5];
const liComm = ul.childNodes[7];
const home = document.getElementById("home");

const odos = document.getElementById("odos");
const myInfo = document.getElementById("myInfo");
const comm = document.getElementById("community");

function goHome() {
  window.scrollTo(0, 0);
}

function goOdos() {
  window.scrollTo(0, odos.offsetTop);
}

function goMyInfo() {
  window.scrollTo(0, myInfo.offsetTop);
}

function goComm() {
  window.scrollTo(0, comm.offsetTop);
}

window.addEventListener("scroll", () => {
  const offsetTop = nav.offsetHeight;
  const currentScroll = window.scrollY;
  if (currentScroll > offsetTop) {
    home.className = "visible";
    nav.style.position = "fixed";
    nav.style.top = "50%";
    nav.style.right = "20px";
    nav.style.transform = "translateY(-50%)";
    home.innerHTML = '<i class="fas fa-home"></i>';
    liOdos.innerHTML = '<i class="fas fa-book"></i>';
    liMyInfo.innerHTML = '<i class="fas fa-user"></i>';
    liComm.innerHTML = '<i class="fas fa-users"></i>';
    liOdos.style.color = "#ec4646";
    liMyInfo.style.color = "#75b79e";
    liComm.style.color = "#75b79e";
    if (currentScroll > myInfo.offsetTop) {
      liOdos.style.color = "#75b79e";
      liMyInfo.style.color = "#ec4646";
      liComm.style.color = "#75b79e";
    }
    if (currentScroll > comm.offsetTop) {
      liOdos.style.color = "#75b79e";
      liMyInfo.style.color = "#75b79e";
      liComm.style.color = "#ec4646";
    }
  } else {
    home.className = "invisible";
    nav.style.removeProperty("position");
    nav.style.removeProperty("top");
    nav.style.removeProperty("right");
    nav.style.removeProperty("transform");
    home.innerHTML = "홈으로";
    liOdos.innerHTML = "하루 한문장";
    liMyInfo.innerHTML = "내정보";
    liComm.innerHTML = "커뮤니티";
    liOdos.style.color = "#75b79e";
    liMyInfo.style.color = "#75b79e";
    liComm.style.color = "#75b79e";
  }
});

window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
