const toTop=document.createElement('button');
toTop.textContent='↑';
toTop.className='to-top';
document.body.appendChild(toTop);
window.addEventListener('scroll',()=>{
  toTop.style.display=window.scrollY>300?'block':'none';
});
toTop.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});