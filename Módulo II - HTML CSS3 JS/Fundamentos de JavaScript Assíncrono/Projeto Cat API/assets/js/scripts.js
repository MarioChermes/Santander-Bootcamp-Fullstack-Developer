const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const btn = document.getElementById('change-cat');
const cat = document.getElementById('cat');

btn.addEventListener('click', getRandomCat);

function getRandomCat() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      cat.src = data[0].url;
	});
}