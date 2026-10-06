const {chromium}=require('playwright');const path=require('path'),fs=require('fs'),http=require('http');
const root='/mnt/project-files/pedro-paramo-poc';
const server=http.createServer((q,r)=>{const f=path.join(root,decodeURIComponent(q.url.split('?')[0]));if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);return r.end()}fs.createReadStream(f).pipe(r)});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const pg=await b.newPage({viewport:{width:640,height:480}});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.route('**/three.min.js',r=>r.fulfill({path:process.env.THREE_LOCAL,contentType:'application/javascript'}));
await pg.goto(`http://127.0.0.1:${server.address().port}/index.html`);await pg.waitForTimeout(500);await pg.click('#start');await pg.waitForTimeout(800);
const run=process.env.RUN==='1';
const r=await pg.evaluate((run)=>{const out=[];let lastMode='';
for(let i=0;i<20*600;i++){if(S.mode==='card'){S.cardT=99;S.cardReady=true;closeCard()}
if(S.mode==='play'){keys.KeyW=true;keys.ShiftLeft=run;cam.yaw=Math.atan2(-(0-P.x)*0.3,1)*0+ (P.x>0.5?-0.15:P.x<-0.5?0.15:0);}
document.dispatchEvent&&0;update(0.05);
if(i%60===0||S.mode!==lastMode)out.push([ (i/20).toFixed(0),S.mode,P.x.toFixed(1),P.z.toFixed(1),S.breath.toFixed(2),S.ecos.length,S.lock?1:0]);lastMode=S.mode;
if(P.z<-60&&!out.town){out.town=1;out.push(['TOWN',JSON.stringify(S.check),(i/20).toFixed(0),S.ecos.length])}
if(P.z<-80&&S.ecos.length<2&&S.mode==="play")0;if(P.z<-60)break;if(S.ecos.length>=3)break}
return out},run);
r.forEach(x=>console.log(x.join(' ')));console.log(errs.join('\n'));await b.close();server.close()})();
