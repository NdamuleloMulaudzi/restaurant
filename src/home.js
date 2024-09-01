import "./styles/home.css";

function Home() {
  //create a home section container
  const content = document.querySelector("#content");
  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "homeSection");

  //create heading
  const headingOne = document.createElement("h2");
  headingOne.classList.add("headingOne");
  headingOne.textContent = "Welcome to Zanzi's Zest!";
  homeContainer.appendChild(headingOne);

  //create sub headings and their paragraphs //sub heading one
  const subHeadingOne = document.createElement("h3");
  subHeadingOne.classList.add("sub-heading");
  subHeadingOne.textContent = "Experience the Flavors of South Africa";
  homeContainer.appendChild(subHeadingOne);

  //paragraph for sub heading one
  const paraOne = document.createElement("p");
  paraOne.textContent =
    "Step into Zanzi's Zest, where the spirit of South Africa comes alive on your plate and in your heart. We invite you to embark on a culinary journey that celebrates the rich heritage, vibrant culture, and authentic tastes of our homeland. From the aromatic spices of Durban's famous bunny chow to the hearty warmth of a traditional Cape Malay bobotie, every dish is crafted with passion, tradition, and a zest for life.";
  homeContainer.appendChild(paraOne);

  //sub heading two
  const subHeadingTwo = document.createElement("h3");
  subHeadingTwo.classList.add("sub-heading");
  subHeadingTwo.textContent = "Our Story";
  homeContainer.appendChild(subHeadingTwo);

  //paragraph for sub heading two
  const paraTwo = document.createElement("p");
  paraTwo.textContent =
    "At Zanzi's Zest, we believe that food is more than just a meal; it's a celebration of life, family, and community. Our menu is a tribute to the diverse culinary traditions of South Africa, blending time-honored recipes with fresh, local ingredients. Whether you're enjoying a casual lunch with friends or a festive dinner with loved ones, our goal is to make every visit an unforgettable experience";
  homeContainer.appendChild(paraTwo);

  //sub heading three
  const subHeadingThree = document.createElement("h3");
  subHeadingThree.classList.add("sub-heading");
  subHeadingThree.textContent = "Why Zanzi's Zest?";
  homeContainer.appendChild(subHeadingThree);

  //paragraph for sub heading two
  const paraThree = document.createElement("ul");
  paraThree.innerHTML = `<li><span>Authentic Flavors:</span> We use traditional South African recipes and techniques to bring you the genuine taste of home.</li>
  <li><span>Warm Hospitality:</span> Our friendly team is dedicated to making you feel like part of the Zanzi's Zest family.</li>
  <li><span>Vibrant Atmosphere:</span> Enjoy the lively and welcoming ambiance, filled with the sights, sounds, and aromas of South Africa.</li>`;
  homeContainer.appendChild(paraThree);

  //sub heading four
  const subHeadingFour = document.createElement("h3");
  subHeadingFour.classList.add("sub-heading");
  subHeadingFour.textContent = "Join Us for a Taste Adventure";
  homeContainer.appendChild(subHeadingFour);

  //paragraph for sub heading four
  const paraFour = document.createElement("p");
  paraFour.textContent =
    "Whether you're a fan of spicy peri-peri chicken, curious to try a savory bobotie, or looking to indulge in sweet malva pudding, Zanzi's Zest has something for everyone. We invite you to relax, savor, and enjoy the best of South African cuisine, right here in our cozy corner of the world.";
  homeContainer.appendChild(paraFour);

  //create heading
  const headingTwo = document.createElement("h3");
  headingTwo.classList.add("headingTwo");
  headingTwo.textContent =
    "Come Taste the Zest of South Africa at Zanzi's Zest!";
  homeContainer.appendChild(headingTwo);

  content.appendChild(homeContainer);
}

export default Home;
