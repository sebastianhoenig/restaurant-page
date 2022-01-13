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

export { createContact };
