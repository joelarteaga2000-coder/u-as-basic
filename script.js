(function(){
'use strict';
const dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
(function ar(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(ar)})();
document.querySelectorAll('a,button,.tb,.pc-card,.gg-circle').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));el.addEventListener('mouseleave',()=>document.body.classList.remove('hov'))});
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);const w=document.getElementById('waBtn');if(w)w.classList.toggle('show',window.scrollY>200)},{passive:true});
const burger=document.getElementById('burger'),mob=document.getElementById('mobMenu');let open=false;
if(burger){burger.addEventListener('click',()=>{open=!open;mob.classList.toggle('open',open);const s=burger.querySelectorAll('span');s[0].style.transform=open?'rotate(45deg) translate(4px,4px)':'';s[1].style.transform=open?'rotate(-45deg) translate(4px,-4px)':''});document.querySelectorAll('.mml').forEach(l=>l.addEventListener('click',()=>{open=false;mob.classList.remove('open');burger.querySelectorAll('span').forEach(s=>s.style.transform='')}))}
const obs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i%4*80);obs.unobserve(e.target)}})},{threshold:.07,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const track=document.getElementById('mt');if(track){let x=0;const half=track.scrollWidth/2;(function am(){x-=0.4;if(Math.abs(x)>=half)x=0;track.style.transform=`translateX(${x}px)`;requestAnimationFrame(am)})()}
document.querySelectorAll('.fg input,.fg select').forEach(inp=>{const label=inp.closest('.fg')?.querySelector('label');inp.addEventListener('focus',()=>label&&label.classList.add('focused'));inp.addEventListener('blur',()=>label&&label.classList.remove('focused'))});
const form=document.getElementById('resForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const b=form.querySelector('.btn-rose-full');const o=b.textContent;b.textContent='¡Cita confirmada! ✦';b.style.background='#7ecf8e';setTimeout(()=>{b.textContent=o;b.style.background='';form.reset()},3500)})}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'})}})});
})();
