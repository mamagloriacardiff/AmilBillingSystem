/*
  Wings Billing App - Menu File
  Created by: Amol Dixit
  Date: 31st Aug 2025
  
  File Desc: Primary Menu File
*/


const menu = {
	
 
  "Soft Drinks": [
    { "name": "Sprite", "price": 2.75 },
    { "name": "7UP", "price": 2.75 },
    { "name": "7UP Sugar Free", "price": 2.75 },
    { "name": "Fanta", "price": 2.75 },
    { "name": "Dr Pepper", "price": 2.75 },
    { "name": "Pepsi", "price": 2.75 },
    { "name": "Pepsi Max", "price": 2.75 },
    { "name": "Coca Cola", "price": 2.75 },
    { "name": "Coca Cola Zero", "price": 2.75 },
    { "name": "Diet Coca Cola", "price": 2.75 },
    { "name": "Monster", "price": 3.5 },
    { "name": "Monster Ultra White", "price": 3.5 },
    { "name": "Lipton Lemon", "price": 3.5 },
    { "name": "Lipton Peach", "price": 3.5 },
    { "name": "Capri Sun", "price": 2.0 },
    { "name": "Coconut Water", "price": 3.99 }
  ],

  "100% Natural Juices": [
    { "name": "Mexican Horchata (Pint)", "price": 3.99 },
    { "name": "Mexican Horchata (Jar)", "price": 9.99 },
    { "name": "Mexican Jamaica (Pint)", "price": 3.99 },
    { "name": "Mexican Jamaica (Jar)", "price": 9.99 },
    { "name": "Mexican Tamarind (Pint)", "price": 3.99 },
    { "name": "Mexican Tamarind (Jar)", "price": 9.99 },
    { "name": "Agua Panela with Lemon (Pint)", "price": 3.99 },
    { "name": "Agua Panela with Lemon (Jar)", "price": 9.99 },
    { "name": "Lemonade (Pint)", "price": 3.99 },
    { "name": "Lemonade (Jar)", "price": 8.5 },
    { "name": "Berries (Pint)", "price": 4.5 },
    { "name": "Berries (Jar)", "price": 9.99 },
    { "name": "Mango (Pint)", "price": 4.5 },
    { "name": "Mango (Jar)", "price": 9.99 },
    { "name": "Papaya (Pint)", "price": 4.5 },
    { "name": "Papaya (Jar)", "price": 9.99 },
    { "name": "Guava (Pint)", "price": 4.5 },
    { "name": "Guava (Jar)", "price": 9.99 },
    { "name": "Pineapple (Pint)", "price": 3.99 },
    { "name": "Pineapple (Jar)", "price": 9.99 }
  ],

  "Colombian Drinks": [
    { "name": "Modelo", "price": 5.5 },
    { "name": "Club Colombia Beer", "price": 5.5 },
    { "name": "Postobon Apple", "price": 4.5 },
    { "name": "Postobon Grape", "price": 4.5 },
    { "name": "Hit Lulo", "price": 4.5 },
    { "name": "Hit Mora", "price": 4.5 },
    { "name": "Pony Malta", "price": 4.5 }
  ],

  "Beers & Cider (Bottles/Cans)": [
    { "name": "Corona", "price": 3.99 },
    { "name": "Sol", "price": 3.99 },
    { "name": "Desperados", "price": 4.99 },
    { "name": "San Miguel", "price": 3.99 },
    { "name": "Heineken", "price": 3.99 },
    { "name": "Stella", "price": 3.99 },
    { "name": "Budweiser", "price": 3.99 },
    { "name": "Red Stripe", "price": 4.99 },
    { "name": "Strongbow", "price": 4.99 },
    { "name": "Kopparbergs", "price": 5.99 }
  ],

  "Draught Beer": [
    { "name": "Corona (Pint)", "price": 5.5 },
    { "name": "Corona (1/2 Pint)", "price": 3.5 },
    { "name": "Stella (Pint)", "price": 5.5 },
    { "name": "Stella (1/2 Pint)", "price": 3.5 },
    { "name": "Mahou (Pint)", "price": 5.5 },
    { "name": "Mahou (1/2 Pint)", "price": 3.99 }
  ],

  "Wine by the Glass": [
    { "name": "Wine (125ml)", "price": 3.99 },
    { "name": "Wine (175ml)", "price": 4.99 },
    { "name": "Wine (250ml)", "price": 5.99 }
  ],

  "Spirits - Whisky (25ml / 50ml)": [
    { "name": "Jack Daniels (Single 25ml)", "price": 5.5 },
    { "name": "Jack Daniels (Double 50ml)", "price": 7.5 },
    { "name": "Chivas Regal (Single 25ml)", "price": 5.5 },
    { "name": "Chivas Regal (Double 50ml)", "price": 7.5 },
    { "name": "Red Label (Single 25ml)", "price": 5.5 },
    { "name": "Red Label (Double 50ml)", "price": 7.5 }
  ],

  "Spirits - Vodka (25ml / 50ml)": [
    { "name": "Absolut (Single 25ml)", "price": 5.5 },
    { "name": "Absolut (Double 50ml)", "price": 7.5 },
    { "name": "Smirnoff (Single 25ml)", "price": 5.5 },
    { "name": "Smirnoff (Double 50ml)", "price": 7.5 },
    { "name": "Smirnoff Mango (Single 25ml)", "price": 5.5 },
    { "name": "Smirnoff Mango (Double 50ml)", "price": 7.5 },
    { "name": "Smirnoff Raspberry (Single 25ml)", "price": 5.5 },
    { "name": "Smirnoff Raspberry (Double 50ml)", "price": 7.5 }
  ],

  "Spirits - Gin (25ml / 50ml)": [
    { "name": "Gordon (Single 25ml)", "price": 5.5 },
    { "name": "Gordon (Double 50ml)", "price": 7.5 },
    { "name": "Gordon Pink (Single 25ml)", "price": 5.5 },
    { "name": "Gordon Pink (Double 50ml)", "price": 7.5 }
  ],

  "Spirits - Rum (25ml / 50ml)": [
    { "name": "Bacardi (Single 25ml)", "price": 5.5 },
    { "name": "Bacardi (Double 50ml)", "price": 7.5 },
    { "name": "Bacardi Spiced (Single 25ml)", "price": 5.5 },
    { "name": "Bacardi Spiced (Double 50ml)", "price": 7.5 },
    { "name": "Habana Club (3 Years) (Single 25ml)", "price": 5.5 },
    { "name": "Habana Club (3 Years) (Double 50ml)", "price": 7.5 },
    { "name": "Habana Club (5 Years) (Single 25ml)", "price": 5.5 },
    { "name": "Habana Club (5 Years) (Double 50ml)", "price": 7.5 },
    { "name": "Habana Club (7 Years) (Single 25ml)", "price": 5.5 },
    { "name": "Habana Club (7 Years) (Double 50ml)", "price": 7.5 }
  ],

  "Spirits - Others (25ml / 50ml)": [
    { "name": "Jägermeister Bomb (Single 25ml)", "price": 5.5 },
    { "name": "Jägermeister Bomb (Double 50ml)", "price": 7.5 },
    { "name": "Baileys (Single 25ml)", "price": 5.5 },
    { "name": "Baileys (Double 50ml)", "price": 7.5 },
    { "name": "Tequila (Single 25ml)", "price": 3.5 },
    { "name": "Aguardiente (Single 25ml)", "price": 3.5 }
  ],

  "Wings - Portions": [
    { "name": "8 Wings", "price": 8.99 },
    { "name": "16 Wings", "price": 16.99 },
    { "name": "24 Wings", "price": 25.99 },
    { "name": "32 Wings", "price": 34.99 },
    { "name": "50 Wings", "price": 51.99 },
    { "name": "100 Wings", "price": 89.99 }
  ],

  "Wings - Flavours (choose any, price included in portion)": [
    { "name": "Mango", "price": 0 },
    { "name": "Mango Habanero (Mild/Medium/Hot)", "price": 0 },
    { "name": "Pineapple", "price": 0 },
    { "name": "Pineapple Chilli (Mild/Medium/Hot)", "price": 0 },
    { "name": "Lemon Pepper", "price": 0 },
    { "name": "Lemon Chilli", "price": 0 },
    { "name": "BBQ", "price": 0 },
    { "name": "BBQ Diablo (Hot)", "price": 0 },
    { "name": "Tamarindo", "price": 0 },
    { "name": "Jalapeño & Tamarind (Mild/Medium/Hot)", "price": 0 },
    { "name": "Honey Chipotle (Mild/Medium/Hot)", "price": 0 },
    { "name": "Wild Berries", "price": 0 },
    { "name": "Classic Texas", "price": 0 },
    { "name": "Garlic Cream", "price": 0 },
    { "name": "The Parmesan", "price": 0 },
    { "name": "Honey Mustard", "price": 0 },
    { "name": "Extreme (XXL/XXX Hot)", "price": 0 },
    { "name": "Spicy Ranch", "price": 0 },
    { "name": "Sweet", "price": 0 }
  ],

  "Burgers": [
    { "name": "Grand Texas Burger", "price": 16.99 },
    { "name": "Bacon Cheeseburger", "price": 10.99 },
    { "name": "Chicken Cheeseburger", "price": 10.99 }
  ],

  "Ribs": [
    
    { "name": "The Real Texan Ribs", "price": 16.99 }
  ],

  "Mexican Food - Quesadillas": [
    { "name": "Quesadilla (Steak Ranchero)", "price": 12.99 },
    { "name": "Quesadilla (Grilled Chicken)", "price": 12.99 },
    { "name": "Quesadilla (Ground Beef)", "price": 12.99 },
    { "name": "Quesadilla (Stewed Chicken)", "price": 12.99 },
    { "name": "Quesadilla (Vegetable Mix)", "price": 12.99 },
    { "name": "Quesadilla with Cheese", "price": 12.99 }
  ],

  "Mexican Food - Burritos": [
    { "name": "Burrito (Steak Ranchero)", "price": 12.99 },
    { "name": "Burrito (Grilled Chicken)", "price": 12.99 },
    { "name": "Burrito (Ground Beef)", "price": 12.99 },
    { "name": "Burrito (Stewed Chicken)", "price": 12.99 },
    { "name": "Burrito (Vegetable Mix)", "price": 12.99 }
  ],

  "Mexican Food - Nachos": [
    { "name": "Nachos (Steak Ranchero)", "price": 12.99 },
    { "name": "Nachos (Grilled Chicken)", "price": 12.99 },
    { "name": "Nachos (Ground Beef)", "price": 12.99 },
    { "name": "Nachos (Stewed Chicken)", "price": 12.99 },
    { "name": "Nachos (Vegetable Mix)", "price": 12.99 }
  ],

  "Mexican Food - Tacos (4 pcs)": [
    { "name": "Tacos (Steak Ranchero)", "price": 9.99 },
    { "name": "Tacos (Grilled Chicken)", "price": 9.99 },
    { "name": "Tacos (Ground Beef)", "price": 9.99 },
    { "name": "Tacos (Stewed Chicken)", "price": 9.99 },
    { "name": "Tacos (Vegetable Mix)", "price": 9.99 },
    { "name": "Tacos (Fish) - Special", "price": 10.99 }
  ],

  "Mexican Food - Sopes": [
    { "name": "Sopes (Steak Ranchero)", "price": 14.99 },
    { "name": "Sopes (Grilled Chicken)", "price": 14.99 },
    { "name": "Sopes (Ground Beef)", "price": 14.99 },
    { "name": "Sopes (Stewed Chicken)", "price": 14.99 },
    { "name": "Sopes (Vegetable Mix)", "price": 14.99 }
  ],

  "Mexican Food - Mexican Birria": [
    { "name": "Mexican Birria (Taco order, broth included)", "price": 16.99 }
  ],

  "Mexican Food - Fajitas Tex Mex (Sharing, 12 tortillas)": [
    { "name": "Fajitas (Steak Ranchero)", "price": 18.99 },
    { "name": "Fajitas (Grilled Chicken)", "price": 18.99 },
    { "name": "Fajitas (Camarón / Prawn Shrimp)", "price": 19.99 },
    { "name": "Fajitas Mix (Steak, Chicken, Camarón)", "price": 23.99 },
    { "name": "Fajitas (Vegetable Mix)", "price": 18.99 }
  ],

  "Mexican Food - Molcajetes (Sharing, 12 tortillas)": [
    { "name": "Molcajete (Steak Ranchero)", "price": 22.99 },
    { "name": "Molcajete (Grilled Chicken)", "price": 22.99 },
    { "name": "Molcajete (Camarón / Prawn Shrimp)", "price": 23.99 },
    { "name": "Molcajete Mix (Steak, Chicken, Camarón)", "price": 23.99 },
    { "name": "Molcajete (Vegetable Mix)", "price": 22.99 }
  ],

  "Mexican Food - Enchiladas": [
    { "name": "Enchiladas (Ground Beef)", "price": 14.99 },
    { "name": "Enchiladas (Stewed Chicken)", "price": 14.99 },
    { "name": "Enchiladas (Vegetable Mix)", "price": 14.99 }
  ],

  "Mexican Food - Taco Salad": [
    { "name": "Taco Salad (Ground Beef)", "price": 11.99 },
    { "name": "Taco Salad (Grilled or Stewed Chicken)", "price": 11.99 },
    { "name": "Taco Salad (Vegetable Mix)", "price": 11.99 }
  ],

  "Mexican Food - Chilaquiles Rojos": [
    { "name": "Chilaquiles Rojos (Eggs)", "price": 14.99 },
    { "name": "Chilaquiles Rojos (Grilled Chicken)", "price": 14.99 },
    { "name": "Chilaquiles Rojos (Steak)", "price": 14.99 },
    { "name": "Chilaquiles Rojos (Vegetable Mix)", "price": 14.99 }
  ],

  "Mexican Food - Lamb Barbacoa": [
    { "name": "Lamb Barbacoa (Single)", "price": 16.99 },
    { "name": "Lamb Barbacoa (Sharing)", "price": 23.99 }
  ],

  "Mexican Food - Birria Ramen": [
    { "name": "Birria Ramen", "price": 16.99 }
  ],

  "Sides & Extras (Mexican section)": [
    { "name": "Guacamole", "price": 6.5 },
    { "name": "Special Mexican Rice", "price": 6.5 },
    { "name": "Sour Cream", "price": 6.5 },
    { "name": "Tortilla Chips with Sauce", "price": 6.5 },
    { "name": "Extra Egg", "price": 1.5 },
    { "name": "Extra Tortilla", "price": 1.5 },
    { "name": "Extra Plantain", "price": 5.5 },
    { "name": "Extra Pork (minced)", "price": 4.0 }
  ],

  "Colombian Food - Starters": [
    { "name": "Colombian Arepas (beef or chicken or egg with cheese)", "price": 9.5 },
    { "name": "Colombian Beef Empanadas x3 (with guacamole and pico de gallo)", "price": 10.99 },
    { "name": "Papas Rellenas (beef, rice, green peas)", "price": 9.5 },
    { "name": "Salchipapas (sausages with chips)", "price": 8.99 },
    { "name": "Rice (side)", "price": 3.5 },
    { "name": "Aborrajados (sweet plantain with cheese)", "price": 9.5 },
    { "name": "Mixed Rices", "price": 6.99 },
    { "name": "Fried Casava Sticks", "price": 4.5 },
    { "name": "Chips", "price": 4.5 },
    { "name": "Beans (Frijoles)", "price": 4.5 },
    { "name": "Lentils", "price": 4.5 }
  ],

  "Colombian Food - Mains": [
    { "name": "Colombian Picada (2 people sharing)", "price": 18.99 },
    { "name": "Patacones (plantain served with beef or chicken or pork rind)", "price": 12.99 },
    { "name": "Perico Eggs (tomato and spring onion)", "price": 12.99 },
    { "name": "Cazuela de Marisco (seafood soup)", "price": 20.99 },
    { "name": "Sancocho (green plantain, cassava, coriander, chicken or beef rib, rice, fried plantain, avocado)", "price": 16.99 },
    { "name": "Sea Bream (fried or stew)", "price": 22.99 },
    { "name": "Beef Ribs (fried or stew)", "price": 16.99 },
    { "name": "Bandeja Paisa", "price": 20.99 },
    { "name": "Frijolada", "price": 15.99 }
  ],

  "Spanish Food": [
    { "name": "Garlic Mushrooms", "price": 5.5 },
    { "name": "Patatas Bravas", "price": 5.5 },
    { "name": "Fried Calamari", "price": 6.5 },
    { "name": "Fried Cod Fingers", "price": 6.5 },
    { "name": "Garlic Prawns", "price": 9.99 },
    { "name": "Chorizo", "price": 6.5 }
  ],

  "Salads": [
    { "name": "Caesar Salad", "price": 5.5 },
    { "name": "Cabbage Salad", "price": 6.99 },
    { "name": "Fresh Salad", "price": 4.99 }
  ],

  "Kids Menu": [
    { "name": "Kid Meal (Chicken Nuggets + Chips + Capri Sun)", "price": 5.5 },
    { "name": "Kid Meal (Hot Dog + Chips + Capri Sun)", "price": 5.5 },
    { "name": "Kid Meal (Chicken Wings + Chips + Capri Sun)", "price": 5.5 },
    { "name": "Kid Meal (Chicken Burger + Chips + Capri Sun)", "price": 5.5 },
    { "name": "Kid Meal (Scrambled Egg + Chips + Capri Sun)", "price": 5.5 }
  ],

  "Desserts": [
    { "name": "Dulce de Leche Cheesecake", "price": 7.5 },
    { "name": "Churros (with Chocolate)", "price": 7.5 },
    { "name": "Tres Leches", "price": 7.5 },
    { "name": "Sponge Cake with Chantilly", "price": 7.5 },
    { "name": "Milhoja", "price": 7.5 },
    { "name": "Oreo Cheesecake", "price": 7.5 },
    { "name": "Lemon Cheesecake", "price": 7.5 },
    { "name": "Bunuelos", "price": 7.5 },
    { "name": "Salpicon (fruit cocktail with ice cream)", "price": 7.5 }
  ]

  
};




