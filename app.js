// Inserire qui il link pubblico del Google Form quando disponibile.
const GOOGLE_FORM_URL='';
const routes=[['home','Home'],['corsi','Corsi'],['insegnanti','Insegnanti'],['news','News'],['storia','La nostra storia'],['partnership','Partnership'],['gallery','Gallery'],['contatti','Contatti'],['portale','Accesso portale']];
const courses=[
  [
    "Canto Base",
    "Dai 6 anni · Individuale · 1 ora a settimana",
    "Comincia dalla tua voce. Impara a respirare, intonare e cantare con maggiore controllo, anche se parti da zero. Esercizi e brani adatti alla tua età ti accompagnano nello studio della tecnica vocale di base, nell’uso del microfono e nelle prime esperienze di interpretazione."
  ],
  [
    "Canto Pro",
    "Percorso avanzato · Individuale · 1 ora a settimana",
    "Dai carattere a ciò che canti. Approfondisci la tecnica vocale, il fraseggio e le dinamiche, lavorando sull’interpretazione e sulla presenza scenica. La scelta del repertorio e la ricerca del tuo stile ti aiutano a esprimere una personalità artistica riconoscibile."
  ],
  [
    "Canto⁺",
    "Individuale · 1 ora a settimana + teoria di gruppo",
    "Canta con maggiore consapevolezza musicale. Il percorso individuale di canto si arricchisce di due incontri mensili di teoria musicale in gruppo: ritmo, lettura e fondamenti dell’armonia per capire ciò che esegui e collaborare con altri musicisti."
  ],
  [
    "Batteria",
    "Dai 5 anni · Individuale · 1 ora a settimana",
    "Costruisci il ritmo, dai energia alla musica. Dalle prime coordinazioni ai groove più articolati, sviluppa tecnica, lettura ritmica e indipendenza degli arti. Rudimenti e brani di diversi generi ti aiutano a trasformare gli esercizi in accompagnamenti precisi e musicali."
  ],
  [
    "Chitarra",
    "Dai 5 anni · Individuale · 1 ora a settimana",
    "Accordi, melodie e suono: esplora le possibilità della chitarra acustica ed elettrica. Lavora su tecnica, ritmica, arpeggi, repertorio e improvvisazione con un programma costruito sul tuo livello. Puoi prepararti anche alle prove di ammissione in conservatorio, seguendo i requisiti dell’istituto scelto."
  ],
  [
    "Basso",
    "Dai 5 anni · Individuale · 1 ora a settimana",
    "Scopri come una linea di basso può dare direzione a un brano. Sviluppa tecnica, senso del tempo e capacità di accompagnamento attraverso scale, arpeggi e repertorio. Impara a costruire il groove e a dialogare con la batteria e gli altri strumenti."
  ],
  [
    "Pianoforte",
    "Dai 5 anni · Individuale · 1 ora a settimana",
    "Porta le tue idee sulla tastiera. Dalle prime note alla lettura dello spartito, sviluppa coordinazione, tecnica ed espressione attraverso esercizi e brani adeguati al tuo livello. Esplora il repertorio pianistico e l’accompagnamento, imparando a dare forma musicale a ciò che suoni."
  ],
  [
    "Little Voice",
    "Dai 3 ai 6 anni · Gruppo · 1 ora a settimana",
    "La scoperta della musica comincia giocando. Canzoni, movimento e attività di ascolto aiutano i bambini a esplorare la voce, riconoscere il ritmo e partecipare con fiducia. Un primo percorso condiviso che prepara gradualmente a un eventuale corso individuale."
  ],
  [
    "Vocal Group",
    "Diverse fasce d’età · Gruppo · 1 ora a settimana",
    "Scopri cosa succede quando le voci si incontrano. Lavora su tecnica vocale di base, intonazione, armonizzazioni e polifonia, imparando ad ascoltare gli altri e a trovare il tuo spazio nel gruppo. Il repertorio viene scelto in base all’età e all’esperienza dei partecipanti."
  ],
  [
    "Chorus",
    "Minimo 10 partecipanti · Gruppo · 1 ora a settimana",
    "La tua voce contribuisce a un risultato collettivo. In un coro di almeno dieci partecipanti, approfondisci tecnica vocale, intonazione e repertorio polifonico. Impara a seguire la direzione, equilibrare le diverse sezioni e interpretare insieme ogni brano."
  ],
  [
    "Musica d’insieme",
    "Voci e strumenti · Gruppo · 1 ora a settimana",
    "Impara a costruire la musica con una band. Voci e strumenti lavorano su repertorio, arrangiamenti, precisione ritmica e ascolto reciproco. Le prove diventano un laboratorio per comprendere il proprio ruolo, coordinarsi con gli altri e preparare una performance dal vivo."
  ],
  [
    "Home Recording",
    "Gruppo · 1 ora a settimana",
    "Dalla prima registrazione a una produzione da ascoltare. Conosci software, schede audio e microfoni e impara a organizzare una sessione, scegliere la microfonazione e gestire i livelli. Esercitazioni pratiche ti introducono all’editing e alle basi di mix e mastering."
  ]
];
const teachers=[['Martina Giordano','Canto individuale e di gruppo'],['Rino Giglio','Batteria'],['Marcello Lachina','Chitarra · Home Recording'],['Valerio Ruvolo','Basso · Teoria musicale'],['Marcello Giordano','Pianoforte'],['Docente interno','Musica d’insieme']];
const photos=['foto 1.jpeg','goto 2.jpeg',...Array.from({length:13},(_,i)=>`foto ${i+3}.jpeg`),'innaugurazione foto.jpeg'];
const story='Dal 2010, a Caltanissetta, accompagniamo bambini, ragazzi e adulti nella crescita musicale. Puoi partire dalle prime note, approfondire ciò che già conosci e sviluppare il tuo modo di cantare o suonare.';
const storyMore='Ogni allievo porta con sé interessi, esperienza e obiettivi diversi. Le lezioni individuali permettono di lavorare sulle proprie competenze; i corsi di gruppo offrono uno spazio per ascoltare, collaborare e mettere in pratica ciò che si studia. Canto, strumenti e laboratori si incontrano nella vita dell’accademia.';
const storyLast='La formazione prosegue attraverso spettacoli, esibizioni, casting, masterclass e incontri con professionisti del panorama musicale nazionale. Sono occasioni per confrontarsi, approfondire e acquisire sicurezza. Con docenti qualificati, offriamo anche preparazione alle prove di ammissione nei conservatori italiani. Da sedici anni aiutiamo gli allievi a dare continuità alla propria passione e forma alla propria identità artistica.';
const intro=(k,title,text='')=>`<div class="intro"><span class="eyebrow">Accademia Amici del Canto / ${k}</span><h1>${title}</h1>${text?`<p>${text}</p>`:''}</div>`;
const cta=()=>`<a class="button" href="${GOOGLE_FORM_URL||'#contatti'}" ${GOOGLE_FORM_URL?'target="_blank" rel="noopener"':''}>Richiedi informazioni</a>`;
function cards(list,start=0){return `<div class="grid">${list.map((c,i)=>`<article class="card"><span class="number">${String(i+1+start).padStart(2,'0')}</span><h3>${c[0]}</h3><p class="meta">${c[1]}</p><p>${c[2]}</p>${cta()}</article>`).join('')}</div>`;}
function render(){let route=location.hash.slice(1)||'home';if(!routes.some(r=>r[0]===route))route='home';document.getElementById('navigation').innerHTML=routes.map(([id,label])=>`<a href="#${id}" ${id===route?'class="active" aria-current="page"':''}>${label}</a>`).join('');let html='';
if(route==='home')html=`<section class="hero"><img data-image="foto 14.jpeg" alt="Allievi dell’accademia sul palco"><div class="hero-copy"><span class="eyebrow">Caltanissetta · Dal 2010</span><h1>La tua passione.<br>La tua musica.</h1><p>Impara a cantare e suonare, crea legami e mettiti alla prova.<br>A Caltanissetta, la tua crescita musicale comincia qui.</p><a class="button" href="#corsi">Scopri i corsi</a> <a class="button secondary" href="#contatti">Richiedi una prova gratuita</a></div></section><section class="section"><span class="eyebrow">Il tuo percorso</span><h2>Scegli da dove<br>cominciare.</h2><div class="grid">${[['Canto','Conosci la tua voce, sviluppa il tuo stile e scopri il piacere di cantare insieme.'],['Strumenti','Chitarra, basso, batteria e pianoforte: costruisci le basi e dai espressione a ciò che suoni.'],['Laboratori','Forma una band, condividi il repertorio e scopri come registrare le tue idee.']].map(([t,p],i)=>`<a class="course-summary" href="#corsi"><img class="category-image" data-image="home-${['canto','strumenti','laboratori'][i]}" alt="${['Microfono da canto con luci dorate','Chitarra, basso, pianoforte e batteria','Postazione di produzione e registrazione musicale'][i]}" loading="lazy"><h3>${t}</h3><p>${p}</p><strong>Esplora i corsi</strong></a>`).join('')}</div></section><section class="dark"><div class="section split"><div><span class="eyebrow">La nostra storia</span><h2>Studia. Condividi.<br>Esprimiti.</h2><p>${story}</p><div class="stats"><div><strong>2010</strong>Anno di fondazione</div><div><strong>16</strong>Anni di formazione</div></div><a class="button" href="#storia">Conosci l’accademia</a></div><img data-image="foto 7.jpeg" alt="Allievi e docenti dopo uno spettacolo" loading="lazy"></div></section><section class="section"><span class="eyebrow">Inizia da qui</span><h2>Il primo passo?<br>Una prova gratuita.</h2><p>Raccontaci cosa ti piacerebbe imparare. Ti aiutiamo a scegliere il corso e a concordare una prova gratuita.</p>${cta()}</section>`;
if(route==='corsi')html=intro('Corsi','Dai una direzione alla tua passione.','Che tu stia iniziando o voglia approfondire, scegli un percorso di canto, strumento o gruppo e lavora sulle competenze che desideri sviluppare.')+`<section class="section"><span class="eyebrow">Canto e strumenti</span><h2>Corsi individuali</h2>${cards(courses.slice(0,7))}</section><section class="section"><span class="eyebrow">Imparare insieme</span><h2>Corsi di gruppo</h2>${cards(courses.slice(7),7)}</section>`;
if(route==='insegnanti')html=intro('Insegnanti','Chi ti accompagna nella crescita.')+`<section class="section"><div class="grid">${teachers.map(([n,s])=>`<article class="card"><h3>${n}</h3><p class="meta">${s}</p></article>`).join('')}</div></section>`;
if(route==='news')html=intro('News','News & eventi.')+`<section class="section" aria-label="Notizie"></section>`;
if(route==='storia')html=intro('La nostra storia','Sedici anni di voci, musica e incontri.')+`<section class="section split"><div><p>${story}</p><p>${storyMore}</p><p>${storyLast}</p></div><img data-image="innaugurazione foto.jpeg" alt="Un momento dell’inaugurazione dell’accademia"></section>`;
if(route==='partnership')html=intro('Partnership','La creatività incontra nuove possibilità.')+`<section class="section"><div class="grid">${[['EMME STUDIO','LOGO 1.png','Produzione musicale e studio di registrazione.'],['SPAZIO VUOTO','LOGO 2.jpeg','Scuola di recitazione.'],['GROOVE IN ART','LOGO 3.jpeg','Strumenti musicali.']].map(([n,img,p])=>`<article class="card partner"><img data-image="${img}" alt="Logo ${n}"><h3>${n}</h3><p>${p}</p></article>`).join('')}</div></section>`;
if(route==='gallery')html=intro('Gallery','I momenti che ci uniscono.','Le emozioni degli spettacoli, gli incontri e la vita dell’accademia.')+`<section class="section"><div class="gallery">${photos.map((p,i)=>`<button data-photo="${i}" aria-label="Apri fotografia ${i+1}"><img data-image="${p}" alt="${p.includes('innaugurazione')?'Inaugurazione dell’accademia':'Un momento degli spettacoli dell’accademia'}" loading="lazy"></button>`).join('')}</div></section>`;
if(route==='contatti')html=intro('Contatti','Cominciamo dalla tua passione.','Hai un corso in mente o vuoi capire da dove partire? Scrivici e concordiamo una prova gratuita.')+`<section class="section contact-grid"><div><h2>Ci trovi a Caltanissetta.</h2><p>Via Ruggero Settimo SNC<br>Caltanissetta, CL 93100</p><a class="button secondary" href="https://maps.app.goo.gl/jJHT9J7eJ5V5qmfk8" target="_blank" rel="noopener">Indicazioni su Google Maps</a><h3>Orari di apertura</h3><p>Lunedì – venerdì<br>9:00–13:00 · 15:00–20:00</p></div><div class="card"><h3>Informazioni e prova gratuita</h3>${GOOGLE_FORM_URL?cta():''}<p><a href="tel:+393898227001">+39 389 822 7001</a><br><a href="tel:+393881988602">+39 388 198 8602</a></p><a href="mailto:accademiaamicidelcanto@gmail.com">accademiaamicidelcanto@gmail.com</a><p><a href="https://wa.me/393898227001" target="_blank" rel="noopener">Scrivici su WhatsApp</a></p><hr><p><a href="https://www.instagram.com/accademia_amicidelcanto/" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.facebook.com/share/1DyVE8s6Sw/" target="_blank" rel="noopener">Facebook</a></p></div></section>`;
if(route==='portale')html=intro('Accesso portale','Il tuo spazio, prossimamente.')+`<section class="section"><div class="notice"><h2>Portale in arrivo</h2><p>L’accesso al portale dell’accademia sarà disponibile prossimamente.</p><a class="button" href="#contatti">Contatta l’accademia</a></div></section>`;
document.getElementById('content').innerHTML=html;document.querySelectorAll('[data-image]').forEach(el=>el.src=ASSETS[el.dataset.image]);document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>openPhoto(Number(b.dataset.photo))));document.title=routes.find(r=>r[0]===route)[1]+' | Accademia Amici del Canto';document.getElementById('navigation').classList.remove('open');document.getElementById('menu').setAttribute('aria-expanded','false');window.scrollTo(0,0);}
let currentPhoto=0;const dialog=document.getElementById('lightbox');function openPhoto(i){currentPhoto=(i+photos.length)%photos.length;dialog.querySelector('img').src=ASSETS[photos[currentPhoto]];dialog.querySelector('img').alt=`Fotografia ${currentPhoto+1} dell’accademia`;if(!dialog.open)dialog.showModal();}document.getElementById('close').onclick=()=>dialog.close();document.getElementById('previous').onclick=()=>openPhoto(currentPhoto-1);document.getElementById('next').onclick=()=>openPhoto(currentPhoto+1);dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')openPhoto(currentPhoto-1);if(e.key==='ArrowRight')openPhoto(currentPhoto+1)});document.getElementById('menu').onclick=()=>{const open=document.getElementById('navigation').classList.toggle('open');document.getElementById('menu').setAttribute('aria-expanded',String(open))};document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('hashchange',render);render();
