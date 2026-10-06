VKEYS.push('dm1','dm2','jAsk','jDead','doR','doEco','bt1','bt2','ppOath','p10','abd1','abd2','dmScream','jMeet','abSon');
const Z6=700,Z7=800,Z8=900,Z9=1000;
Object.assign(PAL,{nightC:{bg:0x05070c,fog:0x080a12,near:1.5,far:9,hs:0x3a4466,hg:0x0a0a10,hi:0.45,sc:0x506090,si:0.15,dust:0x404050,dop:0.25},
donisN:{bg:0x0a0c18,fog:0x10121e,near:4,far:18,hs:0x5060a0,hg:0x201010,hi:0.75,sc:0x7080c0,si:0.3,dust:0x60607a,dop:0.2},
tombP:{bg:0x000000,fog:0x040302,near:0.4,far:4,hs:0x3a3028,hg:0x0a0806,hi:0.35,sc:0x201810,si:0.1,dust:0x302820,dop:0.15},
mineP:{bg:0x020203,fog:0x050506,near:2,far:12,hs:0x4a4038,hg:0x0a0806,hi:0.35,sc:0x302820,si:0.1,dust:0x504840,dop:0.2},
seaP:{bg:0x0a1428,fog:0x10203c,near:5,far:26,hs:0x7a96d0,hg:0x101828,hi:0.85,sc:0x90b0e0,si:0.35,dust:0x8090b0,dop:0.35},
fiestaP:{bg:0x120a10,fog:0x2a1418,near:6,far:28,hs:0xc08060,hg:0x301010,hi:0.95,sc:0xffb080,si:0.4,dust:0xffd0a0,dop:0.3},
revP:{bg:0x06070e,fog:0x0c0e1a,near:8,far:30,hs:0x5a6a9a,hg:0x1e1810,hi:0.95,sc:0x6878a8,si:0.3,dust:0x60607a,dop:0.25,disc:0xdde4ff,ds:0.6},
finalP:{bg:0x3a2a2a,fog:0x4a3434,near:5,far:26,hs:0xd09a7a,hg:0x2a1a14,hi:0.85,sc:0xffa070,si:0.5,disc:0xffc080,ds:1.4,dust:0xffd0a0,dop:0.4}});
function endH(x,z){if(Math.abs(x-900)<16&&Math.abs(z)<20)return S.zf.mineY==null?0:S.zf.mineY;if(Math.abs(x-1000)<34&&z>-62&&z<50)return 0.9*Math.sin((x-1000)*0.17)*Math.cos(z*0.13)+0.6*Math.sin(z*0.07+1);return null}
const endL=new THREE.PointLight(0xffb060,0,10,1.4);scene.add(endL);
const endProps=[];function eprop(o){endProps.push(o);o.visible=false;return o}
const oldTex=headTexF([160,124,98],'150,146,140',true);
const damiana=human({dress:true,dressTex:blackTex,topTex:blackTex,skin:0x9a7a60,headTex:oldTex,hair:0x8a8680,longHair:true,shawl:blackShawl,slim:0.86});damiana.g.visible=false;
const lantern=new THREE.Group();scene.add(lantern);box(0.14,0.2,0.14,ironMat,0,0,0,lantern);box(0.07,0.1,0.07,flameMat,0,0,0,lantern);box(0.02,0.14,0.02,ironMat,0,0.16,0,lantern);eprop(lantern);
const DPATH=[[6.2,-84],[2.4,-86],[1.6,-96],[1.4,-103],[3,-111],[0,-118.5],[-3.2,-112],[-2.6,-101],[-3.3,-95.4]],DSTOP={3:'d1',6:'d2'};
VOICES.push(...[['d1','night',1.4,-103,820,2100,3.5],['d2','night',-3.2,-112,800,2000,3.5],['h1','donis',Z6-2.4,-3.2,850,2250,3.5],['h2','donis',Z6+2.2,1.2,620,1700,3.5],
['do1','tomb',Z7-2.2,0.8,820,2100,3],['sz1','tomb',Z7+3,-5,900,2400,3],['mx1','tomb',Z7-4,-3,600,1500,3],['mx2','tomb',Z7+4,3.5,700,1800,3],
['s1','sea',Z8,92,900,2400,7.5],['s2','sea',Z8,92,880,2300,7.5],['pf','final',Z5,-5.5,560,1500,3]].map(([id,zone,x,z,f1,f2,range])=>({id,zone,x,z,x0:x,z0:z,f1,f2,range,dur:6,active:false,done:false,past:false,deco:/^mx/.test(id),pull:0})));
{const t=0.3,h=3.2;const W=(x0,x1,z0,z1)=>wallB(x0,x1,z0,z1,h,whiteMat);W(Z6-4.5-t,Z6-4.5,-5.5,5.5);W(Z6+4.5,Z6+4.5+t,-5.5,5.5);W(Z6-4.5,Z6+4.5,-5.5-t,-5.5);W(Z6-4.5,Z6-0.8,5.5,5.5+t);W(Z6+0.8,Z6+4.5,5.5,5.5+t);
floorM(Z6,0,9,11,floorTex,1.3);for(const z of[-4,-1,3])box(9.4,0.2,0.24,darkWood,Z6,3.1,z).rotation.z=(z%2?0.06:-0.04);box(4,0.24,3,tileMat,Z6-2.4,3.25,-4.2);box(3,0.24,2.4,tileMat,Z6+3,3.25,4.2);
box(1.1,0.1,2,lam(0x8a6a3a,{map:mantaTex}),Z6-2.6,0.06,-4.2);addCol(Z6-3.2,Z6-2,-5.3,-3.2);box(0.8,0.5,0.6,darkWood,Z6+3.4,0.25,-4.6);addCol(Z6+3,Z6+3.8,-4.9,-4.3);
cyl(0.5,0.55,0.25,stoneMat,Z6+1.8,0.12,-2);addCol(Z6+1.3,Z6+2.3,-2.5,-1.5);cantaro(Z6+3.8,1.4);cantaro(Z6+3.6,2,0.8);
const st=new THREE.BufferGeometry();const sp=[];for(let i=0;i<220;i++)sp.push(Z6+(rng()-0.5)*80,24+rng()*14,(rng()-0.5)*80);st.setAttribute('position',new THREE.Float32BufferAttribute(sp,3));eprop(new THREE.Points(st,new THREE.PointsMaterial({color:0xe8ecff,size:2,sizeAttenuation:false,fog:false})));scene.add(endProps[endProps.length-1])}
const sister=human({dress:true,dressTex:dressTex,topTex:dressTex,skin:0xa07a58,headTex:headTexF([160,122,92],'30,22,18',true),hair:0x1a1410,longHair:true,shawl:shawlTex,transparent:true,slim:0.88});sister.g.visible=false;
const donisN=human({topTex:mantaTex,pantsTex:mantaTex,skin:0x9a7050,headTex:headTexF([156,112,80],'30,22,18',false,true),hair:0x1a1410,hat:true,shoe:0x3a2a20});donisN.g.visible=false;
const mudMat=lam(0x4a3220,{transparent:true,opacity:0.92});const mud=eprop(mesh(new THREE.PlaneGeometry(9,11),mudMat,Z6,0,0));mud.rotation.x=-Math.PI/2;
const ghostMat=bas(0xd8dce8,{transparent:true,opacity:0.22,depthWrite:false});const MGH=[];for(let i=0;i<14;i++){const g=human(Object.assign({},JUAN,{ghost:ghostMat}));g.g.visible=false;MGH.push(g)}
{const dm=lam(0x3a2c22,{map:dirtT});for(const[x,z,w,d]of[[-0.75,0,0.3,3],[0.75,0,0.3,3],[0,-1.5,1.8,0.3],[0,1.5,1.8,0.3]])eprop(box(w,2.4,d,dm,Z7+x,0.6,z));eprop(box(1.8,0.2,3.2,dm,Z7,-0.6,0));
for(let i=0;i<14;i++){const r=eprop(cyl(0.012,0.03,0.6+rng()*0.8,lam(0x5a4632),Z7+(rng()-0.5)*1.4,0.6+rng()*1.2,(rng()-0.5)*2.8,null,4));r.rotation.set(rng()*3,rng()*3,rng()*3)}}
const ear=document.createElement('div');ear.id='ear';ear.style.cssText='position:absolute;top:10px;left:50%;width:200px;height:16px;margin-left:-100px;border-bottom:1px solid rgba(232,220,196,.25);display:none;pointer-events:none';$('stage').appendChild(ear);
const susK=human({dress:true,dressTex:susTex,topTex:susTex,skin:0xd0a888,headTex:headTexF([208,172,140],'70,46,28',true),hair:0x46301c,longHair:true,slim:0.85});susK.g.scale.setScalar(0.62);susK.head.scale.setScalar(1.3);susK.g.visible=false;
const barto=human({topTex:leatherTex,sleeveTex:mantaTex,pantsTex:darkPants,skin:0xb08a6a,headTex:headTexF([176,140,110],'170,166,160',false,true),hair:0xa8a49c,hat:true});barto.g.visible=false;
const rockM=lam(0x4a443c,{map:dirtT});
{const sw=(x0,x1,z0,z1,y0,y1)=>{const b=eprop(box(x1-x0,y1-y0,z1-z0,rockM,(x0+x1)/2,(y0+y1)/2,(z0+z1)/2));return b};
sw(Z8-0.95,Z8-0.8,-0.95,0.95,-12.2,0.4);sw(Z8+0.8,Z8+0.95,-0.95,0.95,-12.2,0.4);sw(Z8-0.95,Z8+0.95,0.8,0.95,-12.2,0.4);sw(Z8-0.95,Z8+0.95,-0.95,-0.8,-9.6,0.4);
addCol(Z8-0.95,Z8-0.8,-0.95,0.95);addCol(Z8+0.8,Z8+0.95,-0.95,0.95);addCol(Z8-0.95,Z8+0.95,0.8,0.95);
sw(Z8-1.4,Z8-1.2,-12.6,-0.8,-12.2,-9.6);sw(Z8+1.2,Z8+1.4,-12.6,-0.8,-12.2,-9.6);sw(Z8-1.4,Z8+1.4,-12.8,-12.6,-12.2,-9.6);sw(Z8-1.4,Z8+1.4,-12.6,0.95,-9.7,-9.5);
addCol(Z8-1.4,Z8-1.2,-12.6,-0.8);addCol(Z8+1.2,Z8+1.4,-12.6,-0.8);addCol(Z8-1.4,Z8+1.4,-12.8,-12.6);
const fl=eprop(mesh(new THREE.PlaneGeometry(3,14),rockM,Z8,-12.02,-5.5));fl.rotation.x=-Math.PI/2;
const top=eprop(mesh(new THREE.PlaneGeometry(14,14),lam(0x6a5a48,{map:dirtT}),Z8,0.01,-2));top.rotation.x=-Math.PI/2;top.material.side=THREE.DoubleSide;
eprop(box(2.6,0.12,0.12,darkWood,Z8,2.2,0));for(const sx of[-1.2,1.2])eprop(box(0.12,2.3,0.12,darkWood,Z8+sx,1.1,0));
for(let i=0;i<10;i++){const r=eprop(mesh(new THREE.IcosahedronGeometry(0.15+rng()*0.2,0),rockM,Z8+(rng()-0.5)*2,-11.9,-2-rng()*9));}}
const mineCol=[Z8-0.95,Z8+0.95,-0.95,-0.8];colliders.push(mineCol);
const skullG=new THREE.Group();scene.add(skullG);sph(0.11,lam(0xe8e0c8),0,0.1,0,skullG,1,0.9,1.15);box(0.03,0.03,0.01,lam(0x101010),-0.04,0.12,0.12,skullG);box(0.03,0.03,0.01,lam(0x101010),0.04,0.12,0.12,skullG);skullG.position.set(Z8+0.3,-12,-11.6);eprop(skullG);
const glint=eprop(box(0.05,0.05,0.05,new THREE.MeshBasicMaterial({color:0xffe080,fog:false}),Z8+0.3,-11.75,-11.5));
const ropeL=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(),new THREE.Vector3(0,1,0)]),new THREE.LineBasicMaterial({color:0xb0a080}));ropeL.frustumCulled=false;scene.add(ropeL);eprop(ropeL);
{const W=(x0,x1,z0,z1)=>eprop(wallB(x0,x1,z0,z1,3.6,whiteMat));W(Z8-2.8,Z8-2.5,40,118);W(Z8+2.5,Z8+2.8,40,118);W(Z8-2.5,Z8+2.5,39.7,40);W(Z8-2.5,Z8+2.5,117.6,117.9);
for(let z=44;z<116;z+=8){eprop(box(0.04,1.2,1.4,lam(0x7090d0,{emissive:0x203060}),Z8-2.48,1.9,z))}
eprop(floorM(Z8,79,5,78,floorTex,1.2));eprop(box(5.4,0.2,78.4,darkWood,Z8,3.7,79))}
const bedG=new THREE.Group();scene.add(bedG);box(1.3,0.45,2.1,darkWood,0,0.22,0,bedG);box(1.25,0.12,2,lam(0xf0ece4),0,0.5,0,bedG);box(1.3,1.1,0.1,darkWood,0,0.55,-1.05,bedG);eprop(bedG);
const susA=human({dress:true,dressTex:susTex,topTex:susTex,skin:0xd8b898,headTex:headTexF([216,182,152],'60,40,24',true),hair:0x3a2614,longHair:true,slim:0.85});susA.g.visible=false;
const sheet=box(0.9,0.06,1.9,lam(0xf4f0ea),0,0.62,0.1,bedG);sheet.visible=false;
const seaMat=lam(0x2a5a9a,{transparent:true,opacity:0.6});const seaW=eprop(mesh(new THREE.PlaneGeometry(5,78),seaMat,Z8,0,79));seaW.rotation.x=-Math.PI/2;
const picado=new THREE.Group();scene.add(picado);eprop(picado);{const cs=[0xd83a3a,0xe8c040,0x3a8ad8,0x40b060,0xd860b0,0xf0f0f0];for(let k=0;k<5;k++){const z=-100-k*7;for(let i=0;i<22;i++){const x=-11+i;const f=mesh(new THREE.PlaneGeometry(0.4,0.5),new THREE.MeshBasicMaterial({color:cs[(i+k)%6],side:THREE.DoubleSide}),x,4.2-Math.sin(i/21*Math.PI)*0.8,z,picado)}}}
const DANCE=[[-6,-104],[-3,-108],[4,-103],[7,-109],[-8,-118],[5,-117],[-5,-124],[3,-126],[8,-122],[-2,-131]].map(([x,z],i)=>{const m=human(i%2?{dress:true,dressTex:[shawlTex,dressTex,susTex][i%3],topTex:[shawlTex,dressTex,susTex][i%3],skin:0xa07a58,headTex:headTexF([160,122,92],'30,22,18',true),hair:0x1a1410,longHair:true,slim:0.88}:{topTex:mantaTex,pantsTex:mantaTex,skin:0x9a7050,headTex:headTexF([156,112,80],'30,22,18'),hair:0x1a1410,hat:true,shoe:0x3a2a20});m.g.visible=false;m.hx=x;m.hz=z;return m});
const fulgorPL=human({topTex:leatherTex,sleeveTex:mantaTex,pantsTex:mantaTex,skin:0xb08a6a,headTex:headTexF([176,140,110],'170,166,160',false,true),hair:0xa8a49c,hat:true});fulgorPL.g.visible=false;
const ZTR=new THREE.PlaneGeometry(68,112,34,56);ZTR.rotateX(-Math.PI/2);ZTR.translate(Z9,0,-6);{const p=ZTR.attributes.position;for(let i=0;i<p.count;i++)p.setY(i,endH(p.getX(i),p.getZ(i))||0);ZTR.computeVertexNormals();const uv=ZTR.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*26,uv.getY(i)*40);eprop(mesh(ZTR,lam(0x8a7a5a,{map:dirtT}),0,0,0))}
const ROCKS=[];{const pts=[[-6,34],[5,31],[-12,27],[11,25],[0,24],[-4,15],[7,13],[-14,11],[14,9],[2,6],[-8,1],[9,-2],[-2,-6],[13,-9],[-12,-11],[4,-15],[-6,-19],[10,-22],[-14,-25],[0,-27],[-7,-33],[7,-35],[14,-38],[-12,-40],[2,-43],[-4,-47],[8,-47]];
pts.forEach(([dx,z],i)=>{const x=Z9+dx,r=0.85+(i%3)*0.2;if(i%4===3){const a=new THREE.Group();const m=lam(0x5a6a5a);for(let k=0;k<9;k++){const l=mesh(new THREE.ConeGeometry(0.1,1.4,3),m,0,0.55,0.32,null);l.rotation.x=0.5+(k%3)*0.15;const pv=new THREE.Group();pv.add(l);pv.rotation.y=k*0.7;a.add(pv)}a.position.set(x,endH(x,z),z);scene.add(a);eprop(a)}else{const m=eprop(mesh(new THREE.IcosahedronGeometry(r,0),lam(0x6a6258),x,endH(x,z)+r*0.5,z));m.scale.y=0.8}addCol(x-r*0.8,x+r*0.8,z-r*0.8,z+r*0.8);ROCKS.push({x,z,r})})}
{const ww=lam(0xb8a888,{map:adobeTex});eprop(box(40,3.4,1,ww,Z9-22,1.7,-55.5));eprop(box(40,3.4,1,ww,Z9+22,1.7,-55.5));addCol(Z9-42,Z9-2,-56,-55);addCol(Z9+2,Z9+42,-56,-55);
eprop(box(4,0.4,1.2,darkWood,Z9,3.6,-55.5));for(const sx of[-2.2,2.2])eprop(cyl(0.3,0.35,3.6,ww,Z9+sx,1.8,-55.5));for(const x of[-9,-5,5,9])eprop(box(1,0.8,0.05,new THREE.MeshBasicMaterial({color:0xffc070,fog:false}),Z9+x,2.2,-54.95))}
const RIDERS=[[20,0],[-5,2.1],[-30,4.2]].map(([z,ph],i)=>{const h=quad({len:1.45,leg:0.88,r:1.15,neck:0.62,hl:1.25,ear:0.12,tex:horseTex,dark:0x0c0806,muzzle:0x2a1c16,mane:true});box(0.45,0.08,0.62,lam(0x5a2a1a),0.05,1.36,0,h);
const man=human({topTex:mantaTex,pantsTex:mantaTex,skin:0x8a6040,headTex:headTexF([150,104,70],'30,22,18',false,true),hair:0x1e1612,hat:true});man.g.position.set(0.05,0.55,0);man.g.rotation.y=Math.PI/2;h.add(man.g);man.legs.forEach(l=>l.rotation.x=-1.2);man.knees.forEach(k=>k.rotation.x=1.3);
const ln=box(0.12,0.16,0.12,flameMat,0.3,1.8,0.35,h);const cone=mesh(new THREE.CircleGeometry(9,12,-0.45,0.9),new THREE.MeshBasicMaterial({color:0xffd080,transparent:true,opacity:0.13,depthWrite:false,side:THREE.DoubleSide}),0,0,0);cone.rotation.x=-Math.PI/2;
h.visible=false;cone.visible=false;return{h,man,cone,z,ph,dir:1,x:0,face:0,seen:0}});
const villagers=[[-4.9,-60],[4.9,-58],[-4.9,-66],[4.9,-66],[-4.9,-74],[4.9,-74],[-4.9,-83],[-4.9,-90],[4.9,-94],[-17,-102],[17,-108],[-17,-117],[17,-124],[-6,-128]].map(([x,z],i)=>{const m=human(i%2?{dress:true,dressTex:[shawlTex,dressTex][i%2],topTex:dressTex,skin:0xa07a58,headTex:headTexF([160,122,92],'30,22,18',true),hair:0x1a1410,longHair:true,shawl:shawlTex,hood:i%4===1,slim:0.88}:{topTex:mantaTex,pantsTex:mantaTex,skin:0x9a7050,headTex:headTexF([156,112,80],'30,22,18'),hair:0x1a1410,hat:true,shoe:0x3a2a20});box(0.4,0.4,0.3,lam(0x8a6a3a,{map:mantaTex}),0,1.25,-0.22,m.g);m.g.visible=false;m.hx=x;m.hz=z;return m});
const abundN=human({topTex:mantaTex,pantsTex:mantaTex,skin:0x8a6040,headTex:headTexF([150,104,70],'30,22,18',false,true),hair:0x1e1612,hat:true,shoe:0x5a4030});abundN.g.visible=false;
const abundPL=human({topTex:mantaTex,pantsTex:mantaTex,skin:0x8a6040,headTex:headTexF([150,104,70],'30,22,18',false,true),hair:0x1e1612,hat:true,shoe:0x5a4030});abundPL.g.visible=false;
const knife=box(0.02,0.02,0.22,lam(0xd0d0d8),0,-0.32,0.1,abundPL.elbows[1]);
const juanN=human(JUAN);juanN.g.visible=false;
const STONES=[];for(let i=0;i<40;i++){const s=mesh(new THREE.IcosahedronGeometry(0.07+rng()*0.08,0),lam(0x7a7064),0,0,0);s.visible=false;STONES.push({m:s,v:new THREE.Vector3(),on:false})}
function endNPCs(){return [damiana.g,sister.g,donisN.g,...MGH.map(m=>m.g),barto.g,...DANCE.map(m=>m.g),...villagers.map(m=>m.g),abundN.g,juanN.g]}
function extraAv(){return [susK,fulgorPL,abundPL]}
function endReset(){S.noFall=false;endL.intensity=0;endProps.forEach(o=>o.visible=false);[damiana,sister,donisN,barto,susA,abundN,juanN,...MGH,...DANCE,...villagers].forEach(m=>m.g.visible=false);RIDERS.forEach(r=>{r.h.visible=false;r.cone.visible=false});
STONES.forEach(s=>{s.on=false;s.m.visible=false});if(A.music)A.music.gain.value=0.3;ear.style.display='none';sheet.visible=false;mineCol[0]=Z8-0.95;mineCol[1]=Z8+0.95;S.zf.mineY=null;juan.g.visible=PL===juan;juan.g.rotation.set(0,P.rot,0);P.sitY=0;
pastRoofs.forEach(r=>r.visible=S.past);pastOnly.forEach(o=>o.visible=S.past);presentOnly.forEach(o=>o.visible=!S.past);VOICES.forEach(v=>{if(v.x0!=null){v.x=v.x0;v.z=v.z0;v.pull=0}})}
function endClean(){clearSay();S.lock=false;S.camOverride=null;S.fixedCam=null;S.ceil=null;S.rain=false;S.tl=null;S.zf={};S.found={};P.stoop=0;P.spMul=1;P.forceWalk=false;
WIDOWS.forEach(w=>{w.g.visible=false;w.rebozo.visible=false});hangT.g.visible=false;hangRope.visible=false;horse.visible=false;fulgor.g.visible=S.zone==='media';
VOICES.forEach(v=>{if(v.zone&&!['night','donis','tomb','sea','final'].includes(v.zone))v.active=false});endReset();zoneLights();postMat.uniforms.fade.value=0;postMat.uniforms.white.value=0;eduviges.g.visible=false}
function showP(...a){a.forEach(o=>o.visible=true)}
function startCh6(){S.zone='night';endClean();S.ch='6a';setWorld(false);setPal(PAL.nightC);setAvatar(juan);place(8,-84,-Math.PI/2);S.check={x:8,z:-84};
damiana.g.visible=true;damiana.g.position.set(DPATH[0][0],0,DPATH[0][1]);damiana.g.rotation.y=Math.PI/2;S.zf.di=0;S.zf.dw=false;lantern.visible=true;endL.intensity=2.2;ambTo(0.15);saveAt('damiana');chapterCard(6);
S.after.push(()=>say([[T('nDamiana'),T('dm1')],['',T('lightRule'),()=>{S.zf.dw=true}]]))}
function updNight(dt){const g=damiana.g;const d=Math.hypot(P.x-g.position.x,P.z-g.position.z);const lost=Math.max(0,Math.min(1,(d-4.5)/5));
S.pal=Object.assign({},PAL.nightC,{near:1.5-lost,far:9-5*lost,hi:0.45-0.25*lost});if(PL===juan&&!S.lock&&!(S.inside>0.5))S.breath=Math.max(0,S.breath-lost*0.035*dt/(1+0.7*S.ecos.length));
if(lost>0.6&&S.t-(S.zf.lostT||-99)>12){S.zf.lostT=S.t;tell([['',T('lostLight')]])}
if(S.ch==='6a'&&S.zf.dw){const i=S.zf.di;const stopId=DSTOP[i];const atStop=stopId&&!S.frags[stopId]&&Math.hypot(g.position.x-DPATH[i][0],g.position.z-DPATH[i][1])<0.2;
if(atStop){const v=VOICES.find(v=>v.id===stopId);if(!v.active){v.active=true;v.x=g.position.x;v.z=g.position.z;tell([['',T('dmStop')]])}animWalk(damiana,0,0);g.rotation.y=Math.atan2(P.x-g.position.x,P.z-g.position.z)}
else if(i<DPATH.length-1){const n=DPATH[i+1];const dx=n[0]-g.position.x,dz=n[1]-g.position.z,dd=Math.hypot(dx,dz);const wait=d>7.5;if(!wait){const s=Math.min(dd,1.25*dt);g.position.x+=dx/dd*s;g.position.z+=dz/dd*s;g.rotation.y=Math.atan2(dx,dz);animWalk(damiana,S.t*5,0.42)}else{animWalk(damiana,0,0);g.rotation.y=Math.atan2(P.x-g.position.x,P.z-g.position.z)}if(dd<0.05){S.zf.di++;g.position.x=n[0];g.position.z=n[1]}}
else{animWalk(damiana,0,0);g.rotation.y=Math.atan2(P.x-g.position.x,P.z-g.position.z);if(d<3){S.ch='6ask';S.lock=true;say([[T('nJuan'),T('jAsk')],[T('nDamiana'),T('dm2'),dmVanish]])}}}
const hand=new THREE.Vector3();if(damiana.g.visible){damiana.elbows[1].getWorldPosition(hand);lantern.position.set(hand.x,hand.y-0.25,hand.z)}endL.position.set(lantern.position.x,lantern.position.y+0.3,lantern.position.z)}
function dmVanish(){if(lineSrc)try{lineSrc.stop()}catch(e){}damiana.g.visible=false;lantern.position.set(-3.7,0.1,-96.2);lantern.rotation.z=1.3;endL.intensity=1.4;stinger();seq([[1.2,()=>{say([['',T('dmGone')]]);S.lock=false;S.ch='6door'}]])}
inter({zones:['night'],x:-4,z:-95.1,r:2.3,on:()=>S.ch==='6door',hint:()=>T('hintEnter'),act:()=>{S.ch='6in';fadeTo(startCh7)}});
function startCh7(){S.zone='donis';endClean();S.ch='7a';setPal(PAL.donisN);setAvatar(juan);place(Z6,4,Math.PI);S.check={x:Z6,z:4};S.ceil=3;showP(...endProps.filter(o=>o.isPoints));
sister.g.visible=true;sister.g.position.set(Z6-2.4,0,-3.4);sister.g.rotation.y=0.4;donisN.g.visible=true;donisN.g.position.set(Z6+2.2,0,1.2);donisN.g.rotation.y=-1.2;
endL.position.set(Z6+1.8,0.6,-2);endL.color.set(0xff8040);endL.intensity=1.6;VOICES.forEach(v=>{if(v.zone==='donis')v.active=true});ambTo(0.1);saveAt('donis');chapterCard(7)}
inter({zones:['donis'],x:Z6-2.6,z:-2.9,r:1.6,on:()=>S.ch==='7b',hint:()=>T('hintLie'),act:()=>{S.ch='7sleep';S.lock=true;fadeTo(()=>{donisN.g.visible=false;sister.g.position.set(Z6-2.9,0.15,-4.2);sister.g.rotation.set(-Math.PI/2,0,0);place(Z6-1.6,-3.2,0.4);S.check={x:Z6-1.6,z:-3.2};say([['',T('sleep'),()=>{S.ch='7mud';S.lock=false;S.noFall=true;S.zf.mudT=0;mud.visible=true;tell([['',T('mud')]])}]])})}});
function updDonis(dt){if(S.ch==='7mud'){S.zf.mudT+=dt;const y=Math.min(1,S.zf.mudT/28);mud.position.y=y;P.spMul=Math.max(0.2,1-y*0.8);S.breath=Math.max(0,S.breath-0.025*dt);
sister.g.scale.y=Math.max(0.05,1-S.zf.mudT/10);sister.g.traverse(c=>{if(c.material&&c.material.color)c.material.color.lerp(new THREE.Color(0x4a3220),dt*0.3)});P.y-=y*0.6;hint(T('mud'),0.2);
if(S.breath<0.03){S.zf.mudT=4;S.breath=1;place(Z6-1.6,-3.2,0.4);tell([['',T('mud')]])}
if(P.z>5.3&&Math.abs(P.x-Z6)<0.9){S.ch='7out';S.lock=true;fadeTo(startPlaza)}}}
function startPlaza(){S.zone='murmur';endClean();S.ch='7c';setWorld(false);setPal(PAL.nightC);setAvatar(juan);place(-3.6,-95.3,Math.PI);S.check={x:-3.6,z:-95.3};S.noFall=true;S.zf.mt=0;S.zf.chant=0.2;
MGH.forEach((m,i)=>{const a=i/MGH.length*Math.PI*2;const r=i<3?6:11;m.g.visible=true;m.r=r;m.a=a;m.g.position.set(-3.6+Math.sin(a)*r,0,-95.3+Math.cos(a)*r)});MGH[0].a=Math.PI+0.15;MGH[1].a=Math.PI-0.2;MGH[2].a=Math.PI+0.4;
ambTo(0.05);saveAt('murmullos');say([['',T('murIntro')]])}
function updMurmur(dt){const t=(S.zf.mt+=dt);S.zf.chant=Math.min(0.9,0.2+t*0.05);P.spMul=Math.max(0.22,1-t/16);if(!S.lock)S.breath=Math.max(0,S.breath-0.05*dt);
MGH.forEach((m,i)=>{m.r=Math.max(1.7+(i%3)*0.4,m.r-dt*(0.35+(i%4)*0.08));m.a+=dt*0.05*(i%2?1:-1);const x=P.x+Math.sin(m.a)*m.r,z=P.z+Math.cos(m.a)*m.r;m.g.position.x+=(x-m.g.position.x)*Math.min(1,dt*1.5);m.g.position.z+=(z-m.g.position.z)*Math.min(1,dt*1.5);m.g.lookAt(P.x,0,P.z);animWalk(m,S.t*3+i,0.25)});
const dw=Math.hypot(P.x-pozo.x,P.z-pozo.z);if(dw<7){const k=(7-dw)/7;P.z-=k*dt*2.5}
if(S.t-(S.zf.mwT||-99)>5&&!S.lock){S.zf.mwT=S.t;const k=['mur1','mur2','mur3'][Math.floor(t/5)%3];say([['',T(k),null,1]])}
if(S.breath<=0.02&&!S.lock){S.lock=true;S.breath=0.01;clearSay();seq([[0.3,()=>{postMat.uniforms.white.value=0}],[0.5,()=>say([['',T('murEnd'),()=>fadeTo(startTomb)]])]])}
if(S.lock){postMat.uniforms.fade.value=Math.min(0.85,postMat.uniforms.fade.value+dt*0.25)}}
function startTomb(){S.zone='tomb';endClean();S.ch='8a';setPal(PAL.tombP);setAvatar(juan);place(Z7,0,Math.PI);juan.g.visible=false;S.lock=true;S.noFall=true;cam.yaw=0.6;S.zf.chant=0.12;
endProps.slice(0).forEach(o=>{if(Math.abs(o.position.x-Z7)<3&&!o.isPoints)o.visible=true});['do1','mx1','mx2'].forEach(id=>VOICES.find(v=>v.id===id).active=true);ear.style.display='block';ambTo(0);saveAt('tumba');chapterCard(8);S.after.push(()=>say([['',T('tombRule')]]))}
function tombVoices(){return VOICES.filter(v=>v.zone==='tomb'&&v.active&&!v.done)}
function updTomb(dt){if(!S.fade)postMat.uniforms.fade.value=0.55;const turn=(keys['KeyD']||keys['ArrowRight']?1:0)-(keys['KeyA']||keys['ArrowLeft']?1:0);cam.yaw-=turn*dt*1.7;
const fx=-Math.sin(cam.yaw),fz=-Math.cos(cam.yaw);S.camOverride={pos:new THREE.Vector3(Z7,0.45,0),look:new THREE.Vector3(Z7+fx,0.4,fz)};
let best=null,ba=9;ear.innerHTML='';tombVoices().forEach(v=>{let a=Math.atan2(v.x-P.x,v.z-P.z)-Math.atan2(fx,fz);while(a>Math.PI)a-=2*Math.PI;while(a<-Math.PI)a+=2*Math.PI;
const dot=document.createElement('span');const o=0.25+0.75*Math.max(0,1-Math.abs(a)/Math.PI);dot.style.cssText=`position:absolute;top:3px;left:${100-a/Math.PI*95}px;width:${v.deco?6:9}px;height:${v.deco?6:9}px;margin-left:-4px;border-radius:50%;background:rgba(232,220,196,${o.toFixed(2)})`;ear.appendChild(dot);if(Math.abs(a)<ba){ba=Math.abs(a);best=v}});
const can=best&&ba<0.9;const pulling=can&&keys['KeyE']&&!S.zf.choke&&S.mode==='play'&&!S.zf.talk;if(!keys['KeyE'])S.zf.choke=false;
if(pulling){if(S.zf.pv!==best){S.zf.pv=best;startMurmur2(best)}best.pull=Math.min(1,best.pull+dt*(ba<0.45?0.2:0.08));S.breath=Math.max(0,S.breath-0.07*dt);if(murmur)murmur.g.gain.value=0.15+best.pull;
const k=best.pull*0.7;best.x=best.x0+(P.x-best.x0)*k;best.z=best.z0+(P.z-best.z0)*k;if(best.a&&best.a.pan)setPos(best.a.pan,best.x,0.6,best.z);if(!best.deco){const tx=fragText(best.id);$('listen').textContent=tx.slice(0,Math.floor(tx.length*best.pull))}
if(S.breath<0.04){S.zf.choke=true;stopMurmur();S.zf.pv=null;$('listen').textContent='';tell([['',T('chokeT')]])}
if(best.pull>=1){stopMurmur();S.zf.pv=null;$('listen').textContent='';best.done=true;if(best.deco){tell([['',T(best.id==='mx1'?'deco1':'deco2')]])}else{showCard(FR[best.id].who,FR[best.id].who+' · '+FR[best.id].title,FR[best.id].text);completeFrag(best.id)}}}
else{if(S.zf.pv){stopMurmur();S.zf.pv=null;$('listen').textContent=''}S.breath=Math.min(1,S.breath+0.09*dt);if(S.mode==='play'&&!S.zf.talk)hint(can?T('hintPull'):T('hintTurn'),0.2)}}
function startMurmur2(v){if(v.deco){stopMurmur();return}startMurmur(v)}
function startMine(){S.zone='mine';endClean();S.ch='9a';setPal(PAL.mineP);setAvatar(susK);S.zf.mineY=0;place(Z8,0,Math.PI);S.lock=false;endProps.forEach(o=>{if(Math.abs(o.position.x-Z8)<4&&o.position.z<3&&o.position.z>-14||o===ropeL)o.visible=true});
barto.g.visible=true;barto.g.position.set(Z8,0,1.6);barto.g.rotation.y=Math.PI;endL.color.set(0xffb060);endL.intensity=1.6;ambTo(0);saveAt('mina');chapterCard(9);S.after.push(()=>say([[T('nBarto'),T('bt1')],['',T('mineRule')]]))}
function updMine(dt){if(S.ch==='9a'){P.x=Z8;P.z=0;if(keys['KeyE']&&S.mode==='play')S.zf.mineY=Math.max(-12,S.zf.mineY-dt*1.1);hint(T('mineRule'),0.2);const y=S.zf.mineY;S.camOverride={pos:new THREE.Vector3(Z8+0.55,y+2.6,0.55),look:new THREE.Vector3(Z8,y+0.5,-0.1)};
if(y<=-12){S.ch='9b';mineCol[0]=999;mineCol[1]=999;S.camOverride=null;S.ceil=-9.8;cam.yaw=0;tell([['',T('mineBottom')]])}}
const hp=new THREE.Vector3(P.x,(S.zf.mineY||0)+1.3,P.z);const rp=ropeL.geometry.attributes.position;rp.setXYZ(0,Z8,2.2,0);rp.setXYZ(1,S.ch==='9a'?hp.x:Z8,S.ch==='9a'?hp.y:-11.9,S.ch==='9a'?hp.z:0);rp.needsUpdate=true;
endL.position.set(P.x,(S.zf.mineY||0)+1.4,P.z);glint.visible=S.ch==='9b'&&Math.sin(S.t*5)>0;animWalk(barto,0,0)}
inter({zones:['mine'],x:Z8+0.3,z:-11.2,r:1.4,on:()=>S.ch==='9b',hint:()=>T('hintPick'),act:()=>{S.ch='9c';S.lock=true;say([[T('nBarto'),T('bt2'),()=>{skullG.scale.set(1,0.3,1);const f=FR.s0;showCard(f.who,f.who+' · '+f.title,f.text);completeFrag('s0');S.after.push(()=>{showCard(T('nBarto'),T('nBarto'),T('cut9'));S.after.push(()=>fadeTo(startSea))})}]])}});
function startSea(){S.zone='sea';endClean();S.ch='9s';setPal(PAL.seaP);setAvatar(pedroPL);place(Z8,114,Math.PI);S.ceil=3.6;endProps.forEach(o=>{if(Math.abs(o.position.x-Z8)<4&&o.position.z>35)o.visible=true});
bedG.visible=true;bedG.position.set(Z8,0,92);susA.g.visible=true;sheet.visible=false;seaW.visible=true;seaW.position.y=0.02;VOICES.find(v=>v.id==='s1').active=true;endL.color.set(0x90b0ff);endL.intensity=1.2;S.zf.seaLvl=0.02;ambTo(0.2);saveAt('mar');say([['',T('seaIntro')]])}
function updSea(dt){const dead=S.frags.s1&&S.frags.s2;const gap=Math.max(6,22-(114-P.z));let bz=dead?bedG.position.z:Math.min(92,P.z-gap);if(!dead&&bz<92&&!S.zf.seaSaid){S.zf.seaSaid=1;tell([['',T('seaRule')]])}
bedG.position.z=bz;susA.g.position.set(Z8+0.1,0.62,bz-0.2);susA.g.rotation.set(-Math.PI/2,0,0);susA.head.rotation.y=Math.sin(S.t*0.7)*0.4*(dead?0:1);endL.position.set(Z8,2.6,bz+2);
VOICES.filter(v=>v.zone==='sea').forEach(v=>{v.x=Z8;v.z=bz});const lvl=(S.frags.s1?0.18:0.02)+(S.frags.s2?0.22:0);S.zf.seaLvl+=(lvl-S.zf.seaLvl)*Math.min(1,dt*0.5);seaW.position.y=S.zf.seaLvl;seaW.position.z=79;
if(dead&&!S.zf.died){S.zf.died=1;sheet.visible=true;susA.g.visible=false;endL.intensity=0.3;setPal(lerpPal(PAL.seaP,PAL.tombP,0.45));tell([['',T('susDie')]])}
if(dead&&Math.hypot(P.x-Z8,P.z-bz)<2.2&&S.ch==='9s'){S.ch='9end';S.lock=true;seq([[2.5,()=>fadeTo(startFiesta)]])}}
function startFiesta(){S.zone='fiesta';endClean();S.ch='9f';setWorld(true);setPal(PAL.fiestaP);horse.visible=false;setAvatar(pedroPL);place(0,-99,Math.PI);picado.visible=true;
DANCE.forEach(m=>{m.g.visible=true;m.g.position.set(m.hx,0,m.hz);m.gone=0;m.stop=0;m.g.traverse(c=>{if(c.material){c.material.transparent=true;c.material.opacity=1}})});S.zf.bellT=0;ambTo(0.7);saveAt('campanas');say([['',T('fiestaIntro')],['',T('fiestaRule')]])}
function updFiesta(dt){S.zf.bellT-=dt;if(S.zf.bellT<0&&A.ctx){bell();S.zf.bellT=3.2}let left=0;
DANCE.forEach((m,i)=>{if(!m.g.visible)return;const g=m.g,d=Math.hypot(P.x-g.position.x,P.z-g.position.z);if(d<4.2&&!m.stop)m.stop=1;
if(!m.stop){left++;g.rotation.y=S.t*1.5*(i%2?1:-1)+i;g.position.y=Math.abs(Math.sin(S.t*6+i))*0.12;animWalk(m,S.t*8+i,0.5);m.arms.forEach(a=>a.rotation.x=-2.4+Math.sin(S.t*6+i)*0.4)}
else{m.gone+=dt;g.position.y=0;if(m.gone<1.2){g.rotation.y=Math.atan2(P.x-g.position.x,P.z-g.position.z);animWalk(m,0,0)}else{const ax=g.position.x<0?-1:1;g.rotation.y=Math.atan2(ax,0);g.position.x+=ax*dt*1.1;animWalk(m,S.t*5,0.4);const o=Math.max(0,1-(m.gone-1.2)/4);g.traverse(c=>{if(c.material)c.material.opacity=o});if(o<=0)g.visible=false}}});
if(A.music)A.music.gain.value+=((0.08+0.3*left/DANCE.length)-A.music.gain.value)*Math.min(1,dt);
if(S.ch==='9f'&&Math.hypot(P.x,P.z+135.4)<2.6){S.ch='9oath';S.lock=true;P.rot=Math.PI;say([[T('nPedro'),T('ppOath'),()=>seq([[1.5,()=>fadeTo(startCh10)]])]])}}
function startCh10(){S.zone='rev';endClean();S.ch='10a';setWorld(false);setPal(PAL.revP);setAvatar(fulgorPL);place(Z9,44,Math.PI);S.check={x:Z9,z:44};
endProps.forEach(o=>{if(Math.abs(o.position.x-Z9)<45)o.visible=true});RIDERS.forEach(r=>{r.h.visible=true;r.cone.visible=true;r.x=(r.ph*7)%30-15;r.seen=0});S.zf.gunT=4;ambTo(0.25);saveAt('revolucion');chapterCard(10);
S.after.push(()=>say([[T('nPedro'),T('p10')],['',T('revRule')]]))}
function canSee(r){const hx=Z9+r.x,hz=r.z,dx=P.x-hx,dz=P.z-hz,d=Math.hypot(dx,dz);const noisy=P.run&&P.moving&&d<6;if(d>9&&!noisy)return false;let a=Math.atan2(dx,dz)-r.face;while(a>Math.PI)a-=2*Math.PI;while(a<-Math.PI)a+=2*Math.PI;if(Math.abs(a)>0.45&&!noisy)return false;
for(const k of ROCKS){const t=Math.max(0,Math.min(1,((k.x-hx)*dx+(k.z-hz)*dz)/(d*d)));const px=hx+dx*t,pz=hz+dz*t;if(t>0.05&&t<0.95&&Math.hypot(px-k.x,pz-k.z)<k.r*0.9&&!noisy)return false}return true}
function gunshot(far){if(!A.ctx)return;const t=A.ctx.currentTime;thump(t,far?A.amb:A.sfx,far?0.12:0.5,far?180:900);thump(t+0.05,far?A.amb:A.sfx,far?0.06:0.3,far?120:400)}
function updRev(dt){S.zf.gunT-=dt;if(S.zf.gunT<0){gunshot(true);S.zf.gunT=5+Math.random()*7}
RIDERS.forEach((r,i)=>{r.x+=r.dir*dt*2.4;if(r.x>16){r.x=16;r.dir=-1}if(r.x<-16){r.x=-16;r.dir=1}const sweep=Math.sin(S.t*0.9+i)*0.5;r.face=(r.dir>0?Math.PI/2-0.6:-Math.PI/2+0.6)+sweep;
const y=endH(Z9+r.x,r.z)||0;r.h.position.set(Z9+r.x,y,r.z);r.h.rotation.y=(r.dir>0?Math.PI/2:-Math.PI/2)-Math.PI/2;r.h.userData.legs.forEach((l,k)=>l.rotation.z=Math.sin(S.t*8+k*1.6)*0.4);
r.cone.position.set(Z9+r.x,y+0.08,r.z);r.cone.rotation.set(-Math.PI/2,0,r.face-Math.PI/2);
if(S.ch==='10a'&&!S.lock&&S.mode==='play'){if(canSee(r)){r.seen+=dt;if(r.seen>0.45){r.seen=0;revShot()}}else r.seen=Math.max(0,r.seen-dt)}});
if(S.ch==='10a'){[[30,'a'],[8,'b'],[-17,'c'],[-40,'d']].forEach(([z,k])=>{if(P.z<z&&!S.zf['cp'+k]){S.zf['cp'+k]=1;S.check={x:P.x,z:P.z}}});
if(P.z<-51&&Math.abs(P.x-Z9)<2.4){S.ch='10end';S.lock=true;say([['',T('fulgorEnd'),()=>{gunshot(false);stinger();S.zf.fall=1}],['',T('rentCristero'),()=>seq([[1.5,()=>fadeTo(startCh11)]])]])}}
if(S.zf.fall){S.zf.fall=Math.min(1.6,S.zf.fall+dt*1.5);PL.g.rotation.x=-S.zf.fall}}
function revShot(){S.lock=true;gunshot(false);stinger();S.zf.fall=1;tell([['',T('shot')]]);seq([[1.4,()=>{S.zf.fall=0;PL.g.rotation.x=0;place(S.check.x,S.check.z,Math.PI);S.lock=false}]])}
function startCh11(){S.zone='hunger';endClean();S.ch='11a';setWorld(true);horse.visible=false;setAvatar(pedroPL);place(0,-128,0);villagers.forEach(m=>{m.g.visible=true;m.g.position.set(m.hx,0,m.hz);m.go=0;m.g.rotation.y=m.hx<0?Math.PI/2:-Math.PI/2;m.g.traverse(c=>{if(c.material){c.material.transparent=true;c.material.opacity=1}})});ambTo(0.3);saveAt('hambre');chapterCard(11);S.after.push(()=>say([['',T('hgRule')]]))}
const PASTP={bg:PAST.bg,fog:PAST.fog,near:PAST.near,far:PAST.far,hs:PAST.hs,hg:PAST.hg,hi:PAST.hi,sc:PAST.sc,si:PAST.si,dust:0x60607a,dop:0.4},PRESP={bg:PRESENT.bg,fog:PRESENT.fog,near:PRESENT.near,far:PRESENT.far,hs:PRESENT.hs,hg:PRESENT.hg,hi:PRESENT.hi,sc:PRESENT.sc,si:PRESENT.si,dust:0xffffff,dop:0.9};
function updHunger(dt){const u=Math.max(0,Math.min(1,(P.z+128)/80));S.pal=lerpPal(PASTP,PRESP,u);setPal(S.pal);wallMat.color.set(new THREE.Color(PAST.wall).lerp(new THREE.Color(PRESENT.wall),u));wallMat2.color.set(new THREE.Color(PAST.wall2).lerp(new THREE.Color(PRESENT.wall2),u));
pastRoofs.forEach(r=>r.visible=r.position.z>P.z+3);pastOnly.forEach(o=>o.visible=o.position.z>P.z+3&&o!==horse);presentOnly.forEach(o=>o.visible=o.position.z<=P.z+3);pointLights.forEach(l=>l.intensity=l.position.z>P.z+3?1.4:0);
P.spMul=P.run?0.34:0.7;villagers.forEach((m,i)=>{if(!m.g.visible)return;const g=m.g;if(!m.go&&Math.abs(P.z-m.hz)<6)m.go=0.01;if(m.go){m.go+=dt;if(m.go<1){g.rotation.y=Math.atan2(P.x-g.position.x,P.z-g.position.z);animWalk(m,0,0)}else{g.rotation.y=0;g.position.z+=dt*1.2;animWalk(m,S.t*5,0.42);const o=Math.max(0,1-(m.go-1)/5);g.traverse(c=>{if(c.material)c.material.opacity=o});if(o<=0)g.visible=false}}else animWalk(m,0,0)});
if(u>0.33&&!S.zf.hg1){S.zf.hg1=1;say([['',T('hg1')]])}if(u>0.66&&!S.zf.hg2){S.zf.hg2=1;say([['',T('hg2')]])}
if(P.z>-50&&S.ch==='11a'){S.ch='11end';S.lock=true;say([['',T('hg3'),()=>seq([[1.2,()=>fadeTo(startCh12)]])]])}}
function startCh12(){S.zone='final';endClean();S.ch='12a';setWorld(false);setPal(PAL.finalP);setAvatar(pedroPL);place(Z5,-5.45,0);S.zf.sit=true;fulgor.g.visible=false;VOICES.find(v=>v.id==='pf').active=true;
S.camOverride={pos:new THREE.Vector3(Z5+3.4,1.5,-2.2),look:new THREE.Vector3(Z5-0.4,0.9,-5)};ambTo(0.3);saveAt('silla');chapterCard(12);S.after.push(()=>say([['',T('sitRule')]]))}
function updFinal(dt){const z=S.zf;if(z.sit){P.x=Z5;P.z=-5.45;P.rot=0;P.sitY=-0.42}else P.sitY=0;
if(S.ch==='12ab'){const g=abundN.g;const tx=Z5+0.4,tz=-3.4,dx=tx-g.position.x,dz=tz-g.position.z,d=Math.hypot(dx,dz);if(d>0.1){const s=Math.min(d,dt*0.95);g.position.x+=dx/d*s+Math.sin(S.t*2.3)*dt*0.6;g.position.z+=dz/d*s;g.rotation.y=Math.atan2(dx,dz)+Math.sin(S.t*1.7)*0.25;g.rotation.z=Math.sin(S.t*2.3)*0.08;animWalk(abundN,S.t*4.5,0.4)}
else{S.ch='12ask';animWalk(abundN,0,0);g.rotation.z=0;say([[T('nAbundio'),T('abd1'),abChoice]])}}
if(S.zf.abRun&&abundN.g.visible){const g=abundN.g;g.rotation.y=0;g.position.z+=dt*3;animWalk(abundN,S.t*9,0.8);if(g.position.z>20)g.visible=false}
if(S.ch==='12walk'&&!S.lock){const mv=Math.hypot(P.x-z.lx,P.z-z.lz);z.lx=P.x;z.lz=P.z;z.walked+=mv;z.wt+=dt;P.spMul=Math.max(0.15,0.85-z.walked*0.14);if(z.walked-z.lastStone>0.5){z.lastStone=z.walked;dropStones(3)}
if(z.walked>4.5||z.wt>14){S.ch='12fall';S.lock=true;dropStones(30);pedroPL.g.visible=false;S.camOverride={pos:new THREE.Vector3(P.x+2.4,1.6,P.z+2.4),look:new THREE.Vector3(P.x,0.4,P.z)};say([['',T('stoneEnd'),()=>seq([[1.5,()=>fadeTo(startAbundio)]])]])}}
STONES.forEach(s=>{if(!s.on)return;s.v.y-=9*dt;s.m.position.addScaledVector(s.v,dt);if(s.m.position.y<0.06){s.m.position.y=0.06;s.v.set(0,0,0)}})}
function dropStones(n){let k=0;for(const s of STONES){if(k>=n)break;if(s.on&&n<10)continue;s.on=true;s.m.visible=true;s.m.position.set(P.x+(Math.random()-0.5)*0.4,0.4+Math.random()*1.3,P.z+(Math.random()-0.5)*0.4);s.v.set((Math.random()-0.5)*1.2,Math.random()*0.8,(Math.random()-0.5)*1.2);k++}if(A.ctx)thump(A.ctx.currentTime,A.sfx,0.2,160)}
function abChoice(){const c=S.zf.abc||(S.zf.abc={});showChoice(T('abQ'),[{id:'give',l:T('abGive'),x:c.give},{id:'look',l:T('abLook')}],id=>{if(id==='give'){c.give=1;say([['',T('abGiveR'),abChoice]])}
else say([[T('nAbundio'),T('abd2'),()=>{stinger();if(A.ctx)thump(A.ctx.currentTime,A.sfx,0.5,300);damiana.g.visible=true;damiana.g.position.set(Z5+2.2,0,-5.2);damiana.g.rotation.y=-0.6;S.ch='12run';S.zf.abRun=1}],[T('nDamiana'),T('dmScream'),()=>{S.zf.sit=false;S.ch='12walk';S.lock=false;S.camOverride=null;cam.yaw=Math.PI;S.zf.lx=P.x;S.zf.lz=P.z;S.zf.walked=0;S.zf.wt=0;S.zf.lastStone=0;tell([['',T('stoneRule')]])}]])})}
function startAbundio(){S.zone='cross';endClean();S.ch='12x';setWorld(false);S.pal=null;setAvatar(abundPL);place(1.6,8,0);S.check={x:1.6,z:8};S.zf.jt=-1;ambTo(0.8);saveAt('abundio');say([['',T('abIntro')],['',T('abRule')]])}
function firstPath(){const p=S.firstPath&&S.firstPath.length>20?S.firstPath:null;if(p)return p;const out=[];for(let i=0;i<400;i++){const z=36-i*0.25;out.push({x:Math.sin(i*0.05)*0.9+(i%90<6?0.2:0),z,r:Math.PI})}return out}
function updCross(dt){const z=S.zf;if(S.ch==='12x'&&P.z>24&&z.jt<0){z.jt=0;z.path=firstPath();juanN.g.visible=true;tell([['',T('abSee')]])}
if(z.jt>=0){const pth=z.path;const near=Math.hypot(P.x-juanN.g.position.x,P.z-juanN.g.position.z)<2.6;if(!near&&S.ch==='12x')z.jt+=dt*4;const i=Math.min(pth.length-1,Math.floor(z.jt)),k=z.jt-Math.floor(z.jt),a=pth[i],b=pth[Math.min(pth.length-1,i+1)];
const x=a.x+(b.x-a.x)*k,zz=a.z+(b.z-a.z)*k;juanN.g.position.set(x,groundH(x,zz),zz);const mv=!near&&i<pth.length-1&&S.ch==='12x';juanN.g.rotation.y=near||!mv?Math.atan2(P.x-x,P.z-zz):Math.atan2(b.x-a.x,b.z-a.z)||Math.PI;animWalk(juanN,S.t*6.5,mv?0.5:0)}}
function nearJuan(){return S.zone==='cross'&&S.ch==='12x'&&juanN.g.visible&&Math.hypot(P.x-juanN.g.position.x,P.z-juanN.g.position.z)<2.8}
INTER.push({zones:['cross'],get x(){return juanN.g.position.x},get z(){return juanN.g.position.z},r:2.8,on:()=>nearJuan(),hint:()=>T('hintMeet'),act:()=>{S.ch='12meet';S.lock=true;P.rot=Math.atan2(juanN.g.position.x-P.x,juanN.g.position.z-P.z);
say([[T('nAbundio'),T('a1')],[T('nJuan'),T('jMeet')],[T('nAbundio'),T('abSon')],['',T('twistEnd'),()=>seq([[2,endFinal]])]])}});
function endFinal(){clearSave();const a=BOOK.filter(k=>S.frags[k]).length;endGame(T('endCard12')(a,BOOK.length,EXIDS.filter(k=>S.exv[k]).length,Math.min(5,S.ecos.length+(S.ecoBase||0)))+'<br><br><span class="small">'+T('creditsHtml')+'<br><br><a href="'+REPO+'" target="_blank" rel="noopener">'+T('repo')+'</a></span>')}
const REPO='https://github.com/yeagob/pedro-paramo';
function endZoneUpdate(dt){if(S.zone==='night')updNight(dt);if(S.zone==='donis')updDonis(dt);if(S.zone==='murmur')updMurmur(dt);if(S.zone==='tomb')updTomb(dt);if(S.zone==='mine')updMine(dt);if(S.zone==='sea')updSea(dt);if(S.zone==='fiesta')updFiesta(dt);if(S.zone==='rev')updRev(dt);if(S.zone==='hunger')updHunger(dt);if(S.zone==='final')updFinal(dt);if(S.zone==='cross')updCross(dt)}
function endFrag(id){if(id==='h1'||id==='h2'){if(S.frags.h1&&S.frags.h2)S.ch='7b'}if(id==='d1'||id==='d2')S.check={x:P.x,z:P.z};
if(id==='do1')S.after.push(()=>{S.zf.talk=1;say([[T('nJuan'),T('jDead')],[T('nDorotea'),T('doR'),()=>{VOICES.find(v=>v.id==='sz1').active=true;S.zf.talk=0;if(S.ecos.length+(S.ecoBase||0)>0)say([[T('nDorotea'),T('doEco')]])}]])});
if(id==='sz1')S.after.push(()=>seq([[1,()=>fadeTo(startMine)]]));if(id==='s1')VOICES.find(v=>v.id==='s2').active=true;
if(id==='pf')S.after.push(()=>{S.ch='12ab';abundN.g.visible=true;abundN.g.position.set(Z5+1.2,0,24)})}
function endObjective(){if(S.ch==='6door')return{x:-4,z:-95.1};if(S.ch==='6a')return{x:damiana.g.position.x,z:damiana.g.position.z};if(S.ch==='7b')return{x:Z6-2.6,z:-2.9};if(S.ch==='7mud')return{x:Z6,z:6};if(S.ch==='9b')return{x:Z8+0.3,z:-11.2};if(S.ch==='9f')return{x:0,z:-135};if(S.ch==='10a')return{x:Z9,z:-53};if(S.ch==='11a')return{x:0,z:-45};if(S.ch==='7c')return{x:pozo.x,z:pozo.z};if(S.ch==='9s')return{x:Z8,z:bedG.position.z};if(S.ch==='12walk')return{x:Z5,z:4};if(S.ch==='12x')return juanN.g.visible?{x:juanN.g.position.x,z:juanN.g.position.z}:{x:0,z:30};return null}
function endPose(){if(P.sitY){PL.g.position.y+=P.sitY;PL.legs.forEach(l=>l.rotation.x=-1.45);PL.knees.forEach(k=>k.rotation.x=1.5);PL.g.rotation.x=0}
if(S.zone==='hunger'&&PL===pedroPL){PL.arms.forEach((a,i)=>{a.rotation.x=-1.25;a.rotation.z=(i?-1:1)*0.55});PL.elbows.forEach(e=>e.rotation.x=-1.7)}
if(S.ch==='9a')PL.arms.forEach(a=>a.rotation.x=-2.6);if(S.zone==='rev'&&S.zf.fall)PL.g.rotation.x=-S.zf.fall;if(PL===abundPL)knife.visible=true;if(S.ch==='12walk'){PL.g.rotation.x=0.25+S.zf.walked*0.04}}
function endNPC(dt){if(S.zone==='donis'){animWalk(donisN,0,0);if(S.ch!=='7mud'&&S.ch!=='7sleep')animWalk(sister,0,0)}if(S.zone==='final'&&damiana.g.visible)animWalk(damiana,0,0)}
const SAVE='pp_save_v1';
function saveAt(m){if(S.restore)return;try{localStorage.setItem(SAVE,JSON.stringify({m,frags:S.frags,exv:S.exv,ecos:S.ecos.length+(S.ecoBase||0),fp:(S.firstPath||[]).map(p=>[+p.x.toFixed(2),+p.z.toFixed(2)])}));if(m!=='comala')hint(T('saved'),2)}catch(e){}}
function loadSave(){try{return JSON.parse(localStorage.getItem(SAVE)||'null')}catch(e){return null}}
function clearSave(){try{localStorage.removeItem(SAVE)}catch(e){}}
{const _jumpTo=jumpTo;jumpTo=function(id){_jumpTo(id);const r=S.restore;if(r){S.restore=null;Object.assign(S.frags,r.frags||{});Object.assign(S.exv,r.exv||{});S.ecoBase=r.ecos||0;if(r.fp&&r.fp.length)S.firstPath=r.fp.map(p=>({x:p[0],z:p[1],r:Math.PI}));VOICES.forEach(v=>{if(S.frags[v.id]&&!v.zone)v.done=true})}}}
{const _story=story;story=function(){_story();if(!S.past&&PL===juan&&S.check.z>-56&&S.mode==='play'){S.fpT=(S.fpT||0)+1;if(S.fpT%6===0){const fp=S.firstPath||(S.firstPath=[]);if(fp.length<900&&(fp.length===0||Math.hypot(fp[fp.length-1].x-P.x,fp[fp.length-1].z-P.z)>0.05||S.fpT%30===0))fp.push({x:P.x,z:P.z,r:P.rot})}}}}
[['startCh3','velorio'],['startRenteria','renteria'],['startRetablo','retablo'],['startCh4','excusado'],['startHill','papalote'],['startCh5','fulgor'],['startFence','cerca'],['startViudas','viudas']].forEach(([f,m])=>{const o=window[f];window[f]=function(){o.apply(this,arguments);saveAt(m)}});
{const sv=loadSave();if(sv&&sv.m){$('cont').hidden=false;$('start').dataset.i18n='newGame';applyLang()}}
$('cont').onclick=()=>{const sv=loadSave();if(!sv)return;S.restore=sv;pending=sv.m;$('cont').hidden=true;$('start').onclick()};
{const _st=$('start').onclick;$('start').onclick=function(){if(!S.restore)clearSave();_st()}}
$('tCred').onclick=()=>{const c=$('tCredits');c.hidden=!c.hidden;c.innerHTML=T('creditsHtml')};
