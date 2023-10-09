// const syn = document.getElementById("synchronous");
// setTimeout(() => {
//   console.log("inside ");
//   syn.innerText = "Thank! you are  not bocking me";
// }, 6000);

// console.log("yes i am running");
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
const mealContainer = document.getElementById("meals-container");

function getMeals(mealsName) {
  const fristRequest = new XMLHttpRequest();
  fristRequest.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`
  );
  fristRequest.send();
  console.log(fristRequest.responseText);
  fristRequest.addEventListener("load", function () {
    //   console.log(fristRequest.responseText);
    const data = JSON.parse(fristRequest.responseText);
    console.log(data.meals[0]);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="meals" id="meals">
                <div class="image">
                  <img
                    src="${data.meals[0].strMealThumb}"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="meals-info">
                  <h1 class="title">${data.meals[0].strMeal}</h1>
                  <h2 class="ingri">ingredients:${data.meals[0].strTags}</h2>
                  <p>
                    ${data.meals[0].strInstructions.slice(0, 200)}...
                  </p>
                  <h3 class="price">$100</h3>
                  <button class="btn">Order Now</button>
                </div>
              </div>
        `;
    console.log(div);
    mealContainer.appendChild(div);
    mealContainer.style.opacity = 1;
  });
}
// console.log(fristRequest);

getMeals("Arrabiata");
getMeals("Pasta");
getMeals("Rice");
