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

export { createMenu };
