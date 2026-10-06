const {chromium}=require('playwright');const path=require('path'),fs=require('fs'),http=require('http');
const root='/mnt/project-files/pedro-paramo-poc';
const server=http.createServer((q,r)=>{const f=path.join(root,decodeURIComponent(q.url.split('?')[0]));if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);return r.end()}fs.createReadStream(f).pipe(r)});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const pg=await b.newPage({viewport:{width:640,height:480}});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.route('**/three.min.js',r=>r.fulfill({path:process.env.THREE_LOCAL,contentType:'application/javascript'}));
await pg.goto(`http://127.0.0.1:${server.address().port}/index.html${process.env.HASH||''}`);await pg.waitForTimeout(500);await pg.click('#start');await pg.waitForTimeout(800);
const MAX=+(process.env.MAX||1500);
for(let chunk=0;chunk<MAX/50;chunk++){
const r=await pg.evaluate(()=>{const W=window;if(!W.AP){W.AP={log:[],last:{},t:0,stuck:0,lastProg:'',lastProgT:0,holdT:0}}const A=W.AP;
const L=(k,v)=>{if(A.last[k]!==v){A.last[k]=v;if(v)A.log.push([A.t.toFixed(1),k,String(v).slice(0,140)])}};
for(let i=0;i<1000;i++){A.t+=0.05;
['KeyW','KeyA','KeyS','KeyD','KeyE'].forEach(k=>keys[k]=false);S.ePress=false;
if(S.mode==='card'){A.cardT=(A.cardT||0)+0.05;if(A.cardT>4){S.cardT=99;S.cardReady=true;closeCard();A.cardT=0}}
else if(S.mode==='choice'){const o=[...document.querySelectorAll('#choiceOpts > *')].filter(e=>!e.classList.contains('x'));L('choice',o.map(e=>e.innerText).join('|'));A.chT=(A.chT||0)+0.05;if(A.chT>2){A.chT=0;o[0]&&o[0].click()}}
else if(S.mode==='puzzle'){L('puzzle','open');A.pz=(A.pz||0)+0.05;if(A.pz>20){A.pz=0;S.puz=ORDER.slice();document.getElementById('puzOk').click()}}
else if(S.mode==='play'){const h=document.getElementById('hint').innerText;L('hint',h);
const tgt=nearestListen();let it=null;try{it=!tgt&&nearestInter()}catch(e){}
if(tgt){keys.KeyE=true}
else if(it&&A.t-(A.eT||0)>1){S.ePress=true;A.eT=A.t;L('press',it.hint())}
else if(S.ch==='4kite'){if(S.kite.ph==='gust')keys.KeyE=true}

else{const still=/quiet|quieto|quiet|still|immòbil|quiet/i.test(h)&&S.ch==='3a';
let ob=null;try{ob=objective()}catch(e){}
if(S.ch==='3c'){const i=[1,2,4,5,0,3].find(i=>!S.found[NICH[i]]);if(i!=null)ob={x:nichX(i),z:-11.9}}
if(ob&&S.zone==='comala'&&inHouse(ob.x,ob.z)&&!inHouse(P.x,P.z)){ob=P.x<3.1||Math.abs(P.z+84)>0.6?{x:3.4,z:-84}:{x:6.5,z:-84}}
else if(ob&&S.zone==='comala'&&!inHouse(ob.x,ob.z)&&inHouse(P.x,P.z)){ob=P.x>6.2||Math.abs(P.z+84)>0.6?{x:6,z:-84}:{x:3.2,z:-84}}
if(ob&&!still){const dx=ob.x-P.x,dz=ob.z-P.z,d=Math.hypot(dx,dz);if(d>0.25){const wy=Math.atan2(dx,dz);let my=cam.yaw;if(S.fixedCam||S.inside>0.5){my=S.curYaw!=null?S.curYaw:cam.yaw}else{cam.yaw=wy+Math.PI;my=cam.yaw}
A.bd=A.bd||{d:1e9,t:A.t};if(d<A.bd.d-0.5)A.bd={d,t:A.t};if(A.t-A.bd.t>5){P.x+=dx/d*Math.min(d,2.5);P.z+=dz/d*Math.min(d,2.5);A.bd={d:1e9,t:A.t};A.assist=(A.assist||0)+1;A.log.push([A.t.toFixed(1),'ASSIST',S.zone+'/'+S.ch+' '+P.x.toFixed(1)+','+P.z.toFixed(1)])}
{const rel=wy-(my+Math.PI);const fx=Math.sin(rel),fz=Math.cos(rel);if(fz>0.38)keys.KeyW=true;if(fz<-0.38)keys.KeyS=true;if(fx>0.38)keys.KeyA=true;if(fx<-0.38)keys.KeyD=true}}}
}}
update(0.05);
L('mode',S.mode);L('ch',S.zone+'/'+S.ch);L('sub',document.getElementById('sub').innerText);L('ecos',S.ecos.length);
const prog=S.zone+S.ch+Object.keys(S.frags).length+S.mode+S.touchedWater+Object.keys(S.found||{}).length+(S.zf&&S.zf.coinsLeft);if(prog!==A.lastProg){A.lastProg=prog;A.lastProgT=A.t}
if(A.t-A.lastProgT>90){A.log.push([A.t.toFixed(1),'STUCK',S.zone+'/'+S.ch+' P='+P.x.toFixed(1)+','+P.z.toFixed(1)+' tgt='+((nearestListen()||{}).id)+' lis='+(S.listening&&S.listening.id)+' lock='+S.lock+' keys='+Object.keys(keys).filter(k=>keys[k]).join('')+' ob='+JSON.stringify((()=>{try{return objective()}catch(e){return null}})())]);A.lastProgT=A.t;A.stuckN=(A.stuckN||0)+1}
if(S.mode==='end'||A.stuckN>=2)break}
const out=A.log.splice(0);return {out,end:S.mode==='end'||A.stuckN>=2,t:A.t}});
r.out.forEach(x=>console.log(x.join(' | ')));if(errs.length){console.log('ERR',errs.join('\n'));errs.length=0}
if(r.end){console.log('END at',r.t);break}}
await pg.screenshot({path:'auto_end.png'});await b.close();server.close()})();
