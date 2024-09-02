import "./styles/contact.css";
import Picture from "./images/pexels-zdmit-6851933.jpg";

export default function Contact() {
  const content = document.querySelector("#content");

  //create contact container element
  const div = document.querySelector("div");
  div.classList.add("contact-container");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactSection");

  //contact heading
  const contactHeading = document.createElement("h2");
  contactHeading.classList.add("contact-heading");
  contactHeading.textContent = "Contact";

  div.appendChild(contactHeading);

  //create element for an image
  const image = document.createElement("img");
  image.classList.add("image");
  image.src = Picture;
  image.width = 600;

  //create div for contact info
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info");
  infoContainer.innerHTML = `
  <div class="contact-info">
    <div class="address">
      <h2>Address</h2>
      <p>Veale St, Nieuw Muckleneuk, Pretoria, 0181</p>
    </div>
    <div class="hours">
      <h2>Hours</h2>
      <p>09:00 - 17:00</p>
      <p>Monday to Saturday</p>
    </div>
      <div class="contacts">
        <h2>Contact Info</h2>
        <p><span>Contact Number:</span> +29 721 632 827</p>
        <p><span>Hours:</span> 10:00 - 16:00</p>
      </div>
    </div>`;

  div.appendChild(contactContainer);
  contactContainer.appendChild(image);
  contactContainer.appendChild(infoContainer);
  content.appendChild(contactContainer);
}
