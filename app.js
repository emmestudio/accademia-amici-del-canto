const NEWS_API='https://portale.accademiamicidelcanto.com/api/public/news';let publicNewsRequest;
// Inserire qui il link pubblico del Google Form quando disponibile.
const GOOGLE_FORM_URL='';
const PORTAL_URL='https://portale.accademiamicidelcanto.com/';
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
  ],
  [
    "Teoria musicale",
    "Gruppo · 1 ora a settimana",
    "Comprendi il linguaggio della musica e applicalo a ciò che canti o suoni. In gruppo, approfondisci ritmo, lettura delle note, scale, intervalli e accordi attraverso esercizi di ascolto e attività pratiche. Un percorso per sviluppare consapevolezza musicale e collegare la teoria alla pratica vocale e strumentale."
  ]
];
const courseDescriptions=[[["Il corso Canto Base è un percorso individuale dedicato a chi vuole conoscere la propria voce e imparare a utilizzarla con maggiore sicurezza. Dai 6 anni, accompagna anche chi parte da zero con attività adeguate all’età, all’esperienza e agli obiettivi dell’allievo.","Il lavoro parte dall’ascolto e dalla consapevolezza del corpo: respirazione, emissione, intonazione e coordinazione vocale vengono affrontate attraverso esercizi progressivi e applicate a canzoni scelte insieme al docente. La tecnica diventa così uno strumento per cantare con più controllo e comprendere ciò che accade durante l’esecuzione.","Una parte del percorso è dedicata all’uso del microfono, alla gestione delle dinamiche e alle prime esperienze di interpretazione. L’allievo impara a preparare un brano, ascoltare i propri progressi e affrontare gradualmente l’esecuzione davanti agli altri."],"Costruire basi vocali solide e un metodo di studio, sviluppando fiducia, musicalità e autonomia nella preparazione dei brani."],[["Canto Pro è il percorso individuale avanzato per chi desidera approfondire le proprie competenze vocali e dare maggiore personalità alle proprie esecuzioni. Il programma viene definito a partire dal livello dell’allievo e dalle esigenze del suo repertorio.","La tecnica vocale viene affrontata in relazione alle richieste dei brani: gestione delle dinamiche, fraseggio, articolazione e controllo dell’emissione si collegano allo studio dell’interpretazione. Si lavora sul significato del testo, sulle intenzioni espressive e sulle scelte musicali che rendono un’esecuzione coerente.","Il percorso comprende presenza scenica, gestione del microfono e costruzione del repertorio. Il confronto con il docente aiuta a riconoscere i propri punti di forza, esplorare diversi linguaggi e sviluppare uno stile personale, senza perdere attenzione alla precisione e alla consapevolezza tecnica."],"Consolidare la tecnica avanzata e sviluppare un’identità musicale, preparando interpretazioni curate e una presenza scenica più consapevole."],[["Canto⁺ unisce il lavoro individuale sulla voce a una formazione musicale più ampia. La lezione di canto di un’ora a settimana viene affiancata da due incontri mensili di teoria musicale in gruppo con Valerio Ruvolo.","Il percorso vocale comprende gli aspetti tecnici e interpretativi dei livelli precedenti, sviluppati secondo le competenze dell’allievo. Repertorio, espressione e presenza scenica si collegano alla comprensione della struttura musicale dei brani.","Negli incontri di teoria si affrontano ritmo, notazione, lettura e fondamenti dell’armonia. Esercizi e attività di ascolto aiutano a mettere in relazione ciò che si canta con ciò che accade nell’accompagnamento, facilitando il dialogo con strumentisti e altri cantanti."],"Integrare competenze vocali e conoscenze musicali per studiare il repertorio con maggiore autonomia e partecipare in modo consapevole alla musica di gruppo."],[["Il corso individuale di Batteria è aperto dai 5 anni e accompagna l’allievo dalle prime esperienze sullo strumento allo sviluppo di un linguaggio ritmico personale. Le lezioni durano un’ora, una volta a settimana, con un programma adeguato all’età e al livello di partenza.","Si lavora su postura, impugnatura, controllo del movimento e rudimenti, costruendo progressivamente la coordinazione tra mani e piedi. Lettura ritmica, senso del tempo e indipendenza degli arti vengono sviluppati con esercizi applicati a groove e accompagnamenti.","Lo studio del repertorio permette di comprendere il ruolo della batteria nei diversi generi: sostenere il brano, valorizzarne le dinamiche e dialogare con gli altri strumenti. Si affrontano la costruzione dei fill, i cambi di sezione e la continuità dell’esecuzione, collegando sempre precisione tecnica e intenzione musicale."],"Sviluppare coordinazione, stabilità ritmica e capacità di accompagnamento, imparando a sostenere una canzone e a suonare con altri musicisti."],[["Il corso di Chitarra propone lezioni individuali di un’ora a settimana, dai 5 anni, con percorsi dedicati alla chitarra acustica ed elettrica. Il programma tiene conto dell’esperienza, degli interessi musicali e degli obiettivi dell’allievo.","Dalle prime impostazioni delle mani si passa allo studio di accordi, ritmiche, arpeggi e melodie. Scale e conoscenze musicali vengono collegate al repertorio, mentre il lavoro sul suono e sulle dinamiche aiuta a comprendere le diverse possibilità espressive dello strumento.","Per chi ha già acquisito le basi, il percorso può approfondire tecnica, improvvisazione e interpretazione, costruendo un metodo per affrontare brani di difficoltà crescente. È prevista anche la preparazione alle prove di ammissione in conservatorio: il lavoro viene organizzato in base al programma e ai requisiti dell’istituto scelto, senza garantire l’esito dell’ammissione."],"Acquisire un metodo di studio e competenze tecniche e musicali utili per accompagnare, interpretare il repertorio e sviluppare il proprio linguaggio sulla chitarra."],[["Il Basso è il punto d’incontro tra ritmo e armonia. Il corso individuale, dai 5 anni, propone una lezione di un’ora a settimana e un percorso progressivo per chi parte dalle basi o desidera approfondire il proprio modo di suonare.","Si studiano impostazione delle mani, articolazione, controllo del suono e precisione ritmica. Scale, intervalli e arpeggi vengono applicati alla costruzione delle linee di basso, per comprendere il rapporto tra le note suonate e gli accordi del brano.","Il repertorio aiuta a esplorare diversi approcci all’accompagnamento e a sviluppare il groove. Particolare attenzione è dedicata al dialogo con la batteria, alle dinamiche e alla scelta di parti efficaci: imparare quando sostenere, quando lasciare spazio e come contribuire all’equilibrio dell’insieme."],"Costruire linee di basso musicali e precise, comprendere il proprio ruolo nell’arrangiamento e acquisire sicurezza nel suonare insieme agli altri."],[["Il corso di Pianoforte accompagna l’allievo dai primi contatti con la tastiera allo sviluppo di una maggiore autonomia musicale. Le lezioni sono individuali, aperte dai 5 anni, e durano un’ora a settimana.","La postura, la coordinazione delle mani e il controllo del tocco vengono affrontati attraverso esercizi progressivi e brani adeguati al livello. Lo studio della lettura permette di orientarsi nello spartito e collegare segni, ritmo e suono, senza separare la tecnica dall’ascolto.","Il percorso esplora repertorio e accompagnamento, lavorando su fraseggio, dinamiche ed espressione. La preparazione dei brani aiuta a organizzare lo studio, affrontare i passaggi più complessi e comprendere come le diverse parti si combinano in una forma musicale."],"Sviluppare coordinazione, lettura e sensibilità interpretativa, imparando a preparare ed eseguire brani con crescente autonomia."],[["Little Voice è il corso di canto di gruppo per bambini dai 3 ai 6 anni. In un incontro settimanale di un’ora, la musica viene scoperta attraverso il gioco, il movimento e la partecipazione condivisa.","Canzoni, semplici attività ritmiche ed esercizi di ascolto permettono di esplorare la voce e riconoscere le differenze tra suoni, intensità e durate. Le proposte sono adattate all’età dei bambini e favoriscono curiosità, espressione e familiarità con l’esperienza musicale.","Cantare insieme significa anche imparare ad ascoltare, aspettare il proprio turno e partecipare al gruppo. Il percorso prepara gradualmente a un eventuale corso individuale, rispettando i tempi di ciascun bambino e mantenendo centrale il piacere di fare musica."],"Favorire un primo rapporto positivo con il canto, sviluppando ascolto, senso del ritmo e fiducia nella partecipazione."],[["Vocal Group è un percorso di canto a più voci, organizzato in gruppi adeguati all’età e all’esperienza dei partecipanti. Le lezioni durano un’ora a settimana e permettono di affiancare il lavoro sulla propria voce all’ascolto degli altri.","Si affrontano tecnica vocale di base, intonazione e gestione delle dinamiche, applicandole a un repertorio condiviso. Armonizzazioni e polifonia vengono introdotte progressivamente, imparando a mantenere la propria parte mentre si ascoltano linee vocali differenti.","Il lavoro riguarda anche precisione degli attacchi, pronuncia, fraseggio ed equilibrio tra le voci. Ogni partecipante contribuisce all’interpretazione collettiva, sviluppando attenzione, collaborazione e capacità di adattare la propria esecuzione al suono del gruppo."],"Imparare a cantare a più parti, mantenendo autonomia nella propria linea vocale e contribuendo a un insieme equilibrato."],[["Chorus è il corso di canto corale per gruppi di almeno dieci partecipanti. Un’ora di lavoro a settimana è dedicata alla costruzione di un suono collettivo, attraverso tecnica vocale, polifonia e studio del repertorio.","Il percorso sviluppa intonazione, respirazione, articolazione e ascolto delle diverse sezioni. Si impara a seguire la direzione, coordinare gli ingressi e curare le conclusioni delle frasi, ricercando coesione nelle dinamiche e nell’espressione.","Lo studio delle parti viene collegato all’interpretazione del brano nel suo insieme. Il repertorio offre occasioni per comprendere il rapporto tra le voci e affinare la capacità di sostenere la propria sezione senza perdere il riferimento al coro."],"Partecipare con consapevolezza a un coro polifonico, sviluppando precisione, ascolto e capacità di interpretazione condivisa."],[["Musica d’insieme è il laboratorio di gruppo in cui cantanti e strumentisti imparano a costruire una performance come una band. Il corso prevede un’ora a settimana ed è seguito da Rino Giglio, Marcello Lachina, Valerio Ruvolo e Martina Giordano.","Il lavoro parte da un repertorio condiviso e dalla definizione delle parti: accompagnamenti, linee melodiche, sezioni ritmiche e voci vengono organizzati in arrangiamenti adatti alla formazione. Le prove sviluppano precisione, ascolto reciproco e consapevolezza del ruolo di ciascun musicista.","Si affrontano dinamiche, ingressi, stacchi e passaggi tra le sezioni, imparando a comunicare musicalmente e a rendere il gruppo più coeso. La preparazione dell’esecuzione dal vivo aiuta a dare continuità al repertorio e a trasformare competenze individuali in un risultato condiviso."],"Formare e far crescere una band, organizzando il repertorio e le prove per suonare e cantare insieme con maggiore coesione."],[["Home Recording è il corso di gruppo dedicato a chi vuole comprendere come registrare e sviluppare le proprie idee musicali. Con Marcello Lachina, in una lezione di un’ora a settimana, si affrontano le basi del lavoro in una postazione di registrazione.","Si parte dagli strumenti essenziali: software audio, scheda audio, microfoni e gestione del segnale. Il percorso introduce l’organizzazione delle sessioni, la scelta e il posizionamento dei microfoni e il controllo dei livelli, per comprendere come le decisioni in fase di ripresa influenzano il risultato.","Le attività pratiche accompagnano dalle prime registrazioni all’editing e ai fondamenti di mix e mastering. Si esplorano bilanciamento, equalizzazione, dinamiche e gestione dello spazio, imparando ad ascoltare in modo critico e a riconoscere le priorità di una produzione."],"Acquisire le basi per organizzare una sessione e realizzare registrazioni più curate, comprendendo le principali fasi di una produzione musicale."],[["Teoria musicale è il corso di gruppo con Valerio Ruvolo per comprendere il linguaggio che accomuna canto e strumenti. La lezione di un’ora a settimana collega le conoscenze teoriche alla pratica musicale.","Si affrontano ritmo, notazione, lettura delle note, scale, intervalli e costruzione degli accordi. Gli argomenti vengono sviluppati in modo progressivo e accompagnati da esempi ed esercizi, per riconoscere nelle canzoni le relazioni studiate.","Le attività di ascolto ed ear training aiutano a mettere in relazione ciò che si legge con ciò che si sente. Il confronto in gruppo permette di chiarire dubbi e applicare i concetti a esperienze vocali e strumentali, costruendo una base utile per lo studio del repertorio."],"Leggere e comprendere con maggiore sicurezza gli elementi della musica, applicando teoria e ascolto allo studio del proprio strumento o della voce."]];
const teachers=[['Martina Giordano','Canto individuale e di gruppo · Musica d’insieme'],['Rino Giglio','Batteria · Musica d’insieme'],['Marcello Lachina','Chitarra · Home Recording · Musica d’insieme'],['Valerio Ruvolo','Basso · Teoria musicale · Musica d’insieme'],['Marcello Giordano','Pianoforte']];
const teacherProfiles=[
 {slug:'martina-giordano',name:'Martina Giordano'},
 {slug:'rino-giglio',name:'Rino Giglio'},
 {slug:'marcello-lachina',name:'Marcello Lachina',bio:[
 'Marcello Lachina è chitarrista e produttore musicale. Da oltre dieci anni affianca all’attività in studio di registrazione le produzioni live e l’insegnamento. Collabora con artisti e progetti di diversi generi musicali, curando produzione artistica, recording, mixing e arrangiamento.',
 'Nel corso del suo percorso ha accompagnato diversi artisti nello sviluppo di brani inediti, lavorando sia dal vivo sia in studio e contribuendo alla costruzione dell’identità sonora dei loro progetti.',
 'Si dedica alla scrittura, alla produzione e alla finalizzazione di opere originali, affiancando musicisti e cantautori lungo l’intero processo di realizzazione: dalla pre-produzione fino alla pubblicazione finale.',
 'Nel 2023 ha preso parte al Sanremo Live Box durante il Festival di Sanremo, collaborando ad attività di produzione artistica, recording e live performance.',
 'La sua formazione comprende lo studio della Chitarra Classica presso il Conservatorio di Caltanissetta e della Chitarra Pop/Rock presso il Conservatorio “A. Scontrino” di Trapani.'
 ]},
 {slug:'valerio-ruvolo',name:'Valerio Ruvolo'},
 {slug:'marcello-giordano',name:'Marcello Giordano'}
];
function teacherPage(i){
 const teacher=teacherProfiles[i],ids=courseInfo.map((d,index)=>d[1].includes(teacher.name)?index:-1).filter(index=>index>=0);
 return intro('Insegnanti',teacher.name,teachers.find(([name])=>name===teacher.name)[1])+`<section class="section"><a class="back-link" href="#insegnanti">Tutti gli insegnanti</a><div class="teacher-profile"><div>${teacherPortrait(teacher.name)}</div><div><h2>Biografia</h2>${teacher.bio?teacher.bio.map(text=>'<p>'+text+'</p>').join(''):'<p>La biografia del docente sarà disponibile prossimamente.</p>'}</div></div><h2 class="course-subheading">I corsi di ${teacher.name}</h2>${courseCollection(ids)}</section>`;
}
const teacherPhotos={'Martina Giordano':'images/teachers/martina-giordano.jpg','Marcello Lachina':'images/teachers/marcello-lachina.jpg','Valerio Ruvolo':'images/teachers/valerio-ruvolo.webp','Rino Giglio':'images/teachers/rino-giglio.jpg','Marcello Giordano':'images/teachers/marcello-giordano.jpg'};
function teacherPortrait(name,extraClass=''){
 const teacher=name.split(' · ')[0],src=teacherPhotos[teacher];
 if(!src)return '';
 const photo=`<img class="teacher-portrait ${extraClass} ${teacher==='Marcello Lachina'?'teacher-portrait-lachina':teacher==='Valerio Ruvolo'?'teacher-portrait-valerio':teacher==='Rino Giglio'?'teacher-portrait-rino':teacher==='Marcello Giordano'?'teacher-portrait-giordano':''}" src="${src}" alt="${teacher} · ${teachers.find(([name])=>name===teacher)?.[1]||'Docente dell’accademia'}" loading="lazy" width="1336" height="1336">`;
 return extraClass==='teacher-portrait-course'?`<span class="teacher-course-avatar">${photo}</span>`:photo;
}
function courseTeachers(label){
 return '<div class="course-teachers">'+label.split(' · ').map(part=>{
  const name=part.split(' (')[0].trim();
  return '<div class="course-teacher">'+teacherPortrait(name,'teacher-portrait-course')+'<span>'+part+'</span></div>';
 }).join('')+'</div>';
}
const photos=['foto 1.jpeg','goto 2.jpeg',...Array.from({length:13},(_,i)=>`foto ${i+3}.jpeg`),'innaugurazione foto.jpeg'];
const story='Dal 2010, a Caltanissetta, accompagniamo bambini, ragazzi e adulti nella crescita musicale. Puoi partire dalle prime note, approfondire ciò che già conosci e sviluppare il tuo modo di cantare o suonare.';
const storyMore='Ogni allievo porta con sé interessi, esperienza e obiettivi diversi. Le lezioni individuali permettono di lavorare sulle proprie competenze; i corsi di gruppo offrono uno spazio per ascoltare, collaborare e mettere in pratica ciò che si studia. Canto, strumenti e laboratori si incontrano nella vita dell’accademia.';
const storyLast='La formazione prosegue attraverso spettacoli, esibizioni, casting, masterclass e incontri con professionisti del panorama musicale nazionale. Sono occasioni per confrontarsi, approfondire e acquisire sicurezza. Con docenti qualificati, offriamo anche preparazione alle prove di ammissione nei conservatori italiani. Da sedici anni aiutiamo gli allievi a dare continuità alla propria passione e forma alla propria identità artistica.';
const intro=(k,title,text='')=>`<div class="intro"><span class="eyebrow">Accademia Amici del Canto / ${k}</span><h1>${title}</h1>${text?`<p>${text}</p>`:''}</div>`;
const cta=()=>`<a class="button" href="${GOOGLE_FORM_URL||'#contatti'}" ${GOOGLE_FORM_URL?'target="_blank" rel="noopener"':''}>Contattaci per informazioni</a>`;
function cards(list,start=0){return `<div class="grid">${list.map((c,i)=>`<article class="card"><span class="number">${String(i+1+start).padStart(2,'0')}</span><h3>${c[0]}</h3><p class="meta">${c[1]}</p><p>${c[2]}</p>${cta()}</article>`).join('')}</div>`;}

const courseInfo=[["canto-base","Martina Giordano","Dai 6 anni","Individuale",["Respirazione ed emissione vocale","Intonazione e controllo della voce","Microfono e prime interpretazioni"],"Le prime basi per conoscere e utilizzare la tua voce.","home-canto"],["canto-pro","Martina Giordano",null,"Individuale",["Tecnica vocale avanzata e dinamiche","Interpretazione e scelta del repertorio","Presenza scenica, stile e identità musicale"],"Tecnica avanzata e interpretazione per dare carattere al tuo canto.","home-canto"],["canto-plus","Martina Giordano · Valerio Ruvolo (teoria musicale)",null,"Individuale + teoria di gruppo",["Tecnica vocale e interpretazione","Ritmo e lettura musicale","Fondamenti dell’armonia e ascolto"],"Il percorso vocale si arricchisce di teoria musicale condivisa.","home-canto"],["batteria","Rino Giglio","Dai 5 anni","Individuale",["Postura, impugnatura e rudimenti","Lettura ritmica e indipendenza degli arti","Groove e accompagnamento su repertorio"],"Coordinazione, tecnica e groove per costruire il tuo ritmo.","course-batteria"],["chitarra","Marcello Lachina","Dai 5 anni","Individuale",["Tecnica, accordi, ritmica e arpeggi","Scale, repertorio e improvvisazione","Preparazione alle ammissioni in conservatorio"],"Chitarra acustica ed elettrica, dalle basi al tuo linguaggio musicale.","course-chitarra"],["basso","Valerio Ruvolo","Dai 5 anni","Individuale",["Impostazione delle mani, scale e arpeggi","Costruzione delle linee di basso","Groove e interazione con la batteria"],"Precisione e ascolto per dare solidità e movimento alla musica.","course-basso"],["pianoforte","Marcello Giordano","Dai 5 anni","Individuale",["Postura e coordinazione delle mani","Lettura dello spartito e tecnica","Repertorio, accompagnamento ed espressione"],"Dalle prime note alla sensibilità interpretativa sulla tastiera.","course-pianoforte"],["little-voice","Martina Giordano","Dai 3 ai 6 anni","Gruppo",["Esplorazione della voce attraverso il gioco","Canzoni, movimento e ritmo","Ascolto e partecipazione nel gruppo"],"Gioco, canto e ritmo per i primi incontri con la musica.","course-little-voice"],["vocal-group","Martina Giordano","Tutte le età, con gruppi adeguati ai partecipanti","Gruppo",["Tecnica vocale di base e intonazione","Armonizzazioni e polifonia","Ascolto reciproco e interpretazione collettiva"],"Voci che si incontrano: armonia, ascolto e canto a più parti.","course-vocal-group"],["chorus","Martina Giordano",null,"Gruppo · Minimo 10 partecipanti",["Tecnica vocale e intonazione corale","Polifonia ed equilibrio delle sezioni","Repertorio e interpretazione sotto la direzione"],"Un coro, tante voci: costruisci un suono condiviso.","course-chorus"],["musica-insieme","Rino Giglio · Marcello Lachina · Valerio Ruvolo · Martina Giordano",null,"Gruppo vocale e strumentale",["Repertorio e arrangiamenti per band","Precisione ritmica e interazione musicale","Organizzazione delle prove e preparazione live"],"Forma una band e impara a suonare insieme agli altri.","course-musica-insieme"],["home-recording","Marcello Lachina",null,"Gruppo",["Software, schede audio e organizzazione delle sessioni","Scelta dei microfoni, posizionamento e livelli","Editing e fondamenti di mix e mastering"],"Registra le tue idee e scopri le basi della produzione musicale.","home-laboratori"],["teoria-musicale","Valerio Ruvolo",null,"Gruppo",["Ritmo, notazione e lettura musicale","Scale, intervalli e costruzione degli accordi","Ascolto, ear training e applicazioni pratiche"],"Il linguaggio della musica, da comprendere e mettere in pratica insieme.","home-laboratori"]];

function courseTile(i){const c=courses[i],d=courseInfo[i];return `<a class="course-tile" href="#corso-${d[0]}"><img data-image="${d[6]}" alt="${c[0]}" loading="lazy"><div class="course-tile-copy"><span class="eyebrow">${d[3]}</span><h4>${c[0]}</h4><p>${d[5]}</p><span class="course-link">Scopri il corso</span></div></a>`;}
function courseCollection(ids){return '<div class="course-grid">'+ids.map(courseTile).join('')+'</div>';}
function coursePage(i){
 const c=courses[i],d=courseInfo[i];
 const age=d[2]||(i===1?'Percorso avanzato: livello da concordare con il docente':'Contattaci per informazioni sui requisiti di accesso');
 return intro('Corsi',c[0],d[5])+`<section class="section"><a class="back-link" href="#corsi">Tutti i corsi</a><div class="course-detail"><div><img class="course-detail-image" data-image="${d[6]}" alt="${c[0]}"><h2>Il percorso</h2>${courseDescriptions[i][0].map(text=>'<p>'+text+'</p>').join('')}<h3>Gli obiettivi del percorso</h3><p>${courseDescriptions[i][1]}</p><h3>Cosa studierai</h3><ul class="course-topics">${d[4].map(t=>'<li>'+t+'</li>').join('')}</ul></div><aside class="course-facts"><h3>Il corso in pratica</h3><dl><dt>Modalità</dt><dd>${d[3]}</dd><dt>Età e accesso</dt><dd>${age}</dd><dt>Durata della lezione</dt><dd>1 ora</dd><dt>Frequenza</dt><dd>Una lezione a settimana</dd><dt>Periodo di attività</dt><dd>Da settembre a luglio</dd><dt>Docente</dt><dd>${courseTeachers(d[1])}</dd>${i===2?'<dt>Teoria musicale</dt><dd>Due incontri di gruppo al mese con Valerio Ruvolo, in aggiunta alla lezione individuale settimanale</dd>':''}</dl><h4>Informazioni e iscrizioni</h4><p>Contattaci per informazioni su costi, disponibilità e modalità di iscrizione.</p><h4>Prova gratuita</h4><p>Raccontaci i tuoi obiettivi e concorda una prova gratuita con la scuola.</p>${cta()}</aside></div></section>`;
}

function render(){let route=location.hash.slice(1)||'home';const courseIndex=courseInfo.findIndex(d=>route==='corso-'+d[0]);const teacherIndex=teacherProfiles.findIndex(t=>route==='docente-'+t.slug);const newsSlug=/^news\/[a-z0-9-]{1,100}$/.test(route)?route.slice(5):null;if(newsSlug||/^news\?page=\d+$/.test(route))route='news';if(!routes.some(r=>r[0]===route)&&courseIndex<0&&teacherIndex<0)route='home';document.getElementById('navigation').innerHTML=routes.map(([id,label])=>`<a href="${id==='portale'?PORTAL_URL:'#'+id}" ${(id===route||(id==='corsi'&&courseIndex>=0)||(id==='insegnanti'&&teacherIndex>=0))?'class="active" aria-current="page"':''}>${label}</a>`).join('');let html='';
if(route==='home')html=`<section class="hero"><img data-image="foto 14.jpeg" alt="Allievi dell’accademia sul palco"><div class="hero-copy"><span class="eyebrow">Caltanissetta · Dal 2010</span><h1>La tua passione.<br>La tua musica.</h1><p>Impara a cantare e suonare, crea legami e mettiti alla prova.<br>A Caltanissetta, la tua crescita musicale comincia qui.</p><a class="button" href="#corsi">Scopri i corsi</a> <a class="button secondary" href="#contatti">Richiedi una prova gratuita</a></div></section><section class="section"><span class="eyebrow">Il tuo percorso</span><h2>Scegli da dove<br>cominciare.</h2><div class="grid">${[['Canto','Conosci la tua voce, sviluppa il tuo stile e scopri il piacere di cantare insieme.'],['Strumenti','Chitarra, basso, batteria e pianoforte: costruisci le basi e dai espressione a ciò che suoni.'],['Laboratori','Forma una band, condividi il repertorio e scopri come registrare le tue idee.']].map(([t,p],i)=>`<a class="course-summary" href="#corsi"><img class="category-image" data-image="home-${['canto','strumenti','laboratori'][i]}" alt="${['Microfono da canto con luci dorate','Chitarra, basso, pianoforte e batteria','Postazione di produzione e registrazione musicale'][i]}" loading="lazy"><h3>${t}</h3><p>${p}</p><strong>Esplora i corsi</strong></a>`).join('')}</div></section><section class="dark"><div class="section split"><div><span class="eyebrow">La nostra storia</span><h2>Studia. Condividi.<br>Esprimiti.</h2><p>${story}</p><div class="stats"><div><strong>2010</strong>Anno di fondazione</div><div><strong>16</strong>Anni di formazione</div></div><a class="button" href="#storia">Conosci l’accademia</a></div><img data-image="foto 7.jpeg" alt="Allievi e docenti dopo uno spettacolo" loading="lazy"></div></section><section class="section"><span class="eyebrow">Inizia da qui</span><h2>Il primo passo?<br>Una prova gratuita.</h2><p>Raccontaci cosa ti piacerebbe imparare. Ti aiutiamo a scegliere il corso e a concordare una prova gratuita.</p>${cta()}</section>`;

if(route==='home')html+=schoolMap();
if(courseIndex>=0)html=coursePage(courseIndex);
if(teacherIndex>=0)html=teacherPage(teacherIndex);
if(route==='corsi')html=intro('Corsi','La tua musica, il tuo percorso.','Due aree per esplorare la tua passione: scegli la voce, uno strumento o un’esperienza di gruppo.')+`<section class="section course-area"><span class="eyebrow">01 / Voce</span><h2>Voce e canto</h2><p>Conosci la tua voce e sviluppa il tuo modo di esprimerti, con un percorso individuale o insieme ad altre voci.</p><h3 class="course-subheading">Canto individuale</h3><p>Tre livelli per approfondire tecnica, interpretazione e consapevolezza musicale.</p>${courseCollection([0,1,2])}<h3 class="course-subheading">Canto di gruppo</h3><p>Dal gioco musicale al canto a più voci: scegli l’esperienza adatta a te.</p>${courseCollection([7,8,9])}</section><section class="course-area-tinted"><div class="section course-area"><span class="eyebrow">02 / Strumenti</span><h2>Strumenti e produzione musicale</h2><p>Costruisci le tue competenze sullo strumento, condividi la musica con una band e impara a registrare le tue idee.</p><h3 class="course-subheading">Corsi strumentali individuali</h3>${courseCollection([4,5,3,6])}<h3 class="course-subheading">Laboratori di gruppo</h3>${courseCollection([10,11,12])}</div></section>`;
if(route==='insegnanti')html=intro('Insegnanti','Chi ti accompagna nella crescita.')+`<section class="section"><div class="grid">${teachers.map(([n,s])=>`<a class="card teacher-card teacher-card-link" href="#docente-${teacherProfiles.find(t=>t.name===n).slug}">${teacherPortrait(n)}<h3>${n}</h3><p class="meta">${s}</p><span class="course-link">Biografia e corsi →</span></a>`).join('')}</div></section>`;
if(route==='news')html=intro('News',newsSlug?'La vita dell’accademia.':'News & eventi.')+`<section class="section public-news-section" aria-label="Notizie"><div id="public-news" aria-live="polite"><p>Caricamento delle notizie…</p></div></section>`;
if(route==='storia')html=intro('La nostra storia','Sedici anni di voci, musica e incontri.')+`<section class="section split"><div><p>${story}</p><p>${storyMore}</p><p>${storyLast}</p></div><img data-image="innaugurazione foto.jpeg" alt="Un momento dell’inaugurazione dell’accademia"></section>`;
if(route==='partnership')html=intro('Partnership','La creatività incontra nuove possibilità.')+`<section class="section"><div class="grid">${[['EMME STUDIO','LOGO 1.png','Produzione musicale e studio di registrazione.'],['SPAZIO VUOTO','LOGO 2.jpeg','Scuola di recitazione.'],['GROOVE IN ART','LOGO 3.jpeg','Strumenti musicali.']].map(([n,img,p])=>`<article class="card partner"><img data-image="${img}" alt="Logo ${n}"><h3>${n}</h3><p>${p}</p></article>`).join('')}</div></section>`;
if(route==='gallery')html=intro('Gallery','I momenti che ci uniscono.','Le emozioni degli spettacoli, gli incontri e la vita dell’accademia.')+`<section class="section"><div class="gallery-carousel" role="region" aria-roledescription="carosello" aria-label="Foto dell’accademia"><button class="gallery-arrow gallery-prev" aria-label="Fotografia precedente">❮</button><div class="gallery-track" tabindex="0" aria-label="Fotografie: usa le frecce per scorrere">${photos.map((p,i)=>`<button class="gallery-slide" data-photo="${i}" aria-label="Apri fotografia ${i+1} a schermo intero"><img data-image="${p}" alt="${p.includes('innaugurazione')?'Inaugurazione dell’accademia':'Un momento degli spettacoli dell’accademia'}" loading="${i===0?'eager':'lazy'}"></button>`).join('')}</div><button class="gallery-arrow gallery-next" aria-label="Fotografia successiva">❯</button></div><p class="gallery-counter" aria-live="polite" aria-atomic="true">1 / ${photos.length}</p></section>`;
if(route==='contatti')html=intro('Contatti','Cominciamo dalla tua passione.','Hai un corso in mente o vuoi capire da dove partire? Scrivici e concordiamo una prova gratuita.')+`<section class="section contact-grid"><div><h2>Ci trovi a Caltanissetta.</h2><p>Via Ruggero Settimo SNC<br>Caltanissetta, CL 93100</p><a class="button secondary" href="https://maps.app.goo.gl/jJHT9J7eJ5V5qmfk8" target="_blank" rel="noopener">Indicazioni su Google Maps</a><h3>Orari di apertura</h3><p>Lunedì – venerdì<br>9:00–13:00 · 15:00–20:00</p></div><div class="card"><h3>Informazioni e prova gratuita</h3>${GOOGLE_FORM_URL?cta():''}<p><a href="tel:+393898227001">+39 389 822 7001</a><br><a href="tel:+393881988602">+39 388 198 8602</a></p><a href="mailto:accademiaamicidelcanto@gmail.com">accademiaamicidelcanto@gmail.com</a><p><a href="https://wa.me/393898227001" target="_blank" rel="noopener">Scrivici su WhatsApp</a></p><hr><p><a href="https://www.instagram.com/accademia_amicidelcanto/" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.facebook.com/share/1DyVE8s6Sw/" target="_blank" rel="noopener">Facebook</a></p></div></section>`;
if(route==='contatti')html+=schoolMap();
if(route==='portale')html=intro('Accesso portale','Il tuo spazio in accademia.')+`<section class="section"><div class="notice"><h2>Accedi al portale</h2><p>Consulta lezioni, materiali didattici, comunicazioni e rette dal tuo account.</p><a class="button" href="${PORTAL_URL}">Accedi al portale</a></div></section>`;
if(location.hash==='#newsletter-confermata')html=intro('Newsletter','Grazie per la conferma.','Hai completato il passaggio di conferma su Brevo. Riceverai le prossime novità dell’Accademia via email.')+'<section class="section"><a class="button" href="#home">Torna alla home</a></section>';document.getElementById('content').innerHTML=html;setupPageMotion();document.querySelectorAll('[data-image]').forEach(el=>el.src=ASSETS[el.dataset.image]);document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>openPhoto(Number(b.dataset.photo))));document.title=(teacherIndex>=0?teacherProfiles[teacherIndex].name:courseIndex>=0?courses[courseIndex][0]:routes.find(r=>r[0]===route)[1])+' | Accademia Amici del Canto';document.getElementById('navigation').classList.remove('open');document.getElementById('menu').setAttribute('aria-expanded','false');window.scrollTo(0,0);if(route==='gallery')setupGalleryCarousel();if(route==='news')loadPublicNews(newsSlug);}
let currentPhoto=0;const dialog=document.getElementById('lightbox');function openPhoto(i){currentPhoto=(i+photos.length)%photos.length;dialog.querySelector('img').src=ASSETS[photos[currentPhoto]];dialog.querySelector('img').alt=`Fotografia ${currentPhoto+1} dell’accademia`;if(!dialog.open)dialog.showModal();}document.getElementById('close').onclick=()=>dialog.close();document.getElementById('previous').onclick=()=>openPhoto(currentPhoto-1);document.getElementById('next').onclick=()=>openPhoto(currentPhoto+1);dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')openPhoto(currentPhoto-1);if(e.key==='ArrowRight')openPhoto(currentPhoto+1)});document.getElementById('menu').onclick=()=>{const open=document.getElementById('navigation').classList.toggle('open');document.getElementById('menu').setAttribute('aria-expanded',String(open))};document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('hashchange',render);render();

/* Motion: progressive enhancement, with reduced-motion support. */
let navigationMotionTimer;
function setupPageMotion(){
 const main=document.getElementById('content');
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 main.getAnimations().forEach(animation=>animation.cancel());
 main.animate([{opacity:0,transform:'translateY(32px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)'});
 if(window.pageRevealObserver)window.pageRevealObserver.disconnect();
 if(!('IntersectionObserver' in window))return;
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target.classList.add('motion-visible');
  observer.unobserve(entry.target);
 });},{threshold:.06});
 window.pageRevealObserver=observer;
 main.querySelectorAll('.section,.intro,.course-tile,.card,.course-summary,.gallery button').forEach((element,index)=>{
  element.classList.add('motion-reveal');
  element.style.setProperty('--motion-delay',(element.matches('.course-tile,.card,.course-summary,.gallery button')?(index%3)*110:0)+'ms');
  observer.observe(element);
 });
}
document.addEventListener('click',event=>{
 const control=event.target.closest('a,button');
 if(!control)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!reduced&&control.matches('.button,.course-tile,.course-summary,.gallery button,nav a,#menu')){
  const rect=control.getBoundingClientRect(),ripple=document.createElement('span');
  ripple.className='click-ripple';ripple.setAttribute('aria-hidden','true');
  ripple.style.left=(event.detail?event.clientX-rect.left:rect.width/2)+'px';
  ripple.style.top=(event.detail?event.clientY-rect.top:rect.height/2)+'px';
  control.appendChild(ripple);
  setTimeout(()=>ripple.remove(),650);
 }
 const href=control.getAttribute('href');
 if(reduced||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||control.target==='_blank'||!href||!href.startsWith('#')||href==='#content'||href===location.hash)return;
 event.preventDefault();
 clearTimeout(navigationMotionTimer);
 const main=document.getElementById('content');
 main.getAnimations().forEach(animation=>animation.cancel());
 main.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-20px)'}],{duration:240,easing:'ease-in'});
 navigationMotionTimer=setTimeout(()=>{location.hash=href;},220);
});

function setupGalleryCarousel(){
 const track=document.querySelector('.gallery-track');
 if(!track)return;
 const slides=Array.from(track.querySelectorAll('.gallery-slide')),counter=document.querySelector('.gallery-counter');
 let current=0,frame;
 function nearest(){let index=0,distance=Infinity;slides.forEach((slide,i)=>{const d=Math.abs(slide.offsetLeft-track.scrollLeft);if(d<distance){distance=d;index=i;}});return index;}
 function move(step){current=(nearest()+step+slides.length)%slides.length;track.scrollTo({left:slides[current].offsetLeft,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
 document.querySelector('.gallery-prev').onclick=()=>move(-1);
 document.querySelector('.gallery-next').onclick=()=>move(1);
 track.addEventListener('scroll',()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{current=nearest();counter.textContent=(current+1)+' / '+slides.length;});},{passive:true});
 track.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1);}});
}

function schoolMap(){return `<section class="section school-location"><span class="eyebrow">Dove siamo</span><h2>Vieni a conoscerci.</h2><div class="school-map-layout"><div><p><strong>Accademia Amici del Canto</strong><br>Via Ruggero Settimo SNC<br>93100 Caltanissetta, CL</p><p>Lunedì–venerdì<br>9:00–13:00 · 15:00–20:00</p><a class="button" href="https://maps.app.goo.gl/jJHT9J7eJ5V5qmfk8" target="_blank" rel="noopener">Apri le indicazioni</a></div><iframe class="school-map" title="Google Maps: posizione dell’Accademia Amici del Canto" src="https://www.google.com/maps?q=37.486709,14.059331&z=17&output=embed" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div></section>`;}

/* Newsletter: native Brevo double opt-in; never store email in the browser. */
(function setupNewsletterPopup(){
 const popup=document.getElementById('newsletter-popup');
 if(!popup||typeof popup.showModal!=='function')return;
 const email=popup.querySelector('input'),key='academy-newsletter-seen-v1';
 let previousFocus;
 function open(){if(popup.open||document.querySelector('dialog[open]'))return;previousFocus=document.activeElement;popup.showModal();document.body.classList.add('newsletter-is-open');}
 function close(){popup.close();}
 popup.querySelector('.newsletter-close').addEventListener('click',close);
 popup.querySelector('.newsletter-later').addEventListener('click',close);
 popup.addEventListener('click',event=>{if(event.target!==popup)return;const r=popup.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();});
 popup.addEventListener('close',()=>{email.value='';document.body.classList.remove('newsletter-is-open');try{sessionStorage.setItem(key,'1');}catch{}if(previousFocus&&previousFocus.isConnected)previousFocus.focus();});
 document.getElementById('newsletter-open').addEventListener('click',open);
 const form=document.getElementById('newsletter-form'),submit=form.querySelector('[type="submit"]'),status=document.getElementById('newsletter-status');
 let sending=false;
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(sending||!form.reportValidity())return;
  sending=true;submit.disabled=true;submit.textContent='Invio in corso…';status.textContent='Stiamo preparando l’email di conferma.';
  try{
   const response=await fetch('https://portale.accademiamicidelcanto.com/api/public/newsletter',{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:email.value.trim(),consent:document.getElementById('newsletter-consent').checked,website:document.getElementById('newsletter-website').value}),signal:AbortSignal.timeout(25000)});
   const data=await response.json();
   if(!response.ok)throw Error(data.error||'Iscrizione non disponibile. Riprova più tardi.');
   status.textContent=data.message;form.reset();submit.textContent='Controlla la tua email';
  }catch(error){status.textContent=error.name==='TimeoutError'?'La richiesta sta impiegando più tempo del previsto. Controlla la posta prima di riprovare.':error.message||'Connessione non disponibile. Riprova più tardi.';submit.disabled=false;submit.textContent='Iscrivimi alla newsletter';}
  finally{sending=false;}
 });
 popup.addEventListener('close',()=>{form.reset();if(!sending){submit.disabled=false;submit.textContent='Iscrivimi alla newsletter';status.textContent='Riceverai un’email con un pulsante per confermare l’iscrizione.';}});

 let seen=false;try{seen=sessionStorage.getItem(key)==='1';}catch{}
 if(!seen&&location.hash!=='#newsletter-confermata')open();
})();

/* Published website news; draft content is never exposed by the public API. */

function newsEscape(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
function newsImage(url,title){try{const u=new URL(url);if(u.protocol!=='https:'||u.hostname!=='res.cloudinary.com')return '';return '<img src="'+newsEscape(u.href)+'" alt="'+newsEscape(title)+'" loading="lazy">';}catch{return '';}}
function newsDate(value){const date=new Date(value);return Number.isNaN(+date)?'':date.toLocaleDateString('it-IT',{day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Rome'});}
async function loadPublicNews(slug){
 const target=document.getElementById('public-news');if(!target)return;
 if(publicNewsRequest)publicNewsRequest.abort();const controller=new AbortController();publicNewsRequest=controller;
 const page=Math.max(1,Number((location.hash.match(/\?page=(\d+)$/)||[])[1]||1));
 try{
  const response=await fetch(NEWS_API+(slug?'/'+encodeURIComponent(slug):'?page='+page),{signal:controller.signal,credentials:'omit'});
  if(!response.ok){if(response.status===404&&slug){target.innerHTML='<h2>News non trovata</h2><p>La notizia potrebbe essere stata ritirata.</p><a class="button" href="#news">Torna alle news</a>';return;}throw Error('News unavailable');}
  const data=await response.json();if(!target.isConnected)return;
  if(slug){
   target.innerHTML='<article class="public-news-article"><a class="back-link" href="#news">← Tutte le news</a><p class="meta">'+newsEscape(newsDate(data.publishedAt))+'</p><h1>'+newsEscape(data.title)+'</h1><p class="public-news-lead">'+newsEscape(data.summary)+'</p>'+newsImage(data.coverUrl,data.title)+'<div class="public-news-body">'+newsEscape(data.body)+'</div></article>';
   document.title=String(data.title)+' | Accademia Amici del Canto';
  }else{
   if(!Array.isArray(data.items))throw Error('Invalid news response');
   target.innerHTML=data.items.length?'<div class="public-news-grid">'+data.items.filter(item=>/^[a-z0-9-]{1,100}$/.test(item.slug)).map(item=>'<a class="public-news-card" href="#news/'+newsEscape(item.slug)+'">'+newsImage(item.coverUrl,item.title)+'<div><p class="meta">'+newsEscape(newsDate(item.publishedAt))+'</p><h2>'+newsEscape(item.title)+'</h2><p>'+newsEscape(item.summary)+'</p><strong>Leggi la news →</strong></div></a>').join('')+'</div>':'<p>Non ci sono ancora news pubblicate. Torna a trovarci per scoprire le prossime novità dell’Accademia.</p>';
   if(data.pages>1)target.innerHTML+='<nav class="public-news-pages" aria-label="Pagine delle notizie">'+(page>1?'<a class="button secondary" href="#news?page='+(page-1)+'">← Precedenti</a>':'')+'<span>Pagina '+page+' di '+Number(data.pages)+'</span>'+(page<data.pages?'<a class="button secondary" href="#news?page='+(page+1)+'">Successive →</a>':'')+'</nav>';
  }
 }catch(error){if(error.name==='AbortError'||!target.isConnected)return;target.innerHTML='<p>Le notizie non sono disponibili in questo momento.</p><button class="button" id="news-retry" type="button">Riprova</button>';target.querySelector('#news-retry').onclick=()=>loadPublicNews(slug);}
}
