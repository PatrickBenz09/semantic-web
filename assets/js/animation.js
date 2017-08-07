function toggleNewspaper() {
  let newspaper = document.getElementById("newspaper");
  newspaper.style.display = newspaper.style.display == "none" ? 'block' : 'none';
}

function toggleMagazine() {
  let magazine = document.getElementById("magazine");
  magazine.style.display = magazine.style.display == "none" ? 'block' : 'none';
}

function nextPage() {
  let page1 = document.getElementById("page-1");
  let page2 = document.getElementById("page-2")
  page1.classList.add("swing-left-fwd");
  // page1.className += " swing-left-fwd";
  setTimeout(function () {
    page1.style.display = 'none';
    page2.style.display = 'block';
  }, 250);
}

function previousPage() {
  let page1 = document.getElementById("page-1");
  let page2 = document.getElementById("page-2");
  page1.classList.remove("swing-left-fwd");
  // page1.className += " swing-right-fwd";
  page2.style.display = 'none';
  page1.style.display = 'block';
}
