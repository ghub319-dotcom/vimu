const workoutForm=document.getElementById("workoutForm");
workoutForm.addEventListener("submit",function(e){
  e.preventDefault();
  const bodyPart=document.getElementById("bodyPart").value;
  const equipment=document.getElementById("equipment").value;
  const plan=`Do 3 sets of pushups for ${bodyPart} (Equipment: ${equipment})`;
  document.getElementById("workoutPlan").innerText=plan;
});