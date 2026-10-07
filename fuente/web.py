import os, json, html, sys
SP = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(SP, '..')
sys.path.insert(0, SP)
from web_es import ES
from web_ca import CA
from web_en import EN

U = 'https://pedro-paramo.vercel.app'
LANGS = [ES, CA, EN]
FR = json.load(open(os.path.join(SP, 'web_fragmentos.json')))
MURM = ['rebozo', 'caballo', 'eduviges', 'pedro', 'renteria', 'madre', 'papalote', 'v4', 'd2', 'do1', 's1', 'pf']
CH_IMG = ['c01', 'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'c11', 'c12']
DATE = '2026-10-07'


def esc(s):
    return html.escape(s, quote=True)


def strip(s):
    import re
    return re.sub('<[^>]+>', '', s)


def play_url(L, abs_=False):
    p = L['play'] + ('' if L['lang'] == 'es' else '?lang=' + L['lang'])
    return (U if abs_ else '') + p


def ld(L):
    g = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['VideoGame', 'SoftwareApplication'],
                '@id': U + '/#juego',
                'name': 'Pedro Páramo',
                'description': L['desc'],
                'url': U + L['path'],
                'image': U + '/og.jpg',
                'screenshot': [U + '/web/img/' + k + '.webp' for k in CH_IMG[:6]],
                'genre': ['Survival horror', 'Adventure'],
                'applicationCategory': 'GameApplication',
                'gamePlatform': 'Web browser',
                'operatingSystem': 'Windows, macOS, Linux',
                'playMode': 'SinglePlayer',
                'inLanguage': ['es', 'ca', 'en'],
                'isAccessibleForFree': True,
                'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'EUR', 'availability': 'https://schema.org/InStock', 'url': play_url(L, True)},
                'softwareVersion': '1.0-beta',
                'datePublished': '2026-10-06',
                'author': [{'@type': 'Organization', 'name': 'Claude (Anthropic)'}, {'@type': 'Person', 'name': 'Santiago', 'url': 'https://github.com/yeagob'}],
                'isBasedOn': {'@id': U + '/#novela'},
                'sameAs': ['https://github.com/yeagob/pedro-paramo'],
            },
            {
                '@type': 'Book',
                '@id': U + '/#novela',
                'name': 'Pedro Páramo',
                'author': {'@type': 'Person', 'name': 'Juan Rulfo', 'birthDate': '1917-05-16', 'deathDate': '1986-01-07'},
                'datePublished': '1955',
                'inLanguage': 'es',
                'genre': 'Novela',
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [{'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': strip(a)}} for q, a in L['faq']],
            },
        ],
    }
    return json.dumps(g, ensure_ascii=False, separators=(',', ':'))


def head(L):
    alts = ''.join('<link rel="alternate" hreflang="%s" href="%s%s">\n' % (x['lang'], U, x['path']) for x in LANGS)
    alts += '<link rel="alternate" hreflang="x-default" href="%s/">\n' % U
    ogalt = ''.join('<meta property="og:locale:alternate" content="%s">\n' % x['locale'] for x in LANGS if x is not L)
    return f'''<!doctype html>
<html lang="{L['lang']}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(L['title'])}</title>
<meta name="description" content="{esc(L['desc'])}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#0b0907">
<link rel="canonical" href="{U}{L['path']}">
{alts}<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Spectral:ital,wght@0,300;0,400;1,300&display=swap">
<link rel="stylesheet" href="/web/estilo.css">
<link rel="preload" as="image" href="/web/img/hero.webp">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Pedro Páramo">
<meta property="og:title" content="{esc(L['title'])}">
<meta property="og:description" content="{esc(L['desc'])}">
<meta property="og:url" content="{U}{L['path']}">
<meta property="og:image" content="{U}/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{esc(L['ogalt'])}">
<meta property="og:locale" content="{L['locale']}">
{ogalt}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{esc(L['title'])}">
<meta name="twitter:description" content="{esc(L['desc'])}">
<meta name="twitter:image" content="{U}/og.jpg">
<script type="application/ld+json">{ld(L)}</script>
<script>{{const q=new URLSearchParams(location.search),l=q.get('lang');if(q.has('admin')||location.hash.startsWith('#m-'))location.replace('/jugar'+location.search+location.hash);else if(location.pathname==='/'&&(l==='ca'||l==='en'))location.replace('/'+l+'/')}}</script>
</head>
'''


def page(L):
    p = play_url(L)
    nav = ''.join(f'<li><a href="#{a}">{t}</a></li>' for a, t in L['nav'])
    cur = ' aria-current="page"'
    langs = ''.join(f'<a href="{x["path"]}" hreflang="{x["lang"]}" lang="{x["lang"]}"{cur if x is L else ""}>{x["lang"].upper()}</a>' for x in LANGS)
    chips = ''.join(f'<li>{c}</li>' for c in L['chips'])
    feats = ''.join(f'<li><h3>{a}</h3><p>{b}</p></li>' for a, b in L['features'])
    chs = ''.join(f'''<li class="ch"><figure><img src="/web/img/{CH_IMG[i]}-s.webp" alt="{esc(t)}" width="480" height="300" loading="lazy" decoding="async"></figure><div><span class="n">{L['chapter_word']} {i+1}</span><h3>{t}</h3><p>{a}</p><p class="how"><span>{L['how_label']}:</span> {b}</p></div></li>''' for i, (t, a, b) in enumerate(L['chapters']))
    frs = FR[L['lang']]['fr']
    murm = ''.join(f'''<li><button class="voice" type="button" data-clip="/audio/{L['lang']}/fr_{k}.mp3" aria-pressed="false"><span class="who">{esc(frs[k]['who'])}</span><span class="tt">{esc(frs[k]['title'])}</span><span class="tx">{esc(frs[k]['text'])}</span><span class="pl" data-a="{esc(L['murm_play'])}" data-b="{esc(L['murm_stop'])}">{L['murm_play']}</span></button></li>''' for k in MURM)
    summ = ''.join(f'<p>{x}</p>' for x in L['summary'])
    spoil = ''.join(f'<p>{x}</p>' for x in L['spoiler'])
    struct = ''.join(f'<p>{x}</p>' for x in L['structure'])
    themes = ''.join(f'<li><h4>{a}</h4><p>{b}</p></li>' for a, b in L['themes'])
    chars = ''.join(f'<li><h3>{a}</h3><p>{b}</p></li>' for a, b in L['chars'])
    comala = ''.join(f'<p>{x}</p>' for x in L['comala'])
    rulfo = ''.join(f'<p>{x}</p>' for x in L['rulfo'])
    tl = ''.join(f'<li><b>{a}</b><span>{b}</span></li>' for a, b in L['timeline'])
    adapt = ''.join(f'<li><span class="from">{a}</span><span class="to">{b}</span></li>' for a, b in L['adapt'])
    faq = ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q, a in L['faq'])
    gp = ''.join(f'<p>{x}</p>' for x in L['game_p'])
    quote = esc(L['quote'])
    return head(L) + f'''<body>
<a class="skip" href="#contenido">{L['skip']}</a>
<canvas id="fog" aria-hidden="true"></canvas>
<header class="bar">
<a class="brand" href="{L['path']}">Pedro Páramo</a>
<nav aria-label="{L['navlabel']}"><ul>{nav}</ul></nav>
<div class="tools">
<button id="snd" class="icon" type="button" aria-pressed="false" data-on="{esc(L['sound_on'])}" data-off="{esc(L['sound_off'])}" aria-label="{esc(L['sound_on'])}" title="{esc(L['sound_on'])}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path class="w" d="M16 8.5c1.2 1 1.8 2.2 1.8 3.5s-.6 2.5-1.8 3.5M18.5 6c2 1.6 3 3.6 3 6s-1 4.4-3 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
<div class="langs" role="group" aria-label="{L['langlabel']}">{langs}</div>
<a class="btn sm" href="{p}">{L['playbtn']}</a>
</div>
</header>
<main id="contenido">
<section class="hero" id="inicio">
<div class="hero-bg" aria-hidden="true"><img src="/web/img/hero.webp" alt="" width="1600" height="1000" fetchpriority="high"></div>
<div class="hero-in">
<p class="eyebrow">{L['eyebrow']}</p>
<h1><span>Pedro</span> <span>Páramo</span></h1>
<blockquote class="quote"><p id="q" data-text="{quote}">{quote}</p><footer>{L['quote_cite']}</footer></blockquote>
<div class="ctas"><a class="btn big" href="{p}">{L['hero_cta']}</a><a class="btn ghost" href="#murmullos">{L['hero_cta2']}</a></div>
<ul class="chips">{chips}</ul>
<div class="mobile"><p>{L['mobile_note']}</p><button class="btn ghost" id="share" type="button" data-done="{esc(L['shared'])}">{L['share']}</button></div>
</div>
<a class="down" href="#juego" aria-label="{L['nav'][0][1]}"><span></span></a>
</section>
<section id="juego" class="sec">
<div class="wrap">
<h2>{L['game_h']}</h2>
<div class="cols"><div class="prose">{gp}</div><figure class="shot"><img src="/web/img/personajes.webp" alt="Juan Preciado, Abundio y las mujeres de Comala" width="960" height="600" loading="lazy" decoding="async"></figure></div>
<ul class="feats">{feats}</ul>
<h3 class="sub">{L['chapters_h']}</h3>
<ol class="chapters">{chs}</ol>
<p class="center"><a class="btn big" href="{p}">{L['hero_cta']}</a></p>
</div>
</section>
<section id="murmullos" class="sec night">
<div class="wrap">
<h2>{L['murm_h']}</h2>
<p class="lead">{L['murm_p']}</p>
<ul class="voices">{murm}</ul>
</div>
</section>
<section id="novela" class="sec">
<div class="wrap narrow">
<h2>{L['novel_h']}</h2>
<p class="lead">{L['novel_lead']}</p>
<h3>{L['summary_h']}</h3>
{summ}
<details class="spoil"><summary>{L['spoiler_h']}</summary>{spoil}</details>
<h3>{L['structure_h']}</h3>
{struct}
<h3>{L['themes_h']}</h3>
</div>
<div class="wrap"><ul class="themes">{themes}</ul></div>
</section>
<section id="personajes" class="sec">
<div class="wrap">
<h2>{L['chars_h']}</h2>
<ul class="chars">{chars}</ul>
</div>
</section>
<section id="comala" class="sec heat">
<div class="wrap cols">
<div class="prose"><h2>{L['comala_h']}</h2>{comala}</div>
<figure class="shot"><img src="/web/img/c01.webp" alt="{esc(L['chapters'][0][0])}" width="960" height="600" loading="lazy" decoding="async"></figure>
</div>
</section>
<section id="rulfo" class="sec">
<div class="wrap narrow">
<h2>{L['rulfo_h']}</h2>
{rulfo}
<ol class="timeline">{tl}</ol>
</div>
</section>
<section id="adaptacion" class="sec night">
<div class="wrap narrow">
<h2>{L['adapt_h']}</h2>
<p class="lead">{L['adapt_p']}</p>
<ul class="adapt">{adapt}</ul>
</div>
</section>
<section id="preguntas" class="sec">
<div class="wrap narrow">
<h2>{L['faq_h']}</h2>
<div class="faq">{faq}</div>
</div>
</section>
<section class="final">
<div class="wrap narrow center">
<p class="big-quote">{quote}</p>
<h2>{L['final_h']}</h2>
<p>{L['final_p']}</p>
<p><a class="btn big" href="{p}">{L['hero_cta']}</a></p>
</div>
</section>
</main>
<footer class="foot">
<div class="wrap">
<p>{L['credits']}</p>
<p class="links"><a href="https://github.com/yeagob/pedro-paramo">{L['repo']}</a> · {langs} · <a href="#inicio">{L['top']}</a></p>
</div>
</footer>
<script src="/web/web.js" defer></script>
</body>
</html>
'''


for L in LANGS:
    d = os.path.join(ROOT, L['path'].strip('/'))
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'index.html'), 'w').write(page(L))

urls = [x['path'] for x in LANGS]
alt = ''.join(f'<xhtml:link rel="alternate" hreflang="{x["lang"]}" href="{U}{x["path"]}"/>' for x in LANGS) + f'<xhtml:link rel="alternate" hreflang="x-default" href="{U}/"/>'
sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
sm += ''.join(f'<url><loc>{U}{u}</loc><lastmod>{DATE}</lastmod>{alt}</url>\n' for u in urls)
sm += f'<url><loc>{U}/jugar</loc><lastmod>{DATE}</lastmod></url>\n</urlset>\n'
open(os.path.join(ROOT, 'sitemap.xml'), 'w').write(sm)
print('ok')
