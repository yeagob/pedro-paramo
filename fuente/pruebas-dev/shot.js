const {chromium}=require('playwright');const path=require('path'),fs=require('fs'),http=require('http');
const root=process.env.ROOT||'/mnt/project-files/pedro-paramo-poc';
const server=http.createServer((q,r)=>{const f=path.join(root,decodeURIComponent(q.url.split('?')[0]));if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);return r.end()}fs.createReadStream(f).pipe(r)});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const pg=await b.newPage({viewport:{width:640,height:480}});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.route('**/three.min.js',r=>r.fulfill({path:process.env.THREE_LOCAL,contentType:'application/javascript'}));
await pg.goto(`http://127.0.0.1:${server.address().port}/index.html${process.env.HASH||''}`);await pg.waitForTimeout(500);await pg.click('#start');await pg.waitForTimeout(800);
await pg.evaluate(()=>{window.adv=s=>{for(let i=0;i<s*20;i++){if(S.mode==='card'){S.cardT=99;S.cardReady=true;closeCard()}update(0.05)}}});
const steps=JSON.parse(fs.readFileSync(process.argv[2]));
for(const [name,code] of steps){const r=await pg.evaluate(code);await pg.waitForTimeout(300);if(name)await pg.screenshot({path:'s_'+name+'.png'});console.log(name,JSON.stringify(r))}
console.log(errs.join('\n'));await b.close();server.close()})();
