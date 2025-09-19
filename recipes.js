const recipes = [
  {title:"Salad", img:"images/salad.jpg", desc:"Fresh veggie salad", ingredients:["Lettuce","Tomato"], steps:["Chop veggies","Mix"], nutrition:{Calories:150, Protein:"5g"}},
  {title:"Smoothie", img:"images/smoothie.jpg", desc:"Fruit smoothie", ingredients:["Banana","Milk"], steps:["Blend"], nutrition:{Calories:200, Protein:"8g"}}
];

const recipeList = document.getElementById("recipeList");
recipes.forEach((r,i)=>{
  const card=document.createElement("div");
  card.className="card";
  card.innerHTML=`<img src='${r.img}' alt='${r.title}'><h3>${r.title}</h3><p>${r.desc}</p>`;
  card.onclick=()=>openRecipe(i);
  recipeList.appendChild(card);
});

const modal=document.getElementById("recipeModal");
const closeModal=document.getElementById("closeModal");
closeModal.onclick=()=>modal.style.display="none";

function openRecipe(i){
  const r=recipes[i];
  document.getElementById("recipeTitle").innerText=r.title;
  document.getElementById("recipeImage").src=r.img;
  document.getElementById("recipeDesc").innerText=r.desc;
  document.getElementById("ingredients").innerHTML=r.ingredients.map(x=>`<li>${x}</li>`).join("");
  document.getElementById("steps").innerHTML=r.steps.map(x=>`<li>${x}</li>`).join("");
  let table="<tr><th>Nutrient</th><th>Value</th></tr>";
  for(let key in r.nutrition){table+=`<tr><td>${key}</td><td>${r.nutrition[key]}</td></tr>`}
  document.getElementById("nutritionTable").innerHTML=table;
  modal.style.display="block";
}