import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Check,
  Clock,
  Flame,
  MapPin,
  Minus,
  Navigation,
  Phone,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  UtensilsCrossed,
  X
} from 'lucide-react';
import {
  BRAND_IMAGES,
  CRAFTSMANSHIP_PILLARS,
  DECEMBER_LAUNCH_GALLERY,
  LOCATIONS_BAQ,
  MENU_ITEMS,
  LocationBranch,
  MenuItem
} from './data/killaData';
import { KillaLambEmblem, ResilientImage } from './components/BrandVisuals';
import { LaCorderiaLocationsShowcase } from './components/LaCorderiaLocations';

interface CartEntry {
  item: MenuItem;
  quantity: number;
  selectedSauce: string;
}

export default function App() {
  // Interactive Menu Filter State
  const [menuFilter, setMenuFilter] = useState<'all' | 'perros-autor' | 'edicion-diciembre' | 'cortes-parrilla' | 'combos-killa'>('all');
  const [selectedSauces, setSelectedSauces] = useState<Record<string, string>>(() =>
    MENU_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.customizableSauces[0] }), {})
  );

  // Interactive December Gallery & Locations State
  const [activeGalleryId, setActiveGalleryId] = useState<string>(DECEMBER_LAUNCH_GALLERY[0].id);
  const [locationFilter, setLocationFilter] = useState<'all' | 'mall' | 'popular'>('all');
  const [selectedLocationId, setSelectedLocationId] = useState<string>('cc-buenavista');

  // Cart & Order Reservation Drawer State
  const [cart, setCart] = useState<CartEntry[]>([
    {
      item: MENU_ITEMS[0],
      quantity: 1,
      selectedSauce: MENU_ITEMS[0].customizableSauces[0]
    }
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [orderMode, setOrderMode] = useState<'pickup' | 'delivery' | 'vip-december'>('pickup');
  const [pickupBranchId, setPickupBranchId] = useState<string>('cc-buenavista');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [decemberDate, setDecemberDate] = useState('2026-12-07');
  const [orderConfirmedCode, setOrderConfirmedCode] = useState<string | null>(null);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const filteredMenu = useMemo(() => {
    if (menuFilter === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === menuFilter);
  }, [menuFilter]);

  const filteredLocations = useMemo(() => {
    if (locationFilter === 'all') return LOCATIONS_BAQ;
    return LOCATIONS_BAQ.filter((loc) => loc.zoneType === locationFilter);
  }, [locationFilter]);

  const activeLocation: LocationBranch = useMemo(() => {
    return LOCATIONS_BAQ.find((l) => l.id === selectedLocationId) || LOCATIONS_BAQ[0];
  }, [selectedLocationId]);

  const activeGallerySpot = useMemo(() => {
    return DECEMBER_LAUNCH_GALLERY.find((g) => g.id === activeGalleryId) || DECEMBER_LAUNCH_GALLERY[0];
  }, [activeGalleryId]);

  const totalItemsInCart = useMemo(
    () => cart.reduce((acc, entry) => acc + entry.quantity, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () => cart.reduce((acc, entry) => acc + entry.item.price * entry.quantity, 0),
    [cart]
  );

  const handleAddToCart = (item: MenuItem) => {
    const chosenSauce = selectedSauces[item.id] || item.customizableSauces[0];
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (e) => e.item.id === item.id && e.selectedSauce === chosenSauce
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [...prev, { item, quantity: 1, selectedSauce: chosenSauce }];
    });
    setJustAddedId(item.id);
    setOrderConfirmedCode(null);
    setTimeout(() => setJustAddedId(null), 1400);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const updated = [...prev];
      const nextQty = updated[index].quantity + delta;
      if (nextQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index] = { ...updated[index], quantity: nextQty };
      return updated;
    });
  };

  const handleSelectBranchForPickup = (branchId: string) => {
    setPickupBranchId(branchId);
    setOrderMode('pickup');
    setIsDrawerOpen(true);
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) return;
    const randomCode = `KILLA-DEC-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderConfirmedCode(randomCode);
  };

  const formatCOP = (amount: number) => {
    return `$${amount.toLocaleString('es-CO')}`;
  };

  return (
    <div className="min-h-screen bg-[#0D0807] text-[#FBF7F0] flex flex-col">
      {/* STRICT 3-ZONE TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-8 px-6 lg:px-12 py-4 bg-[#0D0807]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="font-display text-lg lg:text-xl font-bold tracking-wider text-[#D4AF37] whitespace-nowrap shrink-0"
        >
          LOS PERROS DE CORDERO KILLA
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#E5DEC9]">
          <a
            href="#lanzamiento-diciembre"
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
          >
            Lanzamiento Diciembre
          </a>
          <a
            href="#menu-gourmet"
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
          >
            Menú Gourmet
          </a>
          <a
            href="#sedes-barranquilla"
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
          >
            Sedes Barranquilla
          </a>
          <a
            href="#origen-cordero"
            className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
          >
            Nuestra Escuela
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="px-4 py-2 text-xs font-semibold text-[#0D0807] bg-gradient-to-r from-[#D4AF37] to-[#F3C663] rounded-lg hover:brightness-110 transition-all whitespace-nowrap shrink-0 font-mono-num"
          >
            Reservar & Pedido ({totalItemsInCart})
          </button>
        </div>
      </header>

      {/* SECTION 1: HERO & DECEMBER LAUNCH CAMPAIGN */}
      <main id="inicio" className="flex-1">
        <section className="relative max-w-[1360px] mx-auto px-6 lg:px-12 pt-8 pb-16 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Brand Story & Primary CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF37] tracking-wide mb-5">
                  <span>100% Cordero Gourmet</span>
                  <span aria-hidden="true">·</span>
                  <span>Gran Lanzamiento Diciembre en Barranquilla</span>
                  <span aria-hidden="true">·</span>
                  <span>6 Ubicaciones Oficiales</span>
                </div>

                <h1
                  className="font-display font-bold text-[#FBF7F0] tracking-tight leading-[1.12] mb-6"
                  style={{
                    fontSize: 'clamp(2.25rem, 3.8vw, 3.65rem)',
                    textWrap: 'balance'
                  }}
                >
                  La Alta Charcutería de Cordero Toma Barranquilla Este Diciembre.
                </h1>

                <p className="text-base lg:text-[17px] text-[#D8CFC2] leading-relaxed mb-8 max-w-[62ch]">
                  Inspirados en la maestría ovina de alta escuela, nacimos al fuego de la plancha en el{' '}
                  <strong className="text-[#FBF7F0] font-semibold">
                    Festival del Perro Caliente de la Plaza de la Paz
                  </strong>{' '}
                  y este diciembre inauguramos simultáneamente nuestras islas de lujo en{' '}
                  <strong className="text-[#D4AF37] font-semibold">
                    Buenavista, Viva, Alegra, Único y el Gran Malecón del Río
                  </strong>
                  .
                </p>
              </div>

              {/* Action Row & Authenticity Seal */}
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#sedes-barranquilla"
                    className="px-6 py-3.5 text-sm font-semibold text-[#0D0807] bg-gradient-to-r from-[#D4AF37] via-[#F3C663] to-[#D4AF37] rounded-lg hover:brightness-110 transition-all whitespace-nowrap shrink-0"
                  >
                    Ver Ruta de Aperturas Diciembre
                  </a>
                  <a
                    href="#menu-gourmet"
                    className="px-6 py-3.5 text-sm font-semibold text-[#FBF7F0] bg-[#1C0E0D] border border-[#D4AF37]/35 rounded-lg hover:border-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
                  >
                    Explorar Carta de Cordero
                  </a>
                </div>

                {/* Emblem Lockup with Editorial Summary */}
                <div className="pt-6 border-t border-[#D4AF37]/20 flex items-center gap-4">
                  <KillaLambEmblem className="w-14 h-14 shrink-0" />
                  <div>
                    <p className="font-display text-sm font-bold text-[#FBF7F0]">
                      Sello Imperial Killa · De la Plaza a los Malls VIP
                    </p>
                    <p className="text-xs text-[#BFB3A4] mt-0.5 leading-relaxed">
                      Salchichas de 140g elaboradas 100% con pierna de cordero seleccionada, pan brioche a la mantequilla de romero y chuletas selladas en vivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dual Visual Showcase (Real Festival Cart + December Mall Boutique) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative flex-1 min-h-[360px] lg:min-h-[440px] rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#170C0B]">
                <ResilientImage
                  src={BRAND_IMAGES.buenavistaMallBoutique}
                  alt="Boutique Imperial Los Perros de Cordero Killa en Centro Comercial Buenavista en Diciembre"
                  className="w-full h-full object-cover"
                  fallbackTitle="Boutique Imperial C.C. Buenavista"
                />
                {/* Measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#F3C663] mb-1.5">
                      <span>Inauguración Diciembre</span>
                      <span aria-hidden="true">·</span>
                      <span>C.C. Buenavista · Viva · Alegra · Único</span>
                    </div>
                    <p className="font-display text-lg sm:text-xl font-bold text-[#FBF7F0]">
                      Islas Boutique con Plancha Central 360°
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLocationId('cc-buenavista');
                      document.getElementById('sedes-barranquilla')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-[#0D0807] bg-[#D4AF37] rounded-md hover:bg-[#F3C663] transition-colors whitespace-nowrap shrink-0"
                  >
                    Ver Sedes Mall
                  </button>
                </div>
              </div>

              {/* Secondary Strip: Original Plaza de la Paz & Signature Hot Dog */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden border border-[#D4AF37]/25 bg-[#170C0B] group">
                  <ResilientImage
                    src={BRAND_IMAGES.plazaDeLaPazOriginal}
                    alt="Carro Insignia Real Los Perros de Cordero Killa en el Festival del Perro Caliente Plaza de la Paz"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    fallbackTitle="Carro Insignia Plaza de la Paz"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 inset-x-4">
                    <p className="text-[11px] text-[#D4AF37]">Nuestro Origen Real · Centro Histórico</p>
                    <p className="font-display text-sm font-bold text-[#FBF7F0]">
                      Carro Insignia Plaza de la Paz
                    </p>
                  </div>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden border border-[#D4AF37]/25 bg-[#170C0B] group">
                  <ResilientImage
                    src={BRAND_IMAGES.maleconDecemberLaunch}
                    alt="Terraza Brisas de Diciembre en el Gran Malecón del Río Barranquilla"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    fallbackTitle="Gran Malecón del Río Diciembre"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 inset-x-4">
                    <p className="text-[11px] text-[#D4AF37]">Brisas de Diciembre · Vía 40</p>
                    <p className="font-display text-sm font-bold text-[#FBF7F0]">
                      Terraza Gran Malecón del Río
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width 4-Column Quantitative Proof Bar below the Hero Split */}
          <div className="mt-12 pt-8 border-t border-[#D4AF37]/20 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="font-mono-num text-2xl lg:text-3xl font-bold text-[#D4AF37]">100% Ovino</p>
              <p className="text-xs text-[#C8BBAE] mt-1">
                Pierna y paleta de cordero joven sin mezclas industriales
              </p>
            </div>
            <div>
              <p className="font-mono-num text-2xl lg:text-3xl font-bold text-[#FBF7F0]">6 Sedes Killa</p>
              <p className="text-xs text-[#C8BBAE] mt-1">
                Buenavista · Viva · Alegra · Único · Plaza de la Paz · Malecón
              </p>
            </div>
            <div>
              <p className="font-mono-num text-2xl lg:text-3xl font-bold text-[#D4AF37]">1 – 15 Dic</p>
              <p className="text-xs text-[#C8BBAE] mt-1">
                Calendario oficial de inauguraciones y Noche de Velitas
              </p>
            </div>
            <div>
              <p className="font-mono-num text-2xl lg:text-3xl font-bold text-[#FBF7F0]">140g – 300g</p>
              <p className="text-xs text-[#C8BBAE] mt-1">
                Gramaje real por salchicha de autor o porción de chuletas
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: GALERÍA DE LOCACIONES & LANZAMIENTO DE DICIEMBRE */}
        <section
          id="lanzamiento-diciembre"
          className="py-16 lg:py-20 bg-[#120A09] border-y border-[#D4AF37]/15"
        >
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] mb-2">
                  <span>Temporada Decembrina en La Arenosa</span>
                  <span aria-hidden="true">·</span>
                  <span>Arquitectura & Formatos Killa</span>
                </div>
                <h2
                  className="font-display text-2xl lg:text-4xl font-bold text-[#FBF7F0]"
                  style={{ textWrap: 'balance' }}
                >
                  Visualiza Nuestras Locaciones de Lanzamiento en Diciembre
                </h2>
              </div>

              {/* Interactive Segmented Selector for the 4 Distinct Visual Concepts */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0D0807] border border-[#D4AF37]/25 rounded-lg">
                {DECEMBER_LAUNCH_GALLERY.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveGalleryId(spot.id)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      activeGalleryId === spot.id
                        ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                        : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
                    }`}
                  >
                    {spot.format}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Spotlight Viewer + 4-Card Architectural Strip */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#0D0807]">
                <ResilientImage
                  src={activeGallerySpot.imageUrl}
                  alt={activeGallerySpot.title}
                  className="w-full h-full object-cover"
                  fallbackTitle={activeGallerySpot.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#F3C663] mb-2">
                    <span>{activeGallerySpot.locationTag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeGallerySpot.dateTag}</span>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-[#FBF7F0] mb-2">
                    {activeGallerySpot.title}
                  </h3>
                  <p className="text-sm text-[#E5DEC9] max-w-2xl leading-relaxed">
                    {activeGallerySpot.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Thumbnails & December Launch Schedule */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                {DECEMBER_LAUNCH_GALLERY.map((spot, idx) => {
                  const isSelected = spot.id === activeGalleryId;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setActiveGalleryId(spot.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${
                        isSelected
                          ? 'bg-[#231012] border-[#D4AF37] shadow-lg'
                          : 'bg-[#170C0B] border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 border border-[#D4AF37]/25">
                        <ResilientImage
                          src={spot.imageUrl}
                          alt={spot.title}
                          className="w-full h-full object-cover"
                          fallbackTitle={spot.format}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[11px] text-[#D4AF37] mb-1">
                          <span className="font-mono-num">0{idx + 1}.</span>
                          <span className="truncate">{spot.dateTag}</span>
                        </div>
                        <p className="font-display text-sm font-bold text-[#FBF7F0] truncate">
                          {spot.title}
                        </p>
                        <p className="text-xs text-[#BFB3A4] line-clamp-2 mt-1">
                          {spot.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MENÚ GOURMET DE CORDERO (3-COLUMN LUXURY GRID) */}
        <section id="menu-gourmet" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] mb-2">
                <span>Carta Oficial de Lanzamiento</span>
                <span aria-hidden="true">·</span>
                <span>Embutidos Artesanales & Plancha en Vivo</span>
              </div>
              <h2
                className="font-display text-2xl lg:text-4xl font-bold text-[#FBF7F0]"
                style={{ textWrap: 'balance' }}
              >
                Alta Gastronomía de Cordero en Formato Urbano
              </h2>
            </div>

            {/* Interactive Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#160C0B] border border-[#D4AF37]/20 rounded-lg">
              {[
                { id: 'all', label: 'Toda la Carta (6)' },
                { id: 'perros-autor', label: 'Perros de Autor' },
                { id: 'edicion-diciembre', label: 'Edición Diciembre' },
                { id: 'cortes-parrilla', label: 'Chuletas a la Plancha' },
                { id: 'combos-killa', label: 'Box Novenas' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMenuFilter(tab.id as typeof menuFilter)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    menuFilter === tab.id
                      ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                      : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Product Grid adhering to E-Commerce & Retail guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => {
              const currentSauce = selectedSauces[item.id] || item.customizableSauces[0];
              const isAdded = justAddedId === item.id;

              return (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-xl bg-[#150B0A] border border-[#D4AF37]/20 overflow-hidden hover:-translate-y-0.5 hover:border-[#D4AF37]/50 transition-all duration-200"
                >
                  <div>
                    {/* Product Imagery Slot */}
                    <div className="relative h-60 w-full bg-[#1C0E0C] overflow-hidden border-b border-[#D4AF37]/15">
                      <ResilientImage
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        fallbackTitle={item.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A] via-transparent to-black/30" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#F3C663]">
                        <span>{item.visualProfile.cutType}</span>
                        <span className="font-mono-num">{item.weightGrams}g</span>
                      </div>
                    </div>

                    {/* Product Body */}
                    <div className="p-6">
                      {/* Clean unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#D4AF37] mb-2">
                        <span>{item.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.highlightNote}</span>
                      </div>

                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="font-display text-lg font-bold text-[#FBF7F0]">
                          {item.name}
                        </h3>
                        <span className="font-mono-num text-base font-bold text-[#D4AF37] shrink-0">
                          {formatCOP(item.price)}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-[#E5DEC9] mb-3">{item.subtitle}</p>

                      <p className="text-sm text-[#BFB3A4] leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Clean Ingredient List */}
                      <div className="pt-4 border-t border-[#D4AF37]/15 mb-5">
                        <p className="text-xs text-[#C8BBAE] mb-2">Componentes en Plancha:</p>
                        <p className="text-xs text-[#E5DEC9] leading-relaxed">
                          {item.ingredients.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Sauce Selector & Add to Order Button */}
                  <div className="px-6 pb-6 pt-2 space-y-3">
                    <div>
                      <label
                        htmlFor={`sauce-${item.id}`}
                        className="block text-[11px] text-[#C8BBAE] mb-1.5"
                      >
                        Elige Salsa de Autor Incluida:
                      </label>
                      <select
                        id={`sauce-${item.id}`}
                        value={currentSauce}
                        onChange={(e) =>
                          setSelectedSauces((prev) => ({ ...prev, [item.id]: e.target.value }))
                        }
                        className="w-full px-3 py-2 text-xs bg-[#0D0807] text-[#FBF7F0] border border-[#D4AF37]/30 rounded-lg focus:outline-none focus:border-[#D4AF37]"
                      >
                        {item.customizableSauces.map((sauce) => (
                          <option key={sauce} value={sauce}>
                            {sauce}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-3 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 ${
                        isAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-gradient-to-r from-[#D4AF37] to-[#F3C663] text-[#0D0807] hover:brightness-110'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Agregado a tu Pedido</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Agregar al Pedido · {formatCOP(item.price)}</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION 3.5: LAS 5 UBICACIONES DE LA CORDERÍA EN BARRANQUILLA (CON MAPA INTEGRADO Y GOOGLE MAPS) */}
        <LaCorderiaLocationsShowcase
          onSelectForOrder={(mallName) => {
            const matched = LOCATIONS_BAQ.find((l) =>
              l.name.toLowerCase().includes(mallName.split(' ')[1]?.toLowerCase() || '')
            );
            if (matched) {
              setPickupBranchId(matched.id);
            }
            setOrderMode('pickup');
            setIsDrawerOpen(true);
          }}
        />

        {/* SECTION 4: RADAR INTERACTIVO DE SEDES EN BARRANQUILLA (MALLS VIP & PUNTOS POPULARES) */}
        <section
          id="sedes-barranquilla"
          className="py-16 lg:py-24 bg-[#0D0807] border-t border-[#D4AF37]/20"
        >
          <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] mb-2">
                  <span>Radar de Operación en Tiempo Real</span>
                  <span aria-hidden="true">·</span>
                  <span>Centros Comerciales & Plazas Populares</span>
                </div>
                <h2
                  className="font-display text-2xl lg:text-4xl font-bold text-[#FBF7F0]"
                  style={{ textWrap: 'balance' }}
                >
                  Selector Rápido de Sedes & Reserva de Turno en Plancha
                </h2>
              </div>

              {/* Filter by Mall vs Popular Plaza */}
              <div className="flex items-center gap-1.5 p-1.5 bg-[#120A09] border border-[#D4AF37]/25 rounded-lg">
                <button
                  type="button"
                  onClick={() => setLocationFilter('all')}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    locationFilter === 'all'
                      ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                      : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
                  }`}
                >
                  Todas las Sedes (6)
                </button>
                <button
                  type="button"
                  onClick={() => setLocationFilter('mall')}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    locationFilter === 'mall'
                      ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                      : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
                  }`}
                >
                  Centros Comerciales (Buenavista · Viva · Alegra · Único)
                </button>
                <button
                  type="button"
                  onClick={() => setLocationFilter('popular')}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    locationFilter === 'popular'
                      ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                      : 'text-[#D8CFC2] hover:text-[#FBF7F0]'
                  }`}
                >
                  Plazas Populares (Plaza de la Paz · Malecón)
                </button>
              </div>
            </div>

            {/* Split View: Left Interactive List + Right Active Location Detail & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left 5 Cols: Branch Cards List */}
              <div className="lg:col-span-5 flex flex-col gap-3.5">
                {filteredLocations.map((branch) => {
                  const isActive = branch.id === activeLocation.id;
                  return (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setSelectedLocationId(branch.id)}
                      className={`w-full text-left p-5 rounded-xl border transition-all ${
                        isActive
                          ? 'bg-[#241013] border-[#D4AF37] shadow-lg'
                          : 'bg-[#160C0B] border-[#D4AF37]/15 hover:border-[#D4AF37]/45'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs text-[#D4AF37] mb-1">
                        <span>
                          {branch.zoneLabel} · {branch.neighborhood}
                        </span>
                        <span className="font-mono-num">~{branch.averageWaitMins} min</span>
                      </div>
                      <h3 className="font-display text-base font-bold text-[#FBF7F0] mb-1">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-[#E5DEC9] mb-2">{branch.address}</p>
                      <div className="flex items-center justify-between text-[11px] text-[#F3C663] pt-2 border-t border-[#D4AF37]/15">
                        <span>{branch.decemberOpeningDate}</span>
                        <span className="font-semibold">Ver Sede →</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right 7 Cols: Active Location Photography, Interactive Barranquilla Radar & Fast Reservation */}
              <div className="lg:col-span-7 rounded-xl bg-[#160C0B] border border-[#D4AF37]/30 overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Branch Architectural Image + Map Overlay Toggle */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden border-b border-[#D4AF37]/20">
                    <ResilientImage
                      src={activeLocation.imageUrl}
                      alt={activeLocation.name}
                      className="w-full h-full object-cover"
                      fallbackTitle={activeLocation.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160C0B] via-black/35 to-transparent" />

                    {/* Mini Barranquilla Coordinate Overlay */}
                    <div className="absolute top-4 right-4 bg-[#0D0807]/90 backdrop-blur-md border border-[#D4AF37]/35 rounded-lg px-3.5 py-2 text-xs">
                      <p className="text-[#D4AF37] font-semibold">{activeLocation.neighborhood}</p>
                      <p className="font-mono-num text-[11px] text-[#C8BBAE]">
                        {activeLocation.coordinates.lat} · {activeLocation.coordinates.lng}
                      </p>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#F3C663] mb-1">
                        <span>{activeLocation.zoneLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{activeLocation.decemberOpeningDate}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[#FBF7F0]">
                        {activeLocation.name}
                      </h3>
                    </div>
                  </div>

                  {/* Branch Detailed Specifications */}
                  <div className="p-6 lg:p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs text-[#D4AF37] mb-1">Ubicación Exacta & Formato</p>
                        <p className="text-sm font-semibold text-[#FBF7F0]">
                          {activeLocation.address}
                        </p>
                        <p className="text-xs text-[#BFB3A4] mt-1">{activeLocation.spotDetail}</p>
                      </div>

                      <div>
                        <p className="text-xs text-[#D4AF37] mb-1">Evento Especial de Diciembre</p>
                        <p className="text-sm font-semibold text-[#FBF7F0]">
                          {activeLocation.launchEventTitle}
                        </p>
                        <p className="text-xs text-[#BFB3A4] mt-1">
                          Especialidad: {activeLocation.featuredSpecialty}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Barranquilla Schematic Map showing all 6 pins */}
                    <div className="p-4 rounded-xl bg-[#0D0807] border border-[#D4AF37]/20">
                      <div className="flex items-center justify-between text-xs text-[#C8BBAE] mb-3">
                        <span>Mapa Esquemático de Barranquilla (Norte a Sur & Río Magdalena)</span>
                        <span className="font-mono-num text-[#D4AF37]">
                          Capacidad: {activeLocation.capacitySeats} puestos
                        </span>
                      </div>
                      <div className="relative h-36 w-full rounded-lg bg-[#150C0B] border border-[#D4AF37]/15 overflow-hidden">
                        {/* Stylized Río Magdalena along the eastern/northern edge */}
                        <svg
                          viewBox="0 0 400 140"
                          className="w-full h-full opacity-50"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M270 0 C310 35, 345 75, 390 140 L400 140 L400 0 Z"
                            fill="#1A2C38"
                          />
                          <path
                            d="M270 0 C310 35, 345 75, 390 140"
                            stroke="#D4AF37"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            fill="none"
                          />
                          <line x1="40" y1="30" x2="320" y2="30" stroke="#D4AF37" strokeOpacity="0.15" />
                          <line x1="40" y1="70" x2="330" y2="70" stroke="#D4AF37" strokeOpacity="0.15" />
                          <line x1="40" y1="110" x2="340" y2="110" stroke="#D4AF37" strokeOpacity="0.15" />
                        </svg>

                        {LOCATIONS_BAQ.map((loc) => {
                          const selected = loc.id === activeLocation.id;
                          return (
                            <button
                              key={loc.id}
                              type="button"
                              onClick={() => setSelectedLocationId(loc.id)}
                              style={{
                                left: `${loc.coordinates.xPercent}%`,
                                top: `${loc.coordinates.yPercent}%`
                              }}
                              className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded text-[11px] font-medium transition-all whitespace-nowrap ${
                                selected
                                  ? 'bg-[#D4AF37] text-[#0D0807] font-bold z-10 scale-105 shadow-md'
                                  : 'bg-[#221112]/90 text-[#E5DEC9] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                              }`}
                            >
                              {loc.name.split('—')[0].trim()}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Hours & Amenities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#D4AF37]/15 text-xs">
                      <div>
                        <p className="text-[#D4AF37] mb-1">Horarios Diciembre:</p>
                        <p className="text-[#E5DEC9] font-mono-num">{activeLocation.hours}</p>
                        <p className="text-[#F3C663] font-mono-num mt-0.5">
                          {activeLocation.weekendHours}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#D4AF37] mb-1">Servicios de la Sede:</p>
                        <p className="text-[#E5DEC9] leading-relaxed">
                          {activeLocation.amenities.join(' · ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar for Selected Branch */}
                <div className="px-6 lg:px-8 py-4 bg-[#1E0E0F] border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs">
                    <span className="text-[#C8BBAE]">Línea Directa Sede: </span>
                    <span className="font-mono-num text-[#FBF7F0] font-semibold">
                      {activeLocation.phoneExtension}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectBranchForPickup(activeLocation.id)}
                    className="px-5 py-2.5 text-xs font-semibold text-[#0D0807] bg-gradient-to-r from-[#D4AF37] to-[#F3C663] rounded-lg hover:brightness-110 transition-all whitespace-nowrap shrink-0"
                  >
                    Programar Pedido o Reserva en Esta Sede
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ESCUELA DE ALTA CHARCUTERÍA & IDENTIDAD KILLA */}
        <section id="origen-cordero" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-6 lg:px-12 border-t border-[#D4AF37]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] mb-3">
                <span>Filosofía Gastronómica</span>
                <span aria-hidden="true">·</span>
                <span>Inspiración Ovina & Talento Local</span>
              </div>
              <h2
                className="font-display text-2xl lg:text-4xl font-bold text-[#FBF7F0] mb-5"
                style={{ textWrap: 'balance' }}
              >
                Por Qué el Cordero Gourmet Revoluciona el Perro Caliente Barranquillero
              </h2>
              <p className="text-sm lg:text-base text-[#D8CFC2] leading-relaxed mb-6">
                En <strong className="text-[#FBF7F0]">Los Perros de Cordero Killa · La Cordería</strong> elevamos el ícono del street food costeño utilizando exclusivamente carne de cordero joven seleccionada, logrando una textura jugosa, aroma noble a la plancha y un perfil nutricional superior.
              </p>

              <div className="p-5 rounded-xl bg-[#160C0B] border border-[#D4AF37]/25 flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#D4AF37]/30">
                  <ResilientImage
                    src={BRAND_IMAGES.plazaDeLaPazOriginal}
                    alt="Chef preparando Perro de Cordero Killa en Plaza de la Paz"
                    className="w-full h-full object-cover"
                    fallbackTitle="Origen Plaza de la Paz"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[#D4AF37]">
                    Formación Técnica & Orgullo Caribe
                  </p>
                  <p className="text-xs text-[#E5DEC9] mt-1 leading-relaxed">
                    Manipulación impecable de alimentos, cadena de frío controlada y asado al minuto frente al comensal tanto en nuestro carro de la Plaza de la Paz como en Buenavista y Viva.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-6">
              {CRAFTSMANSHIP_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="p-6 lg:p-7 rounded-xl bg-[#150B0A] border border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-num text-sm font-bold text-[#D4AF37]">
                        {pillar.index}.
                      </span>
                      <h3 className="font-display text-lg font-bold text-[#FBF7F0]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#BFB3A4] leading-relaxed max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <span className="font-mono-num text-xs text-[#F3C663]">{pillar.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* QUIET LUXURY FOOTER WITH CREDITS TO DANIEL MANZANERA */}
      <footer className="bg-[#090504] border-t border-[#D4AF37]/20 py-12 px-6 lg:px-12">
        <div className="max-w-[1360px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <KillaLambEmblem className="w-12 h-12 shrink-0" />
              <div>
                <p className="font-display text-base font-bold text-[#D4AF37]">
                  LOS PERROS DE CORDERO KILLA · LA CORDERÍA
                </p>
                <p className="text-xs text-[#BFB3A4] mt-0.5">
                  100% Cordero Gourmet · Barranquilla, Atlántico, Colombia
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#C8BBAE]">
              <a href="#lanzamiento-diciembre" className="hover:text-[#D4AF37] transition-colors">
                Lanzamiento Diciembre
              </a>
              <a href="#menu-gourmet" className="hover:text-[#D4AF37] transition-colors">
                Carta Gourmet
              </a>
              <a href="#ubicaciones-la-corderia" className="hover:text-[#D4AF37] transition-colors">
                5 Ubicaciones & Google Maps
              </a>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="text-[#D4AF37] hover:underline font-semibold"
              >
                Reservas & Pedidos Diciembre
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#BFB3A4]">
            <p>
              © {new Date().getFullYear()} Los Perros de Cordero Killa · La Cordería Barranquilla. Todos los derechos reservados.
            </p>
            <p className="text-[#E5DEC9]">
              Arquitectura Web, Diseño & Desarrollo por{' '}
              <strong className="font-display text-[#D4AF37] tracking-wide">
                Daniel Manzanera
              </strong>
            </p>
          </div>
        </div>
      </footer>

      {/* SLIDE-OVER CART & DECEMBER LAUNCH RESERVATION DRAWER */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#120A09] border-l border-[#D4AF37]/30 h-full flex flex-col justify-between overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#D4AF37]">Fast-Pass & Domicilio Gourmet</p>
                <h2 className="font-display text-xl font-bold text-[#FBF7F0]">
                  Tu Pedido & Reserva Diciembre
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 text-[#C8BBAE] hover:text-[#FBF7F0] rounded-lg"
                aria-label="Cerrar carrito"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-6 flex-1 space-y-6 overflow-y-auto">
              {/* Mode Selector */}
              <div>
                <p className="text-xs text-[#C8BBAE] mb-2">Modalidad de Experiencia:</p>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0D0807] border border-[#D4AF37]/20 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setOrderMode('pickup')}
                    className={`py-2 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      orderMode === 'pickup'
                        ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                        : 'text-[#D8CFC2]'
                    }`}
                  >
                    Recoger en Sede
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderMode('vip-december')}
                    className={`py-2 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      orderMode === 'vip-december'
                        ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                        : 'text-[#D8CFC2]'
                    }`}
                  >
                    Pase VIP Diciembre
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderMode('delivery')}
                    className={`py-2 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      orderMode === 'delivery'
                        ? 'bg-[#D4AF37] text-[#0D0807] font-semibold'
                        : 'text-[#D8CFC2]'
                    }`}
                  >
                    Domicilio Killa
                  </button>
                </div>
              </div>

              {/* Itemized List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#C8BBAE]">
                  <span>Selección Gourmet ({totalItemsInCart} productos)</span>
                  {cart.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setCart([])}
                      className="text-xs text-[#D4AF37] hover:underline"
                    >
                      Vaciar selección
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="p-6 rounded-xl bg-[#180D0C] border border-[#D4AF37]/15 text-center">
                    <p className="text-sm text-[#E5DEC9] mb-2">Tu bandeja está vacía</p>
                    <p className="text-xs text-[#BFB3A4] mb-4">
                      Agrega cualquiera de nuestros perros 100% cordero o chuletas a la plancha.
                    </p>
                    <button
                      type="button"
                      onClick={() => setCart([{ item: MENU_ITEMS[0], quantity: 1, selectedSauce: MENU_ITEMS[0].customizableSauces[0] }])}
                      className="px-4 py-2 text-xs font-semibold text-[#0D0807] bg-[#D4AF37] rounded-lg"
                    >
                      Agregar El Killa Imperial Gold
                    </button>
                  </div>
                ) : (
                  cart.map((entry, idx) => (
                    <div
                      key={`${entry.item.id}-${entry.selectedSauce}`}
                      className="p-3.5 rounded-xl bg-[#180D0C] border border-[#D4AF37]/20 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-sm font-bold text-[#FBF7F0] truncate">
                          {entry.item.name}
                        </p>
                        <p className="text-xs text-[#D4AF37] truncate">
                          Salsa: {entry.selectedSauce}
                        </p>
                        <p className="font-mono-num text-xs text-[#E5DEC9] mt-1">
                          {formatCOP(entry.item.price * entry.quantity)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleUpdateQuantity(idx, -1)}
                          className="w-7 h-7 rounded bg-[#0D0807] border border-[#D4AF37]/30 flex items-center justify-center text-[#FBF7F0]"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono-num text-xs font-bold w-5 text-center">
                          {entry.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleUpdateQuantity(idx, 1)}
                          className="w-7 h-7 rounded bg-[#0D0807] border border-[#D4AF37]/30 flex items-center justify-center text-[#FBF7F0]"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Branch & Customer Details Form */}
              <form id="killa-order-form" onSubmit={handleConfirmOrder} className="space-y-4">
                <div>
                  <label className="block text-xs text-[#C8BBAE] mb-1">
                    Sede Killa en Barranquilla:
                  </label>
                  <select
                    value={pickupBranchId}
                    onChange={(e) => setPickupBranchId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0D0807] text-[#FBF7F0] border border-[#D4AF37]/30 rounded-lg"
                  >
                    {LOCATIONS_BAQ.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.decemberOpeningDate})
                      </option>
                    ))}
                  </select>
                </div>

                {orderMode === 'vip-december' && (
                  <div>
                    <label className="block text-xs text-[#C8BBAE] mb-1">
                      Fecha de Visita / Evento de Lanzamiento Diciembre:
                    </label>
                    <input
                      type="date"
                      value={decemberDate}
                      min="2026-12-01"
                      max="2026-12-31"
                      onChange={(e) => setDecemberDate(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#0D0807] text-[#FBF7F0] border border-[#D4AF37]/30 rounded-lg font-mono-num"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#C8BBAE] mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Vives / Andrea"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#0D0807] text-[#FBF7F0] border border-[#D4AF37]/30 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#C8BBAE] mb-1">Celular WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="300 000 0000"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#0D0807] text-[#FBF7F0] border border-[#D4AF37]/30 rounded-lg font-mono-num"
                    />
                  </div>
                </div>

                {orderMode === 'delivery' && (
                  <div>
                    <label className="block text-xs text-[#C8BBAE] mb-1">
                      Dirección en Barranquilla (Riomar, Alto Prado, Recreo, etc.) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Calle 94 # 56 - 20 Apto 402"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#0D0807] text-[#FBF7F0] border border-[#D4AF37]/30 rounded-lg"
                    />
                  </div>
                )}
              </form>

              {/* Order Confirmation Receipt Banner */}
              {orderConfirmedCode && (
                <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 space-y-1.5">
                  <p className="text-xs font-semibold text-emerald-300">
                    Orden Confirmada — Código #{orderConfirmedCode}
                  </p>
                  <p className="text-xs text-[#E5DEC9]">
                    Titular: <strong className="text-white">{customerName}</strong> · Sede:{' '}
                    {LOCATIONS_BAQ.find((l) => l.id === pickupBranchId)?.name}
                  </p>
                  <p className="text-[11px] text-emerald-200/80">
                    Tu comanda de cordero gourmet ya está registrada en plancha sin fila.
                  </p>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-[#D4AF37]/20 bg-[#0D0807] space-y-4">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[#C8BBAE]">
                  <span>Subtotal Cordero Gourmet</span>
                  <span className="font-mono-num">{formatCOP(cartSubtotal)}</span>
                </div>
                <div className="flex justify-between text-[#C8BBAE]">
                  <span>Servicio Fast-Pass / Empaque Térmico Dorado</span>
                  <span className="font-mono-num text-[#D4AF37]">Sin Costo Diciembre</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#FBF7F0] pt-2 border-t border-[#D4AF37]/15">
                  <span>Total a Pagar (Contraentrega / QR en Sede)</span>
                  <span className="font-mono-num text-[#D4AF37]">{formatCOP(cartSubtotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                form="killa-order-form"
                disabled={cart.length === 0}
                className="w-full py-3.5 px-6 rounded-lg text-xs font-semibold text-[#0D0807] bg-gradient-to-r from-[#D4AF37] via-[#F3C663] to-[#D4AF37] hover:brightness-110 disabled:opacity-40 transition-all"
              >
                Confirmar Reserva & Pedido Diciembre
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
