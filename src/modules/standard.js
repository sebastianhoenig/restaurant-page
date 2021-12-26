function createNavBar() {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  const img = document.createElement("img");
  img.src = "../img/logo.png";
  img.classList.add("logo");
  const ul = document.createElement("ul");
  const liHome = document.createElement("li");
  const liMenu = document.createElement("li");
  const liContact = document.createElement("li");
  liHome.textContent = "Home";
  liHome.id = "navbar-home";
  liMenu.textContent = "Speisekarte";
  liMenu.id = "navbar-menu";
  liContact.textContent = "Kontakt";
  liContact.id = "navbar-contact";
  ul.append(liHome, liMenu, liContact);
  navbar.append(img, ul);
  return navbar;
}

function createFooter() {
  const footer = document.createElement("footer");
  const hours = document.createElement("div");
  hours.classList.add("hours");
  const p1 = document.createElement("p");
  p1.classList.add("footer-text");
  p1.textContent = "Öffnungszeiten Mo-So";
  const p2 = document.createElement("p");
  p2.classList.add("footer-text");
  p2.textContent = "12.00-13.30 & 17.30-22.00";
  hours.append(p1, p2);
  const p3 = document.createElement("p");
  p3.classList.add("footer-text");
  p3.innerHTML =
    "    Die beste Pizza in Friedrichsdorf. <br> Und das schon seit über 25 Jahren.";
  footer.append(hours, p3);
  return footer;
}

export { createNavBar, createFooter };
