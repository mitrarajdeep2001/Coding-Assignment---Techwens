//Constants
const threshold = 60;
const QA = document.querySelector(".q-a");
const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.querySelector(".menu-items");

//Function to change Navbar BG color
window.addEventListener("scroll", () => {
  if (Math.floor(scrollY) >= threshold) {
    document.querySelector("header").style.backgroundColor = "aliceBlue";
    document.querySelector("header").style.opacity = "0.8";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector("header").style.opacity = "1";
  }
});

//Function to handle menubar
function handleMenubar() {
  menuIcon.addEventListener("click", () => {
    if (menuIcon.innerText === "menu") {
      menuIcon.innerText = "close";
      menuItems.style.display = "block";
      menuItems.classList.add("slide-bottom");
    } else {
      menuIcon.innerText = "menu";
      menuItems.style.display = "none";
      menuItems.classList.add("slide-bottom");
    }
  });
}
handleMenubar();

//Function to expand and collapse Q&A
function expandCollapseQA() {
  QA.addEventListener("click", (event) => {
    if (event.target.innerText === "+") {
      const itemNum = event.target.parentNode.parentNode.className;
      document.querySelector(`.${itemNum} .answer`).style.display = "block";
      document.querySelector(`.${itemNum} .question span`).innerText = "-";
      document.querySelector(`.${itemNum} .question span`).style.fontSize =
        "2rem";
    } else if (event.target.innerText === "-") {
      const itemNum = event.target.parentNode.parentNode.className;
      document.querySelector(`.${itemNum} .answer`).style.display = "none";
      document.querySelector(`.${itemNum} .question span`).innerText = "+";
      document.querySelector(`.${itemNum} .question span`).style.fontSize =
        "1.5rem";
    }
  });
}
expandCollapseQA();
