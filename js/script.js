const btn =document.getElementById('menu-btn');
const btnNav = document.getElementById('menu');

btn.addEventListener('click', ()=>{
  btn.classList.toggle('open')
  btnNav.classList.toggle('flex')
  btnNav.classList.toggle('hidden')
});




