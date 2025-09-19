document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const message=document.getElementById("message").value;
  if(name && email && message){
    localStorage.setItem("feedback", JSON.stringify({name,email,message}));
    document.getElementById("confirmation").innerText="Thank you for your feedback!";
  }
});
document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click",()=>{
    btn.nextElementSibling.classList.toggle("show");
  });
});