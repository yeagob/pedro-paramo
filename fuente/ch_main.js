VKEYS.push('r1','r2','r3','ab1','pn1','pn2','su1','f1','f2','f3','dPayR','dSellR','p5a','p5b','p5c');
const Z3=300,ZC=400,Z4=500,Z5=600;
function zoneH(x,z){if(x>Z4-60&&x<Z4+60)return 8*Math.exp(-((x-Z4)**2+(z+50)**2)/338);return 0}
function here(v){return v.zone?v.zone===S.zone:(S.zone==='comala'&&v.past===S.past)}
const PAL={wake:{bg:0x060508,fog:0x0e0a08,near:5,far:20,hs:0x8a7a64,hg:0x1e120a,hi:0.8,sc:0xffc080,si:0.15,dust:0x806040,dop:0.25},
churchN:{bg:0x05060d,fog:0x0a0b16,near:5,far:22,hs:0x3a4a7a,hg:0x1a0808,hi:0.5,sc:0x6070b0,si:0.25,dust:0x60607a,dop:0.3},
churchD:{bg:0xbab6c0,fog:0xc4c0c8,near:4,far:24,hs:0xdcd8e4,hg:0x4a4a54,hi:0.9,sc:0xfff4e0,si:0.6,dust:0xffffff,dop:0.8},
rain:{bg:0x232c3e,fog:0x2c364c,near:3,far:15,hs:0x7080a8,hg:0x1a1e28,hi:0.6,sc:0x8090c0,si:0.2,dust:0xa0b0d0,dop:0.7},
hill:{bg:0xa9bcc6,fog:0xb2c4c8,near:8,far:34,hs:0xf0f4e0,hg:0x50603a,hi:1.0,sc:0xfff8e0,si:0.55,disc:0xffffff,ds:0.8,dust:0xffffff,dop:0.5},
dusk:{bg:0x3a2c3a,fog:0x4a3846,near:3,far:16,hs:0x9a7a8a,hg:0x201418,hi:0.55,sc:0xffa070,si:0.3,dust:0xa0b0d0,dop:0.7},
plazaN:{bg:0x0e1020,fog:0x1a1d34,near:5,far:30,hs:0x6070b0,hg:0x2a1418,hi:1.0,sc:0x8090c8,si:0.45,dust:0x60607a,dop:0.4},
media:{bg:0xcdbd9c,fog:0xd0c0a0,near:6,far:28,hs:0xfff0d0,hg:0x6a5236,hi:1.0,sc:0xffe8c0,si:0.6,disc:0xffffff,ds:1,dust:0xffffff,dop:0.8}};
function setPal(C){S.pal=C;scene.background.set(C.bg);scene.fog.color.set(C.fog);hemi.color.set(C.hs);hemi.groundColor.set(C.hg);sun.color.set(C.sc);sunDisc.visible=!!C.disc;if(C.disc){sunDisc.material.color.set(C.disc);sunDisc.scale.setScalar(C.ds||1)}dustMat.color.set(C.dust||0xffffff);dustMat.opacity=C.dop==null?0.6:C.dop}
function lerpPal(a,b,t){const c=(x,y)=>new THREE.Color(x).lerp(new THREE.Color(y),t).getHex(),n=(x,y)=>x+(y-x)*t;return{bg:c(a.bg,b.bg),fog:c(a.fog,b.fog),hs:c(a.hs,b.hs),hg:c(a.hg,b.hg),sc:c(a.sc,b.sc),dust:c(a.dust,b.dust),near:n(a.near,b.near),far:n(a.far,b.far),hi:n(a.hi,b.hi),si:n(a.si,b.si),dop:n(a.dop,b.dop),disc:t<0.5?a.disc:b.disc,ds:a.ds}}
const whiteMat=lam(0xe6e0d4,{map:adobeTex}),ochreMat=lam(0xd8c8a8,{map:adobeTex}),churchWall=lam(0xe6e0d4,{map:adobeTex}),gildMat=lam(0xa8823a),goldMat=lam(0xe0b040,{emissive:0x3a2808}),candleMat=lam(0xece4cc),flameMat=new THREE.MeshBasicMaterial({color:0xffc060,fog:false});
const blackTex=canvasTex(16,16,g=>speck(g,16,16,[26,22,24],10));
const blackShawl=canvasTex(16,16,g=>{speck(g,16,16,[20,18,22],8);g.fillStyle='rgba(90,80,90,.3)';for(let y=2;y<16;y+=5)g.fillRect(0,y,16,1)});
const floorTex=canvasTex(32,32,g=>{speck(g,32,32,[150,82,58],22);g.fillStyle='rgba(40,20,14,.55)';g.fillRect(0,0,32,1);g.fillRect(0,0,1,32);g.fillRect(0,16,32,1);g.fillRect(16,0,1,32)});
const charroTex=canvasTex(32,32,g=>{speck(g,32,32,[34,28,28],12);g.fillStyle='rgba(0,0,0,.6)';g.fillRect(15,0,2,32);g.fillStyle='rgb(176,176,184)';for(let y=4;y<30;y+=5){g.fillRect(12,y,2,2);g.fillRect(18,y,2,2)}});
const darkPants=canvasTex(16,16,g=>{speck(g,16,16,[34,30,30],10);g.fillStyle='rgb(150,150,156)';g.fillRect(0,0,1,16);g.fillRect(15,0,1,16)});
const feltTex=canvasTex(16,16,g=>speck(g,16,16,[44,36,30],10));
const susTex=canvasTex(16,16,g=>{speck(g,16,16,[150,170,200],16);g.fillStyle='rgba(255,255,255,.35)';for(let y=3;y<16;y+=5)g.fillRect(0,y,16,1)});
const cassockTex=canvasTex(16,16,g=>speck(g,16,16,[22,20,22],8));
function floorM(cx,cz,w,d,tex,rep){const t=tex.clone();t.needsUpdate=true;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.repeat.set(w/rep,d/rep);const m=mesh(new THREE.PlaneGeometry(w,d),lam(0xffffff,{map:t}),cx,0.01,cz);m.rotation.x=-Math.PI/2;return m}
function wallB(x0,x1,z0,z1,h,mat){const m=box(x1-x0,h,z1-z0,mat,(x0+x1)/2,h/2,(z0+z1)/2);const k=Math.max(x1-x0,z1-z0,h)/5;m.geometry.attributes.uv.array.forEach((v,i,a)=>a[i]=v*k);addCol(x0,x1,z0,z1);return m}
function room(cx,cz,w,d,h,mat){const x0=cx-w/2,x1=cx+w/2,z0=cz-d/2,z1=cz+d/2,t=0.3;wallB(x0-t,x0,z0-t,z1+t,h,mat);wallB(x1,x1+t,z0-t,z1+t,h,mat);wallB(x0,x1,z0-t,z0,h,mat);wallB(x0,x1,z1,z1+t,h,mat);
box(1.5,2.5,0.08,plankMat,cx,1.25,z1-0.05);box(1.8,0.2,0.12,darkWood,cx,2.6,z1-0.06);const zm=lam(0x6a2a24);box(w,0.8,0.02,zm,cx,0.4,z0+0.02);box(0.02,0.8,d,zm,x0+0.02,0.4,cz);box(0.02,0.8,d,zm,x1-0.02,0.4,cz)}
function stoneRow(z,x0,x1){addCol(x0,x1,z-0.3,z+0.3);for(let x=x0;x<x1;x+=1.6){const h=0.55+rng()*0.35;const b=box(1.65,h,0.55,stoneMat,x+0.8,groundH(x,z)+h/2-0.05,z+(rng()-0.5)*0.15);b.rotation.set((rng()-0.5)*0.1,(rng()-0.5)*0.12,(rng()-0.5)*0.1)}}
function chairZ(x,z,r){const g=new THREE.Group();box(0.45,0.05,0.45,plankMat,0,0.45,0,g);box(0.45,0.55,0.05,plankMat,0,0.75,-0.2,g);[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]].forEach(l=>box(0.05,0.45,0.05,darkWood,l[0],0.22,l[1],g));g.position.set(x,0,z);g.rotation.y=r;scene.add(g);addCol(x-0.26,x+0.26,z-0.26,z+0.26);return g}
function plaqueTex(t){return canvasTex(64,12,g=>{g.fillStyle='#2a1c10';g.fillRect(0,0,64,12);g.fillStyle='#e8c870';g.font='bold 8px serif';g.textAlign='center';g.textBaseline='middle';g.fillText(t,32,6.5)})}
const zFlames=[];
function candleStick(x,z,h){cyl(0.04,0.09,h,ironMat,x,h/2,z,null,6);box(0.07,0.28,0.07,candleMat,x,h+0.14,z);const f=box(0.04,0.08,0.04,flameMat,x,h+0.33,z);zFlames.push(f);return f}
VOICES.push(...[['w1','wake',Z3-3,-2.6,820,2200],['w2','wake',Z3+3,-2.6,780,2100],['pedro','wake',Z3,-6.1,520,1500],['maria','churchN',ZC-2.3,2,800,2150],['ana','churchN',ZC+2.3,-2,900,2400],['renteria','churchN',ZC,-9.3,560,1600],
['pensar','child',Z4+5,6,900,2300],['madre','child',Z4-4,2.2,850,2250],['toribio','media',Z5+11.4,36,600,1700],['v1','plaza',-8,-108,760,2100],['v2','plaza',9,-110,820,2200],['v3','plaza',-10,-124,700,1950],['v4','plaza',8,-127,880,2300],['v5','plaza',-3,-130,740,2050],['madre2','plaza',0,-132.4,850,2250]].map(([id,zone,x,z,f1,f2])=>({id,zone,x,z,f1,f2,dur:6,active:false,done:false,past:false,quiet:/^v\d$/.test(id),never:id==='madre2',clip:id==='madre2'?'madre':null})));
room(Z3,0,18,22,4.4,whiteMat);box(18.6,0.2,22.6,darkWood,Z3,4.5,0);for(let z=-10;z<=10;z+=2.2)box(18,0.22,0.2,darkWood,Z3,4.3,z);floorM(Z3,0,18,22,floorTex,1.2);
box(1.2,0.7,2.4,darkWood,Z3,0.35,-4);addCol(Z3-0.75,Z3+0.75,-5.3,-2.7);box(0.8,0.42,2.1,lam(0x2a1a10),Z3,0.91,-4);box(0.68,0.04,1.96,lam(0xd8d0c0),Z3,1.12,-4);
box(0.44,0.16,1.45,lam(0xe8e4dc),Z3,1.2,-3.75);sph(0.11,lam(0xb89a7a),Z3,1.22,-4.72,null,1,0.85,1.2);
[[-0.8,-5.4],[0.8,-5.4],[-0.8,-2.6],[0.8,-2.6]].forEach(c=>candleStick(Z3+c[0],c[1],1.3));
const respCandle=candleStick(Z3,-1.9,0.9);respCandle.visible=false;
const wakeL=new THREE.PointLight(0xffa860,0,20,1.2);wakeL.position.set(Z3,2.4,-4);scene.add(wakeL);
box(0.1,1.4,0.08,darkWood,Z3,2.6,-10.85);box(0.7,0.1,0.08,darkWood,Z3,2.9,-10.85);
{const pt=canvasTex(16,20,g=>{speck(g,16,20,[120,100,76],14);g.fillStyle='#2a2220';g.fillRect(3,12,10,8);g.fillStyle='#d8ccb4';g.beginPath();g.ellipse(8,8,3,4,0,0,7);g.fill()});
for(const z of[-6,-2,3]){box(0.06,0.95,0.75,gildMat,Z3+8.95,2.3,z);box(0.02,0.8,0.6,lam(0xffffff,{map:pt}),Z3+8.91,2.3,z)}
for(const z of[-6,3]){box(0.04,1.2,0.9,lam(0x101830),Z3-8.98,2,z);for(let k=-1.5;k<=1.5;k++)cyl(0.014,0.014,1.2,ironMat,Z3-8.94,2,z+k*0.2,null,4)}
for(let z=-8;z<=8;z+=2.5){chairZ(Z3-8.4,z,Math.PI/2);chairZ(Z3+8.4,z+1,-Math.PI/2)}
for(const[x,z]of[[-1.3,-6.2],[1.3,-6.2],[-1.3,-1.8],[1.3,-1.8]]){cantaro(Z3+x,z,0.9);for(let k=0;k<5;k++)sph(0.09,lam(0xe08a1a),Z3+x+(rng()-0.5)*0.2,0.45,z+(rng()-0.5)*0.2)}}
const MOURN=[[-2.6,-5.2],[-3,-2.6],[2.6,-5.2],[3,-2.6],[-1.9,-0.4],[1.9,-0.4]].map(([dx,z])=>{const m=human({dress:true,dressTex:blackTex,topTex:blackTex,skin:0x8a6a50,headTex:headTexF([140,106,80],'20,16,14',true),hair:0x141010,longHair:true,shawl:blackShawl,hood:true,slim:0.9});const x=Z3+dx;m.g.position.set(x,-0.4,z);m.home=Math.atan2(Z3-x,-4-z);m.g.rotation.y=m.home;m.x=x;m.z=z;addCol(x-0.3,x+0.3,z-0.3,z+0.3);m.arms.forEach(a=>a.rotation.x=-0.75);m.elbows.forEach(e=>e.rotation.x=-1.2);return m});
const PEDRO={topTex:charroTex,pantsTex:darkPants,skin:0xb08060,headTex:headTexF([170,124,92],'20,16,14',false,true),hair:0x141010,hat:true,hatTex:feltTex,brim:0.33,belt:true,shoe:0x140e0a};
const pedroN=human(PEDRO);pedroN.g.position.set(Z3,0,-6.1);addCol(Z3-0.3,Z3+0.3,-6.4,-5.8);
const RENT={dress:true,dressTex:cassockTex,topTex:cassockTex,skin:0xc09878,headTex:headTexF([186,150,120],'150,146,140'),hair:0x8a8680,slim:0.95};
const rentN=human(RENT);rentN.g.visible=false;const rentPL=human(RENT);rentPL.g.visible=false;
for(const r of[rentN,rentPL])cyl(0.056,0.056,0.03,lam(0xf0f0f0),0,1.52,0,r.g,8);
const rentCoin=cyl(0.05,0.05,0.03,goldMat,0,-0.32,0.06,rentPL.elbows[1],8);
const coinG=new THREE.Group();scene.add(coinG);for(let i=0;i<3;i++)cyl(0.05,0.05,0.012,goldMat,0,i*0.014,0,coinG,10);coinG.visible=false;
room(ZC,-1,10,26,6.5,churchWall);floorM(ZC,-1,10,26,floorTex,1.4);
const roofSlabs=[],shafts=[],rubble=[],altarFlames=[],pews=[];
for(let i=0;i<13;i++){const z=-13+i*2;roofSlabs.push(box(10.6,0.25,2,darkWood,ZC,6.62,z));if(i%3===1||i===6){const s=box(2.2,6.5,1.7,new THREE.MeshBasicMaterial({color:0xfff6e0,transparent:true,opacity:0.1,depthWrite:false}),ZC+(rng()-0.5)*3,3.25,z);s.rotation.z=0.22;shafts.push(s);for(let k=0;k<4;k++){const r=box(0.3+rng()*0.5,0.2+rng()*0.3,0.3+rng()*0.4,stoneMat,s.position.x+(rng()-0.5)*2,0.12,z+(rng()-0.5)*1.5);r.rotation.y=rng()*3;rubble.push(r)}}}
function pew(x,z){const g=new THREE.Group();box(2.9,0.07,0.42,plankMat,0,0.45,0,g);box(2.9,0.5,0.05,plankMat,0,0.78,0.2,g);for(const sx of[-1.35,1.35]){box(0.07,0.45,0.4,darkWood,sx,0.22,0,g);box(0.07,0.95,0.05,darkWood,sx,0.5,0.2,g)}g.position.set(x,0,z);scene.add(g);addCol(x-1.45,x+1.45,z-0.25,z+0.25);pews.push(g)}
for(let z=8;z>=-6;z-=2){pew(ZC-2.65,z);pew(ZC+2.65,z)}
for(const sx of[-1,1])for(const z of[7,1,-5]){cyl(0.3,0.36,6.5,stoneMat,ZC+sx*4.85,3.25,z,null,8);addCol(ZC+sx*4.85-0.36,ZC+sx*4.85+0.36,z-0.36,z+0.36)}
box(10,0.12,0.6,stoneMat,ZC,0.06,-9.6);box(2.2,1,0.9,stoneMat,ZC,0.5,-10.9);box(2.3,0.03,1,lam(0xe8e0d0),ZC,1.01,-10.9);addCol(ZC-1.15,ZC+1.15,-11.4,-10.4);
for(let k=0;k<6;k++){const x=ZC-0.9+k*0.36;box(0.06,0.22+(k%2)*0.08,0.06,candleMat,x,1.13,-11.1);const f=box(0.035,0.07,0.035,flameMat,x,1.3+(k%2)*0.08,-11.1);zFlames.push(f);altarFlames.push(f)}
const churchL=new THREE.PointLight(0xffb070,0,18,1.3);churchL.position.set(ZC,3,-10);scene.add(churchL);
box(9.8,6.2,0.3,gildMat,ZC,3.1,-13.85);box(0.5,1.4,0.1,goldMat,ZC,5.8,-13.65);box(1.0,0.12,0.1,goldMat,ZC,6.1,-13.64);
const NICH=['juan','miguel','virgen','eduviges','pedro','ana'],nichX=i=>ZC-3.75+i*1.5,PLQ={juan:'S. JUAN',miguel:'S. MIGUEL',virgen:'MARÍA',eduviges:'STA. EDUVIGES',pedro:'S. PEDRO',ana:'STA. ANA'};
const skinS=lam(0xd8b898),COINS={};
function saint(id,x){const g=new THREE.Group();g.position.set(x,1.1,-13.5);scene.add(g);const col={juan:0x8a2a24,miguel:0xa0a0b0,virgen:0x3a5a9a,eduviges:0x5a4030,pedro:0x3a5a3a,ana:0x7a3a5a}[id];
lathe([[0.001,0],[0.17,0],[0.14,0.45],[0.1,0.75],[0.06,0.82],[0.001,0.83]],7,lam(col),g);sph(0.065,skinS,0,0.9,0,g,0.9,1.1,0.95);mesh(new THREE.TorusGeometry(0.1,0.012,4,12),goldMat,0,0.93,-0.06,g);
if(id==='miguel'){for(const s of[-1,1]){const w=box(0.03,0.5,0.22,lam(0xf0ece0),s*0.1,0.65,-0.1,g);w.rotation.set(0.3,s*0.5,s*0.3)}box(0.02,0.55,0.02,ironMat,0.15,0.55,0.08,g).rotation.z=-0.3}
if(id==='virgen'){mesh(new THREE.ConeGeometry(0.05,0.08,5),goldMat,0,1.0,0,g);sph(0.1,lam(0x2a4a8a),0,0.82,-0.02,g,1,1.1,0.9)}
if(id==='eduviges'){sph(0.085,lam(0xf0ece4),0,0.92,-0.02,g,1,1.2,1);box(0.1,0.1,0.08,lam(0xb0a080),0.12,0.5,0.1,g)}
if(id==='pedro'){for(const s of[0,1])box(0.025,0.14,0.01,goldMat,0.13+s*0.03,0.5,0.1,g)}
if(id==='ana'){const c=lathe([[0.001,0],[0.07,0],[0.05,0.25],[0.001,0.28]],6,lam(0xe0d0b0),g);c.position.set(0.17,0,0.06);sph(0.04,skinS,0.17,0.32,0.06,g)}
if(id==='juan')cyl(0.03,0.02,0.07,goldMat,0.13,0.55,0.1,g,6)}
NICH.forEach((id,i)=>{const x=nichX(i);box(1.1,1.7,0.12,darkMat,x,1.85,-13.66);box(1.1,1.2,0.12,darkMat,x,4.3,-13.66);box(0.12,4.6,0.22,gildMat,x-0.75,2.9,-13.6);box(0.5,0.1,0.3,gildMat,x,1.05,-13.5);saint(id,x);
box(1.0,0.18,0.03,lam(0xffffff,{map:plaqueTex(PLQ[id])}),x,0.86,-13.69);const c=new THREE.Group();for(let k=0;k<2;k++){const m=cyl(0.06,0.06,0.014,goldMat,k*0.05,k*0.016,0,c,10);m.rotation.x=0.3}c.position.set(x+0.18,1.18,-13.3);c.userData.home=c.position.clone();c.visible=false;scene.add(c);COINS[id]=c});
box(1.0,2.4,1.8,darkWood,ZC+4.45,1.2,3.5);box(0.02,1.8,0.6,lam(0x5a1a1a),ZC+3.94,1.0,3.5);box(1.1,0.2,1.9,darkWood,ZC+4.45,2.5,3.5);addCol(ZC+3.95,ZC+5,2.6,4.4);
const ghostsC=[[ZC-2.3,2.05,'maria'],[ZC+2.3,-1.95,'ana']].map(([x,z,id])=>{const m=human({dress:true,dressTex:dressTex,topTex:dressTex,skin:0xa08060,headTex:headTexF([156,120,94],id==='ana'?'40,28,20':'90,86,82',true),hair:id==='ana'?0x2a1c14:0x5a5650,longHair:true,shawl:shawlTex,hood:id==='maria',transparent:true,slim:0.88});m.g.position.set(x,-0.38,z);m.g.rotation.y=Math.PI;m.g.traverse(c=>{if(c.material)c.material.opacity=0.72});return m});
function churchPhase(pr){roofSlabs.forEach((b,i)=>b.visible=!pr||!(i%3===1||i===6));shafts.forEach(s=>s.visible=pr);rubble.forEach(r=>r.visible=pr);churchWall.color.set(pr?0xa8a096:0xe6e0d4);ghostsC.forEach(g=>g.g.visible=!pr);altarFlames.forEach(f=>f.visible=!pr);
pews.forEach((p,i)=>p.rotation.set(pr&&i%3===0?0.22:0,pr&&i%2?0.1*(i%4-1.5):0,pr&&i%5===0?0.28:0));Object.values(COINS).forEach(c=>c.visible=false)}
function dirtTex(b,v){const t=canvasTex(32,32,g=>{speck(g,32,32,b,v*0.6);for(let i=0;i<40;i++){g.fillStyle=rng()>0.5?'rgba(0,0,0,.08)':'rgba(255,255,255,.07)';g.fillRect(rng()*32|0,rng()*32|0,1+rng()*2|0,1)}});t.minFilter=THREE.LinearMipmapLinearFilter;t.magFilter=THREE.LinearFilter;t.wrapS=t.wrapT=THREE.RepeatWrapping;return t}
const grassTex=dirtTex([210,214,196],16),dirtT=dirtTex([206,186,156],14);
const ZT=new THREE.PlaneGeometry(60,100,30,50);ZT.rotateX(-Math.PI/2);ZT.translate(Z4,0,-32);
{const p=ZT.attributes.position;for(let i=0;i<p.count;i++){p.setY(i,groundH(p.getX(i),p.getZ(i))+(rng()-0.5)*0.15)}const g=ZT.toNonIndexed();g.computeVertexNormals();const pp=g.attributes.position,col=[];
for(let i=0;i<pp.count;i+=3){const z=(pp.getZ(i)+pp.getZ(i+1)+pp.getZ(i+2))/3;const v=0.85+rng()*0.25;const c=z<-14?[0.4,0.56,0.32]:(z<-6?[0.42,0.48,0.3]:[0.4,0.33,0.26]);for(let k=0;k<3;k++)col.push(c[0]*v,c[1]*v,c[2]*v)}
g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*24,uv.getY(i)*40);mesh(g,lam(0xffffff,{vertexColors:true,map:grassTex}),0,0,0)}
stoneFence(Z4-22,14,-78);stoneFence(Z4+22,14,-78);stoneRow(14,Z4-22,Z4+22);stoneRow(-78,Z4-22,Z4+22);
const wallH=lam(0xd8d0c0,{map:adobeTex});{const m=box(8,3.4,6,wallH,Z4-4,1.7,6);m.geometry.attributes.uv.array.forEach((v,i,a)=>a[i]=v*2);addCol(Z4-8,Z4,3,9);box(8.6,0.25,6.6,tileMat,Z4-4,3.5,6);
box(0.9,0.8,0.04,new THREE.MeshBasicMaterial({color:0x6a4a20}),Z4-1.5,1.7,2.98);for(let k=-1.5;k<=1.5;k++)cyl(0.014,0.014,0.8,ironMat,Z4-1.5+k*0.2,1.7,2.95,null,4);
box(0.08,0.75,0.55,darkMat,Z4+0.03,1.5,6.9);for(let k=0;k<3;k++){box(0.05,0.12,0.05,candleMat,Z4+0.1,1.2,6.75+k*0.15);box(0.03,0.05,0.03,flameMat,Z4+0.1,1.3,6.75+k*0.15)}
barrel(Z4-8.6,2.5);cantaro(Z4-7.6,2.2);cantaro(Z4-7.2,2.5,0.7);crate(Z4+2.5,9.5,0.3);
for(const[x,z,r]of[[Z4-2,0,1.2],[Z4+3,-2,0.8],[Z4-6,-3,1]]){const pd=mesh(new THREE.CircleGeometry(r,7),lam(0x40506a),x,0.03,z);pd.rotation.x=-Math.PI/2}
const tr=new THREE.Group();cyl(0.12,0.2,2.6,lam(0x4a3a2a),0,1.3,0,tr,6);for(const[x,y,z,s]of[[0,3,0,1.3],[0.6,2.6,0.3,0.9],[-0.6,2.7,-0.2,1]])mesh(new THREE.IcosahedronGeometry(s,0),lam(0x3e5a32),x,y,z,tr);tr.position.set(Z4-6,groundH(Z4-6,-46),-46);scene.add(tr);addCol(Z4-6.25,Z4-5.75,-46.25,-45.75);
[[-14,-60,1.1],[12,-62,0.9],[-16,-30,1.2],[15,-35,1],[9,-72,0.8],[-10,-72,1],[17,-14,1.1],[-17,-12,0.9],[-19,-48,1.3],[19,-50,1]].forEach(([dx,z,k])=>{const t=tr.clone();t.scale.setScalar(k);t.rotation.y=rng()*6;t.position.set(Z4+dx,groundH(Z4+dx,z),z);scene.add(t);addCol(Z4+dx-0.25,Z4+dx+0.25,z-0.25,z+0.25)});
{const fc=[0xd8c040,0xe0e0d8,0xc06a8a,0x8a7ad0];for(let i=0;i<90;i++){const x=Z4+(rng()-0.5)*40,z=-78+rng()*84;if(Math.abs(x-Z4)<3&&z>-56)continue;const f=mesh(new THREE.ConeGeometry(0.07,0.14,4),lam(fc[i%4]),x,groundH(x,z)+0.07,z);f.rotation.x=Math.PI}
for(let i=0;i<14;i++){const x=Z4+(rng()-0.5)*40,z=-78+rng()*84;if(Math.abs(x-Z4)<4)continue;mesh(new THREE.IcosahedronGeometry(0.25+rng()*0.35,0),lam(0x8a8478),x,groundH(x,z)+0.1,z)}}
for(let i=0;i<60;i++){const x=Z4+(rng()-0.5)*40,z=-20-rng()*55;const c=mesh(new THREE.ConeGeometry(0.06,0.35,3),lam(rng()>0.8?0xd8c040:0x5a7a3a),x,groundH(x,z)+0.15,z);c.rotation.set((rng()-0.5)*0.5,0,(rng()-0.5)*0.5)}}
const doorPiv=new THREE.Group();doorPiv.position.set(Z4-4.6,0,2.97);scene.add(doorPiv);const doorLeaf=box(1.2,2.2,0.06,plankMat,0.6,1.1,0,doorPiv);box(1.5,0.16,0.14,darkWood,Z4-4,2.3,2.95);
const doorGlow=box(1.1,0.03,0.02,new THREE.MeshBasicMaterial({color:0xffc070,fog:false}),Z4-4,0.02,2.94);doorGlow.visible=false;
const houseL=new THREE.PointLight(0xffb060,0,7,1.5);houseL.position.set(Z4-4,1.2,2.2);scene.add(houseL);
const ohMat=lam(0xffffff,{map:plankTex,transparent:true});
[[0,-0.6,1.2,0.06],[0,0.6,1.2,0.06],[-0.6,0,0.06,1.2],[0.6,0,0.06,1.2]].forEach(([dx,dz,w,d])=>{box(w,2.2,d,ohMat,Z4+5+dx,1.1,6+dz);addCol(Z4+5+dx-w/2,Z4+5+dx+w/2,6+dz-d/2,6+dz+d/2)});box(1.5,0.08,1.5,ohMat,Z4+5,2.25,6).rotation.x=0.12;box(0.9,0.45,0.5,plankMat,Z4+5,0.22,6.3);
const nino=human({topTex:mantaTex,pantsTex:mantaTex,skin:0xb08060,headTex:headTexF([176,130,96],'20,16,14'),hair:0x141010,shoe:0x5a4030});nino.g.scale.setScalar(0.62);nino.head.scale.setScalar(1.3);nino.g.visible=false;
const SUS={x:Z4+0.8,z:-49.6};const susana=human({dress:true,dressTex:susTex,topTex:susTex,skin:0xd0a888,headTex:headTexF([208,172,140],'70,46,28',true),hair:0x46301c,longHair:true,slim:0.85});susana.g.scale.setScalar(0.6);susana.head.scale.setScalar(1.3);susana.g.position.set(SUS.x,groundH(SUS.x,SUS.z),SUS.z);addCol(SUS.x-0.25,SUS.x+0.25,SUS.z-0.25,SUS.z+0.25);
const kiteTex=canvasTex(16,16,g=>{const c=['#c83a2a','#e8c040','#2a5aa8','#3a8a4a'];for(let i=0;i<4;i++){g.fillStyle=c[i];g.fillRect((i%2)*8,(i>>1)*8,8,8)}});
const kiteG=new THREE.Group();{const k=mesh(new THREE.PlaneGeometry(0.75,0.75),lam(0xffffff,{map:kiteTex,side:THREE.DoubleSide}),0,0,0,kiteG);k.rotation.z=Math.PI/4;k.scale.y=1.3;box(0.02,1.3,0.02,darkWood,0,0,0.01,kiteG);box(1.0,0.02,0.02,darkWood,0,0.1,0.01,kiteG);for(let i=0;i<5;i++){const b=box(0.14,0.05,0.01,lam([0xc83a2a,0xe8c040,0x2a5aa8][i%3]),Math.sin(i)*0.1,-0.8-i*0.28,0,kiteG);b.rotation.z=i*0.5}}
scene.add(kiteG);kiteG.visible=false;
const kiteLine=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(),new THREE.Vector3(0,1,0)]),new THREE.LineBasicMaterial({color:0xe8e0d0}));kiteLine.frustumCulled=false;scene.add(kiteLine);kiteLine.visible=false;
function setLine(a,b){const p=kiteLine.geometry.attributes.position;p.setXYZ(0,a.x,a.y,a.z);p.setXYZ(1,b.x,b.y,b.z);p.needsUpdate=true}
const ufo=new THREE.Group();lathe([[0.001,-0.15],[0.9,0],[0.001,0.15]],10,lam(0x9098a0),ufo);sph(0.3,lam(0x8ab0d0),0,0.15,0,ufo,1,0.6,1);const ufoL=[0,1,2].map(i=>box(0.12,0.08,0.12,new THREE.MeshBasicMaterial({color:0xff6040,fog:false}),Math.cos(i*2.1)*0.7,-0.05,Math.sin(i*2.1)*0.7,ufo));scene.add(ufo);ufo.visible=false;
{const g=new THREE.PlaneGeometry(64,70);g.rotateX(-Math.PI/2);const uv=g.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*26,uv.getY(i)*28);mesh(g,lam(0xc8b08a,{map:dirtT}),Z5,0,12)}
stoneFence(Z5-26,44,-16);stoneFence(Z5+26,44,-16);stoneRow(44,Z5-26,Z5+26);stoneRow(-16,Z5-26,Z5+26);
{const m=box(22,4.2,8,ochreMat,Z5,2.1,-10);m.geometry.attributes.uv.array.forEach((v,i,a)=>a[i]=v*3);addCol(Z5-11,Z5+11,-14,-6);box(22.6,0.25,3.2,tileMat,Z5,3.6,-4.5);box(22.8,0.3,8.6,tileMat,Z5,4.35,-10);
for(let k=-4;k<4;k++){const x=Z5+(k+0.5)*2.75;cyl(0.16,0.2,3.5,ochreMat,x,1.75,-3.2,null,7);addCol(x-0.2,x+0.2,-3.4,-3.0)}
box(2.4,2.9,0.08,darkWood,Z5,1.45,-5.96);for(const x of[-6,-3.5,3.5,6])box(0.9,1.1,0.06,darkMat,Z5+x,1.9,-5.97);
box(1.6,0.06,0.8,plankMat,Z5,0.78,-4.6);for(const[x,z]of[[-0.72,-0.34],[0.72,-0.34],[-0.72,0.34],[0.72,0.34]])box(0.06,0.76,0.06,darkWood,Z5+x,0.38,-4.6+z);box(0.4,0.06,0.28,lam(0x5a2a1a),Z5-0.2,0.84,-4.6);box(0.06,0.06,0.06,darkMat,Z5+0.4,0.84,-4.5);addCol(Z5-0.85,Z5+0.85,-5.0,-4.2);chairZ(Z5,-5.6,0);
for(let x=Z5-24;x<Z5-2;x+=1.2)for(let z=10;z<40;z+=1.5){if(rng()>0.55)continue;const c=mesh(new THREE.ConeGeometry(0.08,1.2+rng()*0.5,4),lam(0x7a7a3a),x+(rng()-0.5)*0.3,0.6,z);c.rotation.z=(rng()-0.5)*0.2}
for(let i=0;i<14;i++)agave(Z5+4+rng()*20,8+rng()*34);
for(let z=8;z<42;z+=1.6){const h=0.5+rng()*0.3;box(0.5,h,1.6,stoneMat,Z5+0.6+(rng()-0.5)*0.15,h/2-0.05,z).rotation.y=(rng()-0.5)*0.1}
cyl(0.09,0.11,1.8,darkWood,Z5+0.6,0.9,10,null,6);mesh(new THREE.TorusGeometry(0.16,0.04,4,8),lam(0xa08a50),Z5+0.6,1.2,10.1).rotation.x=0.3;
const tb=box(5,3,4,ochreMat,Z5+15,1.5,36);addCol(Z5+12.5,Z5+17.5,34,38);box(5.4,0.22,4.4,tileMat,Z5+15,3.1,36);box(0.06,2.1,1.1,darkWood,Z5+12.47,1.05,36)}
const MOJ=[{x:Z5+6,z:18},{x:Z5+11,z:25},{x:Z5+4,z:31}],FSTART={x:Z5+0.6,z:10};
MOJ.forEach(m=>{box(0.42,0.55,0.42,lam(0xf0ece4),m.x,0.27,m.z);box(0.05,0.22,0.02,lam(0x8a2a24),m.x,0.4,m.z+0.22);box(0.16,0.05,0.02,lam(0x8a2a24),m.x,0.44,m.z+0.22)});
const fulgor=human({topTex:leatherTex,sleeveTex:mantaTex,pantsTex:mantaTex,skin:0xb08a6a,headTex:headTexF([176,140,110],'170,166,160',false,true),hair:0xa8a49c,hat:true});fulgor.g.position.set(Z5,0,-5.35);
const pedroPL=human(PEDRO);pedroPL.g.visible=false;
const fencePosts=[];for(let i=0;i<150;i++){const post=box(0.13,1.2,0.13,darkWood,0,0.6,0);const rail=new THREE.Group();box(1,0.07,0.04,plankMat,0,0.85,0,rail);box(1,0.07,0.04,plankMat,0,0.45,0,rail);scene.add(rail);post.visible=false;rail.visible=false;fencePosts.push({post,rail,t:1})}
const hangT=human({topTex:mantaTex,pantsTex:mantaTex,skin:0x8a6040,headTex:headTexF([150,104,70],'30,22,18',false,true),hair:0x1e1612});hangT.g.position.set(6.4,0.75,-88.4);hangT.head.rotation.set(0.35,0,0.5);hangT.g.visible=false;
const hangRope=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(6.4,2.3,-88.4),new THREE.Vector3(6.4,3.58,-88.4)]),new THREE.LineBasicMaterial({color:0x6a5a40}));scene.add(hangRope);hangRope.visible=false;
const WIDOWS=[['v1',-8,-108],['v2',9,-110],['v3',-10,-124],['v4',8,-127],['v5',-3,-130]].map(([id,x,z])=>{const w=human({dress:true,dressTex:blackTex,topTex:blackTex,skin:0x7a5a48,headTex:headTexF([128,96,76],'18,14,12',true),hair:0x121010,longHair:true,shawl:blackShawl,hood:true,transparent:true,slim:0.88});w.id=id;w.hx=x;w.hz=z;w.g.visible=false;w.v=VOICES.find(v=>v.id===id);w.g.traverse(c=>{if(c.material){c.material.opacity=0.85;c.material.emissive=new THREE.Color(0x2a2630)}});const r=mesh(new THREE.CircleGeometry(0.5,6),lam(0x161214),0,0,0);r.rotation.x=-Math.PI/2;r.visible=false;w.rebozo=r;return w});
function exTex(i){return canvasTex(64,52,g=>{const sky=['#9aa0a8','#6a5a6a','#7a9ab0','#c0a0b0','#5a3a4a','#8aa070','#203028','#7a6a5a','#4a7ab0'][i];g.fillStyle='#d8d0b8';g.fillRect(0,0,64,52);g.fillStyle=sky;g.fillRect(3,3,58,30);g.fillStyle='rgba(60,50,40,.8)';g.fillRect(3,27,58,6);
const fig=(x,y,h,c)=>{g.fillStyle=c;g.fillRect(x,y-h,3,h);g.beginPath();g.arc(x+1.5,y-h-1.6,1.7,0,7);g.fill()};
if(i===0){g.fillStyle='#5a5a60';for(let x=20;x<60;x+=9)g.fillRect(x,16,7,11);fig(28,27,8,'#2a2a30');fig(36,27,4,'#e8e0d0');g.fillStyle='rgba(240,240,240,.45)';g.fillRect(3,14,58,13)}
if(i===1){g.fillStyle='#2a2028';for(let x=16;x<60;x+=8)g.fillRect(x,8+(x%3)*3,6,20);fig(40,27,15,'#101010');fig(26,27,7,'#3a5a8a');g.fillStyle='#c03020';g.fillRect(42,10,2,2)}
if(i===2){g.fillStyle='#2a4a6a';g.fillRect(3,22,58,5);g.fillStyle='#3a2a20';g.fillRect(36,17,20,5);g.fillRect(45,6,1,11);fig(22,27,8,'#4a3a30');g.fillStyle='#e8a040';g.fillRect(28,25,3,2)}
if(i===3){g.strokeStyle='#e8e0f0';g.lineWidth=2;g.beginPath();g.ellipse(46,11,9,3,0,0,7);g.stroke();fig(26,27,9,'#202020');fig(30,27,8,'#f0f0f0')}
if(i===4){g.fillStyle='#a03030';g.fillRect(3,20,58,7);g.fillStyle='#3060a0';g.fillRect(20,22,24,4);fig(34,18,7,'#3a4a5a');g.strokeStyle='#e0d8c8';g.beginPath();g.moveTo(30,9);g.lineTo(35,12);g.lineTo(40,9);g.stroke()}
if(i===5){g.fillStyle='#4a6a3a';g.beginPath();g.ellipse(36,27,22,4,0,0,7);g.fill();g.fillStyle='#3a3a2a';g.beginPath();g.ellipse(40,19,8,4,0,0,7);g.fill();g.fillRect(46,13,6,4);g.fillRect(30,20,-8,2);fig(22,27,7,'#a03030')}
if(i===6){g.fillStyle='#40e070';g.beginPath();g.arc(38,15,8,0,7);g.fill();g.fillStyle='#102018';g.beginPath();g.arc(38,15,3,0,7);g.fill();fig(20,27,7,'#a0a0a0')}
if(i===7){g.fillStyle='#8a8a80';g.fillRect(18,22,30,4);g.fillStyle='#c8b8a0';g.fillRect(20,20,24,2);g.fillStyle='#e8e0d0';g.beginPath();g.arc(48,11,4,0,7);g.fill();g.fillStyle='#202020';g.fillRect(46,10,1,1);g.fillRect(49,10,1,1)}
if(i===8){g.fillStyle='#2a5a8a';g.fillRect(3,20,58,7);g.fillStyle='#f0f0e0';g.beginPath();g.arc(50,9,3,0,7);g.fill();fig(24,24,8,'#3a2a2a');g.globalAlpha=0.35;fig(36,24,8,'#3a2a2a');g.globalAlpha=1}
g.fillStyle='#f0d070';g.beginPath();g.arc(10,9,4,0,7);g.fill();g.fillStyle='#e8e0f0';g.beginPath();g.arc(10,12,6,Math.PI,0);g.fill();g.fillStyle='#3a3050';g.fillRect(9,6,2,5);
g.fillStyle='rgba(40,30,20,.75)';for(let l=0;l<4;l++)for(let x=5;x<59;x+=2+((x*7+l*3+i)%4))g.fillRect(x,37+l*3.5,1+((x+l+i)%3),1);g.strokeStyle='#a08040';g.lineWidth=1;g.strokeRect(1.5,1.5,61,49)})}
const INTER=[];function inter(o){INTER.push(o);return o}
function nearestInter(){let b=null,bd=1e9;for(const o of INTER){if(!o.zones.includes(S.zone)||(o.on&&!o.on()))continue;const d=Math.hypot(P.x-o.x,P.z-o.z);if(d<o.r&&d<bd){bd=d;b=o}}return b}
const EXIDS=['e1','e2','e3','e4','e5','e6','e7','e8','e9'],exSparks=[];
[['e1',['churchN','churchD'],ZC-4.97,1.7,7,Math.PI/2,ZC-3.9,7],['e2',['churchN','churchD'],ZC+4.97,1.7,5.1,-Math.PI/2,ZC+3.9,5.1],['e3',['churchN','churchD'],ZC+4.97,1.7,-3,-Math.PI/2,ZC+3.9,-3],['e4',['churchN','churchD'],ZC-4.97,1.7,-7.5,Math.PI/2,ZC-3.9,-7.5],
['e5',['child'],Z4-5.2,groundH(Z4-5.2,-44.7)+0.85,-44.7,0,Z4-5.2,-43.6],['e6',['child'],Z4+0.03,1.5,5.3,Math.PI/2,Z4+1.1,5.3],['e7',['child'],Z4+5,1.3,6.64,0,Z4+5,7.7],['e8',['media'],Z5-7,1.6,-5.97,0,Z5-7,-4.7],['e9',['plaza'],-16.46,1.6,-116,Math.PI/2,-15.5,-116]].forEach(([id,zones,x,y,z,ry,ix,iz],i)=>{
const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=ry;scene.add(g);box(0.56,0.46,0.015,lam(0x9a9aa0),0,0,0,g);mesh(new THREE.PlaneGeometry(0.5,0.4),lam(0xffffff,{map:exTex(i)}),0,0,0.01,g);const sp=box(0.03,0.03,0.03,new THREE.MeshBasicMaterial({color:0xffffff,fog:false}),0.24,0.2,0.03,g);sp.userData.id=id;exSparks.push(sp);
if(id==='e5'){cyl(0.04,0.04,1.2,darkWood,0,-0.3,-0.05,g,4);box(0.6,0.05,0.04,darkWood,0,0.3,-0.05,g)}
inter({zones,x:ix,z:iz,r:1.7,hint:()=>T('hintExvoto'),act:()=>readEx(id)})});
function readEx(id){const ex=T('ex');S.exv[id]=1;showCard(T('exvoto'),T('exvoto')+' · '+ex[id][0],ex[id][1]);if(EXIDS.every(k=>S.exv[k])&&!S.exv.fin){S.exv.fin=1;S.after.push(()=>{const f=T('ex').fin;showCard(T('exvotos'),f[0],f[1])})}}
NICH.forEach((id,i)=>inter({zones:['churchD'],x:nichX(i),z:-12.4,r:0.85,on:()=>!S.found[id],hint:()=>T('search')+T('saints')[id],act:()=>searchNiche(id)}));
inter({zones:['churchD'],x:ZC+3.3,z:3.5,r:1.3,hint:()=>T('hintConfess'),act:()=>showChoice(T('confess'),[{id:'y',l:T('yes')},{id:'n',l:T('no')}],k=>{if(k==='y'){S.breath=1;S.check={x:P.x,z:P.z};say([['',T('confessed')]])}})});
inter({zones:['child'],x:Z4-4,z:2.2,r:1.6,on:()=>S.ch==='4c'&&!S.zf.locked,hint:()=>T('hintDoor'),act:()=>{S.zf.locked=1;if(A.ctx){thump(A.ctx.currentTime,A.sfx,0.4,500);thump(A.ctx.currentTime+0.15,A.sfx,0.3,500)}say([['',T('locked')]]);VOICES.find(v=>v.id==='madre').active=true}});
inter({zones:['media'],x:Z5,z:-3.4,r:1.9,on:()=>S.ch==='5a',hint:()=>T('hintTalk'),act:()=>{S.ch='5talk';S.lock=true;say([[T('nFulgor'),T('f1')],[T('nFulgor'),T('f2'),debtChoice]])}});
function tone(f,dur,gain,type,dest,t0,f2){if(!A.ctx)return;const ctx=A.ctx,t=t0||ctx.currentTime;const o=ctx.createOscillator();o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);const g=ctx.createGain();g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+0.01);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g);g.connect(dest||A.sfx);o.start(t);o.stop(t+dur+0.05)}
function campanilla(){if(!A.ctx)return;const t=A.ctx.currentTime;[0,0.18,0.36].forEach(d=>{tone(2100,0.8,0.05,'sine',A.sfx,t+d);tone(3150,0.5,0.025,'sine',A.sfx,t+d)})}
function stinger(){if(!A.ctx)return;const t=A.ctx.currentTime;tone(98,1.6,0.08,'sawtooth',A.sfx,t,80);tone(103.8,1.6,0.08,'sawtooth',A.sfx,t,85);thump(t,A.sfx,0.4,200)}
function clink(){if(!A.ctx)return;const t=A.ctx.currentTime;tone(3300,0.35,0.06,'sine',A.sfx,t);tone(4500,0.25,0.04,'sine',A.sfx,t+0.05);tone(3700,0.3,0.03,'sine',A.sfx,t+0.18)}
function whoosh(){if(!A.ctx)return;const ctx=A.ctx,t=ctx.currentTime;const s=ctx.createBufferSource();s.buffer=A.noise;s.loop=true;const f=ctx.createBiquadFilter();f.type='bandpass';f.Q.value=1.2;f.frequency.setValueAtTime(300,t);f.frequency.linearRampToValueAtTime(900,t+1);f.frequency.linearRampToValueAtTime(400,t+2.6);const g=ctx.createGain();g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(0.25,t+0.6);g.gain.linearRampToValueAtTime(0.0001,t+2.8);s.connect(f);f.connect(g);g.connect(A.zone);s.start(t);s.stop(t+3)}
function creak(){if(!A.ctx)return;const t=A.ctx.currentTime;tone(70,2.2,0.06,'sawtooth',A.zone,t,48);tone(140,1.8,0.02,'square',A.zone,t+0.3,90)}
function splash(){if(!A.ctx)return;const t=A.ctx.currentTime;clink();thump(t+0.25,A.sfx,0.3,1800);thump(t+0.3,A.sfx,0.2,900)}
function zoneAudio(){const ctx=A.ctx;A.zone=ctx.createGain();A.zone.connect(A.master);A.chant=ctx.createGain();A.chant.gain.value=0;A.chant.connect(A.zone);
for(let i=0;i<4;i++){const s=loopSrc(whisperBuf(ctx,4));const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=420+i*160;f.Q.value=3;const g=ctx.createGain();g.gain.value=0.35;s.connect(f);f.connect(g);g.connect(A.chant)}
[196,233.1,293.7].forEach(fr=>{const o=ctx.createOscillator();o.type='triangle';o.frequency.value=fr;const f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=700;const g=ctx.createGain();g.gain.value=0.03;const l=ctx.createOscillator();l.frequency.value=0.15+Math.random()*0.2;const lg=ctx.createGain();lg.gain.value=0.02;l.connect(lg);lg.connect(g.gain);o.connect(f);f.connect(g);g.connect(A.chant);o.start();l.start()});
A.rainG=ctx.createGain();A.rainG.gain.value=0;A.rainG.connect(A.zone);let s=loopSrc(A.noise),f=ctx.createBiquadFilter();f.type='highpass';f.frequency.value=1500;s.connect(f);f.connect(A.rainG);
A.roofG=ctx.createGain();A.roofG.gain.value=0;A.roofG.connect(A.zone);s=loopSrc(A.noise);f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=600;f.Q.value=0.8;s.connect(f);f.connect(A.roofG);
A.windH=ctx.createGain();A.windH.gain.value=0;A.windH.connect(A.zone);s=loopSrc(A.noise);f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=600;s.connect(f);f.connect(A.windH)}
function zoneAudioUpd(dt){if(!A.ctx||!A.zone)return;const k=Math.min(1,dt*2);const think=S.listening&&S.listening.id==='pensar'?S.listenT:0;
A.chant.gain.value+=((S.zone==='wake'&&S.ros&&S.ros.ph==='pray'?0.5:0)-A.chant.gain.value)*Math.min(1,dt*4);
A.rainG.gain.value+=((S.rain?(S.fixedCam?0.1:0.35)*(1-think):0)-A.rainG.gain.value)*k;A.roofG.gain.value+=((S.rain&&S.fixedCam?0.45*(1-think):0)-A.roofG.gain.value)*k;
A.windH.gain.value+=((S.zone==='child'&&!S.fixedCam?0.1+S.windT*0.45:0)-A.windH.gain.value)*k}
function ambTo(v){if(A.ctx){const t=A.ctx.currentTime;A.amb.gain.cancelScheduledValues(t);A.amb.gain.setTargetAtTime(v,t,0.4)}}
function zoneLights(){wakeL.intensity=S.zone==='wake'?2.4:0;churchL.intensity=S.zone==='churchN'?1.5:(S.zone==='churchD'?0.3:0);houseL.intensity=S.zone==='child'&&(S.ch==='4c'||S.ch==='4grow')?1.3:0}
function setAvatar(a){[juan,rentPL,nino,pedroPL].forEach(m=>m.g.visible=m===a);PL=a;P.sc=a===nino?0.62:1;if(a!==juan)S.breath=1}
function place(x,z,rot){P.x=x;P.z=z;P.rot=rot;P.y=groundH(x,z);P.amp=0;PL.g.position.set(x,P.y,z);PL.g.rotation.set(0,rot,0);cam.yaw=rot+Math.PI;cam.pitch=0.45;cam.pos.set(x+Math.sin(cam.yaw)*cam.dist,P.y+3,z+Math.cos(cam.yaw)*cam.dist);S.hist=[];S.check={x,z}}
function tell(lines){for(let i=queue.length-1;i>0;i--)if(!queue[i][0]&&queue[i].length<3)queue.splice(i,1);const showing=subT>0&&queue.length>0;if(showing&&!queue[0][0]&&!queue[0].cb)subT=Math.min(subT,0.01);queue.splice(showing?1:0,0,...lines)}
function clearSay(){queue.length=0;subT=0;$('sub').innerHTML=''}
function chapterCard(n){showCard(T('ch'+n),T('ch'+n)+' · '+T('ch'+n+'t'),T('ch'+n+'i'))}
function fadeTo(cb){if(S.fade)return;S.fade={t:0,cb,done:false};stopMurmur()}
function seq(items){S.tl={t:0,i:0,items}}
function updSeq(dt){const q=S.tl;if(!q)return;q.t+=dt;while(S.tl===q&&q.i<q.items.length&&q.t>=q.items[q.i][0])q.items[q.i++][1]();if(S.tl===q&&q.i>=q.items.length)S.tl=null}
function showChoice(q,opts,cb){S.mode='choice';if(document.exitPointerLock)document.exitPointerLock();$('choiceQ').textContent=q;const c=$('choiceOpts');c.innerHTML='';opts.forEach((o,i)=>{const b=document.createElement('button');b.className='card'+(o.x?' x':'');b.textContent=(i+1)+'. '+o.l;b.disabled=!!o.x;b.onclick=()=>{$('choice').classList.remove('on');S.mode='play';cb(o.id)};c.appendChild(b)});$('choice').classList.add('on')}
function resetZone(){S.zone='comala';S.ch='';S.lock=false;S.fixedCam=null;S.camOverride=null;S.ceil=null;S.pal=null;S.rain=false;S.tl=null;S.kite=null;S.fence=null;S.fenceSink=0;S.ros=null;S.rentWalk=false;S.coinAnim=null;S.zf={};S.found={};P.stoop=0;P.spMul=1;P.forceWalk=false;
setAvatar(juan);nino.g.scale.setScalar(0.62);nino.head.scale.setScalar(1.3);susana.g.visible=true;
VOICES.forEach(v=>{if(v.zone){v.active=false;v.done=false;delete S.frags[v.id]}});
rentN.g.visible=false;coinG.visible=false;pedroN.g.rotation.y=0;kiteG.visible=false;kiteLine.visible=false;ufo.visible=false;doorPiv.rotation.y=0;doorGlow.visible=false;ohMat.opacity=1;
hangT.g.visible=false;hangRope.visible=false;eduviges.g.visible=true;WIDOWS.forEach(w=>{w.g.visible=false;w.silent=false;w.rebozo.visible=false;w.g.position.set(w.hx,0,w.hz);w.v.x=w.hx;w.v.z=w.hz});
fencePosts.forEach(p=>{p.post.visible=false;p.rail.visible=false;p.rail.position.y=0});respCandle.visible=false;churchPhase(false);zoneLights();ambTo(1)}
function startCh3(){clearSay();S.zone='wake';S.ch='3a';setPal(PAL.wake);setAvatar(juan);place(Z3,9.4,Math.PI);S.ceil=4.3;S.breath=1;S.ros={ph:'pray',t:0,len:12,seen:false};VOICES.forEach(v=>{if(v.zone==='wake')v.active=true});S.flags.done=true;zoneLights();ambTo(0.12);chapterCard(3);S.after.push(()=>say([['',T('ros1')]]))}
function updRosary(dt){const r=S.ros;if(!r)return;r.t+=dt;if(r.ph==='pray'&&r.t>r.len){r.ph='look';r.t=0;r.seen=false;campanilla()}else if(r.ph==='look'&&r.t>3.2){r.ph='pray';r.t=0;r.len=6+Math.random()*3}
const look=r.ph==='look';if(look&&!S.lock&&S.ch==='3a')hint(T('still'),0.2);
if(look&&r.t>0.8&&!r.seen&&P.moving&&!S.lock&&S.ch==='3a'){r.seen=true;S.breath=Math.max(0,S.breath-0.28);stinger();say([['',T('seen'),null,1]])}
MOURN.forEach((m,i)=>{let hx=0.5,hy=0;if(look){hx=-0.08;let a=Math.atan2(P.x-m.x,P.z-m.z)-m.home;while(a>Math.PI)a-=2*Math.PI;while(a<-Math.PI)a+=2*Math.PI;hy=Math.max(-1.1,Math.min(1.1,a))}m.head.rotation.x+=(hx-m.head.rotation.x)*Math.min(1,dt*5);m.head.rotation.y+=(hy-m.head.rotation.y)*Math.min(1,dt*5);m.body.scale.y=1+Math.sin(S.t*1.4+i)*0.012})}
function startCut3(){S.ch='3cut';S.lock=true;rentN.g.visible=true;rentN.g.position.set(Z3+0.95,0,7);rentN.g.rotation.y=Math.PI;S.rentWalk=true;S.camOverride={pos:new THREE.Vector3(Z3+4.2,2.5,-0.8),look:new THREE.Vector3(Z3+0.5,1.3,-5.2)}}
function coinHand(){coinG.visible=true;S.coinAnim={t:0};clink()}
function startRenteria(){clearSay();S.camOverride=null;S.lock=false;rentN.g.visible=false;coinG.visible=false;S.zone='churchN';S.ch='3b';setPal(PAL.churchN);churchPhase(false);setAvatar(rentPL);place(ZC,10,Math.PI);S.ceil=6.3;S.zf.coinsLeft=3;VOICES.forEach(v=>{if(v.zone==='churchN'&&v.id!=='renteria')v.active=true});zoneLights();ambTo(0.1);say([['',T('rNight')],['',T('weight')]])}
function flyCoin(id){const c=COINS[id];c.visible=true;c.userData.fly={t:0,from:new THREE.Vector3(P.x,P.y+1.1,P.z),to:c.userData.home.clone()};clink()}
function hideCoins(){S.lock=true;S.zf.coinsLeft=0;S.camOverride={pos:new THREE.Vector3(ZC+1.8,2.6,-7.4),look:new THREE.Vector3(ZC,1.6,-13.4)};seq([[0.4,()=>flyCoin('miguel')],[1.6,()=>flyCoin('pedro')],[2.8,()=>flyCoin('ana')],[4.4,()=>say([['',T('coinsHid')]])],[8,()=>fadeTo(startRetablo)]])}
function startRetablo(){clearSay();S.camOverride=null;S.lock=false;S.zone='churchD';S.ch='3c';setPal(PAL.churchD);churchPhase(true);setAvatar(juan);place(ZC,10,Math.PI);S.ceil=6.3;S.found={};zoneLights();ambTo(0.5);say([['',T('present3')],['',T('retHint')]])}
function searchNiche(id){if(S.found[id]){tell([['',T('already')]]);return}S.found[id]=1;const good=['miguel','pedro','ana'].includes(id);if(good){const c=COINS[id];c.visible=true;c.position.copy(c.userData.home);clink();tell([['',T('found')[id]]])}else tell([['',T('none')[id]]]);
if(['miguel','pedro','ana'].every(k=>S.found[k])&&!S.zf.coin3){S.zf.coin3=1;S.lock=true;say([['',T('coin3')],['',T('slip'),()=>{splash();fadeTo(startCh4)}]])}}
function startCh4(){clearSay();S.lock=false;S.camOverride=null;S.zone='child';S.ch='4a';S.ceil=null;setPal(PAL.rain);setAvatar(nino);place(Z4+5,6,Math.PI);S.fixedCam=new THREE.Vector3(Z4+5.45,2.05,6.5);S.rain=true;ohMat.opacity=1;VOICES.find(v=>v.id==='pensar').active=true;S.zf.abT=0;zoneLights();ambTo(0);chapterCard(4);S.after.push(()=>say([[T('nAbuela'),T('ab1')],[T('nPedro'),T('pn1')]]))}
function startHill(){clearSay();S.lock=false;S.zone='child';S.ch='4b';S.fixedCam=null;S.ceil=null;S.rain=false;ohMat.opacity=1;setPal(PAL.hill);setAvatar(nino);place(Z4,-22,Math.PI);zoneLights();ambTo(0)}
function startKite(){S.ch='4kite';S.kite={a:0.06,t:0,ph:'calm',len:2.6,done:false,ufo:-1};kiteG.visible=true;kiteLine.visible=true;kiteG.position.set(P.x,P.y+2,P.z-3);P.rot=Math.PI}
function updKite(dt){const k=S.kite;k.t+=dt;if(k.ph==='calm'&&k.t>k.len){k.ph='gust';k.t=0;k.len=2.4+Math.random()*1.2;whoosh()}else if(k.ph==='gust'&&k.t>k.len){k.ph='calm';k.t=0;k.len=1.8+Math.random()*1.6}
const gust=k.ph==='gust',hold=keys['KeyE']&&!k.done;S.windT+=((gust?0.7:0.05)-S.windT)*Math.min(1,dt*3);
if(!k.done){k.a=Math.max(0,Math.min(1,k.a+dt*(hold?(gust?0.13:-0.09):-0.012)));hint(T('kiteHint'),0.2)}
const kp=new THREE.Vector3(P.x+Math.sin(S.t*0.8)*(gust?1.4:0.6)+(hold&&!gust?Math.sin(S.t*7)*0.5:0),P.y+2.2+k.a*13,P.z-4-k.a*11);kiteG.position.lerp(kp,Math.min(1,dt*3));kiteG.rotation.z=Math.sin(S.t*(gust?4:1.6))*0.35;
setLine(new THREE.Vector3(P.x,P.y+1.05,P.z-0.15),kiteG.position);S.camOverride={pos:new THREE.Vector3(P.x+1.6,P.y+1.0,P.z+3.6),look:new THREE.Vector3(P.x,P.y+0.8,P.z).lerp(kiteG.position,0.5)};
if(S.konami&&k.ufo<0&&k.a>0.35){k.ufo=0;ufo.visible=true}if(k.ufo>=0&&ufo.visible){k.ufo+=dt;ufo.position.set(P.x-30+k.ufo*7.5,P.y+16+Math.sin(k.ufo*3)*0.6,P.z-28);ufo.rotation.y+=dt*3;ufoL.forEach((l,i)=>l.visible=Math.sin(S.t*12+i*2)>0);if(k.ufo>3&&!k.ufoSaid){k.ufoSaid=1;say([[T('nPedro'),T('ufo'),null,1]])}if(k.ufo>=8)ufo.visible=false}
if(k.a>=1&&!k.done){k.done=true;S.camOverride=null;kiteLine.visible=false;const f=FR.papalote;showCard(f.who,f.who+' · '+f.title,f.text);completeFrag('papalote')}}
const PATH4=[[Z4+0.5,-52],[Z4+1,-38],[Z4-1,-24],[Z4-3,-12],[Z4-4,-2],[Z4-4,5]];
function pathAt(u){const n=PATH4.length-1,f=Math.min(n-1e-6,u*n),i=Math.floor(f),t=f-i;const a=PATH4[i],b=PATH4[i+1];return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
function startFollow(){S.ch='4follow';S.lock=false;S.kite.u=0;say([['',T('follow')]])}
function updFollow(dt){const k=S.kite;const[x,z]=pathAt(k.u);const y=k.u<0.98?groundH(x,z)+4.5+3*(1-k.u):3.9;kiteG.position.lerp(new THREE.Vector3(x,y,z),Math.min(1,dt*2));kiteG.rotation.z=Math.sin(S.t*2.2)*0.4*(1-k.u);
if(Math.hypot(P.x-x,P.z-z)<10&&k.u<1)k.u=Math.min(1,k.u+dt*0.028);setPal(lerpPal(PAL.hill,PAL.dusk,k.u));S.rain=k.u>0.55;susana.g.visible=k.u<0.15;
if(k.u>=1){S.ch='4c';zoneLights();doorGlow.visible=true}}
function doorSetup(){S.lock=false;S.zone='child';S.ch='4c';S.fixedCam=null;S.ceil=null;S.rain=true;setPal(PAL.dusk);setAvatar(nino);susana.g.visible=false;kiteG.visible=true;kiteG.position.set(Z4-4,3.9,5);S.kite={u:1};place(Z4-4,-1.5,0);zoneLights();doorGlow.visible=true;ambTo(0)}
function startGrow(){S.ch='4grow';S.lock=true;S.zf.growT=0;zoneLights();creak()}
function updGrow(dt){const t=(S.zf.growT+=dt);doorPiv.rotation.y=-Math.min(1.5,t*0.8);houseL.intensity=1.3+Math.min(2,t);
if(t>1.2){const tx=Z4-4,tz=2.6,dx=tx-P.x,dz=tz-P.z,d=Math.hypot(dx,dz);P.forceWalk=d>0.15;if(d>0.15){P.x+=dx/d*0.9*dt;P.z+=dz/d*0.9*dt;P.rot=Math.atan2(dx,dz)}const k=Math.min(1,(t-1.2)/3.5);const s=0.62+0.38*k;nino.g.scale.setScalar(s);nino.head.scale.setScalar(1.3-0.3*k);P.sc=s}
if(t>1.6&&!S.zf.growSaid){S.zf.growSaid=1;say([['',T('grow')]])}if(t>6&&!S.zf.grown){S.zf.grown=1;fadeTo(startCh5)}}
function mediaSetup(){clearSay();S.lock=false;P.forceWalk=false;S.camOverride=null;S.zone='media';S.rain=false;S.fixedCam=null;S.ceil=null;setPal(PAL.media);setAvatar(pedroPL);place(Z5-1.5,6,Math.PI);zoneLights();ambTo(0.6);nino.g.scale.setScalar(0.62);nino.head.scale.setScalar(1.3)}
function startCh5(){mediaSetup();S.ch='5a';chapterCard(5)}
function debtChoice(){const c=S.zf.crossed||(S.zf.crossed={});showChoice(T('debtQ'),[{id:'pay',l:T('dPay'),x:c.pay},{id:'sell',l:T('dSell'),x:c.sell},{id:'wed',l:T('dWed')}],id=>{
if(id==='pay'){c.pay=1;say([[T('nPedro'),T('dPayR'),debtChoice]])}else if(id==='sell'){c.sell=1;say([[T('nPedro'),T('dSellR'),debtChoice]])}
else say([[T('nFulgor'),T('f3')],[T('nPedro'),T('p5a')],[T('nPedro'),T('p5b'),startFence]])})}
function startFence(){S.ch='5b';S.lock=false;S.fence={on:false,pts:[],len:0,last:null,n:0};S.fenceSink=0;say([['',T('fenceHint')]])}
function inPoly(p,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if(((a.z>p.z)!==(b.z>p.z))&&(p.x<(b.x-a.x)*(p.z-a.z)/(b.z-a.z)+a.x))c=!c}return c}
function addPost(a,b){const F=S.fence;const p=fencePosts[F.n++%fencePosts.length];p.post.position.set(b.x,0,b.z);p.post.scale.y=0.01;p.post.visible=true;p.t=0;const dx=b.x-a.x,dz=b.z-a.z,L=Math.hypot(dx,dz);p.rail.position.set((a.x+b.x)/2,0,(a.z+b.z)/2);p.rail.rotation.y=Math.atan2(-dz,dx);p.rail.scale.set(L,1,1);p.rail.visible=false;if(A.ctx)thump(A.ctx.currentTime,A.sfx,0.15,300)}
function updFence(dt){const F=S.fence;if(!F)return;if(!F.on){if(Math.hypot(P.x-FSTART.x,P.z-FSTART.z)<1.6&&!S.fenceSink){F.on=true;F.n=0;F.wp=0;F.pts=[{x:FSTART.x,z:FSTART.z}];F.len=0;F.last={x:FSTART.x,z:FSTART.z}}return}
const d=Math.hypot(P.x-F.last.x,P.z-F.last.z);if(d>=1.3){const b={x:P.x,z:P.z};addPost(F.last,b);F.pts.push(b);F.len+=d;F.last=b}
if(F.len>12&&Math.hypot(P.x-FSTART.x,P.z-FSTART.z)<1.5){F.on=false;if(MOJ.every(m=>inPoly(m,F.pts))){addPost(F.last,FSTART);S.ch='5c';tell([['',T('fenceOk')]]);VOICES.find(v=>v.id==='toribio').active=true}else{S.fenceSink=0.9;tell([['',T('fenceBad')]])}}
else if(F.len>220){F.on=false;S.fenceSink=0.9;tell([['',T('fenceBad')]])}}
function startHanged(){S.lock=true;say([[T('nPedro'),T('p5c'),()=>fadeTo(hangScene)]])}
function hangScene(){clearSay();S.zone='hang';S.ch='5hang';setWorld(false);setAvatar(juan);place(9.5,-84.8,Math.atan2(6.4-9.5,-88.4+84.8));S.lock=true;hangT.g.visible=true;hangRope.visible=true;eduviges.g.visible=false;ambTo(0);zoneLights();seq([[1.2,creak],[2.2,()=>say([['',T('hanged')]])],[10,()=>fadeTo(startViudas)]])}
function startViudas(){clearSay();S.zone='plaza';S.ch='plaza';S.camOverride=null;S.fixedCam=null;S.ceil=null;S.rain=false;hangT.g.visible=false;hangRope.visible=false;eduviges.g.visible=true;S.flags.done=true;setWorld(true);setPal(PAL.plazaN);horse.visible=false;setAvatar(pedroPL);place(0,-101,Math.PI);S.lock=false;
WIDOWS.forEach(w=>{w.g.visible=true;w.silent=false;w.g.position.set(w.hx,0,w.hz);w.rebozo.visible=false});VOICES.forEach(v=>{if(v.zone==='plaza'&&!v.never)v.active=true});zoneLights();ambTo(0.5);say([['',T('widowsIntro')]])}
function updWidows(dt){let n=0;WIDOWS.forEach(w=>{const g=w.g;if(w.silent){if(g.visible){w.sinkT+=dt;g.position.y=-w.sinkT*1.1;if(w.sinkT>1.8)g.visible=false}return}if(!g.visible)return;
const dx=P.x-g.position.x,dz=P.z-g.position.z,d=Math.hypot(dx,dz);let mv=false;if(d<15&&d>1.5&&S.listening!==w.v&&S.mode==='play'){g.position.x+=dx/d*0.42*dt;g.position.z+=dz/d*0.42*dt;mv=true}g.rotation.y=Math.atan2(dx,dz);animWalk(w,S.t*3.5+w.ph,mv?0.28:0);if(d<2.3)n++;
w.v.x=g.position.x;w.v.z=g.position.z;if(w.v.a&&w.v.a.pan&&(w.v.a.pan.positionX||w.v.a.pan.setPosition))setPos(w.v.a.pan,w.v.x,1.4,w.v.z)});P.spMul=Math.max(0.4,1-n*0.2)}
function startSilence(){S.ch='5d';if(A.ctx){const t=A.ctx.currentTime;A.pastAmb.gain.cancelScheduledValues(t);A.pastAmb.gain.setTargetAtTime(0,t,0.8)}ambTo(0);seq([[3.5,()=>{VOICES.find(v=>v.id==='madre2').active=true}]])}
function neverFail(){S.zf.never=(S.zf.never||0)+1;say([['',T('cantSilence')]]);if(S.zf.never===1)seq([[4.5,()=>{S.lock=true;say([['',T('end5a'),()=>seq([[1.5,()=>endGame(endCard5())]])]])}]])}
const BOOK=Object.keys(I18N.es.fr);
function endCard5(){return T('endCard5')(BOOK.filter(k=>S.frags[k]).length,BOOK.length,EXIDS.filter(k=>S.exv[k]).length,S.ecos.length)}
function listenHint(t){if(t.id==='pensar')return T('hintThink');if(t.id==='renteria')return T('hintPray');if(S.zone==='plaza')return T('hintSilence');return T('hintListen')}
const eduDoor=new THREE.Group();eduDoor.position.set(4.95,0,-85);scene.add(eduDoor);box(0.08,2.35,2,plankMat,0,1.17,1,eduDoor);box(0.1,0.06,0.06,ironMat,-0.06,1.1,1.8,eduDoor);const eduDoorCol=[4.75,5.2,-85,-83];colliders.push(eduDoorCol);const eduDoorOpen=[999,999,-85.12,-84.88];colliders.push(eduDoorOpen);
function npcList(){return [abundio.g,eduviges.g,pedroN.g,rentN.g,fulgor.g,susana.g,...burros,...MOURN.map(m=>m.g||m),...WIDOWS.map(w=>w.g),...ghostsC.map(m=>m.g||m)]}
function collideNPC(){for(const g of npcList()){if(!g||!g.visible||g===PL.g)continue;const r=burros.includes(g)?0.5:0.28,m=r+0.35;const dx=P.x-g.position.x,dz=P.z-g.position.z,d=Math.hypot(dx,dz);if(d<m&&d>1e-4){P.x=g.position.x+dx/d*m;P.z=g.position.z+dz/d*m}}}
function zoneFrag(id){const F=S.frags;if(id==='eduviges')VOICES[2].active=true;
if(['w1','w2','pedro'].includes(id)&&['w1','w2','pedro'].every(k=>F[k]))S.after.push(startCut3);
if((id==='maria'||id==='ana')&&F.maria&&F.ana){VOICES.find(v=>v.id==='renteria').active=true}
if(id==='renteria')S.after.push(hideCoins);if(id==='pensar')S.after.push(()=>fadeTo(startHill));if(id==='papalote')S.after.push(startFollow);if(id==='madre')S.after.push(startGrow);if(id==='toribio')S.after.push(startHanged);
const w=WIDOWS.find(w=>w.id===id);if(w){w.silent=true;w.sinkT=0;w.rebozo.position.set(w.g.position.x,0.02,w.g.position.z);w.rebozo.visible=true;if(WIDOWS.every(w=>w.silent))S.after.push(startSilence)}}
function zoneObjective(){let b=null,bd=1e9;VOICES.forEach(v=>{if(v.active&&!v.done&&here(v)){const d=Math.hypot(P.x-v.x,P.z-v.z);if(d<bd){bd=d;b=v}}});if(b)return b;
if(S.ch==='3c')return{x:ZC,z:-12};if(S.ch==='4b')return SUS;if(S.ch==='4follow')return{x:kiteG.position.x,z:kiteG.position.z};if(S.ch==='4c')return{x:Z4-4,z:2.2};if(S.ch==='5a')return{x:Z5,z:-3.4};if(S.ch==='5b'){const F=S.fence;if(!F||!F.on)return FSTART;const W=MOJ.map(m=>{const dx=m.x-Z5-7,dz=m.z-24.7,l=Math.hypot(dx,dz);return{x:m.x+dx/l*3,z:m.z+dz/l*3}});F.wp=F.wp||0;while(F.wp<W.length&&Math.hypot(P.x-W[F.wp].x,P.z-W[F.wp].z)<1.4)F.wp++;return F.wp<W.length?W[F.wp]:FSTART}return null}
function zoneUpdate(dt){if(S.zone==='wake')updRosary(dt);
if(S.ch==='3b'){const close=Math.max(0,Math.min(1,1-(P.z+10)/22));P.stoop=S.zf.coinsLeft?0.1+0.38*close:0.05;P.spMul=S.zf.coinsLeft?1-0.45*close:1}else P.stoop=0;
if(S.ch==='4a'){const k=S.listening&&S.listening.id==='pensar'?S.listenT:0;ohMat.opacity=1-k*0.85;S.zf.abT+=dt;if(S.zf.abT>24&&!S.listening){S.zf.abT=0;say([[T('nAbuela'),T('ab1')]])}}
if(S.ch==='4b'&&Math.hypot(P.x-SUS.x,P.z-SUS.z)<3.2){S.ch='4talk';S.lock=true;P.rot=Math.atan2(SUS.x-P.x,SUS.z-P.z);say([[T('nPedro'),T('pn2')],[T('nSusana'),T('su1'),startKite]])}
if(S.ch==='4kite')updKite(dt);if(S.ch==='4follow')updFollow(dt);if(S.ch==='4grow')updGrow(dt);if(S.ch==='5b')updFence(dt);
if(S.zone!=='plaza')P.spMul=S.ch==='3b'?P.spMul:1;zoneAudioUpd(dt)}
function zonePose(){if(PL===rentPL){PL.head.rotation.x+=P.stoop*0.9;PL.arms.forEach(a=>a.rotation.x+=(-0.35-a.rotation.x)*Math.min(1,P.stoop*1.5));rentCoin.visible=S.zf.coinsLeft>0}
if(S.ch==='4kite'){const h=keys['KeyE'];PL.arms.forEach((a,i)=>{a.rotation.x=-2.3+(h?Math.sin(S.t*9+i)*0.12:0);a.rotation.z=(i?-1:1)*0.15});PL.elbows.forEach(e=>e.rotation.x=-0.35);PL.head.rotation.x=-0.45}
if(PL===pedroPL&&S.listening){PL.arms[0].rotation.x=-1.4;PL.elbows[0].rotation.x=-0.3;PL.arms[0].rotation.z=0.1;PL.head.rotation.z=0}}
function zoneNPC(dt){zFlames.forEach((f,i)=>{f.scale.y=0.8+0.4*Math.abs(Math.sin(S.t*9+i*1.7))});
if(S.zone==='wake'){animWalk(pedroN,0,0);if(S.rentWalk){const g=rentN.g;g.position.z=Math.max(-5.55,g.position.z-dt*1.5);animWalk(rentN,S.t*5,0.4);if(g.position.z<=-5.55){S.rentWalk=false;g.rotation.y=-Math.PI/2;pedroN.g.rotation.y=Math.PI/2;animWalk(rentN,0,0);say([[T('nPedro'),T('r1')],[T('nPedro'),T('r2'),coinHand],[T('nRent'),T('r3'),()=>fadeTo(startRenteria)]])}}else if(rentN.g.visible)animWalk(rentN,0,0)}
if(S.coinAnim){const q=S.coinAnim;q.t+=dt;const k=Math.min(1,q.t/1.2);coinG.position.set(Z3+0.25+0.45*k,1.0+Math.sin(k*Math.PI)*0.15,-5.85+0.25*k);if(k>=1)S.coinAnim=null}
for(const id in COINS){const c=COINS[id],fl=c.userData.fly;if(fl){fl.t+=dt*1.1;const k=Math.min(1,fl.t);c.position.lerpVectors(fl.from,fl.to,k);c.position.y+=Math.sin(k*Math.PI)*0.8;c.rotation.x+=dt*8;if(k>=1){c.userData.fly=null;c.visible=false;c.rotation.x=0}}}
if(S.zone==='child'&&susana.g.visible)animWalk(susana,0,0);if(S.zone==='media')animWalk(fulgor,0,0);if(S.zone==='plaza')updWidows(dt);
if(hangT.g.visible)hangT.g.rotation.y=Math.sin(S.t*0.6)*0.25;
exSparks.forEach((s,i)=>s.visible=Math.sin(S.t*2.2+i*1.3)>0.75&&!S.exv[s.userData.id]);
fencePosts.forEach(p=>{if(p.post.visible&&p.t<1){p.t+=dt*3;const k=Math.min(1,p.t);p.post.scale.y=Math.max(0.01,k);p.post.position.y=0.6*k;if(p.t>0.6)p.rail.visible=true}});
if(S.fenceSink>0){S.fenceSink-=dt;fencePosts.forEach(p=>{if(p.post.visible){p.post.position.y-=dt*1.4;p.rail.position.y-=dt*1.4}});if(S.fenceSink<=0){S.fenceSink=0;fencePosts.forEach(p=>{p.post.visible=false;p.rail.visible=false;p.rail.position.y=0})}}}
const KONAMI=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','KeyB','KeyA'];let kIdx=0;
addEventListener('keydown',e=>{if(e.repeat)return;kIdx=e.code===KONAMI[kIdx]?kIdx+1:(e.code===KONAMI[0]?1:0);if(kIdx===KONAMI.length){kIdx=0;S.konami=true;$('ver').textContent='v'+VERSION+' · UFO';tone(880,0.2,0.05);if(A.ctx)tone(1320,0.3,0.05,'sine',A.sfx,A.ctx.currentTime+0.15)}
if(e.code==='KeyF'&&S.mode==='play'&&S.zone==='wake'&&Math.hypot(P.x-Z3,P.z+4)<4.5&&!respCandle.visible){respCandle.visible=true;hint(T('respects'),4)}
if(S.mode==='choice'&&/^Digit[1-4]$/.test(e.code)){const b=$('choiceOpts').children[+e.code.slice(5)-1];if(b&&!b.disabled)b.click()}});
