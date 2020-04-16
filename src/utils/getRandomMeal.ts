type T = object;

async function getRandomMeal(): Promise<T> {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const randomMeal = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error('FETCH FAILED', err));

  return randomMeal.meals[0];
}

export default getRandomMeal;
