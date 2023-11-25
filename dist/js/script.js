// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const totop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    totop.classList.remove("hidden");
    totop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    totop.classList.remove("flex");
    totop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klick di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// penyimpanan tampilan tema berdasarkan user
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Hidden Content js
const totalContent = 10;
let visibleContent = 6;
const contentContainer = document.getElementById("content-container");
const loadMoreButton = document.getElementById("load-more");

function loadMoreContent() {
  const contents = contentContainer.children;

  for (
    let i = visibleContent;
    i < Math.min(visibleContent + 3, totalContent);
    i++
  ) {
    contents[i].style.display = "block";
  }

  visibleContent += 3;

  if (visibleContent >= totalContent) {
    loadMoreButton.style.display = "none";
  }
}

// Sembunyikan konten yang tidak perlu ditampilkan awal
for (let i = visibleContent; i < totalContent; i++) {
  contentContainer.children[i].style.display = "none";
}

// Sembunyikan tombol "Lihat Lainnya" jika konten sudah habis
if (visibleContent >= totalContent) {
  loadMoreButton.style.display = "none";
}
