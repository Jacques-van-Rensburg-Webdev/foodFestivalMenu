// ----------- NAVBAR AND HAMBURGER MENU -----------

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let lastScollY = 0;

const navBar = document.querySelector(".navBar");
const scrollThreshold = 7;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (window.scrollY === 0) {
    navBar.classList.remove("hidden");
  } else if (currentScrollY > lastScollY + scrollThreshold) {
    console.log("scroll down");
    navBar.classList.add("hidden");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  } else if (currentScrollY < lastScollY - scrollThreshold) {
    console.log("scroll up");
    navBar.classList.remove("hidden");
  }
  lastScollY = currentScrollY;
});

//------------ MENU SELCTIONS ------------------
let menuItems = {
  tacoOne: {
    heading: "Al Pastor",
    price: 9,
    description:
      "Pork marinated with El Osos own Pastor adobo, grilled on the Trompo. Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  tacoTwo: {
    heading: "Suadero",
    price: 9,
    description: "Confited beef, Corn Tortilla, Onions, Cilantro.",
  },
  tacoThree: {
    heading: "Chorizo",
    price: 10,
    description:
      "Minced pork seasoned with El Oso Chorizo Adobo. Corn Tortilla, Onions, Cilantro.",
  },
  tacoFour: {
    heading: "Campechano",
    price: 10,
    description:
      "Mix of Suadero and Chorizo meat. Corn Tortilla, Onions, Cilantro.",
  },
  tacoFive: {
    heading: "Alambre al Pastor",
    price: 14,
    description:
      "Marinated Pork, Poblano, Cheese, 4 Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  tacoSix: {
    heading: "Choriqueso",
    price: 10,
    description:
      "Minced pork seasoned with El Oso Chorizo Adobo, cheese, Corn Tortilla, Onions, Cilantro.",
  },
  tacoSeven: {
    heading: "Vegan Al Pastor",
    price: 10,
    description:
      "Pea-based protein marinated with El Oso's Vegan Pastor adobo, grilled on the Trompo. Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  tacoDessertOne: {
    heading: "Pan Dulce",
    price: 6,
    description:
      "Soft, lightly sweetened bread with orange zest, anise, and a sugar topping.",
  },
  tacoDessertTwo: {
    heading: "Vegan Al Pastor",
    price: 4,
    description:
      "Colorful, sweet Mexican bread with a soft, fluffy texture and a crumbly sugar topping. A breakfast or snack favorite..",
  },
  ramenOne: {
    heading: "Spicy Inferno Ramen",
    price: 14,
    description:
      "A fiery bowl of ramen featuring a rich, spicy miso broth infused with chili oil, topped with tender pork chashu, soft-boiled egg, bamboo shoots, scallions, and a sprinkle of sesame seeds. For those who crave the heat!",
  },
  ramenTwo: {
    heading: "Tonkotsu Heaven Ramen",
    price: 16,
    description:
      "A velvety, creamy pork bone broth simmered for hours, delivering deep umami flavors. Topped with succulent pork belly chashu, marinated soft-boiled egg, wood ear mushrooms, nori, and fresh scallions. A classic comfort in every bite.",
  },
  ramenThree: {
    heading: "Zen Garden Tofu Ramen",
    price: 12,
    description:
      "A light yet flavorful vegetarian broth enriched with miso and kombu, topped with crispy tofu cubes, baby bok choy, shiitake mushrooms, sweet corn, and a drizzle of garlic oil. A harmonious balance of flavors and textures.",
  },

  theBarOne: {
    heading: "Classic Margarita",
    price: 9,
    description:
      "A timeless blend of tequila, fresh lime juice, and Cointreau, shaken with ice and served in a salt-rimmed glass.",
  },
  theBarTwo: {
    heading: "Spicy Jalapeño Margarita",
    price: 10,
    description:
      "Tequila, lime juice, agave syrup, and fresh jalapeño slices, served on the rocks with a chili-salt rim for a fiery finish.",
  },
  theBarThree: {
    heading: "Pineapple Cilantro Margarita",
    price: 12,
    description:
      "A tropical twist with tequila, pineapple juice, fresh lime, and a touch of cilantro, served over ice with a salted rim.",
  },
  theBarFour: {
    heading: "Mezcal Margarita",
    price: 13,
    description:
      "Smoky mezcal, lime juice, agave nectar, and Cointreau, served over ice with a salted rim for a bold, earthy flavor.",
  },
  theBarFive: {
    heading: "Watermelon Margarita",
    price: 12,
    description:
      "Tequila, fresh watermelon juice, lime juice, and agave syrup, served over ice with a tajín-rimmed glass.",
  },
  theBarSix: {
    heading: "Frozen Lime Margarita",
    price: 10,
    description:
      "A frosty delight with tequila, lime juice, and Triple Sec, blended with ice and served in a chilled glass with a salted rim.",
  },
  theBarSeven: {
    heading: "Frozen Strawberry Margarita",
    price: 11,
    description:
      "A sweet blend of tequila, fresh strawberries, lime juice, and Triple Sec, blended with ice and served with a sugar rim.",
  },
  theBarEight: {
    heading: "Frozen Mango Margarita",
    price: 11,
    description:
      "Tequila, mango puree, lime juice, and Triple Sec, blended with ice and served in a glass rimmed with chili powder and sugar.",
  },
  theBarNine: {
    heading: "Frozen Coconut Margarita",
    price: 12,
    description:
      "Tequila, coconut cream, lime juice, and Triple Sec, blended with ice and served with a toasted coconut rim.",
  },
  theBarTen: {
    heading: "Frozen Blueberry Margarita",
    price: 12,
    description:
      "Tequila, fresh blueberries, lime juice, and Triple Sec, blended with ice and served in a sugar-rimmed glass.",
  },
  theBarEleven: {
    heading: "Classic Mojito",
    price: 8,
    description:
      "A refreshing mix of white rum, fresh mint leaves, lime juice, sugar, and soda water, muddled and served over ice.",
  },
  theBarTwelve: {
    heading: "Spicy Mango Mule",
    price: 10,
    description:
      "A zesty combination of vodka, mango puree, fresh lime, and ginger beer with a hint of jalapeño for a spicy kick.",
  },
  theBarThirteen: {
    heading: "Blueberry Gin Smash",
    price: 11,
    description:
      "Gin, muddled blueberries, lemon juice, and a splash of soda water, served over crushed ice for a fruity, refreshing drink.",
  },
  theBarFourteen: {
    heading: "Pineapple Coconut Daiquiri",
    price: 12,
    description:
      "White rum, pineapple juice, coconut cream, and lime juice, blended to perfection and garnished with a pineapple wedge.",
  },
  theBarFifteen: {
    heading: "Watermelon Basil Martini",
    price: 11,
    description:
      "Vodka, muddled fresh watermelon and basil, lime juice, and a touch of simple syrup, shaken and served in a chilled glass.",
  },
  theBarSixteen: {
    heading: "Espresso Martini",
    price: 9,
    description:
      "A bold mix of vodka, fresh espresso, coffee liqueur, and a touch of simple syrup, shaken and served with a creamy foam top.",
  },
  theBarSeventeen: {
    heading: "Lavender Lemon Collins",
    price: 10,
    description:
      "Gin, fresh lemon juice, lavender syrup, and soda water, served in a tall glass with a sprig of lavender.",
  },
  theBarEighteen: {
    heading: "Blackberry Bourbon Smash",
    price: 12,
    description:
      "Bourbon, muddled blackberries, fresh mint, lemon juice, and simple syrup, served over ice for a rich, fruity taste.",
  },
  theBarNineteen: {
    heading: "Cucumber Mint Cooler",
    price: 9,
    description:
      "Vodka, cucumber slices, fresh mint, lime juice, and a splash of soda water, served chilled for a crisp, refreshing taste.",
  },
  theBarTwenty: {
    heading: "Passionfruit Rum Punch",
    price: 13,
    description:
      "Dark rum, passionfruit puree, orange juice, lime juice, and a dash of grenadine, served over ice with an orange slice garnish.",
  },
  theBarTwentyOne: {
    heading: "Heineken",
    price: 5,
    description:
      "A well-balanced Dutch lager with a crisp finish and subtle hoppy notes.",
  },
  theBarTwentyTwo: {
    heading: "Corona Extra",
    price: 5.5,
    description:
      "A light, refreshing Mexican lager with hints of citrus, perfect with a wedge of lime.",
  },
  theBarTwentyThree: {
    heading: "Guinness Draught",
    price: 6,
    description:
      "A smooth, creamy Irish stout with rich roasted malt flavors and a velvety finish.",
  },
  theBarTwentyFour: {
    heading: "Budweiser",
    price: 4.5,
    description:
      "An American-style lager with a clean, crisp taste and a hint of malt sweetness.",
  },
  theBarTwentyFive: {
    heading: "Stella Artois",
    price: 5.5,
    description:
      "A Belgian pilsner with a slightly bitter finish, known for its smooth and malty flavor.",
  },
  theBarTwentySix: {
    heading: "IPA - BrewDog Punk IPA",
    price: 6.5,
    description:
      "A hoppy, citrus-forward India Pale Ale with tropical fruit notes and a crisp finish.",
  },
  theBarTwentySeven: {
    heading: "Sierra Nevada Pale Ale",
    price: 7,
    description:
      "A classic American pale ale with bold hop character and hints of pine and grapefruit.",
  },
  theBarTwentyEight: {
    heading: "Goose Island 312 Urban Wheat Ale",
    price: 6,
    description:
      "A smooth and light wheat ale with a refreshing citrus aroma and crisp finish.",
  },
  theBarTwentyNine: {
    heading: "Lagunitas IPA",
    price: 6.5,
    description:
      "A well-balanced IPA with a strong hop aroma, caramel malt backbone, and a smooth finish.",
  },
  theBarThirty: {
    heading: "Blue Moon Belgian White",
    price: 6,
    description:
      "A Belgian-style wheat ale brewed with Valencia orange peel for a subtle citrus flavor and a smooth finish.",
  },
  theBarThirtyOne: {
    heading: "Cabernet Sauvignon - Robert Mondavi",
    price: 10,
    description:
      "A bold Californian red with notes of black cherry, cassis, and a touch of oak spice.",
  },
  theBarThirtyTwo: {
    heading: "Pinot Noir - Louis Jadot Bourgogne",
    price: 11,
    description:
      "A delicate French red with aromas of red berries, subtle earthiness, and a smooth finish.",
  },
  theBarThirtyThree: {
    heading: "Malbec - Catena Zapata",
    price: 9,
    description:
      "A rich Argentinian Malbec with flavors of blackberry, plum, and a hint of dark chocolate.",
  },
  theBarThirtyFour: {
    heading: "Chardonnay - Kendall-Jackson",
    price: 9,
    description:
      "A creamy Californian Chardonnay with flavors of ripe pear, apple, and hints of vanilla.",
  },
  theBarThirtyFive: {
    heading: "Sauvignon Blanc - Kim Crawford",
    price: 10,
    description:
      "A crisp New Zealand Sauvignon Blanc with notes of passionfruit, grapefruit, and fresh herbs.",
  },
  theBarThirtySix: {
    heading: "Prosecco - Valdo",
    price: 8,
    description:
      "A light and refreshing Italian Prosecco with flavors of green apple, pear, and a hint of floral.",
  },
  theBarThirtySeven: {
    heading: "Coca-Cola",
    price: 3,
    description: "Classic refreshing cola with a crisp, bold taste.",
  },
  theBarThirtyEight: {
    heading: "Sprite",
    price: 3,
    description: "A crisp, lemon-lime soda with a refreshing and clean taste.",
  },
  theBarThirtyNine: {
    heading: "Fanta Orange",
    price: 3,
    description: "A bubbly orange soda with a bold citrus flavor.",
  },
  theBarForty: {
    heading: "Orange Juice",
    price: 4,
    description:
      "Freshly squeezed orange juice, packed with natural sweetness and vitamin C.",
  },
  theBarFortyOne: {
    heading: "Apple Juice",
    price: 4,
    description: "100% pure apple juice with a crisp, refreshing taste.",
  },
  theBarFortyTwo: {
    heading: "Still Water",
    price: 2.5,
    description: "Pure, refreshing still mineral water.",
  },
  theBarFortyThree: {
    heading: "Sparkling Water",
    price: 3,
    description: "Crisp, carbonated mineral water with a refreshing fizz.",
  },
  theBarFortyFour: {
    heading: "Espresso",
    price: 3,
    description:
      "A rich, full-bodied shot of Italian-style coffee with a bold, intense flavor.",
  },
  theBarFortyFive: {
    heading: "Cappuccino",
    price: 4,
    description:
      "A perfect blend of espresso, steamed milk, and a layer of frothy milk foam.",
  },
  theBarFortySix: {
    heading: "Latte",
    price: 4.5,
    description:
      "A smooth, creamy coffee made with a shot of espresso and steamed milk.",
  },
  theBarFortySeven: {
    heading: "Americano",
    price: 3.5,
    description:
      "A shot of espresso diluted with hot water for a smooth, mellow coffee experience.",
  },
  theBarFortyEight: {
    heading: "English Breakfast Tea",
    price: 3,
    description:
      "A robust and flavorful black tea blend, perfect with milk or lemon.",
  },
  theBarFortyNine: {
    heading: "Green Tea",
    price: 3.5,
    description:
      "A delicate and refreshing tea with a light, grassy flavor and antioxidant properties.",
  },
  theBarFifty: {
    heading: "Chamomile Tea",
    price: 3.5,
    description:
      "A soothing, caffeine-free herbal tea with a calming floral aroma.",
  },
  theBarFiftyOne: {
    heading: "Classic Hot Chocolate",
    price: 4.5,
    description: "A rich and creamy hot chocolate topped with whipped cream.",
  },
  theBarFiftyTwo: {
    heading: "Mocha",
    price: 5,
    description:
      "A delicious combination of espresso, hot chocolate, and steamed milk.",
  },
};

let notepad = [];

initialiseNotepad();

function renderNotepad() {
  let totalItems = [];

  let notepadTacoheadEl = document.getElementById("notepadTacohead");
  let notepadHotRamenEl = document.getElementById("notepadHotRamen");
  let notepadTheBarEl = document.getElementById("notepadTheBar");

  if (notepadTacoheadEl) notepadTacoheadEl.innerHTML = "";
  if (notepadHotRamenEl) notepadHotRamenEl.innerHTML = "";
  if (notepadTheBarEl) notepadTheBarEl.innerHTML = "";

  let tacoList = document.createElement("ul");
  let ramenList = document.createElement("ul");
  let theBarList = document.createElement("ul");
  if (notepadTacoheadEl) notepadTacoheadEl.appendChild(tacoList);
  if (notepadHotRamenEl) notepadHotRamenEl.appendChild(ramenList);
  if (notepadTheBarEl) notepadTheBarEl.appendChild(theBarList);

  notepad.forEach((itemNumber, index) => {
    // This is for the caculate total function.
    const item = {
      name: menuItems[itemNumber].heading,
      price: menuItems[itemNumber].price,
      active: true,
    };

    // Sort which list each item must go on.

    const isRamen = itemNumber.startsWith("ramen");
    const isTaco = itemNumber.startsWith("taco");
    const isDrink = itemNumber.startsWith("theBar");

    let list;
    if (isRamen) {
      list = ramenList;
    } else if (isTaco) {
      list = tacoList;
    } else if (isDrink) {
      list = theBarList;
    }

    console.log(list);
    //---------------------------------------------------
    // Create new list item
    let listItem = document.createElement("li");
    list.appendChild(listItem);

    // Create item container div
    let divItem = document.createElement("div");
    listItem.appendChild(divItem);
    divItem.classList.add("itemDescription");

    // Create checkbox div
    let roundDiv = document.createElement("div");
    roundDiv.classList.add("round");
    roundDiv.id = "selectItem";
    divItem.appendChild(roundDiv);

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.id = "checkbox" + itemNumber + index;
    checkbox.onclick = function (e) {
      item.active = e.target.checked;
      calculateSum(totalItems);
    };
    roundDiv.appendChild(checkbox);

    // Create checkbox label
    let label = document.createElement("label");
    label.setAttribute("for", "checkbox" + itemNumber + index);
    roundDiv.appendChild(label);

    let itemHeading = document.createElement("h4");
    itemHeading.textContent = `${menuItems[itemNumber].heading}`;
    itemHeading.classList.add("itemHeading");
    divItem.appendChild(itemHeading);

    // Create item price
    let itemPrice = document.createElement("h5");
    itemPrice.textContent = `${menuItems[itemNumber].price}€`;
    itemPrice.classList.add("menuPrice");
    divItem.appendChild(itemPrice);

    // Create description
    let menuDescription = document.createElement("p");
    menuDescription.textContent = `${menuItems[itemNumber].description}`;
    menuDescription.classList.add("menuDescription");
    divItem.appendChild(menuDescription);

    // Create remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "-";
    removeButton.classList.add("notePadRemovebtn");
    removeButton.onclick = function () {
      removeItemFromNotepad(index);
    };
    divItem.appendChild(removeButton);

    totalItems.push(item);
  });

  calculateSum(totalItems);
}

function calculateSum(totalItems) {
  let sum = totalItems.reduce((accumulated, currentItem, index, arr) => {
    if (currentItem.active) {
      return accumulated + currentItem.price;
    } else {
      return accumulated;
    }
  }, 0);

  console.log("sum", sum);
  let totalCost = document.querySelector(".totalCost");

  if (totalCost === null) {
    totalCost = "";
  } else {
    totalCost.textContent = `€ ${sum}`;
  }
}

function addItemToNotepad(itemNumber) {
  notepad.push(itemNumber);
  localStorage.setItem("notepad", JSON.stringify(notepad));
  renderNotepad();
}
console.log(notepad);
function removeItemFromNotepad(index) {
  notepad.splice(index, 1);
  localStorage.setItem("notepad", JSON.stringify(notepad));
  renderNotepad();
}

function initialiseNotepad() {
  notepad = JSON.parse(localStorage.getItem("notepad")) || [];
  renderNotepad();
}
