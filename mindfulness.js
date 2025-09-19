function startBreathing(){
  const circle=document.getElementById("breathingCircle");
  let grow=true;
  setInterval(()=>{
    circle.style.transform=grow?"scale(1.5)":"scale(1)";
    grow=!grow;
  },4000);
}
function toggleSound(){
  alert("Ambient sound toggled!");
}