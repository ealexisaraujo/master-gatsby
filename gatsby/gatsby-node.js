import path from 'path';

async function turnPizzasIntoPages(params) {
  // 1. Get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. Query all pizzas
  // 3. Loop over each pizza and create a page for that pizza
}

export async function createPages(params) {
  // Create pages dynamically
  // 1. Pizzas
  // 2. Toppings
  // 3. Slicemasters
}
