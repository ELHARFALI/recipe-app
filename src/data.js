import { GiHamburger } from 'react-icons/gi'
import { FaPizzaSlice } from 'react-icons/fa'
import {MdOutlineFoodBank} from 'react-icons/md'

export const food = {
  burgers: [
    {
      id: 1,
      name: 'Luger Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/luger-burger.jpg',
      description: 'It takes a mighty burger for us not to order a steak at Peter Luger Steakhouse, and this is that burger. Served until 3:45pm daily, the Luger Burger features extra thick bacon (not an understatement) and more than a half pound of beef.',
      price: 19.99,
      category: 'burger'
    },
    {
      id: 2,
      name: 'Le Pigeon Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/le-pigeon-burger.jpg',
      description: 'The grilled Le Pigeon Burger has a nice, smoky flavor that is enhanced with each topping. Gabriel Rucker layers it with Tillamook white cheddar, lettuce slaw, and pickled onions along with some ketchup, mayo, and mustard. The ciabatta bun is also tremendous.',
      price: 21.99,
      category: 'burger'
    },
    {
      id: 3,
      name: 'Double Animal Style',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/double-animal-in-and-out.jpg',
      description: 'Order this one off the secret menu that’s not-so-secret at all. Leveling up to “Animal Style” will give you added pickles, extra spread with grilled onions, and they’ll fry some mustard onto your patties.',
      price: 18.00,
      category: 'burger'
    },
    {
      id: 4,
      name: 'The Original Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/original-burger-louis-lunch.jpg',
      description: 'Forget all the insane toppings and avant-garde techniques being used elsewhere, this is the way the burger was supposed to be. The place claims to have invented and served the first hamburger sandwich in the US back in 1900, and they send them out just the same way today as they did back then.',
      price: 15.00,
      category: 'burger'
    },
    {
      id: 5,
      name: 'Whiskey King Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/the-whiskey-king-village-whiskey.jpg',
      description: 'Jose Garces serves up this $26 plate of insanity over at Village Whiskey in Philly. It’s topped with maple bourbon glazed cipollini, bleu cheese, bacon, and a bit of foie gras. Sweet, fatty, and decadent.',
      price: 26.00,
      category: 'burger'
    },
    {
      id: 6,
      name: 'The Company Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/the-company-burger.jpg',
      description: 'With dozens of awards under its greasy belt, The Company Burger from the joint of the same name is a must eat if you’re in New Orleans. Two patties and tons of flavor.',
      price: 24.99,
      category: 'burger'
    },
    {
      id: 7,
      name: 'Chargrilled Burger with Roquefort Cheese',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/chargrilled-rouqefort-burger.jpg',
      description: 'The tanginess of the cheese and the absolutely perfect bun make this, not only one of the best burgers in New York, but one of the best in the whole country.',
      price: 23.99,
      category: 'burger'
    },
    {
      id: 8,
      name: 'Dyer’s Deep-Fried Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/dyers-deepfried-burger.jpg',
      description: 'Fried in the same grease since 1912 (seriously), every burger from Dyer’s is like biting into a meaty piece of history. Each fried-up burger is served with mustard, onion, and pickles, and worth any impending health problems.',
      price: 16.99,
      category: 'burger'
    },
    {
      id: 9,
      name: 'The Lola Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/lola-burger.jpg',
      description: 'Hovering somewhere between a McDonald’s breakfast sandwich and gourmet hamburger, Michael Symon’s creation is flat-out delicious. With a runny egg, some spicy ketchup, and a bit of bacon, it’s good anytime of day.',
      price: 31.99,
      category: 'burger'
    },
    {
      id: 10,
      name: 'Cheeseburger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/cheeseburger-au-cheval.jpg',
      description: 'Just remember that a single is a double and a double is a triple at Chicago’s Au Cheval. Outside of that, the burger is fairly straightforward, but damn amazing. Easily one of the best in the country.',
      price: 18.99,
      category: 'burger'
    },
    {
      id: 11,
      name: 'Raw Steak Tartare Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/raw-steak-tartar.jpg',
      description: 'We’d trust Richard Blais to cook us up just about anything, and among his glorious plethora of burgers at Flip Burger, is one that shines just a tad brighter than the rest. The Raw Steak Tartare is obviously a bit different from your everyday hamburger, but the fried egg and smoky mayo just make it incredible. Like a steak tartare appetizer on a bun.',
      price: 20.00,
      category: 'burger'
    },
    {
      id: 12,
      name: 'The Original Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/original-umami-burger.jpg',
      description: 'The wonderful savoriness that is “umami” is delivered perfectly in The Original Burger from Umami Burger. The chain makes its pride and joy with a parmesan crisp, roasted tomato, shiitake mushrooms, and more additions to give the burger a luxurious mouthfeel.',
      price: 24.99,
      category: 'burger'
    },
    {
      id: 13,
      name: 'Buckhorn Burger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/buckhorn-burger.jpg',
      description: 'It’s the green chile that makes this burger so damn tasty. It’s been featured on Food Network and numerous other places for good reason.',
      price: 13.99,
      category: 'burger'
    },
    {
      id: 14,
      name: 'Cheeseburger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/cheeseburger-manna.jpg',
      description: 'The folks at White Manna have been churning out insanely delicious burgers for the better part of a century. Each gets steamed so the cheese melts right around the patty. They’re on the smaller side, somewhere between a burger and a slider, so feel free to order yourself up a half-dozen.',
      price: 19.99,
      category: 'burger'
    },
    {
      id: 15,
      name: 'Double Patty Cheeseburger',
      image: 'https://coolmaterial.com/wp-content/uploads/2014/05/double-patty-cheese-holeman.jpg',
      description: 'Any place that announces “it’s burger time” is clearly a spot for a good burger. Only 24 of these mouth-watering numbers are made a night, so make sure you get there early if you want to get your greasy hands on one (you want to get your greasy hands on one).',
      price: 29.99,
      category: 'burger'
    },
  ],
  pizza: [
    {
      id: 16,
      name: 'Pizza Napoletana',
      image: 'https://cdn.tasteatlas.com//images/dishes/785295d4ab6f4f0bab43d5fcf2e123b6.jpg?w=905&h=510',
      description: "Italy’s most emblematic culinary creation, the genuine pizza Napoletana is made with just a few simple ingredients and prepared in only two variations – marinara, the basic Neapolitan pizza topped with a tomato-based sauce flavored with garlic and oregano, and margherita, which is topped with tomatoes, mozzarella, and fresh basil leaves, a delicious combination whose colors are said to represent the Italian flag.",
      price: 23.99,
      ingredients: ['flour', 'tomato', 'Mozzarella di Bufala Campana', 'basil', 'olive oil', 'oregano', 'yeast', 'salt'],
      category: 'pizza'
    },
    {
      id: 17,
      name: 'Pizza Margherita',
      image: 'https://cdn.tasteatlas.com//images/dishes/3b95e478a76a48a0897c6724d32e2509.jpg?w=905&h=510',
      description: 'Pizza Margherita is a delicacy that is literally fit for a queen. In 1889, Queen Margherita of Savoy visited Naples, where she was served a pizza that was made to resemble the colors of the Italian flag: red tomatoes, white mozzarella cheese, and green basil.',
      price: 20.99,
      ingredients: ['flour', 'tomato', 'Mozzarella di Bufala Campana', 'basil'],
      category: 'pizza'
    },
    {
      id: 18,
      name: 'Pizza marinara',
      image: 'https://cdn.tasteatlas.com//images/dishes/5560ca794b7d49f7bdbfc1c27d65b39d.jpg?w=905&h=510',
      description: 'Marinara is a Neapolitan pizza with a topping of tomatoes, oregano, garlic, extra virgin olive oil, and sometimes fresh basil. Its name is not derived from the popular belief that it has seafood on it (because it does not), but because it was a staple food of the fishermen who consumed it upon their return home from fishing in the Bay of Naples.',
      price: 24.99,
      ingredients: ['flour', 'tomato', 'garlic', 'oregano', 'olive oil'],
      category: 'pizza'
    },
    {
      id: 19,
      name: 'Calzone Pizza',
      image: 'https://cdn.tasteatlas.com//images/dishes/2dd9d07402f9404bb1149da811a0c42d.jpg?w=905&h=510',
      description: "This unique type of pizza is characterized by its half-round shape, made by folding a full-sized pizza in half. Hailing from 18th century Naples, calzone literally means pant leg, referring to the fact that calzone's original purpose was to be a pizza which can be consumed while walking or standing.",
      price: 31.99,
      ingredients: ['flour', 'tomato', 'Mozzarella', 'salame napoli', 'ricotta', 'parmigiano reggiano', 'lard', 'pork rinds'],
      category: 'pizza'
    },
    {
      id: 20,
      name: 'Pepperoni Pizza',
      image: 'https://cdn.tasteatlas.com//images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?w=905&h=510',
      description: "Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.",
      price: 47.99,
      ingredients: ['flour', 'tomato sauce', 'pepperoni', 'mozzarella'],
      category: 'pizza'
    },
    {
      id: 21,
      name: 'Caprese Pizza',
      image: 'https://cdn.tasteatlas.com//Images/Dishes/5c9ef8900b4d4afc8313a2e282574b7f.jpg?w=905&h=510',
      description: "This is a variety of Italian pizza that is traditionally topped with cherry tomatoes, mozzarella di bufala, olive oil, and fresh basil leaves. It provides a great way to use up leftover tomatoes, and some cooks like to finish it off with a drizzle of balsamic reduction on top.",
      price: 28.99,
      ingredients: ['flour', 'cherry tomato', 'basil', 'olive oil'],
      category: 'pizza'
    },
    {
      id: 22,
      name: 'New York-Style Pizza',
      image: 'https://cdn.tasteatlas.com//Images/Dishes/da8ece52e2634d54b38513642dcbc4cd.jpg?w=905&h=510',
      description: "New York-style pizza is a large, thin-crusted pizza that evolved from the classic Neapolitan-style pizza, brought to New York City by Italian immigrants during the early 1900s. The dish began with the opening of America's first pizzeria, called Lombardi's, where the owner Gennaro Lombardi served unusually large and wide pizza pies.",
      price: 21.99,
      ingredients: ['flour', 'tomato sauce', 'olive oil', 'mozzarella', 'basil'],
      category: 'pizza'
    },
    {
      id: 23,
      name: 'Pizza quattro formaggi',
      image: 'https://cdn.tasteatlas.com//images/dishes/e6f2310a7ffe4904bc9826bfc77ee11f.jpg?w=905&h=510',
      description: "Quattro formaggi is a variety of Italian pizza topped with a combination of four kinds of cheese, as the name suggests. Traditionally, the cheeses should be mozzarella and three other, local cheeses, depending on the region, such as Gorgonzola, Fontina, and Parmigiano-Reggiano.",
      price: 17.99,
      ingredients: ['flour', 'Mozzarella', 'fontina', 'grana padano', 'olive oil', 'gorgonzol', 'basil'],
      category: 'pizza'
    },
    {
      id: 24,
      name: 'Pizza capricciosa',
      image: 'https://cdn.tasteatlas.com//images/dishes/6b28b438a3b64a7e9fca9081c89f07ff.jpg?w=905&h=510',
      description: "The name of this pizza literally translates to capricious, and seems quite appropriate, considering that the toppings tend to vary from one region to another. Capricciosa is made with an ever-changing combination of ingredients which most often include tomatoes, mozzarella, mushrooms, artichokes, ham, olives, and a sliced hard-boiled egg, whereas in central and northern Italy, it is not uncommon to add capers, sausages, and sometimes even anchovies.",
      price: 26.99,
      ingredients: ['flour', 'tomato sauce', 'prosciutto cotto', 'mozzarella', 'champignoi', 'artichoke', 'mozzarella', 'olives'],
      category: 'pizza'
    },
    {
      id: 25,
      name: 'Sicilian Pizza',
      image: 'https://cdn.tasteatlas.com//images/dishes/c3e2d5afed28426881ff542ef28cebf7.jpg?w=905&h=510',
      description: "In the United States, Sicilian pizza denotes a thick, square-shaped dough topped with mozzarella cheese and tomato sauce. The sauce is often placed on top of the cheese in order for the crust to be well-cooked. This pizza was brought to the United States (primarily New York) by Sicilian immigrants, and it was derived from sfincione.",
      price: 29.99,
      ingredients: ['flour', 'tomato sauce', 'mozzarella'],
      category: 'pizza'
    },
  ],
  snacks: [
    {
      id: 26,
      name: 'Gyoza',
      image: 'https://cdn.tasteatlas.com/Images/Dishes/3c16ad904018488f8c363413d356cacc.jpg?mw=1300',
      description: "The famous Japanese gyoza are crescent-shaped dumplings that have originated from the traditional Chinese jiaozi dumplings. The recipe was slightly altered to accommodate the Japanese taste, and gyoza soon became one of the favorite Japanese meals.",
      price: 19.99,
      ingredients: ['wheat flour', 'eggs', 'pork', 'chicken', 'cabbage', 'chives', 'garlic', 'ginger'],
      category: 'snacks'
    },
    {
      id: 27,
      name: 'Nachos',
      image: 'https://cdn.tasteatlas.com/Images/Dishes/eafb6093ae6c45e892134d37318077b4.jpg?mw=1300',
      description: "The first, original plate of nachos consisting of tortilla chips, melted cheese, and jalapeños was made for a group of military officers' wives in 1943 in Piedras Negras, Mexico. The ladies of the US Army Air Force base went over to a restaurant in the city, called the Victory Club.",
      price: 23.99,
      ingredients: ['tortilla', 'colby', 'monterey jack', 'cheddar', 'jalapenos', 'canola oil'],
      category: 'snacks'
    },
    {
      id: 28,
      name: 'Quesadilla',
      image: 'https://cdn.tasteatlas.com/images/dishes/cde29cfce09c43b0acc43e19a77b845b.jpg?mw=1300',
      description: "Quesadilla is a simple Mexican snack consisting of a flour or corn tortilla filled with cheese that melts well. It is commonly folded in half and consumed. A quesadilla can also have some other ingredients on the inside such as meats, beans, or potatoes, but cheese is always mandatory (with the exception of Mexico City, where cheese in a quesadilla is often an afterthought).",
      price: 23.99,
      ingredients: ['tortilla', 'cheese'],
      category: 'snacks'
    },
    {
      id: 29,
      name: 'Spring Rolls',
      image: 'https://cdn.tasteatlas.com/images/dishes/7e44f5dd6dc547009fa957b89cb9bf19.jpg?mw=1300',
      description: "Spring rolls are traditional Chinese snacks consisting of thin sheets of dough that are filled with various ingredients, then deep-fried in hot oil. Some of the more common ingredients for the filling include shredded pork, shrimp, mushrooms, and cabbage.",
      price: 23.99,
      ingredients: ['flour', 'eggs', 'pork', 'mushrooms', 'cabbage', 'shrimps', 'carrot', 'bamboo shoots'],
      category: 'snacks'
    },
    {
      id: 30,
      name: 'Churros',
      image: 'https://cdn.tasteatlas.com/images/dishes/517281fb6bea456f9d302f774657e9b3.jpg?mw=1300',
      description: "Elongated, crispy, crunchy and intensely fragrant, churros consist of deep-fried yeast dough encrusted with sugar. Although some may argue against consuming these sweet treats, warning others about the dangerous effects of sugar and fat on human bodies, the popularity of churros throughout the world doesn't seem to wane.",
      price: 23.99,
      ingredients: ['flour', 'olive oil', 'salt', 'sugar'],
      category: 'snacks'
    },
    {
      id: 31,
      name: 'Jeon',
      image: 'https://cdn.tasteatlas.com/images/dishes/85969320cd7a4b66b98eaa607f2a7fa7.jpg?mw=1300',
      description: "Jeon, also known as Korean pancakes, represents a number of pancake-like dishes in Korean cuisine that are often served as appetizers, side dishes, or consumed as snacks. Although jeon are typically prepared in savory versions, there are also some sweet varieties of these flavorful pancakes.",
      price: 23.99,
      ingredients: ['chicken', 'seafood', 'vegetables', 'flour', 'eggs'],
      category: 'snacks'
    },
    {
      id: 32,
      name: 'Shaobing',
      image: 'https://cdn.tasteatlas.com/images/dishes/47230a52a4e842d7acd7dc8cd1cd1eda.jpg?mw=1300',
      description: "Known as a common snack food in Northern China, shaobing is a type of layered flatbread, typically topped with sesame seeds. It is made with multiple layers of dough brushed with sesame paste and resembles a flattened bread roll. Shaobing originated in the Shandong province, but today it can be found at numerous street stalls throughout the country.",
      price: 23.99,
      ingredients: ['flour', 'salt', 'sugar', 'yeast', 'vegetable oil', 'sesame seeds'],
      category: 'snacks'
    },
    {
      id: 33,
      name: 'Poutine',
      image: 'https://cdn.tasteatlas.com/Images/Dishes/8cb5894ea6fb4a48825b435f0bcab90e.jpg?mw=1300',
      description: "Even though its name stems from the French boudin—a word that usually refers to the pudding-like fillings of sausages—this soppy treat originating from the French Canadian province of Quebec consists of french fries drowned in a thick, brown gravy dotted with clumps of pale, soft, semi-creamy cheese curds.",
      price: 23.99,
      ingredients: ['potatoes', 'cheese curds', 'poutine gravy', 'canola oil', 'salt'],
      category: 'snacks'
    },
    {
      id: 34,
      name: 'Manjū',
      image: 'https://cdn.tasteatlas.com/Images/Dishes/fea3e4a030d14a499d5cd83d4016752d.jpg?mw=1300',
      description: "Manjū is a steamed Japanese confectionery product shaped into various forms and incorporating different ingredients and flavors. Usually, there are two main parts of manju, the outer shell, created out of kneaded wheat or rice flour, and the creamy paste hidden inside the chewy outer layer.",
      price: 23.99,
      ingredients: [],
      category: 'snacks'
    },
    {
      id: 35,
      name: 'Korokke',
      image: 'https://cdn.tasteatlas.com/Images/Dishes/10804f09634648368780bd8698ca13f5.jpg?mw=1300',
      description: "Korokke is a variety of Japanese deep-fried dishes that are a version of the French dish called croquette. It consists of a combination of mashed potatoes and chopped meat, seafood, or vegetables. The combination of those ingredients is shaped in a patty and rolled in flour, eggs, and breadcrumbs, then deep-fried.",
      price: 23.99,
      ingredients: ['beef', 'seafood', 'cabbage', 'potatoes', 'eggs', 'breadcrum'],
      category: 'snacks'
    },
  ],
}

export const categories = [
  {
    title: 'all'
  },
  {
    title: 'burger',
    icon: <GiHamburger />
  },
  {
    title: 'pizza',
    icon: <FaPizzaSlice />
  },
  {
    title: 'snacks',
    icon: <MdOutlineFoodBank />
  },
]