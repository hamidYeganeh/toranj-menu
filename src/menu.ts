import { IFood } from "./types";

export const menu: IFood[] = [
  {
    code: "fesenjan001",
    name: "Fesenjan",
    price: 18.5,
    images: [
      "https://mirito.ir/wp-content/uploads/2022/11/khoresh-fesenjan.jpg",
      // "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fesenjan.jpg",
    ],
    category: "stews",
    similar: ["Gheymeh", "Khoresht Gheymé"],
    description:
      "Fesenjan is a rich stew made with pomegranate paste and ground walnuts.",
    material: "Chicken, walnuts, pomegranate paste",
  },
  {
    code: "kabab001",
    name: "Kabab Koobideh",
    price: 14.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kabab_Koobideh.jpg",
    ],
    category: "grilled dishes",
    similar: ["Kabab Barg", "Jujeh Kabab"],
    description:
      "Kabab Koobideh is a famous Persian grilled meat skewer made from ground beef or lamb.",
    material: "Ground beef, onions, spices",
  },
  {
    code: "tahchin001",
    name: "Tahchin",
    price: 16.0,
    images: ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Tahchin.jpg"],
    category: "rice dishes",
    similar: ["Shirin Polow", "Zereshk Polow"],
    description:
      "Tahchin is a savory Persian rice cake made with yogurt, saffron, and chicken.",
    material: "Chicken, rice, yogurt, saffron",
  },
  {
    code: "gheymeh001",
    name: "Gheymeh",
    price: 13.5,
    images: ["https://upload.wikimedia.org/wikipedia/commons/1/12/Gheymeh.jpg"],
    category: "stews",
    similar: ["Fesenjan", "Khoresht Gheymé"],
    description:
      "Gheymeh is a Persian stew made with lamb, yellow split peas, and tomato paste.",
    material: "Lamb, split peas, tomatoes, spices",
  },
  {
    code: "khoreshtgheymeh001",
    name: "Khoresht Gheymé",
    price: 14.5,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Khoresht_Gheymé.jpg",
    ],
    category: "stews",
    similar: ["Fesenjan", "Gheymeh"],
    description:
      "Khoresht Gheymé is a comforting Persian stew made with lamb and yellow split peas.",
    material: "Lamb, split peas, tomatoes, onion",
  },
  {
    code: "khoreshtkarafs001",
    name: "Khoresht Karafs",
    price: 15.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Khoresht_Karafs.jpg",
    ],
    category: "stews",
    similar: ["Gheymeh", "Khoresht Gheymé"],
    description:
      "Khoresht Karafs is a traditional Persian stew with lamb, celery, and aromatic herbs.",
    material: "Lamb, celery, herbs, onions",
  },
  {
    code: "zereshkpolow001",
    name: "Zereshk Polow",
    price: 13.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Zereshk_Polow.jpg",
    ],
    category: "rice dishes",
    similar: ["Tahchin", "Shirin Polow"],
    description:
      "Zereshk Polow is a delicious Persian rice dish with barberries, saffron, and sometimes chicken.",
    material: "Rice, barberries, saffron, chicken",
  },
  {
    code: "shirinpolow001",
    name: "Shirin Polow",
    price: 14.5,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Shirin_Polow.jpg",
    ],
    category: "rice dishes",
    similar: ["Zereshk Polow", "Tahchin"],
    description:
      "Shirin Polow is a sweet and savory Persian rice dish with orange peel, pistachios, and almonds.",
    material: "Rice, orange peel, pistachios, almonds, saffron",
  },
  {
    code: "polowbamorgh001",
    name: "Polow Ba Morgh",
    price: 15.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Polow_Ba_Morgh.jpg",
    ],
    category: "rice dishes",
    similar: ["Zereshk Polow", "Shirin Polow"],
    description:
      "Polow Ba Morgh is a Persian rice dish served with chicken, often topped with saffron and fried onions.",
    material: "Rice, chicken, saffron, onions",
  },
  {
    code: "jujhekabab001",
    name: "Jujeh Kabab",
    price: 16.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Jujeh_Kabab.jpg",
    ],
    category: "grilled dishes",
    similar: ["Kabab Koobideh", "Kabab Barg"],
    description:
      "Jujeh Kabab is a flavorful Persian grilled chicken dish marinated in yogurt, lemon, and spices.",
    material: "Chicken, yogurt, lemon, saffron",
  },
  {
    code: "kababbarg001",
    name: "Kabab Barg",
    price: 18.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Kabab_Barg.jpg",
    ],
    category: "grilled dishes",
    similar: ["Kabab Koobideh", "Jujeh Kabab"],
    description:
      "Kabab Barg is a juicy Persian kebab made with marinated beef or lamb, typically served with rice.",
    material: "Beef or lamb, onions, saffron, yogurt",
  },
  {
    code: "ashreshteh001",
    name: "Ash Reshteh",
    price: 10.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Ash_Reshteh.jpg",
    ],
    category: "soups",
    similar: ["Ash-e Anar", "Soup-e Kadu"],
    description:
      "Ash Reshteh is a hearty Persian noodle soup made with beans, lentils, and herbs.",
    material: "Noodles, beans, lentils, spinach, herbs",
  },
  {
    code: "gavmishkebab001",
    name: "Gav Mish Kabab",
    price: 17.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Gav_Mish_Kabab.jpg",
    ],
    category: "grilled dishes",
    similar: ["Kabab Koobideh", "Kabab Barg"],
    description:
      "Gav Mish Kabab is a specialty beef kebab, tender and marinated in spices.",
    material: "Beef, saffron, onions, spices",
  },
  {
    code: "dizi001",
    name: "Dizi",
    price: 20.0,
    images: ["https://upload.wikimedia.org/wikipedia/commons/6/6e/Dizi.jpg"],
    category: "stews",
    similar: ["Khoresht Karafs", "Fesenjan"],
    description:
      "Dizi is a traditional Persian lamb stew cooked in a clay pot with potatoes and chickpeas.",
    material: "Lamb, potatoes, chickpeas, tomatoes, onions",
  },
  {
    code: "kookoo001",
    name: "Kookoo Sabzi",
    price: 12.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Kookoo_Sabzi.jpg",
    ],
    category: "vegetarian dishes",
    similar: ["Kookoo Sibzamini", "Kookoo Kadoo"],
    description:
      "Kookoo Sabzi is a Persian herb frittata made with fresh herbs, eggs, and walnuts.",
    material: "Herbs, eggs, walnuts, spices",
  },
  {
    code: "kookoosibzamini001",
    name: "Kookoo Sibzamini",
    price: 11.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Kookoo_Sibzamini.jpg",
    ],
    category: "vegetarian dishes",
    similar: ["Kookoo Sabzi", "Kookoo Kadoo"],
    description:
      "Kookoo Sibzamini is a Persian potato fritter made with mashed potatoes and eggs.",
    material: "Potatoes, eggs, spices",
  },
  {
    code: "kookookadoo001",
    name: "Kookoo Kadoo",
    price: 13.0,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Kookoo_Kadoo.jpg",
    ],
    category: "vegetarian dishes",
    similar: ["Kookoo Sabzi", "Kookoo Sibzamini"],
    description:
      "Kookoo Kadoo is a savory Persian fritter made with grated zucchini and eggs.",
    material: "Zucchini, eggs, garlic, spices",
  },
  {
    code: "bademjankhoresht001",
    name: "Khoresht Bademjan",
    price: 17.5,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Khoresht_Bademjan.jpg",
    ],
    category: "stews",
    similar: ["Khoresht Gheymé", "Fesenjan"],
    description:
      "Khoresht Bademjan is a Persian stew with tender eggplant, lamb, and tomatoes.",
    material: "Eggplant, lamb, tomatoes, onions",
  },
  {
    code: "kalamipolo001",
    name: "Kalam Polow",
    price: 14.5,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Kalam_Polow.jpg",
    ],
    category: "rice dishes",
    similar: ["Lubia Polow", "Baghali Polow"],
    description:
      "Kalam Polow is a Persian rice dish made with cabbage and meat, typically served with rice.",
    material: "Cabbage, lamb, rice, spices",
  },
];
