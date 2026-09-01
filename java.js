
const buttouns=document.querySelectorAll('.bestseller button')
let count =0;
const cart=document.querySelector('.cart')
buttouns.forEach((but)=>{

but.addEventListener('click',()=>
{   count++;
    
cart.textContent=count;
    but.textContent="add"}
)

}  )

const button2=document.querySelector('.banner button')
button2.addEventListener('click',() => {
window.location.href="https://en.wikipedia.org/wiki/Skin_care";

})


