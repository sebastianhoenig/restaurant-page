(()=>{"use strict";function e(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("home");const n=document.createElement("p");n.classList.add("welcome"),n.textContent="Herzlich Willkommen";const a=document.createElement("p");a.classList.add("description"),a.textContent="bei der Pizzeria Da Santo";const c=document.createElement("button");return c.classList.add("button"),c.id="menu-button",c.textContent="Zum Menü",t.append(n,a),e.appendChild(t),e}function t(){const e=document.createElement("div");e.classList.add("container-menu");const t=document.createElement("div");t.classList.add("tables");const a=n([{name:"Tomaten, Käse",price:"5,00€"},{name:"Tomaten, Käse, Salami",price:"5,00€"},{name:"Tomaten, Käse, Salami, Schinken",price:"5,00€"},{name:"Tomaten, Käse, Salami",price:"5,00€"},{name:"Tomaten, Käse, Salami, Schinken",price:"5,00€"}],["name","price"],["Pizza",""]),c=n([{name:"Tomaten, Käse",price:"5,00€"},{name:"Tomaten, Käse, Salami",price:"5,00€"},{name:"Tomaten, Käse, Salami, Schinken",price:"5,00€"},{name:"Tomaten, Käse, Salami",price:"5,00€"},{name:"Tomaten, Käse, Salami, Schinken",price:"5,00€"}],["name","price"],["Pasta",""]),o=n([{name:"Tomaten, Käse",price:"5,00€"},{name:"Tomaten, Käse, Salami",price:"5,00€"},{name:"Tomaten, Käse, Salami, Schinken",price:"5,00€"},{name:"Tomaten, Käse, Salami",price:"5,00€"},{name:"Tomaten, Käse, Salami, Schinken",price:"5,00€"}],["name","price"],["Salat",""]);return t.append(a,c,o),e.appendChild(t),e}function n(e,t,n){let a=document.getElementsByTagName("body")[0],c=document.createElement("table"),o=document.createElement("thead"),d=document.createElement("tr");n.forEach((e=>{let t=document.createElement("th");t.appendChild(document.createTextNode(e)),d.appendChild(t)})),o.appendChild(d),c.appendChild(o);let m=document.createElement("tbody");return document.createElement("tr"),e.forEach((e=>{let n=document.createElement("tr");t.forEach((t=>{var a=document.createElement("td");a.appendChild(document.createTextNode(e[t])),n.appendChild(a)})),m.appendChild(n)})),c.appendChild(m),a.appendChild(c),c}let a=document.getElementById("content");const c=function(){const e=document.createElement("div");e.classList.add("navbar");const t=document.createElement("img");t.src="../img/logo.png",t.classList.add("logo");const n=document.createElement("ul"),a=document.createElement("li"),c=document.createElement("li"),o=document.createElement("li");return a.textContent="Home",a.id="navbar-home",c.textContent="Speisekarte",c.id="navbar-menu",o.textContent="Kontakt",o.id="navbar-contact",n.append(a,c,o),e.append(t,n),e}(),o=function(){const e=document.createElement("footer"),t=document.createElement("div");t.classList.add("hours");const n=document.createElement("p");n.classList.add("footer-text"),n.textContent="Öffnungszeiten Mo-So";const a=document.createElement("p");a.classList.add("footer-text"),a.textContent="12.00-13.30 & 17.30-22.00",t.append(n,a);const c=document.createElement("p");return c.classList.add("footer-text"),c.innerHTML="    Die beste Pizza in Friedrichsdorf. <br> Und das schon seit über 25 Jahren.",e.append(t,c),e}();let d=e();a.append(c,d,o),document.getElementById("navbar-home").addEventListener("click",(()=>{let t=e();a.textContent="",a.append(c,t,o)})),document.getElementById("navbar-menu").addEventListener("click",(()=>{let e=t();a.textContent="",a.append(c,e,o)})),document.getElementById("navbar-contact").addEventListener("click",(()=>{let e=function(){const e=document.createElement("div");e.classList.add("container-contact");const t=document.createElement("div");t.classList.add("contact");const n=document.createElement("p");n.textContent="☎️ 06007 - 2571";const a=document.createElement("p");a.textContent="🏠 Haingrabenstraße 1, 61381 Friedrichsdorf";const c=document.createElement("img");return c.src="../img/location.png",t.append(n,a,c),e.append(t),e}();a.textContent="",a.append(c,e,o)})),document.getElementById("menu-button").addEventListener("click",(()=>{console.log("HEY");let e=t();a.textContent="",a.append(c,e,o)}))})();