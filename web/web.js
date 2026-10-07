(()=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const root=document.documentElement;
const bar=document.querySelector('.bar');
const onScroll=()=>{const h=document.body.scrollHeight-innerHeight;root.style.setProperty('--t',h>0?Math.min(1,scrollY/h).toFixed(3):0);bar.classList.toggle('solid',scrollY>40)};
addEventListener('scroll',onScroll,{passive:true});onScroll();

const q=document.getElementById('q');
if(q&&!reduce){const t=q.dataset.text;q.textContent='';q.setAttribute('aria-label',t);const spans=[...t].map(ch=>{const s=document.createElement('span');s.className='c';s.textContent=ch;s.setAttribute('aria-hidden','true');q.appendChild(s);return s});let i=0;setTimeout(function step(){if(i<spans.length){spans[i++].classList.add('on');setTimeout(step,spans[i-1].textContent===','?260:34)}},1700)}

let pend=[];
document.querySelectorAll('.sec h2,.sec .lead,.feats li,.ch,.voices li,.themes li,.chars li,.timeline li,.adapt li,.shot,.final .wrap').forEach(el=>{if(!reduce){el.classList.add('reveal');pend.push(el)}});
let rq=0;const reveal=()=>{rq=0;const lim=innerHeight*.94;pend=pend.filter(el=>{if(el.getBoundingClientRect().top<lim){el.classList.add('in');return false}return true})};
addEventListener('scroll',()=>{if(!rq)rq=requestAnimationFrame(reveal)},{passive:true});addEventListener('resize',reveal);reveal();

const links=[...document.querySelectorAll('.bar nav a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(a=>{const s=document.querySelector(a.getAttribute('href'));if(s)so.observe(s)});

let cur=null,curBtn=null;
const stop=()=>{if(cur){cur.pause();cur=null}if(curBtn){curBtn.setAttribute('aria-pressed','false');const p=curBtn.querySelector('.pl');p.textContent=p.dataset.a;curBtn=null}};
document.querySelectorAll('.voice').forEach(b=>b.addEventListener('click',()=>{if(curBtn===b){stop();return}stop();const a=new Audio(b.dataset.clip);a.volume=.95;cur=a;curBtn=b;b.setAttribute('aria-pressed','true');const p=b.querySelector('.pl');p.textContent=p.dataset.b;a.addEventListener('ended',()=>{if(curBtn===b)stop()});a.play().catch(stop)}));

const snd=document.getElementById('snd');let amb=null,ctx=null,gain=null;
const setSnd=on=>{snd.setAttribute('aria-pressed',on);const l=on?snd.dataset.off:snd.dataset.on;snd.setAttribute('aria-label',l);snd.title=l};
snd.addEventListener('click',async()=>{if(!ctx){ctx=new (window.AudioContext||window.webkitAudioContext)();gain=ctx.createGain();gain.gain.value=0;gain.connect(ctx.destination);const len=ctx.sampleRate*4,buf=ctx.createBuffer(2,len,ctx.sampleRate);for(let c=0;c<2;c++){const d=buf.getChannelData(c);let l=0;for(let i=0;i<len;i++){l=(l+.02*(Math.random()*2-1))/1.02;d[i]=l*3.2}}const n=ctx.createBufferSource();n.buffer=buf;n.loop=true;const f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=520;n.connect(f).connect(gain);n.start();try{const r=await fetch('/audio/'+root.lang+'/echoMurmur.mp3');const mb=await ctx.decodeAudioData(await r.arrayBuffer());amb=()=>{if(snd.getAttribute('aria-pressed')!=='true')return;const s=ctx.createBufferSource();s.buffer=mb;s.playbackRate.value=.85+Math.random()*.2;const p=ctx.createStereoPanner();p.pan.value=Math.random()*1.6-.8;const g=ctx.createGain();g.gain.value=.16;s.connect(g).connect(p).connect(gain);s.start();setTimeout(amb,6000+Math.random()*9000)}}catch(e){}}
const on=snd.getAttribute('aria-pressed')!=='true';setSnd(on);if(ctx.state==='suspended')ctx.resume();gain.gain.cancelScheduledValues(ctx.currentTime);gain.gain.setTargetAtTime(on?.5:0,ctx.currentTime,.8);if(on&&amb)setTimeout(amb,1500)});

const share=document.getElementById('share');
if(share)share.addEventListener('click',async()=>{const url=location.href.split('#')[0];try{if(navigator.share){await navigator.share({title:document.title,url});return}await navigator.clipboard.writeText(url);share.textContent=share.dataset.done}catch(e){}});

const cv=document.getElementById('fog');
if(cv&&!reduce){const g=cv.getContext('2d');let W,H,parts=[];const dpr=Math.min(2,devicePixelRatio||1);
const size=()=>{W=cv.width=innerWidth*dpr;H=cv.height=innerHeight*dpr;parts=Array.from({length:Math.round(innerWidth/22)},()=>({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*1.6+.4)*dpr,v:(Math.random()*.25+.05)*dpr,a:Math.random()*.5+.15,p:Math.random()*6.28}))};
size();addEventListener('resize',size);
const puffs=Array.from({length:7},(_,i)=>({x:Math.random(),y:.25+Math.random()*.7,s:.35+Math.random()*.4,v:.00004+Math.random()*.00006}));
let last=performance.now();
const tick=now=>{const dt=Math.min(50,now-last);last=now;g.clearRect(0,0,W,H);const t=parseFloat(root.style.getPropertyValue('--t'))||0;
puffs.forEach(p=>{p.x+=p.v*dt;if(p.x>1.4)p.x=-.4;const R=p.s*Math.max(W,H);const gr=g.createRadialGradient(p.x*W,p.y*H,0,p.x*W,p.y*H,R);const c=t<.5?'200,170,130':'150,165,200';gr.addColorStop(0,`rgba(${c},.05)`);gr.addColorStop(1,`rgba(${c},0)`);g.fillStyle=gr;g.fillRect(0,0,W,H)});
parts.forEach(p=>{p.x+=p.v*dt*.06;p.y+=Math.sin(now*.0004+p.p)*.08*dpr;if(p.x>W+5)p.x=-5;g.globalAlpha=p.a*(.6+.4*Math.sin(now*.001+p.p));g.fillStyle=t<.5?'#f3dcb0':'#c9d3ea';g.beginPath();g.arc(p.x,p.y,p.r,0,6.283);g.fill()});
g.globalAlpha=1;requestAnimationFrame(tick)};
requestAnimationFrame(tick)}
})();
