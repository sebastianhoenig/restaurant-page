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
  img.src = "../img/location.png";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7QUNoQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUF1QztBQUMvQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRSxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUF1QztBQUMvQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRSxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVDQUF1QztBQUMvQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRSxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlEQUF5RDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQzs7Ozs7OztVQ3hDdEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUNBO0FBQ007QUFDYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVk7QUFDM0IsZUFBZSwrREFBWTtBQUMzQixnQkFBZ0IseURBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0RBQWE7QUFDL0I7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9zdGFuZGFyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWNvbnRhY3RcIik7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBob25lLnRleHRDb250ZW50ID0gXCLimI7vuI8gMDYwMDcgLSAyNTcxXCI7XHJcbiAgY29uc3QgYWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWRyZXNzLnRleHRDb250ZW50ID0gXCLwn4+gIEhhaW5ncmFiZW5zdHJhw59lIDEsIDYxMzgxIEZyaWVkcmljaHNkb3JmXCI7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWcuc3JjID0gXCIuLi9pbWcvbG9jYXRpb24ucG5nXCI7XHJcbiAgY29udGFjdC5hcHBlbmQocGhvbmUsIGFkcmVzcywgaW1nKTtcclxuICBjb250YWluZXIuYXBwZW5kKGNvbnRhY3QpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3QgfTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHdlbGNvbWUuY2xhc3NMaXN0LmFkZChcIndlbGNvbWVcIik7XHJcbiAgd2VsY29tZS50ZXh0Q29udGVudCA9IFwiSGVyemxpY2ggV2lsbGtvbW1lblwiO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJiZWkgZGVyIFBpenplcmlhIERhIFNhbnRvXCI7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICBidXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uXCI7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJadW0gTWVuw7xcIjtcclxuICBob21lLmFwcGVuZCh3ZWxjb21lLCBkZXNjcmlwdGlvbik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhvbWUgfTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLW1lbnVcIik7XHJcbiAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YWJsZXMuY2xhc3NMaXN0LmFkZChcInRhYmxlc1wiKTtcclxuICBjb25zdCBwaXp6YVRhYmxlID0gY3JlYXRlVGFibGUoXHJcbiAgICBbXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZVwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWlcIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pLCBTY2hpbmtlblwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWlcIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pLCBTY2hpbmtlblwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgIF0sXHJcbiAgICBbXCJuYW1lXCIsIFwicHJpY2VcIl0sXHJcbiAgICBbXCJQaXp6YVwiLCBcIlwiXVxyXG4gICk7XHJcbiAgY29uc3QgcGFzdGFUYWJsZSA9IGNyZWF0ZVRhYmxlKFxyXG4gICAgW1xyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2VcIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaSwgU2NoaW5rZW5cIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJUb21hdGVuLCBLw6RzZSwgU2FsYW1pXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaSwgU2NoaW5rZW5cIiwgcHJpY2U6IFwiNSwwMOKCrFwiIH0sXHJcbiAgICBdLFxyXG4gICAgW1wibmFtZVwiLCBcInByaWNlXCJdLFxyXG4gICAgW1wiUGFzdGFcIiwgXCJcIl1cclxuICApO1xyXG4gIGNvbnN0IHNhbGF0VGFibGUgPSBjcmVhdGVUYWJsZShcclxuICAgIFtcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaVwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWksIFNjaGlua2VuXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiVG9tYXRlbiwgS8Okc2UsIFNhbGFtaVwiLCBwcmljZTogXCI1LDAw4oKsXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlRvbWF0ZW4sIEvDpHNlLCBTYWxhbWksIFNjaGlua2VuXCIsIHByaWNlOiBcIjUsMDDigqxcIiB9LFxyXG4gICAgXSxcclxuICAgIFtcIm5hbWVcIiwgXCJwcmljZVwiXSxcclxuICAgIFtcIlNhbGF0XCIsIFwiXCJdXHJcbiAgKTtcclxuICB0YWJsZXMuYXBwZW5kKHBpenphVGFibGUsIHBhc3RhVGFibGUsIHNhbGF0VGFibGUpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZXMpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKG9iamVjdEFycmF5LCBmaWVsZHMsIGZpZWxkVGl0bGVzKSB7XHJcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XHJcbiAgbGV0IHRibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICBsZXQgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgbGV0IHRociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICBmaWVsZFRpdGxlcy5mb3JFYWNoKChmaWVsZFRpdGxlKSA9PiB7XHJcbiAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICB0aC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmaWVsZFRpdGxlKSk7XHJcbiAgICB0aHIuYXBwZW5kQ2hpbGQodGgpO1xyXG4gIH0pO1xyXG4gIHRoZWFkLmFwcGVuZENoaWxkKHRocik7XHJcbiAgdGJsLmFwcGVuZENoaWxkKHRoZWFkKTtcclxuXHJcbiAgbGV0IHRiZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gIG9iamVjdEFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgdGQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2JqZWN0W2ZpZWxkXSkpO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9KTtcclxuICAgIHRiZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gIH0pO1xyXG4gIHRibC5hcHBlbmRDaGlsZCh0YmR5KTtcclxuICBib2R5LmFwcGVuZENoaWxkKHRibCk7XHJcbiAgcmV0dXJuIHRibDtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTWVudSB9O1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGltZy5zcmMgPSBcIi4uL2ltZy9sb2dvLnBuZ1wiO1xyXG4gIGltZy5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBjb25zdCBsaUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgbGlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGxpQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBsaUhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBsaUhvbWUuaWQgPSBcIm5hdmJhci1ob21lXCI7XHJcbiAgbGlNZW51LnRleHRDb250ZW50ID0gXCJTcGVpc2VrYXJ0ZVwiO1xyXG4gIGxpTWVudS5pZCA9IFwibmF2YmFyLW1lbnVcIjtcclxuICBsaUNvbnRhY3QudGV4dENvbnRlbnQgPSBcIktvbnRha3RcIjtcclxuICBsaUNvbnRhY3QuaWQgPSBcIm5hdmJhci1jb250YWN0XCI7XHJcbiAgdWwuYXBwZW5kKGxpSG9tZSwgbGlNZW51LCBsaUNvbnRhY3QpO1xyXG4gIG5hdmJhci5hcHBlbmQoaW1nLCB1bCk7XHJcbiAgcmV0dXJuIG5hdmJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcclxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHAxLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItdGV4dFwiKTtcclxuICBwMS50ZXh0Q29udGVudCA9IFwiw5ZmZm51bmdzemVpdGVuIE1vLVNvXCI7XHJcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwMi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXRleHRcIik7XHJcbiAgcDIudGV4dENvbnRlbnQgPSBcIjEyLjAwLTEzLjMwICYgMTcuMzAtMjIuMDBcIjtcclxuICBob3Vycy5hcHBlbmQocDEsIHAyKTtcclxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHAzLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItdGV4dFwiKTtcclxuICBwMy5pbm5lckhUTUwgPVxyXG4gICAgXCIgICAgRGllIGJlc3RlIFBpenphIGluIEZyaWVkcmljaHNkb3JmLiA8YnI+IFVuZCBkYXMgc2Nob24gc2VpdCDDvGJlciAyNSBKYWhyZW4uXCI7XHJcbiAgZm9vdGVyLmFwcGVuZChob3VycywgcDMpO1xyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU5hdkJhciwgY3JlYXRlRm9vdGVyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9vdGVyLCBjcmVhdGVOYXZCYXIgfSBmcm9tIFwiLi9tb2R1bGVzL3N0YW5kYXJkXCI7XHJcblxyXG4vLyBUT0RPOiBEbyBpdCB3aXRoIGV2ZW50IGRlbGVhZ3Rpb24gJiAudGFyZ2V0LmlkIGNhc2Utc3dpdGNoXHJcblxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuY29uc3QgbmF2YmFyID0gY3JlYXRlTmF2QmFyKCk7XHJcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xyXG5sZXQgY29udGFpbmVyID0gY3JlYXRlSG9tZSgpO1xyXG5jb250ZW50LmFwcGVuZChuYXZiYXIsIGNvbnRhaW5lciwgZm9vdGVyKTtcclxuXHJcbmNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItaG9tZVwiKTtcclxuaG9tZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBsZXQgY29udGFpbmVyID0gY3JlYXRlSG9tZSgpO1xyXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kKG5hdmJhciwgY29udGFpbmVyLCBmb290ZXIpO1xyXG59KTtcclxuXHJcbmNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItbWVudVwiKTtcclxubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBsZXQgY29udGFpbmVyID0gY3JlYXRlTWVudSgpO1xyXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kKG5hdmJhciwgY29udGFpbmVyLCBmb290ZXIpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNvbnRhY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItY29udGFjdFwiKTtcclxuY29udGFjdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBsZXQgY29udGFpbmVyID0gY3JlYXRlQ29udGFjdCgpO1xyXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kKG5hdmJhciwgY29udGFpbmVyLCBmb290ZXIpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9