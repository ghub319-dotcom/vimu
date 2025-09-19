document.getElementById("calcForm").addEventListener("submit", function(e){
  e.preventDefault();
  const age=parseInt(document.getElementById("age").value);
  const gender=document.getElementById("gender").value;
  const height=parseInt(document.getElementById("height").value);
  const weight=parseInt(document.getElementById("weight").value);
  const activity=parseFloat(document.getElementById("activity").value);

  let bmr=0;
  if(gender=="male"){
    bmr=10*weight+6.25*height-5*age+5;
  }else{
    bmr=10*weight+6.25*height-5*age-161;
  }
  const tdee=bmr*activity;
  const carbs=(tdee*0.5)/4;
  const protein=(tdee*0.2)/4;
  const fat=(tdee*0.3)/9;

  document.getElementById("results").innerHTML=`<p>BMR: ${bmr.toFixed(2)}</p><p>TDEE: ${tdee.toFixed(2)}</p><p>Carbs: ${carbs.toFixed(0)}g, Protein: ${protein.toFixed(0)}g, Fat: ${fat.toFixed(0)}g</p>`;
});