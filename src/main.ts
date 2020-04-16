import getRandomMeal from './utils/getRandomMeal';
import createElement from './utils/createElement';
import getArrayFromObject from './utils/getArrayFromObject';

const main = document.getElementsByTagName('main')[0];
const aside = document.getElementsByTagName('aside')[0];
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', buttonClick);

async function buttonClick() {
  if (button.disabled) return;

  button.disabled = true;

  const recipe = await getRandomMeal();
  const ingredients = getArrayFromObject(recipe, 'strIngredient');
  const measures = getArrayFromObject(recipe, 'strMeasure');
  const totalIngredients = ingredients.length || measures.length;

  let innetIngredients = '';

  innetIngredients += '<ul>';
  for (let i = 0; i < totalIngredients; i++) {
    innetIngredients += `<li>${ingredients[i]} - <span>${measures[i]}</span></li>`;
  }
  innetIngredients += '</ul>';

  main.children[0].innerHTML = recipe.strMeal;
  main.children[2].innerHTML = innetIngredients;
  main.children[4].innerHTML = recipe.strInstructions;
  aside.innerHTML = `<img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />`;
  main.children[5].innerHTML = `<iframe src="${recipe.strYoutube.replace(
    '/watch?v=',
    '/embed/',
  )}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  button.disabled = false;
}
