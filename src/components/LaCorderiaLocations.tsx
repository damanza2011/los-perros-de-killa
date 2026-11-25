import React, { useState } from 'react';
import { Clock, ExternalLink, MapPin, Navigation, Phone, UtensilsCrossed } from 'lucide-react';
import { BRAND_IMAGES } from '../data/killaData';
import { ResilientImage } from './BrandVisuals';

export interface CorderiaFiveLocation {
  id: string;
  mallName: string;
  zoneSubtitle: string;
  shortDescription: string;
  address: string;
  spotReference: string;
  schedule: string;
  signatureDish: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
    displayCoords: string;
  };
  embedMapUrl: string;
  googleMapsDirectionsUrl: string;
  phone: string;
}

export const LA_CORDERIA_5_LOCATIONS: CorderiaFiveLocation[] = [
  {
    id: 'corderia-buenavista',
    mallName: 'C.C. Buenavista II',
    zoneSubtitle: 'Riomar · Norte de Barranquilla',
    shortDescription:
      'Boutique insignia en el Atrio Gourmet del norte. Isla revestida en terciopelo vinotinto y mármol Calacatta con plancha central 360° donde sellamos al instante perros 100% cordero y queso costeño asado.',
    address: 'Calle 98 # 52-115, Piso 3 Plazoleta Gourmet',
    spotReference: 'Frente a terraza climatizada · Local Isla VIP 304',
    schedule: 'Lun – Dom: 11:30 AM – 10:30 PM',
    signatureDish: 'El Killa Imperial Gold & Killa Mediterráneo',
    imageUrl: BRAND_IMAGES.buenavistaMallBoutique,
    coordinates: {
      lat: 11.0142,
      lng: -74.8276,
      displayCoords: '11.0142° N, 74.8276° W'
    },
    embedMapUrl:
      'https://maps.google.com/maps?q=Centro+Comercial+Buenavista+Barranquilla&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+Buenavista+Barranquilla',
    phone: '+57 (301) 482-9910'
  },
  {
    id: 'corderia-viva',
    mallName: 'C.C. Viva Barranquilla',
    zoneSubtitle: 'Alto Prado · Carrera 51B',
    shortDescription:
      'Isla gastronómica de autor en Calle Bistro con barra de experiencia en cuero y lámparas de bronce. Ideal para tardes de compras navideñas y maridaje de cordero braseado 12 horas con sodas artesanales de corozo.',
    address: 'Carrera 51B # 87-50, Zona Calle Bistro & Terraza',
    spotReference: 'Acceso directo por Carrera 51B · Isla Gourmet 12',
    schedule: 'Lun – Dom: 11:30 AM – 11:00 PM',
    signatureDish: 'Perro Pulled Lamb Reserva 12 Horas',
    imageUrl: BRAND_IMAGES.vivaAlegraIsland,
    coordinates: {
      lat: 11.0053,
      lng: -74.8211,
      displayCoords: '11.0053° N, 74.8211° W'
    },
    embedMapUrl:
      'https://maps.google.com/maps?q=Centro+Comercial+Viva+Barranquilla&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+Viva+Barranquilla',
    phone: '+57 (301) 482-9911'
  },
  {
    id: 'corderia-alegra',
    mallName: 'C.C. Alegra Barranquilla',
    zoneSubtitle: 'Corredor Calle 30 · Sur-Oriente',
    shortDescription:
      'Nuestra gran estación del sur de La Arenosa. Diseño contemporáneo con cerámica acanalada color burdeos, campana en latón dorado y porciones generosas de perros de cordero y chuletas a la plancha para compartir en familia.',
    address: 'Calle 30 # 4B-50, Nivel 2 Plazoleta del Río',
    spotReference: 'Plazoleta Central Nivel 2 · Estación Maestra 210',
    schedule: 'Lun – Dom: 11:00 AM – 10:00 PM',
    signatureDish: 'Box Festín de Diciembre & El Arenoso Tradición',
    imageUrl: BRAND_IMAGES.vivaAlegraIsland,
    coordinates: {
      lat: 10.9462,
      lng: -74.7824,
      displayCoords: '10.9462° N, 74.7824° W'
    },
    embedMapUrl:
      'https://maps.google.com/maps?q=Parque+Alegra+Barranquilla&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Parque+Alegra+Barranquilla',
    phone: '+57 (301) 482-9913'
  },
  {
    id: 'corderia-unico',
    mallName: 'C.C. Único Outlet',
    zoneSubtitle: 'Barrio Colombia · Calle 74',
    shortDescription:
      'Ubicación central de alto flujo pensada para un servicio ágil de 5 minutos sin sacrificar la alta escuela ovina. Pan brioche tostado al romero, salchicha 100% cordero de 140g y combos ejecutivos.',
    address: 'Calle 74 # 38D-113, Plazoleta Central de Comidas',
    spotReference: 'Entrada Principal Calle 74 · Isla Central Killa',
    schedule: 'Lun – Dom: 10:30 AM – 9:30 PM',
    signatureDish: 'Dúo Killa Gold & Perro Noche de Velitas',
    imageUrl: BRAND_IMAGES.buenavistaMallBoutique,
    coordinates: {
      lat: 10.9885,
      lng: -74.8087,
      displayCoords: '10.9885° N, 74.8087° W'
    },
    embedMapUrl:
      'https://maps.google.com/maps?q=Centro+Comercial+Unico+Barranquilla&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+Unico+Barranquilla',
    phone: '+57 (301) 482-9912'
  },
  {
    id: 'corderia-plaza-malecon',
    mallName: 'Plaza de la Paz & Gran Malecón',
    zoneSubtitle: 'Centro Histórico & Ribera del Río Magdalena',
    shortDescription:
      'El corazón popular y cultural donde nació nuestra leyenda en el Festival del Perro Caliente. Carro Imperial original con toldo vinotinto y flecos de oro sirviendo perros de cordero y chuletas al aire libre bajo la brisa decembrina.',
    address: 'Cra 46 con Calle 53 (Plaza de la Paz) & Vía 40 (Gran Malecón)',
    spotReference: 'Explanada Catedral Metropolitana & Sector Puerta de Oro',
    schedule: 'Mié – Dom: 4:00 PM – 1:00 AM',
    signatureDish: 'Campeón del Festival + Rack de Chuletas a la Plancha',
    imageUrl: BRAND_IMAGES.plazaDeLaPazOriginal,
    coordinates: {
      lat: 10.9879,
      lng: -74.7889,
      displayCoords: '10.9879° N, 74.7889° W'
    },
    embedMapUrl:
      'https://maps.google.com/maps?q=Plaza+de+la+Paz+Barranquilla&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Plaza+de+la+Paz+Barranquilla',
    phone: '+57 (301) 482-9914'
  }
];

interface LaCorderiaLocationsShowcaseProps {
  onSelectForOrder?: (locationName: string) => void;
}

export function LaCorderiaLocationsShowcase({
  onSelectForOrder
}: LaCorderiaLocationsShowcaseProps) {
  const [selectedZoneFilter, setSelectedZoneFilter] = useState<'all' | 'norte' | 'centro-sur'>('all');
  const [expandedMapId, setExpandedMapId] = useState<string | null>(null);

  const displayedLocations = LA_CORDERIA_5_LOCATIONS.filter((loc) => {
    if (selectedZoneFilter === 'all') return true;
    if (selectedZoneFilter === 'norte') {
      return loc.id === 'corderia-buenavista' || loc.id === 'corderia-viva';
    }
    return (
      loc.id === 'corderia-alegra' ||
      loc.id === 'corderia-unico' ||
      loc.id === 'corderia-plaza-malecon'
    );
  });

  return (
    <section
      id="ubicaciones-la-corderia"
      className="py-16 lg:py-24 bg-[#120A09] border-t border-[#D4AF37]/20"
    >
      <div className="corderia-container">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF37] mb-2">
              <span>La Cordería · Edición Killa Barranquilla</span>
              <span aria-hidden="true">·</span>
              <span>5 Ubicaciones Oficiales con Mapa Integrado</span>
            </div>
            <h2
              className="font-display text-2xl lg:text-4xl font-bold text-[#FBF7F0]"
              style={{ textWrap: 'balance' }}
            >
              Nuestras 5 Sedes en Centros Comerciales y Plazas de Barranquilla
            </h2>
            <p className="text-sm lg:text-base text-[#D8CFC2] mt-3 max-w-2xl">
              Cada tarjeta cuenta con fotografía real de la sede, descripción gastronómica, mapa interactivo embebido de Barranquilla y enlace directo a{' '}
              <strong className="text-[#FBF7F0]">Google Maps</strong> para navegar desde tu ubicación actual.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0D0807] border border-[#D4AF37]/25 rounded-lg self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setSelectedZoneFilter('all')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedZoneFilter === 'all'
                  ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                  : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
              }`}
            >
              Las 5 Ubicaciones (5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedZoneFilter('norte')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedZoneFilter === 'norte'
                  ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                  : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
              }`}
            >
              Zona Norte (Buenavista · Viva)
            </button>
            <button
              type="button"
              onClick={() => setSelectedZoneFilter('centro-sur')}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedZoneFilter === 'centro-sur'
                  ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                  : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
              }`}
            >
              Centro & Sur (Alegra · Único · Plaza)
            </button>
          </div>
        </div>

        {/* Responsive 5-Location Grid: First 3 in 3-col row, next 2 in balanced 2-col row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {displayedLocations.map((loc, index) => {
            // When showing all 5 on desktop (lg:grid-cols-6), first 3 span 2 cols each (3 cards), last 2 span 3 cols each (2 wider cards)
            const colSpanClass =
              displayedLocations.length === 5
                ? index < 3
                  ? 'lg:col-span-2'
                  : 'lg:col-span-3'
                : 'lg:col-span-3';

            const isMapExpanded = expandedMapId === loc.id;

            return (
              <article
                key={loc.id}
                className={`${colSpanClass} corderia-surface-card overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  {/* Visual Header: Photography of the Mall / Plaza Location */}
                  <div className="relative h-52 w-full bg-[#1C0E0C] overflow-hidden border-b border-[#D4AF37]/20">
                    <ResilientImage
                      src={loc.imageUrl}
                      alt={`${loc.mallName} - La Cordería Killa Barranquilla`}
                      className="w-full h-full object-cover"
                      fallbackTitle={loc.mallName}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A] via-black/35 to-transparent" />

                    {/* Coordinate Readout */}
                    <div className="absolute top-3 right-3 bg-[#0D0807]/85 backdrop-blur-md border border-[#D4AF37]/30 rounded px-2.5 py-1 text-[11px] font-mono-num text-[#F3C663]">
                      0{index + 1} · {loc.coordinates.displayCoords}
                    </div>

                    <div className="absolute bottom-3 left-5 right-5">
                      <p className="text-xs text-[#D4AF37]">{loc.zoneSubtitle}</p>
                      <h3 className="font-display text-xl font-bold text-[#FBF7F0]">
                        {loc.mallName}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body: Description & Specs */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-[#D8CFC2] leading-relaxed">
                      {loc.shortDescription}
                    </p>

                    <div className="pt-3 border-t border-[#D4AF37]/15 space-y-2 text-xs">
                      <div className="flex items-start gap-2.5 text-[#E5DEC9]">
                        <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#FBF7F0]">{loc.address}</p>
                          <p className="text-[#BFB3A4]">{loc.spotReference}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 text-[#E5DEC9]">
                        <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span className="font-mono-num">{loc.schedule}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-[#E5DEC9]">
                        <UtensilsCrossed className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>
                          Recomendado: <strong className="text-[#F3C663]">{loc.signatureDish}</strong>
                        </span>
                      </div>
                    </div>

                    {/* Integrated Google Map Embed for each card */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-[11px] text-[#C8BBAE] mb-1.5">
                        <span>Mapa Integrado · {loc.mallName}</span>
                        <button
                          type="button"
                          onClick={() => setExpandedMapId(isMapExpanded ? null : loc.id)}
                          className="text-[#D4AF37] hover:underline font-medium"
                        >
                          {isMapExpanded ? 'Reducir mapa' : 'Ampliar mapa'}
                        </button>
                      </div>

                      <div
                        className={`relative w-full rounded-lg overflow-hidden border border-[#D4AF37]/30 bg-[#0D0807] transition-all ${
                          isMapExpanded ? 'h-64' : 'h-40'
                        }`}
                      >
                        <iframe
                          title={`Mapa de ${loc.mallName} en Barranquilla`}
                          src={loc.embedMapUrl}
                          className="w-full h-full border-0 opacity-90 contrast-105"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Direct 'Cómo llegar' Google Maps Link + Fast Order Action */}
                <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={loc.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold corderia-gold-cta flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Cómo llegar en Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  {onSelectForOrder && (
                    <button
                      type="button"
                      onClick={() => onSelectForOrder(loc.mallName)}
                      className="py-2.5 px-3.5 rounded-lg text-xs font-semibold text-[#FBF7F0] bg-[#1E0F0E] border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
                    >
                      Pedir Aquí
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
