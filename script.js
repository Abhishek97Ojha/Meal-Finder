const input = document.getElementById("input");
const bottom = document.getElementById("bottom");
async function search(){
    bottom.innerHTML = "";
    // console.log(input.value);
    const res=  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
    const data = await res.json()
    // console.log(data.meals);
    data.meals.map((ele)=>{
        // console.log(ele.strMealThumb);
        bottom.innerHTML += `
        <img src="${ele.strMealThumb}" alt="">`
    })
}
async function homepage(){
    bottom.innerHTML = "";
    // console.log(input.value);
    const res=  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    // console.log(res);

    const data = await res.json()
    console.log(data);
    data.categories.map((ele)=>{
        // console.log(ele.strMealThumb);
        bottom.innerHTML += `
        <img src="${ele.strCategoryThumb}" alt="">`
    })
}
homepage()

