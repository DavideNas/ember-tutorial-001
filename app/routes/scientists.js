import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model() {
        return ["Albert Einstein","Galileo Galilei","Isaac Newton","Leonardo da Vinci","Charles Darwin","Nicolò Copernico","Camillo Golgi","Enrico Fermi","Margherita Hack","Louis Pasteur"];
    }
    description(){
        return [`(Ulma, 14 marzo 1879 – Princeton, 18 aprile 1955)\n\n
        Quando si parla di scienziati famosi il pensiero corre veloce verso il viso di Albert Einstein con i capelli arruffati e la lingua di fuori; si tratta di un’immagine iconica che in qualche modo rivela la personalità eccentrica e geniale del fisico tedesco Premio Nobel per la fisica.\n\n
        A renderlo famoso è stata la teoria della relatività, un’equazione espressa dalla formula E = MC ².\n\nPer i non addetti ai lavori la formula dice che una massa (M) moltiplicata per la velocità della luce al quadrato (C²) produce energia di massa (E).`,
        `(Pisa, 15 febbraio 1964 – Arcetri, 8 gennaio 1642)\n\n
        Nato a Pisa nel 1564 Galileo Galilei è stato uno dei più grandi matematici, astronomi, fisici e scienziati italiani.\n\n
        Dalle sue scoperte scientifiche e astronomiche deriva lo sviluppo della fisica moderna.\n\n
        Tra le sue invenzioni numerosi strumenti tra le quali è d’obbligo citare il telescopio, con il quale è riuscito a contraddire la teoria di Aristotele, e la bilancia idrostatica.\n\n
        Tra le sue scoperte invece quelle del peso specifico, del moto dei corpi materiali e del principio di inerzia.`,
        `(Woolsthorpe Manor, 25 dicembre 1643 – Londra, 20 marzo 1727)\n\n
        Fisico, filosofo e inventore, Isaac Newton è conosciuto soprattutto per aver formulato la legge di gravitazione universale partendo dalla banale osservazione di una mela che cade da un albero in maniera perpendicolare al suolo.\n\n
        Attraverso l’applicazione delle scienze matematiche al movimento dei pianeti nel sistema solare Newton dimostra l’ipotesi di Cartesio relativa alle orbite ellittiche descritte dai pianeti intorno al sole.\n\n
        Tra le scoperte rimaste nella storia anche quella sulla natura della luce e dei colori.\nDa una serie di esperimenti condotti con i prismi, lo scienziato scompone la luce in diversi colori e dimostra che ognuno di essi è formato da differenti particelle che viaggiano a velocità diversa l’una dall’altra. Ne deriva la teoria secondo la quale i colori sono in realtà proprietà della luce stessa.`,
        `(Anchiano, 15 aprile 1452 – Amboise, 2 maggio 1519)\n\n
        Definirlo ‘semplicemente’ uno scienziato sarebbe riduttivo perché in realtà Leonardo da Vinci è stato uno pittore, uno scultore e un inventore; in ognuno dei campi in cui si è cimentato è riuscito a lasciare un segno e a lasciare ai posteri un’eredità importante, sia a livello artistico che scientifico.\n\n
        Sarebbe forse più corretto definirlo un genio.\n\n
        Ha anticipato di molti secoli, attraverso progetti e/o prototipi ‘rudimentali’, invenzioni quali la bicicletta, l’automobile, il carro armato e la muta da sub.\n\n
        Tra le sue invenzioni più famose c’è la vite aerea, una sorta di elica creata per dimostrare che l’aria è un fluido e che quindi l’oggetto in questione avrebbe potuto avvitarsi su se stesso fino a sollevarsi.\n
        Da quella stessa elica trae le origini l’attuale elicottero.`,
        `(Shrewsbury, 12 febbraio 1809 – Londra, 19 aprile 1882)\n\n
        Scienziato e naturalista inglese, Charles Darwin si diploma al Christ’s College di Cambridge e mostra fin da giovane una forte passione per la storia naturale.\n\n
        La grande opportunità arriva nel 1831, anno in cui il suo professore di biologia lo invita a bordo della HMS Beagle per un viaggio scientifico intorno al mondo.\n\n
        Durante i 5 anni trascorsi a bordo della Beagle, Darwin sviluppa eccezionali doti di osservazione e analisi che gli consentono di studiare ‘sul campo’ le caratteristiche geologiche di isole e continenti, e conseguentemente anche degli organismi viventi e dei fossili autoctoni.\n\n
        Dall’osservazione e dagli esperimenti riesce a sviluppare una teoria scientifica: la teoria dell’evoluzione della specie.`,
        `(Toru´n – Polonia, 19 febbraio 1473 – Frombork, 24 maggio 1543)\n\n
        Tra i nomi di scienziati famosi non possiamo non citare Nicolò Copernico, considerato uno dei più importanti astronomi della storia per aver gettato le basi di una grande rivoluzione scientifica.\n\n
        In assoluto contrasto con la tradizione aristotelica e tolemaica, la teoria copernicana sostiene l’eliocentrismo; Copernico ipotizza infatti che il sole è immobile al centro dell’universo mentre la terra ruota sul suo asse e intorno al sole.\n\n
        Dei suoi studi si sono serviti, nel corso dei secoli successivi, i più grandi astronomi dell’età moderna tra i quali Keplero, Galileo e Newton.`,
        `(Corteno, 7 luglio 1843 – Pavia, 21 gennaio 1926)\n\n
        Medico istologo, Camillo Golgi è considerato uno dei più grandi ricercatori italiani nel campo della medicina.\n\n
        La sua più grande scoperta è datata 1873, anno in cui la ricerca di nuovi metodi di colorazione per mettere in rilievo le cellule nervose rende i suoi frutti.\nNasce il metodo Golgi, conosciuto anche come ‘reazione nera’ o ‘colorazione cromo-argentica’, attraverso il quale le cellule nervose, impregnandosi di cromato d’argento, si colorano di nero e rivelano in maniera ben definita i propri contorni e tutte le ramificazioni interne.\n\n
        Nel 1906 Golgi consegue il premio Nobel per la medicina e più in particolare per gli studi sul sistema nervoso.`,
        `(Roma, 29 settembre 1901 – Chicago, 28 novembre 1954)\n\n
        Considerato uno dei più grandi scienziati italiani, Enrico Fermi è noto principalmente per i suoi studi sulla meccanica quantistica e la fisica nucleare.\n\n
        Durante il periodo intercorso tra le due guerre mondiali il suo lavoro ha condotto verso importanti scoperte relativamente alla fisica nucleare e allo sfruttamento dell’energia atomica.\n\n
        A lui si devono la scoperta delle reazioni nucleari causate dai neuroni lenti, lo sviluppo della medicina nucleare e l’invenzione dei radio farmaci.\n\n
        Lo studio sulla radioattività naturale, la teoria del decadimento β e la stessa radioattività provocata dai neuroni lenti gli sono valsi il premio Nobel per la fisica, conseguito nel 1938 all’età di soli 37 anni.`,
        `(Firenze, 12 giugno 1922 – Trieste, 29 giugno 2013)\n\n
        Nel nostro elenco di scienziati famosi italiani non potevamo non inserire anche una donna.\n\n
        Non a caso abbiamo scelto una delle menti  più brillanti e rappresentative della comunità scientifica contemporanea: Margherita Hack.\n\n
        Astrofisica e divulgatrice scientifica ha contribuito, con la sua tesi in ‘Astrofisica sulle Cefeidi’, alla misurazione delle distanze cosmiche fino a qualche decina di milioni di anni luce.\n\n
        Con le sue ricerche e i suoi studi ha permesso la classificazione spettrale di molte categorie di stelle; ha pubblicato numerosi libri e articoli sulle origini e l’evoluzione dell’universo ed è stata la prima donna a dirigere un osservatorio astronomico in Italia.`,
        `(Dole, 27 dicembre 1822 – Marnes-la-Coquette, 28 settembre 1895)\n\n
        Concludiamo il nostro elenco di scienziati famosi con Louis Pasteur, considerato il fondatore della moderna microbiologia.\n\n
        Nato in una famiglia di modeste condizioni Pasteur si diploma sia in lettere che in scienze; viene successivamente ammesso alla Scuola Normale Superiore di Parigi dove si laurea presentando una tesi in chimica e una in fisica, entrambe incentrate sulla cristallografia.\n\n
        I suoi studi sulla fermentazione e sull’importanza dei microrganismi nell’origine e nello sviluppo delle malattie infettive hanno avuto importanti ripercussioni sulla medicina.\n\n
        I suoi studi e le sue ricerche lo hanno condotto a sviluppare efficaci sistemi di prevenzione nei confronti di malattie quali la setticemia, il colera difterite, la tubercolosi e il vaiolo.\n\n
        E’ inoltre riuscito a sviluppare una forma leggera del virus della rabbia e ad utilizzarlo come vaccino per salvare moltissime vite.`]    
    }
}
