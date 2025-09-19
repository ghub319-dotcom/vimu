const slogans = ["Eat Well, Live Well", "Healthy Body, Healthy Mind", "Balance is Key"];
let sloganIndex = 0;
setInterval(() => {
  sloganIndex = (sloganIndex + 1) % slogans.length;
  document.getElementById("slogan").innerText = slogans[sloganIndex];
}, 3000);

const tips = {
  0: "Drink plenty of water today!",
  1: "Take a 10-minute walk after meals.",
  2: "Include veggies in every meal."
};
const day = new Date().getDay();
document.getElementById("healthTip").innerText = tips[day % 3];

function subscribeNewsletter() {
  const email = document.getElementById("newsletterEmail").value;
  if(email) {
    localStorage.setItem("newsletter", email);
    alert("Subscribed successfully!");
  }
}
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});