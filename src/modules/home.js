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

export { createHome };
