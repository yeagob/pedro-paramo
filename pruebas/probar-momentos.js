const {chromium}=require('playwright');
const path=require('path');
const fs=require('fs');
const http=require('http');
const root=path.resolve(__dirname,'..');
const types={'.html':'text/html','.js':'application/javascript','.mp3':'audio/mpeg','.png':'image/png'};
const server=http.createServer((q,r)=>{const f=path.join(root,decodeURIComponent(q.url.split('?')[0]));if(!f.startsWith(root)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);return r.end()}r.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)});
const out=path.resolve(__dirname,'capturas');
const three=process.env.THREE_LOCAL;
const moments=(process.env.MOMENTS||'camino,comala,eduviges,caballo,pasado,puzle,ecos,final,velorio,renteria,retablo,excusado,papalote,puerta,fulgor,cerca,viudas').split(',');
const langs=(process.env.LANGS||'es').split(',');
(async()=>{
fs.mkdirSync(out,{recursive:true});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const html=`http://127.0.0.1:${server.address().port}/index.html`;
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
let fails=0;
for(const lang of langs)for(const m of moments){
const pg=await b.newPage({viewport:{width:960,height:720}});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',x=>{if(x.type()==='error')errs.push(x.text())});
if(three)await pg.route('**/three.min.js',r=>r.fulfill({path:three,contentType:'application/javascript'}));
await pg.goto(html+'#m-'+m);await pg.waitForTimeout(800);
await pg.click(`[data-lang=${lang}]`);await pg.click('#start');await pg.waitForTimeout(m==='final'?6000:3500);
if(await pg.evaluate(()=>S.mode==='card')){await pg.evaluate(()=>{S.cardT=1;S.cardReady=true;closeCard()});await pg.waitForTimeout(1500)}
const st=await pg.evaluate(()=>({zone:S.zone,mode:S.mode,past:S.past,frags:Object.keys(S.frags).length,ecos:S.ecos.length,sub:document.getElementById('sub').innerText}));
await pg.screenshot({path:path.join(out,`${lang}-${m}.png`)});
const ok=!errs.length;if(!ok)fails++;
console.log(`${ok?'OK  ':'FAIL'} ${lang} ${m.padEnd(9)} zona=${st.zone} modo=${st.mode} pasado=${st.past} fragmentos=${st.frags} ecos=${st.ecos} ${st.sub?'| '+st.sub:''}${errs.length?' | '+errs.join(' ; '):''}`);
await pg.close()}
await b.close();server.close();process.exit(fails?1:0)})();
