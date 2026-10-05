(() => {
const panels=[...document.querySelectorAll('.panel')], links=[...document.querySelectorAll('nav a')], main=document.querySelector('main');
function fit(){
 const panel=panels.find(p=>!p.hidden); if(!panel)return;
 panel.style.transform='';panel.style.width='100%';panel.style.height='100%';
 const style=getComputedStyle(main), width=main.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight), height=main.clientHeight-parseFloat(style.paddingTop)-parseFloat(style.paddingBottom);
 const scale=Math.min(1,width/panel.scrollWidth,height/panel.scrollHeight);
 if(scale<1){panel.style.transform='scale('+scale+')';}
}
function show(focus=false){
 const active=panels.find(p=>p.id===location.hash.slice(1))||panels[0];
 panels.forEach(p=>p.hidden=p!==active);
 links.forEach(a=>{if(a.hash==='#'+active.id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 document.title=active.id.charAt(0).toUpperCase()+active.id.slice(1)+' | PoppyCat Productions';
 if(focus)main.focus({preventScroll:true});
 requestAnimationFrame(fit);
}
show();window.addEventListener('hashchange',()=>show(true));
new ResizeObserver(fit).observe(main);
window.addEventListener('load',fit);
document.fonts.ready.then(fit);
})();