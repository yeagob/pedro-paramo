import json,subprocess,os,sys,soundfile as sf
sys.path.insert(0,'')
SP=os.path.dirname(os.path.abspath(__file__));OUT=sys.argv[1]
src=open(SP+'/tts8.py').read();spk={}
exec(src[src.index('spk='):src.index('cast=')])
from kokoro_onnx import Kokoro
k=Kokoro(SP+'/kokoro/kokoro-v1.0.onnx',SP+'/kokoro/voices-v1.0.bin')
cast={'pedro':('em_alex',0.88,0.9),'renteria':('em_santa',0.85,1.0),'fulgor':('em_santa',0.88,0.94),'toribio':('em_alex',0.95,1.04),'nino':('em_alex',0.95,1.35),'abuela':('ef_dora',0.88,0.88),'susana':('ef_dora',0.9,1.16),'madre':('ef_dora',0.85,1.0),'maria':('ef_dora',0.88,0.93),'ana':('ef_dora',0.9,1.08),'pl1':('ef_dora',0.86,0.95),'pl2':('ef_dora',0.86,1.02),'v1':('ef_dora',0.88,0.95),'v2':('ef_dora',0.88,1.04),'v3':('ef_dora',0.86,0.9),'v4':('ef_dora',0.88,0.98),'v5':('ef_dora',0.88,1.07),'abundio':('em_santa',0.9,0.92),'juan':('em_alex',0.92,1.0),'eduviges':('ef_dora',0.86,0.97),'rebozo':('ef_dora',0.85,1.02),'voz':('ef_dora',0.82,0.92),'damiana':('ef_dora',0.88,0.915),'dorotea':('ef_dora',0.86,0.892),'bartolome':('em_santa',0.88,0.893),'hermana':('ef_dora',0.9,1.05),'donis':('em_alex',0.95,0.967)}
d=json.load(open(SP+'/lines.json'))['es'];os.makedirs(OUT,exist_ok=True)
for key,text in d.items():
    if os.environ.get('ONLY') and key not in os.environ['ONLY'].split(','):continue
    v,speed,pitch=cast[spk[key]];tmp=SP+'/ktmp.wav'
    s,sr=k.create(text,voice=v,speed=speed,lang='es');sf.write(tmp,s,sr)
    af=f'silenceremove=start_periods=1:start_threshold=-45dB,asetrate={int(sr*pitch)},aresample=22050,atempo={1/pitch:.4f},highpass=f=80,loudnorm=I=-18:TP=-2'
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',tmp,'-af',af,'-ac','1','-ar','22050','-b:a','48k',f'{OUT}/{key}.mp3'],check=True)
print('ok',len(d))
