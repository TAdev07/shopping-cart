const initialState = [
  {
    id: 1,
    name: 'iPhone X',
    image:
      'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
    description: 'Sản phầm của Apple',
    price: 1000,
    inventory: 10,
    rating: 5,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S9',
    image:
      'https://cdn.tgdd.vn/Products/Images/42/113263/samsung-galaxy-s9-black-600x600.jpg',
    description: 'Sản phầm của Samsung',
    price: 500,
    inventory: 5,
    rating: 4,
  },
  {
    id: 3,
    name: 'Bphone 3',
    image:
      'https://cdn.tgdd.vn/Products/Images/42/177768/bphone-3-black-400x460.png',
    description: 'Sản phầm của BKAV',
    price: 400,
    inventory: 10,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
