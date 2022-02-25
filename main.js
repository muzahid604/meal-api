const getFood = () => {
    const input = document.getElementById('search-food')
    let inputFood = input.innerText;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFood}`;
    inputFood = ' ';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}