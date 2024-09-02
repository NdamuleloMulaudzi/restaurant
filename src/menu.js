function Menu() {
  const content = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuSection");

  //menu heading
  const menuHeading = document.createElement("h2");
  menuHeading.classList.add("menu-heading");
  menuHeading.textContent = "Zanzi’s Zest Menu";
  menuContainer.appendChild(menuHeading);

  //menu content
  const menuStarterItems = document.createElement("div");
  menuStarterItems.classList.add("menu-items");
  //menu starters
  const menuStarters = document.createElement("h2");
  menuStarters.setAttribute("class", "menu-starters");
  menuStarters.textContent = "Starters";
  menuContainer.appendChild(menuStarters);
  menuStarterItems.innerHTML = `<ol>
  <li class="1">
    <h3>Bobotie Spring Rolls</h3>
    <p>Crispy rolls filled with spiced mince and egg custard, served with apricot chutney</p>
  </li>
  <p class="price">Price: R75</p>
  <li class="2">
    <h3>Peri-Peri Prawns</h3>
    <p>Grilled prawns in house-made peri-peri sauce, with garlic aioli.</p>
    <p class="price">Price: R95</p>
  </li>
  <li class="3">
    <h3>Biltong & Cheese Platter</h3>
    <p><Selection of biltong, droëwors, local cheeses, and pickled veggies/p>
    <p class="price">Price: R110</p>
  </li>
  <li class="4">
    <h3>Pap and Chakalaka Bites</h3>
    <p>Creamy maize meal balls with spicy tomato, onion, and bean relish</p>
    <p class="price">Price: R70</p>
  </li>
  </ol>`;
  menuContainer.appendChild(menuStarterItems);

  //menu main course
  const menuMainCouresItems = document.createElement("div");
  menuMainCouresItems.classList.add("menu-items");

  const menuMainCourse = document.createElement("h2");
  menuMainCourse.setAttribute("class", "menu-maincourse");
  menuMainCourse.textContent = "Main Course";
  menuContainer.appendChild(menuMainCourse);
  menuMainCouresItems.innerHTML = `<ol>
    <li class="1">
      <h3>Cape Malay Curry</h3>
      <p>Fragrant chicken or vegetable curry with coconut milk and dried fruit</p>
      <p class="price">Price: R140 (Chicken) / R120 (Vegetarian)</p>
    </li>
    <li>
      <h3>Braai Platter</h3>
      <p>Boerewors, lamb chops, and chicken skewers with grilled corn and pap</p>
      <p class="price">Price: R180</p>
    </li>
    <li>
      <h3>Bunny Chow</h3>
      <p>Half loaf filled with beef, chicken, or vegetarian curry, with carrot salad</p>
      <p class="price">Price: R90 (Chicken or Beef) / R80 (Vegetarian)</p>
    </li>
    <li>
      <h3>Grilled Ostrich Steak</h3>
      <p>Tender ostrich fillet with sweet potato fries and red wine reduction</p>
      <p class="price">Price: R220</p>
    </li>
  </ol>`;

  menuContainer.appendChild(menuMainCouresItems);

  content.appendChild(menuContainer);
}

export default Menu;
