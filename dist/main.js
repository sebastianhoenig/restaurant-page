/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
function createContact() {
  const container = document.createElement("div");
  container.classList.add("container-contact");
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const phone = document.createElement("p");
  phone.textContent = "☎️ 06007 - 2571";
  const adress = document.createElement("p");
  adress.textContent = "🏠 Haingrabenstraße 1, 61381 Friedrichsdorf";
  const img = document.createElement("img");
  img.src = "./img/location.png";
  contact.append(phone, adress, img);
  container.append(contact);
  return container;
}




/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
  const container = document.createElement("div");
  container.classList.add("container");
  const home = document.createElement("div");
  home.classList.add("home");
  const welcome = document.createElement("p");
  welcome.classList.add("welcome");
  welcome.textContent = "Herzlich Willkommen";
  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = "bei der Pizzeria Da Santo";
  const button = document.createElement("button");
  button.classList.add("button");
  button.id = "menu-button";
  button.textContent = "Zum Menü";
  home.append(welcome, description);
  container.appendChild(home);
  return container;
}




/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
  const container = document.createElement("div");
  container.classList.add("container-menu");
  const tables = document.createElement("div");
  tables.classList.add("tables");
  const pizzaTable = createTable(
    [
      { name: "Tomaten, Käse", price: "5,00€" },
      { name: "Tomaten, Käse, Salami", price: "5,00€" },
      { name: "Tomaten, Käse, Salami, Schinken", price: "5,00€" },
      { name: "Tomaten, Käse, Salami", price: "5,00€" },
      { name: "Tomaten, Käse, Salami, Schinken", price: "5,00€" },
    ],
    ["name", "price"],
    ["Pizza", ""]
  );
  const pastaTable = createTable(
    [
      { name: "Tomaten, Käse", price: "5,00€" },
      { name: "Tomaten, Käse, Salami", price: "5,00€" },
      { name: "Tomaten, Käse, Salami, Schinken", price: "5,00€" },
      { name: "Tomaten, Käse, Salami", price: "5,00€" },
      { name: "Tomaten, Käse, Salami, Schinken", price: "5,00€" },
    ],
    ["name", "price"],
    ["Pasta", ""]
  );
  const salatTable = createTable(
    [
      { name: "Tomaten, Käse", price: "5,00€" },
      { name: "Tomaten, Käse, Salami", price: "5,00€" },
      { name: "Tomaten, Käse, Salami, Schinken", price: "5,00€" },
      { name: "Tomaten, Käse, Salami", price: "5,00€" },
      { name: "Tomaten, Käse, Salami, Schinken", price: "5,00€" },
    ],
    ["name", "price"],
    ["Salat", ""]
  );
  tables.append(pizzaTable, pastaTable, salatTable);
  container.appendChild(tables);
  return container;
}

function createTable(objectArray, fields, fieldTitles) {
  let body = document.getElementsByTagName("body")[0];
  let tbl = document.createElement("table");
  let thead = document.createElement("thead");
  let thr = document.createElement("tr");
  fieldTitles.forEach((fieldTitle) => {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(fieldTitle));
    thr.appendChild(th);
  });
  thead.appendChild(thr);
  tbl.appendChild(thead);

  let tbdy = document.createElement("tbody");
  let tr = document.createElement("tr");
  objectArray.forEach((object) => {
    let tr = document.createElement("tr");
    fields.forEach((field) => {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(object[field]));
      tr.appendChild(td);
    });
    tbdy.appendChild(tr);
  });
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
  return tbl;
}




/***/ }),

/***/ "./src/modules/standard.js":
/*!*********************************!*\
  !*** ./src/modules/standard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavBar": () => (/* binding */ createNavBar),
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
function createNavBar() {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  const img = document.createElement("img");
  img.src = "./img/logo.png";
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/standard */ "./src/modules/standard.js");





// TODO: Do it with event deleagtion & .target.id case-switch

let content = document.getElementById("content");
const navbar = (0,_modules_standard__WEBPACK_IMPORTED_MODULE_3__.createNavBar)();
const footer = (0,_modules_standard__WEBPACK_IMPORTED_MODULE_3__.createFooter)();
let container = (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
content.append(navbar, container, footer);

const homeIcon = document.getElementById("navbar-home");
homeIcon.addEventListener("click", () => {
  let container = (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
  content.textContent = "";
  content.append(navbar, container, footer);
});

const menuIcon = document.getElementById("navbar-menu");
menuIcon.addEventListener("click", () => {
  let container = (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();
  content.textContent = "";
  content.append(navbar, container, footer);
});

const contactIcon = document.getElementById("navbar-contact");
contactIcon.addEventListener("click", () => {
  let container = (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();
  content.textContent = "";
  content.append(navbar, container, footer);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7QUNoQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUF1QztBQUMvQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRSxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUF1QztBQUMvQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRSxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUF1QztBQUMvQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRSxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQzs7Ozs7OztVQ3hDdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUNBO0FBQ007QUFDYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVk7QUFDM0IsZUFBZSwrREFBWTtBQUMzQixnQkFBZ0IseURBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0RBQWE7QUFDL0I7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9zdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWNvbnRhY3RcIik7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBob25lLnRleHRDb250ZW50ID0gXCLimI7vuI8gMDYwMDcgLSAyNTcxXCI7XHJcbiAgY29uc3QgYWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWRyZXNzLnRleHRDb250ZW50ID0gXCLwn4+gIEhhaW5ncmFiZW5zdHJhw59lIDEsIDYxMzgxIEZyaWVkcmljaHNkb3JmXCI7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWcuc3JjID0gXCIuL2ltZy9sb2NhdGlvbi5wbmdcIjtcclxuICBjb250YWN0LmFwcGVuZChwaG9uZSwgYWRyZXNzLCBpbWcpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoY29udGFjdCk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ29udGFjdCB9O1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZVwiKTtcclxuICB3ZWxjb21lLnRleHRDb250ZW50ID0gXCJIZXJ6bGljaCBXaWxsa29tbWVuXCI7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcImJlaSBkZXIgUGl6emVyaWEgRGEgU2FudG9cIjtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5pZCA9IFwibWVudS1idXR0b25cIjtcclxuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlp1bSBNZW7DvFwiO1xyXG4gIGhvbWUuYXBwZW5kKHdlbGNvbWUsIGRlc2NyaXB0aW9uKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9O1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItbWVudVwiKTtcclxuICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhYmxlcy5jbGFzc0xpc3QuYWRkKFwidGFibGVzXCIpO1xyXG4gIGNvbnN0IHBpenphVGFibGUgPSBjcmVhdGVUYWJsZShcclxuICAgIFtcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaVwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWksIFNjaGlua2VuXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaVwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWksIFNjaGlua2VuXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgXSxcclxuICAgIFtcIm5hbWVcIiwgXCJwcmljZVwiXSxcclxuICAgIFtcIlBpenphXCIsIFwiXCJdXHJcbiAgKTtcclxuICBjb25zdCBwYXN0YVRhYmxlID0gY3JlYXRlVGFibGUoXHJcbiAgICBbXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZVwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWlcIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pLCBTY2hpbmtlblwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWlcIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pLCBTY2hpbmtlblwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgIF0sXHJcbiAgICBbXCJuYW1lXCIsIFwicHJpY2VcIl0sXHJcbiAgICBbXCJQYXN0YVwiLCBcIlwiXVxyXG4gICk7XHJcbiAgY29uc3Qgc2FsYXRUYWJsZSA9IGNyZWF0ZVRhYmxlKFxyXG4gICAgW1xyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2VcIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaSwgU2NoaW5rZW5cIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaSwgU2NoaW5rZW5cIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICBdLFxyXG4gICAgW1wibmFtZVwiLCBcInByaWNlXCJdLFxyXG4gICAgW1wiU2FsYXRcIiwgXCJcIl1cclxuICApO1xyXG4gIHRhYmxlcy5hcHBlbmQocGl6emFUYWJsZSwgcGFzdGFUYWJsZSwgc2FsYXRUYWJsZSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlcyk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFibGUob2JqZWN0QXJyYXksIGZpZWxkcywgZmllbGRUaXRsZXMpIHtcclxuICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcclxuICBsZXQgdGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gIGxldCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICBsZXQgdGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gIGZpZWxkVGl0bGVzLmZvckVhY2goKGZpZWxkVGl0bGUpID0+IHtcclxuICAgIGxldCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgIHRoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZpZWxkVGl0bGUpKTtcclxuICAgIHRoci5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgfSk7XHJcbiAgdGhlYWQuYXBwZW5kQ2hpbGQodGhyKTtcclxuICB0YmwuYXBwZW5kQ2hpbGQodGhlYWQpO1xyXG5cclxuICBsZXQgdGJkeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgb2JqZWN0QXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICB0ZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvYmplY3RbZmllbGRdKSk7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH0pO1xyXG4gICAgdGJkeS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgfSk7XHJcbiAgdGJsLmFwcGVuZENoaWxkKHRiZHkpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodGJsKTtcclxuICByZXR1cm4gdGJsO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNZW51IH07XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaW1nLnNyYyA9IFwiLi9pbWcvbG9nby5wbmdcIjtcclxuICBpbWcuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBsaUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGlIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgbGlIb21lLmlkID0gXCJuYXZiYXItaG9tZVwiO1xyXG4gIGxpTWVudS50ZXh0Q29udGVudCA9IFwiU3BlaXNla2FydGVcIjtcclxuICBsaU1lbnUuaWQgPSBcIm5hdmJhci1tZW51XCI7XHJcbiAgbGlDb250YWN0LnRleHRDb250ZW50ID0gXCJLb250YWt0XCI7XHJcbiAgbGlDb250YWN0LmlkID0gXCJuYXZiYXItY29udGFjdFwiO1xyXG4gIHVsLmFwcGVuZChsaUhvbWUsIGxpTWVudSwgbGlDb250YWN0KTtcclxuICBuYXZiYXIuYXBwZW5kKGltZywgdWwpO1xyXG4gIHJldHVybiBuYXZiYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwMS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXRleHRcIik7XHJcbiAgcDEudGV4dENvbnRlbnQgPSBcIsOWZmZudW5nc3plaXRlbiBNby1Tb1wiO1xyXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcDIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci10ZXh0XCIpO1xyXG4gIHAyLnRleHRDb250ZW50ID0gXCIxMi4wMC0xMy4zMCAmIDE3LjMwLTIyLjAwXCI7XHJcbiAgaG91cnMuYXBwZW5kKHAxLCBwMik7XHJcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwMy5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXRleHRcIik7XHJcbiAgcDMuaW5uZXJIVE1MID1cclxuICAgIFwiICAgIERpZSBiZXN0ZSBQaXp6YSBpbiBGcmllZHJpY2hzZG9yZi4gPGJyPiBVbmQgZGFzIHNjaG9uIHNlaXQgw7xiZXIgMjUgSmFocmVuLlwiO1xyXG4gIGZvb3Rlci5hcHBlbmQoaG91cnMsIHAzKTtcclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVOYXZCYXIsIGNyZWF0ZUZvb3RlciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciwgY3JlYXRlTmF2QmFyIH0gZnJvbSBcIi4vbW9kdWxlcy9zdGFuZGFyZFwiO1xyXG5cclxuLy8gVE9ETzogRG8gaXQgd2l0aCBldmVudCBkZWxlYWd0aW9uICYgLnRhcmdldC5pZCBjYXNlLXN3aXRjaFxyXG5cclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnN0IG5hdmJhciA9IGNyZWF0ZU5hdkJhcigpO1xyXG5jb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcclxubGV0IGNvbnRhaW5lciA9IGNyZWF0ZUhvbWUoKTtcclxuY29udGVudC5hcHBlbmQobmF2YmFyLCBjb250YWluZXIsIGZvb3Rlcik7XHJcblxyXG5jb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLWhvbWVcIik7XHJcbmhvbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZUhvbWUoKTtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb250ZW50LmFwcGVuZChuYXZiYXIsIGNvbnRhaW5lciwgZm9vdGVyKTtcclxufSk7XHJcblxyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLW1lbnVcIik7XHJcbm1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZU1lbnUoKTtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb250ZW50LmFwcGVuZChuYXZiYXIsIGNvbnRhaW5lciwgZm9vdGVyKTtcclxufSk7XHJcblxyXG5jb25zdCBjb250YWN0SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLWNvbnRhY3RcIik7XHJcbmNvbnRhY3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhY3QoKTtcclxuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb250ZW50LmFwcGVuZChuYXZiYXIsIGNvbnRhaW5lciwgZm9vdGVyKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==