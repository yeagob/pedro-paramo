function update(dt){S.t+=dt;postMat.uniforms.time.value=S.t;
if(S.fade){const q=S.fade;q.t+=dt;postMat.uniforms.fade.value=q.t<1.2?q.t/1.2:Math.max(0,1-(q.t-1.6)/1.2);if(q.t>=1.3&&!q.done){q.done=true;q.cb()}if(q.t>2.8){S.fade=null;postMat.uniforms.fade.value=0}}
if(S.mode==='play'){
const lock=S.lock||!!S.fade;
const tgt=lock?null:nearestListen();const holding=keys['KeyE'];
if(holding&&tgt){if(S.listening!==tgt){S.listening=tgt;S.listenT=0;startMurmur(tgt)}S.listenT+=dt/(murmur?murmur.dur:(tgt.dur||6)*(1+0.25*S.ecos.length));if(murmur)murmur.g.gain.value=0.15+S.listenT;
const txt=tgt.eco?(tgt.frag?fragText(tgt.frag):T('echoMurmur')):fragText(tgt.clip||tgt.id);
const n=Math.floor(txt.length*Math.min(1,S.listenT));let shown='';for(let i=0;i<n;i++)shown+=(Math.random()<0.08*S.ecos.length&&txt[i]!==' ')?'·':txt[i];$('listen').textContent=shown;
if(tgt.never&&S.listenT>0.82){S.listening=null;S.listenT=0;stopMurmur();$('listen').textContent='';neverFail()}
else if(S.listenT>=1){const t=S.listening;S.listening=null;S.listenT=0;murmur=null;finishListen(t)}}
else{if(S.listening){S.listening=null;S.listenT=0;stopMurmur();$('listen').textContent=''}if(tgt)hint(tgt.eco?T('hintEcho'):listenHint(tgt))}
if(!tgt&&!S.listening&&!lock){const it=nearestInter();if(it){hint(it.hint());if(S.ePress)it.act()}else if(S.zone==='comala'&&!S.past&&!S.flags.done&&!S.frags.caballo&&inHouse(P.x,P.z)){if(VOICES[1].active&&!VOICES[1].done)hint(T('hintEdu'));else if(VOICES[2].active&&!VOICES[2].done)hint(T('hintBed'))}}
let ix=(keys['KeyD']||keys['ArrowRight']?1:0)-(keys['KeyA']||keys['ArrowLeft']?1:0),iz=(keys['KeyS']||keys['ArrowDown']?1:0)-(keys['KeyW']||keys['ArrowUp']?1:0);if(lock){ix=0;iz=0}
P.moving=(ix||iz)&&!S.listening;const shift=keys['ShiftLeft']||keys['ShiftRight'];const canRun=S.zone!=='comala'||S.past||S.check.z<-56;P.run=P.moving&&shift&&canRun&&S.breath>0.05&&PL!==rentPL;
if(P.moving&&shift&&!canRun&&PL===juan&&S.t-(S.noRunT||-99)>12){S.noRunT=S.t;tell([['Juan Preciado',T('noRun')]])}
S.dizzy=Math.max(0,Math.min(1,(S.dizzy||0)+(P.run&&PL===juan?dt*0.22:-dt*0.15)));if(S.dizzy>0.35&&S.t-(S.dizzyT||-99)>20){S.dizzyT=S.t;tell([['Juan Preciado',T('dizzy')]])}
if(!P.moving)S.lastIn=null;
if(P.moving){const l=Math.hypot(ix,iz);ix/=l;iz/=l;let my=cam.yaw;if(S.fixedCam&&!S.camOverride){if(S.fixYawFor!==S.fixedCam){S.fixYawFor=S.fixedCam;S.fixYaw=Math.atan2(S.fixedCam.x-P.x,S.fixedCam.z-P.z)}my=S.fixYaw}else if(S.inside>0.5&&!S.camOverride)my=Math.atan2(4.3,5.3);const ik=ix+','+iz,fx=my!==cam.yaw;if(S.lastIn===ik&&S.moveFixed!==fx)my=S.moveYaw;else{S.moveYaw=my;S.moveFixed=fx}S.lastIn=ik;S.curYaw=my;const cy=Math.cos(my),sy=Math.sin(my);const dx=ix*cy+iz*sy,dz=-ix*sy+iz*cy;
const sp=(P.run?3.6:1.9)*(1-(1-S.breath)*0.35)*(P.spMul||1);const sway=PL===juan?Math.sin(S.t*1.7)*0.18*(S.past?0.3:1)*(1-S.breath*0.6)+Math.sin(S.t*2.3)*0.45*S.dizzy:0;
const ddx=dx*Math.cos(sway)-dz*Math.sin(sway),ddz=dx*Math.sin(sway)+dz*Math.cos(sway);const away=S.zone==='comala'&&P.z>30&&(ddz>0.2||(P.z>37&&Math.abs(P.x+ddx)>Math.abs(P.x)));if(away){S.windT=Math.min(1,S.windT+dt*0.8);if(S.windT>0.35&&S.t-S.windSaid>7){S.windSaid=S.t;say([['Juan Preciado',T('wind')]])}}
const wf=away?Math.max(0,Math.min(1,(44-P.z)/14))**2*(1-S.windT*0.5):1;P.x+=ddx*sp*dt*(away&&P.z>37?wf:1);P.z+=ddz*sp*dt*(ddz>0?wf:1);
const tr=Math.atan2(ddx,ddz);let d=tr-P.rot;while(d>Math.PI)d-=2*Math.PI;while(d<-Math.PI)d+=2*Math.PI;P.rot+=d*Math.min(1,dt*8);
P.turn=d}
if(!(P.moving&&P.z>30&&S.zone==='comala'))S.windT=Math.max(0,S.windT-dt*1.2);if(A.windG)A.windG.gain.value=0.22+S.windT*0.7;
if(!S.lowSaid&&S.breath<0.35&&!S.past&&S.zone==='comala'){S.lowSaid=true;say([['',T('lowBreath')]])}
const walking=P.moving||P.forceWalk;P.amp=(P.amp||0)+((walking?(P.run?0.85:0.5):0)-(P.amp||0))*Math.min(1,dt*6);if(P.amp>0.03){const prev=Math.sin(P.walkT);P.walkT+=dt*(P.run?10:6.5)*(0.6+0.4*S.breath)*(PL===nino?1.35:1)*(PL===rentPL?0.8:1);if(prev<0&&Math.sin(P.walkT)>=0||prev>0&&Math.sin(P.walkT)<=0)step()}
collideNPC();collide();P.y=groundH(P.x,P.z)+(P.x<150&&Math.abs(P.x)>4.05&&Math.abs(P.x)<4.9&&P.z<-55&&P.z>-98?0.12:0);
const dOpen=S.touchedWater||S.flags.edu||S.past||S.zone!=='comala';eduDoor.rotation.y+=((dOpen?1.6:0)-eduDoor.rotation.y)*Math.min(1,dt*2);eduDoorCol[0]=dOpen?999:4.75;eduDoorCol[1]=dOpen?999:5.2;eduDoorOpen[0]=eduDoor.rotation.y>1.2?4.95:999;eduDoorOpen[1]=eduDoor.rotation.y>1.2?6.95:999;
if(!dOpen&&P.x>2.8&&P.x<4.8&&Math.abs(P.z+84)<1.4){hint(T('doorWell'));if(!S.flags.doorSaid){S.flags.doorSaid=1;tell([['Juan Preciado',T('doorWellSay')]])}}
const inside=inHouse(P.x,P.z);S.inside+=((inside?1:0)-S.inside)*Math.min(1,dt*2.5);const fixedNow=S.inside>0.5;if(S.wasFixed&&!fixedNow)cam.yaw=P.rot+Math.PI;S.wasFixed=fixedNow;
let drain=0,heat=0;
if(PL===juan&&S.zone==='churchD')S.breath=Math.min(1,S.breath+dt*0.05);
else if(PL===juan&&S.zone!=='hang'){if(!inside)drain+=S.past||S.zone==='wake'?0.004:0.0025;if(P.run)drain+=0.018;if(S.listening&&!inside)drain+=0.02;if(inside&&!S.listening)S.breath=Math.min(1,S.breath+dt*0.06);
if(S.zone==='comala'){if(!S.past)heatSpots.forEach(s=>{if(Math.hypot(P.x-s[0],P.z-s[1])<2.2){drain+=0.05;heat=1.2}});
if(Math.hypot(P.x-pozo.x,P.z-pozo.z)<2.6){S.breath=Math.min(1,S.breath+dt*1.5);drain=0;if(!S.touchedWater||S.check.x!==pozo.x){S.check={x:pozo.x,z:pozo.z+2};S.touchedWater=true;say([['',T('water')]])}hint(T('waterHint'))}}}
S.breath=Math.max(0,S.breath-drain*dt/(1+0.7*S.ecos.length));
if(S.zone==='comala'&&!S.past&&P.z<-56&&P.z>-60&&Math.abs(P.x)<4&&S.check.z>-56){S.check={x:0,z:-57};tell([['',T('checkTown')]]);hint(T('hintMove'),6)}heat=Math.max(heat,S.dizzy*1.3);postMat.uniforms.heat.value+=(heat-postMat.uniforms.heat.value)*Math.min(1,dt*2);
S.histT+=dt;if(S.histT>0.1){S.histT=0;S.hist.push({x:P.x,z:P.z,r:P.rot});if(S.hist.length>600)S.hist.shift()}
if(S.breath<=0&&PL===juan)fall();
if(S.zone==='comala')story();else zoneUpdate(dt);
animWalk(PL,P.walkT,P.amp);P.lean=(P.lean||0)+((P.moving?Math.max(-0.12,Math.min(0.12,-(P.turn||0)*0.6))*P.amp:0)-(P.lean||0))*Math.min(1,dt*5);
const sc=P.sc||1;PL.g.position.set(P.x,P.y+PL.bob*sc,P.z);const pant=PL===juan?Math.max(0,(0.6-S.breath)/0.6):0;PL.g.rotation.set(P.amp*(P.run?0.2:0.06)+pant*(P.moving?0.08:0.14)+(P.stoop||0),P.rot,P.lean);
if(pant>0){const hb=Math.sin(S.t*(2+pant*6));PL.body.scale.y=1+hb*(0.01+pant*0.035);PL.head.rotation.x=pant*0.3+hb*pant*0.06;PL.arms.forEach(a=>a.position.y=1.47+hb*pant*0.02);
if(!P.moving&&pant>0.4&&!S.listening){const k=Math.min(1,(pant-0.4)/0.3);PL.arms.forEach(a=>a.rotation.x+=(-0.55-a.rotation.x)*k);PL.elbows.forEach(e=>e.rotation.x=-0.25)}}
const ob=objective();if(ob&&P.moving){const ox=ob.x-P.x,oz=ob.z-P.z,ol=Math.hypot(ox,oz)||1;const dot=(ox*Math.sin(P.rot)+oz*Math.cos(P.rot))/ol;S.clar+=((dot>0.3?1:dot<-0.3?0:0.5)-S.clar)*Math.min(1,dt*0.6)}else if(!ob)S.clar+=(1-S.clar)*Math.min(1,dt*0.3);
if(S.listening){PL.arms[0].rotation.x=-0.5;PL.elbows[0].rotation.x=-2.1;PL.arms[0].rotation.z=-0.35;PL.head.rotation.z=0.18}else{PL.arms[0].rotation.z=-0.09;PL.head.rotation.z=0}
zonePose();
}
else if(S.mode==='fall')updFall(dt);
else if(S.mode==='converge')updConverge(dt);
else if(S.mode==='trans')updTrans(dt);
postMat.uniforms.breath.value+=(S.breath-postMat.uniforms.breath.value)*Math.min(1,dt*3);
if(!['title','book','puzzle','menu','card','choice'].includes(S.mode)){updNPC(dt);updEcos(dt);updSub(dt);updSeq(dt)}
const C0=S.pal||(S.past?PAST:PRESENT);const k=1-S.inside*(S.past?0.35:0.7);scene.fog.near=C0.near+S.inside*4+S.clar*2;scene.fog.far=C0.far+S.inside*12+S.clar*8-3;hemi.intensity=C0.hi*k;sun.intensity=C0.si*k;
if(S.mode==='card')S.cardT+=dt;if(S.ecoHudT>0){S.ecoHudT-=dt;if(S.ecoHudT<=0&&S.mode!=='menu'&&S.mode!=='book')$('ecoHud').classList.remove('on')}
if(escT>=0){escT+=dt;if(escT>0.6){escT=-1;toggleMenu()}}
if(hintT>0){hintT-=dt;if(hintT<=0)$('hint').textContent=''}
const rain=S.rain;const dp=dustGeo.attributes.position;for(let i=0;i<dustN;i++){let x=dp.getX(i)+dt*(rain?0.6:(0.25+S.windT*Math.sin(i)*1.5)),z=dp.getZ(i)+dt*(rain?0:(0.1-S.windT*9)),y=dp.getY(i)-dt*(rain?9+(i%5):0.5+(i%5)*0.08);
if(x-P.x>12)x-=24;if(x-P.x<-12)x+=24;if(z-P.z>12)z-=24;if(z-P.z<-12)z+=24;const gy=groundH(x,z);if(y<gy||y>gy+8)y=gy+6+rng()*2;dp.setXYZ(i,x,y,z)}dp.needsUpdate=true;
heatMeshes.forEach((m,i)=>m.material.opacity=0.07+0.05*Math.sin(S.t*2+i));
S.ePress=false;
updCamera(dt);audioUpdate(dt)}
function updCamera(dt){const sc=P.sc||1;const tgt=new THREE.Vector3(P.x,P.y+1.4*sc,P.z);let want;const tm=S.mode==='title';
if(S.camOverride&&!tm){want=S.camOverride.pos.clone();tgt.copy(S.camOverride.look)}
else if(S.fixedCam&&!tm){want=S.fixedCam.clone()}
else if(S.inside>0.5&&!tm){want=new THREE.Vector3(14.3,3.1,-78.7)}
else{const d=(S.listening?2.6:(tm?9:cam.dist))*(sc<0.9?0.7:1);const cp=Math.cos(cam.pitch);want=new THREE.Vector3(tgt.x+Math.sin(cam.yaw)*d*cp,tgt.y+Math.sin(cam.pitch)*d,tgt.z+Math.cos(cam.yaw)*d*cp);
for(let k=1;k<=12;k++){const t=k/12,px=tgt.x+(want.x-tgt.x)*t,pz=tgt.z+(want.z-tgt.z)*t;if(colliders.some(c=>px>c[0]-0.2&&px<c[1]+0.2&&pz>c[2]-0.2&&pz<c[3]+0.2)){const t2=Math.max(0.15,(k-1)/12);want.set(tgt.x+(want.x-tgt.x)*t2,tgt.y+(want.y-tgt.y)*t2,tgt.z+(want.z-tgt.z)*t2);break}}
const gh=groundH(want.x,want.z)+0.4;if(want.y<gh)want.y=gh;if(S.ceil&&want.y>S.ceil-0.3)want.y=S.ceil-0.3;
if(tm){want.set(Math.sin(S.t*0.05)*6,groundH(0,40)+5,44);tgt.set(0,groundH(0,20)+1,20)}}
cam.pos.lerp(want,Math.min(1,dt*(S.inside>0.5||S.fixedCam?6:4)));camera.position.copy(cam.pos);camera.lookAt(tgt);if(S.dizzy>0.02&&!tm){camera.position.x+=Math.sin(S.t*1.9)*0.5*S.dizzy;camera.position.y+=Math.sin(S.t*2.7)*0.25*S.dizzy;camera.rotateZ(Math.sin(S.t*1.3)*0.12*S.dizzy)}
const dir=S.past?new THREE.Vector3(-0.4,0.35,-1).normalize():new THREE.Vector3(0.5,0.55,-0.8).normalize();sunDisc.position.copy(camera.position).addScaledVector(dir,75);sunDisc.lookAt(camera.position)}

