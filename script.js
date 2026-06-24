
const cards=document.querySelectorAll('.card');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}
})
});
cards.forEach(c=>{c.style.opacity='0';c.style.transform='translateY(40px)';observer.observe(c);});
