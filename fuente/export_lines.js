const fs=require('fs');const s=fs.readFileSync('/mnt/project-files/pedro-paramo-poc/index.html','utf8');
const a=s.indexOf('const I18N={'),b=s.indexOf('let LANG=((navigator');
const I18N=new Function(s.slice(a,b)+';return I18N')();
const VK=['a1','a2','a3j','a3a','welcome','a4','e1','e2','end1','end2','end3','echoMurmur','r1','r2','r3','ab1','pn1','pn2','su1','f1','f2','f3','dPayR','dSellR','p5a','p5b','p5c'];
const out={};for(const l of ['es','ca','en']){out[l]={};for(const k of VK)out[l][k]=I18N[l][k];for(const k in I18N[l].fr)out[l]['fr_'+k]=I18N[l].fr[k].text}
fs.writeFileSync(process.argv[2],JSON.stringify(out,null,1));console.log(Object.keys(out.es).length,Object.keys(out.ca).length,Object.keys(out.en).length)
