// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 150.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "A sandwich consisting of a patty made from ground chicken, served in a bun, typically hot and often with other ingredients. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 400.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "This mouthwatering vegetarian pizza recipe features fresh cherry tomatoes, bell peppers, artichoke, spinach and more. ",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 450.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Our double cheese pizza comes with the goodness of extra cheese. You can see oodles of liquid cheese coming out with every bite, making the pizza all the more delicious.",
  },

  {
    id: "04",
    title: "Mexican Green Wave",
    price: 450.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 150.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "A traditional grilled sandwich that consists of ground meat made into a patty, cooked, topped with a slice of cheese, and placed between two halves of a bun.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 160.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "100% quarter pounder beef patty, then complete the tasty picture with cheese, onions, tangy mustard and pickles. Bet your mouth is watering right now!",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 500.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "A seafood pizza with clams, shrimp and octopus.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 350.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Our classic pizza dough, stretched out for a cracker-thin, crispy crust and topped with the same all-natural, premium quality ingredients.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 300.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: " This delicious mushroom pizza is smothered in sautéed mushrooms, onions and garlic, slivers of lacinato kale and layers of mozzarella.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 130.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "This burger starts with a toasted sesame seed bun, wrapped around a perfectly seasoned, mouth-watering hamburger, topped with your favorite cheese, crisp onion, lettuce, juicy tomato, pickles, ketchup, and mustard!",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 70.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Focus on one of its senses that we sometimes forget: the SOUND of crusty bread. The sound of the Baguetresse:It has a chewy crust, an open crumb, and a moderately soft interior.",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 65.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Slightly moist, tender and Moist, tender and light Soft, springy texture, flaky crumb, with a medium crumb, with medium fine, tender and slightly moist fine grain. evenly distributed air with fine grain, thin- spaces. walled cells.",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 60.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "While a loaf of bread doesn't have to look gorgeous to be tasty, a pretty bread certainly makes eating all the more enticing.",
  },
];

export default products;
