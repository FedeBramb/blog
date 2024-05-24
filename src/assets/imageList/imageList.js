// Importa le immagini dinamicamente utilizzando require.context
const importAllImages = (context) => context.keys().map(context);
const images = importAllImages(require.context('../imagesPreview', false, /\.(png|jpe?g|svg|webp)$/));

const imageList = [
    { 
      image: images[0], 
      link: '/pagina1',
      title: 'Tomahawk Grill',
      presentation: `Crea un'esplosione di sapori con il nostro succulento agnello agli aromi: un'esperienza culinaria che delizierà i tuoi sensi e conquisterà il tuo palato con ogni morso.`,
    },
    { 
      image: images[1], 
      link: '/pagina2',
      title: 'American Donuts',
      presentation: `Delizia i tuoi sensi con i nostri deliziosi American Donuts: un'esplosione di dolcezza e sapore che ti farà desiderare di più ad ogni morso.`,
    },
    { 
      image: images[2], 
      link: '/pagina2',
      title: 'Pancake',
      presentation: `Sorseggia il mattino con i nostri Pancake: un'opera d'arte culinaria che ti coccola con il suo gusto morbido e avvolgente, perfetto per iniziare la giornata con una nota dolce.`    
    },
    { 
      image: images[3], 
      link: '/pagina3',
      title: 'Falafel',
      presentation: `Esplora i sapori del Medio Oriente con i nostri Falafel: croccanti all'esterno, morbidi e speziati all'interno, sono un'esperienza culinaria da non perdere.`,
    },
    { 
      image: images[4], 
      link: '/pagina4',
      title: 'Hummus',
      presentation: `Scopri la tradizione mediterranea con il nostro Hummus: una crema vellutata di ceci, arricchita con olio d'oliva e spezie, perfetta per immergersi con deliziosi crostini`,
    },
    { 
      image: images[5], 
      link: '/pagina5',
      title: 'Insalata greca',
      presentation: `Porta il gusto dell'estate sulla tua tavola con la nostra Insalata Greca: fresca, colorata e ricca di sapori mediterranei`,
    },
    { 
      image: images[6], 
      link: '/pagina6',
      title: 'Macarons',
      presentation: `Delizia il tuo palato con i nostri Macarons: piccoli bocconcini di felicità, con i loro colori vivaci e la loro consistenza delicata`,
    },
    { 
      image: images[7], 
      link: '/pagina7',
      title: 'Orata primaverile',
      presentation: `Immergiti nei sapori della stagione con la nostra Orata Primaverile: fresca, leggera e profumata, è un piatto che cattura l'essenza della primavera con ogni boccone.`,
    },
    {
      image: images[8],
      link: '/pagina8',
      title: 'Cheesecake',
      presentation: 'Scopri il gusto e la freschezza di questa cheesecake ai mirtilli, facilissima da realizzare!'
    }
    // Aggiungi altre immagini con testo sovrapposto personalizzato
  ];

export default imageList;