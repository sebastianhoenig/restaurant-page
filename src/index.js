import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact";
import { createFooter, createNavBar } from "./modules/standard";

// TODO: Do it with event deleagtion & .target.id case-switch

let content = document.getElementById("content");
const navbar = createNavBar();
const footer = createFooter();
let container = createHome();
content.append(navbar, container, footer);

const homeIcon = document.getElementById("navbar-home");
homeIcon.addEventListener("click", () => {
  let container = createHome();
  content.textContent = "";
  content.append(navbar, container, footer);
});

const menuIcon = document.getElementById("navbar-menu");
menuIcon.addEventListener("click", () => {
  let container = createMenu();
  content.textContent = "";
  content.append(navbar, container, footer);
});

const contactIcon = document.getElementById("navbar-contact");
contactIcon.addEventListener("click", () => {
  let container = createContact();
  content.textContent = "";
  content.append(navbar, container, footer);
});
