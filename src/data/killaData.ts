import plazaDeLaPazOriginalImg from '../assets/images/perros_de_cordero_killla_e32605ca.jpg';
import buenavistaMallBoutiqueImg from '../assets/images/killa_buenavista_mall_boutique_1795588409782.jpg';
import maleconDecemberLaunchImg from '../assets/images/killa_malecon_december_launch_1795588411200.jpg';
import imperialLambHotdogImg from '../assets/images/killa_imperial_lamb_hotdog_1795588413600.jpg';
import vivaAlegraIslandImg from '../assets/images/killa_viva_alegra_island_1795588416365.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'perros-autor' | 'edicion-diciembre' | 'cortes-parrilla' | 'combos-killa';
  categoryLabel: string;
  subtitle: string;
  description: string;
  price: number;
  weightGrams: number;
  prepTimeMinutes: number;
  highlightNote: string;
  imageUrl: string;
  ingredients: string[];
  availableIn: ('malls' | 'popular')[];
  visualProfile: {
    baseGradient: string;
    accentColor: string;
    cutType: string;
    garnishNote: string;
  };
  customizableSauces: string[];
}

export interface LocationBranch {
  id: string;
  name: string;
  zoneType: 'mall' | 'popular';
  zoneLabel: string;
  neighborhood: string;
  address: string;
  spotDetail: string;
  decemberOpeningDate: string;
  launchEventTitle: string;
  imageUrl: string;
  hours: string;
  weekendHours: string;
  averageWaitMins: number;
  capacitySeats: number;
  featuredSpecialty: string;
  coordinates: {
    xPercent: number;
    yPercent: number;
    lat: string;
    lng: string;
  };
  amenities: string[];
  phoneExtension: string;
}

export const BRAND_IMAGES = {
  plazaDeLaPazOriginal: plazaDeLaPazOriginalImg,
  buenavistaMallBoutique: buenavistaMallBoutiqueImg,
  maleconDecemberLaunch: maleconDecemberLaunchImg,
  imperialLambHotdog: imperialLambHotdogImg,
  vivaAlegraIsland: vivaAlegraIslandImg
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'killa-imperial',
    name: 'El Killa Imperial Gold',
    category: 'perros-autor',
    categoryLabel: 'Perros de Autor',
    subtitle: 'Salchicha artesanal 100% pierna de cordero & costeño asado',
    description:
      'Nuestra creación insignia para la Gran Apertura de Diciembre. Pan brioche dorado a la mantequilla de romero, salchicha artesanal de cordero madurado 140g a la plancha, dados de queso costeño asado al fuego, cebollas caramelizadas en reducción de corozo, papas cabello de ángel crocantes y emulsión trufada de ajo asado.',
    price: 32900,
    weightGrams: 340,
    prepTimeMinutes: 7,
    highlightNote: 'Estrella del Lanzamiento Diciembre',
    imageUrl: BRAND_IMAGES.imperialLambHotdog,
    ingredients: [
      'Pan Brioche Artesanal al Romero',
      'Salchicha 100% Cordero Gourmet (140g)',
      'Queso Costeño Asado a la Plancha',
      'Reducción de Corozo & Cebolla Dulce',
      'Emulsión de Ajo Rostizado',
      'Crocante de Papa Nativa'
    ],
    availableIn: ['malls', 'popular'],
    visualProfile: {
      baseGradient: 'from-[#3D1217] via-[#1C0E0C] to-[#0D0807]',
      accentColor: '#D4AF37',
      cutType: 'Embutido Artesanal 140g + Costra Dorada',
      garnishNote: 'Reducción de Corozo & Costeño Asado'
    },
    customizableSauces: ['Tártara Killa de la Casa', 'Salsa de Piña Asada & Romero', 'Alioli de Ajo Negro']
  },
  {
    id: 'brisas-diciembre-velitas',
    name: 'Killa Noche de Velitas (Edición Diciembre)',
    category: 'edicion-diciembre',
    categoryLabel: 'Colección Diciembre',
    subtitle: 'Salchicha de cordero, jamón de cordero ahumado & glaseado de ciruela y corozo',
    description:
      'Creado exclusivamente para las Brisas de Diciembre en Barranquilla. Salchicha gourmet de cordero 140g envuelta en tocineta de cordero ahumada en leña de guayabo, queso costeño fundido, reducción tibia de ciruelas pasas al ron caribeño y corozo, coronado con almendras tostadas y papas crocantes.',
    price: 36900,
    weightGrams: 375,
    prepTimeMinutes: 8,
    highlightNote: 'Edición Limitada Diciembre',
    imageUrl: BRAND_IMAGES.buenavistaMallBoutique,
    ingredients: [
      'Pan Brioche Dorado con Ajonjolí Tostado',
      'Salchicha 100% Cordero Gourmet (140g)',
      'Láminas de Cordero Ahumado al Guayabo',
      'Glaseado Navideño de Corozo & Ciruela al Ron',
      'Queso Costeño Fundido a la Plancha',
      'Almendras Fileteadas Tostadas'
    ],
    availableIn: ['malls', 'popular'],
    visualProfile: {
      baseGradient: 'from-[#4E141C] via-[#210E10] to-[#0D0807]',
      accentColor: '#F3C663',
      cutType: 'Edición Festiva Diciembre 180g Proteína',
      garnishNote: 'Glaseado de Corozo al Ron & Almendras'
    },
    customizableSauces: ['Glaseado de Corozo & Ron', 'Tártara Killa Imperial', 'Mostaza Dijon & Miel de Abejas']
  },
  {
    id: 'cordero-desmechado-real',
    name: 'Perro Pulled Lamb Reserva 12H',
    category: 'perros-autor',
    categoryLabel: 'Perros de Autor',
    subtitle: 'Salchicha de cordero + paleta braseada 12 horas en su jugo',
    description:
      'Doble experiencia de cordero inspirada en la alta charcutería ovina: base de salchicha gourmet de cordero coronada con 90g de paleta de cordero desmechada tras 12 horas de cocción lenta con hierbas mediterráneas, doble capa de queso fundido y suero costeño al cilantro.',
    price: 38500,
    weightGrams: 410,
    prepTimeMinutes: 8,
    highlightNote: 'Favorito en Buenavista & Viva',
    imageUrl: BRAND_IMAGES.vivaAlegraIsland,
    ingredients: [
      'Pan Brioche Dorado',
      'Salchicha de Cordero (120g)',
      'Paleta de Cordero Braseada 12h (90g)',
      'Queso Mozzarella & Grana Padano',
      'Suero Costeño al Cilantro Cimarrón',
      'Tocineta Ahumada en Leña de Guayabo'
    ],
    availableIn: ['malls', 'popular'],
    visualProfile: {
      baseGradient: 'from-[#4A1C17] via-[#1F100E] to-[#0D0807]',
      accentColor: '#E5C158',
      cutType: 'Doble Proteína: Salchicha + Pulled Lamb 210g',
      garnishNote: 'Suero Costeño & Tocineta al Guayabo'
    },
    customizableSauces: ['Suero Costeño Artesanal', 'Mostaza Antiguo Dijon & Miel', 'Chimichurri de Hierbabuena']
  },
  {
    id: 'perro-callejero-deluxe',
    name: 'El Arenoso Tradición Plaza de la Paz',
    category: 'perros-autor',
    categoryLabel: 'Perros de Autor',
    subtitle: 'El campeón original del Festival del Perro Caliente 100% Cordero',
    description:
      'La receta exacta con la que conquistamos la Plaza de la Paz: salchicha 100% cordero a la plancha humeante, ensalada fresca encurtida en limón mandarino, lluvia generosa de queso costeño rallado fino de Sabanalarga, piña calada con pimienta cayena, papitas crocantes y tártara secreta Killa.',
    price: 26900,
    weightGrams: 320,
    prepTimeMinutes: 5,
    highlightNote: 'Receta Original Carro Insignia',
    imageUrl: BRAND_IMAGES.plazaDeLaPazOriginal,
    ingredients: [
      'Pan Suave Artesanal al Vapor y Plancha',
      'Salchicha 100% Cordero Gourmet (130g)',
      'Queso Costeño Rallado de Sabanalarga',
      'Piña Calada en Especias Dulces',
      'Tártara Killa & Salsa Rosada Ahumada',
      'Papas Fosforito Crocantes'
    ],
    availableIn: ['malls', 'popular'],
    visualProfile: {
      baseGradient: 'from-[#42141E] via-[#1A0D0E] to-[#0D0807]',
      accentColor: '#F3C663',
      cutType: 'Clásico Barranquillero 100% Cordero 130g',
      garnishNote: 'Queso de Sabanalarga & Tártara Killa'
    },
    customizableSauces: ['Tártara Killa Clásica', 'Piña Calada Picante', 'Salsa de Maíz Dulce']
  },
  {
    id: 'chuletas-plancha-killa',
    name: 'Rack & Chuletas de Cordero a la Plancha',
    category: 'cortes-parrilla',
    categoryLabel: 'Cortes a la Plancha',
    subtitle: '300g de chuletas tiernas selladas en vivo con mantequilla de romero',
    description:
      'Como se aprecia en la bandeja de nuestra plancha maestra: cortes seleccionados de carré y chuleta de cordero joven, sellados al instante con mantequilla clarificada, ajo machacado y romero fresco. Servidos con yuca criolla crocante, suero costeño montado y chimichurri de la casa.',
    price: 54900,
    weightGrams: 460,
    prepTimeMinutes: 12,
    highlightNote: 'Sellado en Plancha a la Vista',
    imageUrl: BRAND_IMAGES.maleconDecemberLaunch,
    ingredients: [
      'Chuletas de Cordero Joven con Hueso (300g)',
      'Mantequilla Clarificada al Romero',
      'Bastones de Yuca Crocante',
      'Chimichurri Artesanal de Hierbabuena',
      'Suero Costeño Cremoso',
      'Pan Brioche Tostado de Acompañamiento'
    ],
    availableIn: ['malls', 'popular'],
    visualProfile: {
      baseGradient: 'from-[#4E1616] via-[#1E0D0C] to-[#0D0807]',
      accentColor: '#D4AF37',
      cutType: 'Carré & Chuleta Entera con Hueso 300g',
      garnishNote: 'Sellado a la Plancha & Yuca Crocante'
    },
    customizableSauces: ['Chimichurri de Hierbabuena', 'Suero Costeño al Ajo', 'Salsa BBQ de Tamarindo']
  },
  {
    id: 'combo-novenas-diciembre',
    name: 'Box Festín de Diciembre & Novenas (4 Personas)',
    category: 'combos-killa',
    categoryLabel: 'Combos & Boxes',
    subtitle: '4 Perros de Cordero + Porción de Chuletas a la Plancha + 4 Sodas de Corozo',
    description:
      'El box de lujo diseñado para compartir en las novenas, despedidas de año y encuentros de diciembre en Barranquilla. Incluye 2 Perros Killa Imperial Gold, 2 Perros Noche de Velitas, 250g de chuletas de cordero troceadas a la plancha, papas rústicas al romero y 4 sodas artesanales.',
    price: 148900,
    weightGrams: 1650,
    prepTimeMinutes: 14,
    highlightNote: 'Especial Novenas & Eventos Diciembre',
    imageUrl: BRAND_IMAGES.imperialLambHotdog,
    ingredients: [
      '4 Perros de Cordero Gourmet Completos',
      'Chuletas de Cordero Selladas al Romero (250g)',
      'Papas Rústicas con Sal de Mar',
      '4 Sodas Artesanales Costeñas de Corozo',
      'Set de 4 Salsas de Autor Killa'
    ],
    availableIn: ['malls', 'popular'],
    visualProfile: {
      baseGradient: 'from-[#462912] via-[#1C120B] to-[#0D0807]',
      accentColor: '#D4AF37',
      cutType: 'Festín Familiar 4 Personas (1.65 kg)',
      garnishNote: 'Presentación en Caja Negra & Sello Dorado'
    },
    customizableSauces: ['Tártara Killa', 'Glaseado de Corozo & Ron', 'Chimichurri de la Casa']
  }
];

export const LOCATIONS_BAQ: LocationBranch[] = [
  {
    id: 'cc-buenavista',
    name: 'C.C. Buenavista II — Boutique Imperial',
    zoneType: 'mall',
    zoneLabel: 'Centro Comercial Norte',
    neighborhood: 'Riomar · Calle 98',
    address: 'Calle 98 # 52-115, Atrium Gourmet Piso 3',
    spotDetail: 'Kiosco Boutique en terciopelo vinotinto, mármol Calacatta y plancha central 360°',
    decemberOpeningDate: 'Inauguración: 1 de Diciembre · 6:00 PM',
    launchEventTitle: 'Corte de Cinta & Degustación Killa Imperial Gold',
    imageUrl: BRAND_IMAGES.buenavistaMallBoutique,
    hours: 'Lun - Jue: 11:30 AM – 9:30 PM',
    weekendHours: 'Vie - Dom (Diciembre): 11:00 AM – 11:00 PM',
    averageWaitMins: 7,
    capacitySeats: 48,
    featuredSpecialty: 'El Killa Imperial Gold & Edición Noche de Velitas',
    coordinates: {
      xPercent: 58,
      yPercent: 20,
      lat: '11.0142° N',
      lng: '74.8276° W'
    },
    amenities: ['Sofás en Terciopelo Vinotinto', 'Plancha Teppanyaki en Vivo', 'Parqueadero VIP', 'Pickup Digital sin Fila'],
    phoneExtension: '+57 (301) 482-9910'
  },
  {
    id: 'cc-viva',
    name: 'C.C. Viva Barranquilla — Isla Gourmet',
    zoneType: 'mall',
    zoneLabel: 'Centro Comercial Norte',
    neighborhood: 'Alto Prado · Cra 51B',
    address: 'Carrera 51B # 87-50, Calle Bistro & Terraza Viva',
    spotDetail: 'Isla gastronómica con barra de taburetes en cuero y lámparas de bronce',
    decemberOpeningDate: 'Inauguración: 5 de Diciembre · 7:00 PM',
    launchEventTitle: 'Noche de Maridaje: Pulled Lamb & Sodas de Corozo',
    imageUrl: BRAND_IMAGES.vivaAlegraIsland,
    hours: 'Lun - Jue: 11:30 AM – 9:30 PM',
    weekendHours: 'Vie - Dom (Diciembre): 11:00 AM – 11:30 PM',
    averageWaitMins: 6,
    capacitySeats: 42,
    featuredSpecialty: 'Perro Pulled Lamb Reserva 12 Horas',
    coordinates: {
      xPercent: 50,
      yPercent: 32,
      lat: '11.0053° N',
      lng: '74.8211° W'
    },
    amenities: ['Barra de Plancha a la Vista', 'Terraza Pet Friendly', 'Boxes para Novenas', 'Domicilio Express Norte'],
    phoneExtension: '+57 (301) 482-9911'
  },
  {
    id: 'plaza-de-la-paz',
    name: 'Plaza de la Paz — Carro Imperial Insignia',
    zoneType: 'popular',
    zoneLabel: 'Punto Popular & Cultural',
    neighborhood: 'Centro Histórico · Catedral',
    address: 'Carrera 46 con Calle 53, Explanada Central Plaza de la Paz',
    spotDetail: 'Nuestro icónico Carro Imperial con toldo vinotinto y flecos dorados',
    decemberOpeningDate: 'Encendido Navideño: 7 de Diciembre (Velitas)',
    launchEventTitle: 'Festival Nocturno de Velitas & Plancha de Chuletas en Vivo',
    imageUrl: BRAND_IMAGES.plazaDeLaPazOriginal,
    hours: 'Mié - Jue: 4:30 PM – 11:30 PM',
    weekendHours: 'Vie - Dom (Diciembre): 4:00 PM – 1:30 AM',
    averageWaitMins: 5,
    capacitySeats: 40,
    featuredSpecialty: 'El Arenoso Tradición + Chuletas de Cordero en Vivo',
    coordinates: {
      xPercent: 56,
      yPercent: 56,
      lat: '10.9879° N',
      lng: '74.7889° W'
    },
    amenities: ['El Carro Original del Festival', 'Plancha Humeante al Aire Libre', 'Ambiente Cultural', 'Horario Trasnocho'],
    phoneExtension: '+57 (301) 482-9914'
  },
  {
    id: 'gran-malecon-boulevard',
    name: 'Gran Malecón del Río — Terraza Brisas de Diciembre',
    zoneType: 'popular',
    zoneLabel: 'Punto Popular & Turístico',
    neighborhood: 'Ribera del Río Magdalena · Vía 40',
    address: 'Vía 40 con Calle 79, Sector Puerta de Oro & Caimán del Río',
    spotDetail: 'Pérgola iluminada y Carro Imperial frente a la brisa del Río Magdalena',
    decemberOpeningDate: 'Gran Lanzamiento: 8 de Diciembre · 5:30 PM',
    launchEventTitle: 'Atardecer de Brisas Decembrinas & Cordero al Río',
    imageUrl: BRAND_IMAGES.maleconDecemberLaunch,
    hours: 'Lun - Jue: 4:00 PM – 11:00 PM',
    weekendHours: 'Vie - Dom (Diciembre): 12:00 PM – 12:30 AM',
    averageWaitMins: 6,
    capacitySeats: 75,
    featuredSpecialty: 'Rack de Chuletas de Cordero & Killa Noche de Velitas',
    coordinates: {
      xPercent: 78,
      yPercent: 30,
      lat: '11.0158° N',
      lng: '74.7962° W'
    },
    amenities: ['Vista al Río Magdalena', 'Guirnaldas & Brisa de Diciembre', 'Pet Friendly', 'Música en Vivo'],
    phoneExtension: '+57 (301) 482-9915'
  },
  {
    id: 'cc-alegra',
    name: 'C.C. Alegra Barranquilla — Estación Sur Deluxe',
    zoneType: 'mall',
    zoneLabel: 'Centro Comercial Sur-Oriente',
    neighborhood: 'Calle 30 · Boyacá',
    address: 'Calle 30 # 4B-50, Nivel 2 Plazoleta del Río',
    spotDetail: 'Isla moderna en cerámica vinotinto y bronce con plancha maestra',
    decemberOpeningDate: 'Inauguración: 12 de Diciembre · 5:00 PM',
    launchEventTitle: 'Tarde de Aguinaldos & Combos Familiares Killa Gold',
    imageUrl: BRAND_IMAGES.vivaAlegraIsland,
    hours: 'Lun - Jue: 11:00 AM – 9:00 PM',
    weekendHours: 'Vie - Dom (Diciembre): 10:30 AM – 10:30 PM',
    averageWaitMins: 6,
    capacitySeats: 55,
    featuredSpecialty: 'Box Festín de Diciembre & El Arenoso Tradición',
    coordinates: {
      xPercent: 66,
      yPercent: 78,
      lat: '10.9462° N',
      lng: '74.7824° W'
    },
    amenities: ['Plazoleta Climatizada', 'Especial Familias & Novenas', 'Zona Infantil Cercana', 'Pickup Digital'],
    phoneExtension: '+57 (301) 482-9913'
  },
  {
    id: 'cc-unico',
    name: 'C.C. Único Outlet — Killa Express & Shopping',
    zoneType: 'mall',
    zoneLabel: 'Centro Comercial Central',
    neighborhood: 'Colombia · Calle 74',
    address: 'Calle 74 # 38D-113, Plazoleta Central de Comidas',
    spotDetail: 'Boutique Express ideal para recargar energías durante las compras navideñas',
    decemberOpeningDate: 'Inauguración: 15 de Diciembre · 12:00 PM',
    launchEventTitle: 'Apertura Temporada de Aguinaldos & Trasnochón Navideño',
    imageUrl: BRAND_IMAGES.buenavistaMallBoutique,
    hours: 'Lun - Jue: 10:30 AM – 9:00 PM',
    weekendHours: 'Vie - Dom (Trasnochón Diciembre): 10:00 AM – 11:00 PM',
    averageWaitMins: 5,
    capacitySeats: 60,
    featuredSpecialty: 'Killa Imperial Gold en 5 Minutos & Box Dúo',
    coordinates: {
      xPercent: 38,
      yPercent: 46,
      lat: '10.9885° N',
      lng: '74.8087° W'
    },
    amenities: ['Servicio Express Compras Navideñas', 'Combos Pareja', 'Parqueadero Cubierto', 'Pago QR & Tarjetas'],
    phoneExtension: '+57 (301) 482-9912'
  }
];

export const DECEMBER_LAUNCH_GALLERY = [
  {
    id: 'gal-plaza-paz',
    title: 'El Origen: Carro Insignia en Plaza de la Paz',
    locationTag: 'Plaza de la Paz · Centro Histórico',
    dateTag: '7 de Diciembre · Noche de Velitas',
    description:
      'Nuestra fotografía real en el corazón de Barranquilla: toldo vinotinto imperial con flecos de oro, pan brioche fresco en vitrina, queso costeño rallado y chuletas de cordero listas para la plancha caliente.',
    imageUrl: BRAND_IMAGES.plazaDeLaPazOriginal,
    format: 'Carro Imperial de Festival'
  },
  {
    id: 'gal-buenavista',
    title: 'Boutique Imperial C.C. Buenavista II',
    locationTag: 'C.C. Buenavista · Riomar Norte',
    dateTag: '1 de Diciembre · Gran Apertura VIP',
    description:
      'Llevamos la estética del carro insignia a una isla arquitectónica de lujo con bancas en terciopelo vinotinto, barra de mármol blanco, acabados en bronce cepillado y luces navideñas en el atrio principal.',
    imageUrl: BRAND_IMAGES.buenavistaMallBoutique,
    format: 'Isla Boutique Mall VIP'
  },
  {
    id: 'gal-malecon',
    title: 'Terraza Brisas de Diciembre en el Gran Malecón',
    locationTag: 'Gran Malecón del Río Magdalena',
    dateTag: '8 de Diciembre · Sunset & Río',
    description:
      'Atardeceres dorados junto al Río Magdalena con la brisa decembrina de La Arenosa, guirnaldas cálidas y nuestros maestros parrilleros sirviendo perros de cordero recién salidos de la plancha.',
    imageUrl: BRAND_IMAGES.maleconDecemberLaunch,
    format: 'Terraza & Pérgola al Río'
  },
  {
    id: 'gal-viva-alegra',
    title: 'Isla Gastronómica C.C. Viva & C.C. Alegra',
    locationTag: 'C.C. Viva (Norte) & C.C. Alegra (Sur)',
    dateTag: '5 y 12 de Diciembre · Apertura Simultánea',
    description:
      'Diseño contemporáneo en cerámica acanalada color burdeos, campana de extracción en latón dorado y barra de experiencia para disfrutar el sellado del cordero y queso costeño a centímetros de la plancha.',
    imageUrl: BRAND_IMAGES.vivaAlegraIsland,
    format: 'Food Hall Gourmet Island'
  }
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    index: '01',
    title: '100% Cordero Gourmet Seleccionado',
    metric: '0% Mezclas · 100% Ovino Puro',
    description:
      'Inspirados en la alta escuela ovina de La Cordería, elaboramos nuestras salchichas y cortes exclusivamente con pierna y paleta de cordero joven criado en la región Caribe, logrando jugosidad superior y aroma inconfundible en plancha.'
  },
  {
    index: '02',
    title: 'Omnipresencia Killa en Diciembre',
    metric: '4 Centros Comerciales + 2 Plazas Icónicas',
    description:
      'Este diciembre unimos las dos almas de Barranquilla: la tradición vibrante de nuestro carro insignia en Plaza de la Paz y el Gran Malecón con el confort climatizado de lujo en Buenavista, Viva, Alegra y Único.'
  },
  {
    index: '03',
    title: 'Alquimia Caribeña & Sello de Autor',
    metric: 'Brioche al Romero, Costeño Asado & Corozo',
    description:
      'Cada perro de cordero se arma al instante frente a tus ojos: pan brioche dorado en mantequilla, queso costeño asado, reducción decembrina de corozo silvestre y nuestra emblemática tártara Killa.'
  }
];
