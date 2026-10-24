'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CANONICAL_CHARACTERS } from '@/lib/data';
import { Zap, ChevronLeft, ChevronRight, Sparkles, ExternalLink, X } from 'lucide-react';
import OmnitrixLoader, { AlienChoice } from '@/components/OmnitrixLoader';

export default function OmnitrixDial() {
  const aliens = CANONICAL_CHARACTERS.filter(c => c.role === 'alien');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isActivating, setIsActivating] = useState(false);
  const [showTransformationModal, setShowTransformationModal] = useState(false);

  const currentAlien = aliens[selectedIndex] || aliens[0];

  const alienChoiceMap: Record<string, AlienChoice> = {
    'swampfire': 'swampfire',
    'humungousaur': 'humungousaur',
    'big-chill': 'big_chill',
    'chromastone': 'chromastone',
    'echo-echo': 'echo_echo',
    'alien-x': 'alienx',
    'heatblast': 'swampfire',
    'four-arms': 'humungousaur',
    'diamondhead': 'chromastone',
    'xlr8': 'big_chill',
  };

  const currentAlienChoice: AlienChoice | undefined = alienChoiceMap[currentAlien.slug] || 'swampfire';

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % aliens.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + aliens.length) % aliens.length);
  };

  const handleActivate = () => {
    setIsActivating(true);
    setTimeout(() => {
      setIsActivating(false);
      setShowTransformationModal(true);
    }, 400);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl glass-panel-elevated p-6 sm:p-8 hud-border overflow-hidden">
      
      {/* Sci-fi top status HUD */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1C271F]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A3FF12] animate-ping" />
          <span className="text-xs font-mono uppercase text-[#A3FF12] tracking-widest">
            OMNITRIX CODON STREAM INTERFACE
          </span>
        </div>
        <div className="text-xs font-mono text-[#AAB5AD] bg-[#101512] px-3 py-1 rounded-full border border-[#1C271F]">
          CHOSEN ALIEN: <span className="text-[#E9EFE9] font-bold">{selectedIndex + 1} / {aliens.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: The Interactive Omnitrix Dial */}
        <div className="md:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            
            {/* Outer Ring with Tachyon Indicators */}
            <div className={`absolute inset-0 rounded-full border-4 border-[#1C271F] transition-all duration-700 ${
              isActivating ? 'border-[#A3FF12] omnitrix-glow rotate-180' : 'hover:border-[#A3FF12]/40'
            }`}>
              {/* Outer tick marks */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A3FF12] rounded-xs rotate-45 shadow-[0_0_10px_#A3FF12]"></div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A3FF12] rounded-xs rotate-45 shadow-[0_0_10px_#A3FF12]"></div>
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[#A3FF12] rounded-xs rotate-45 shadow-[0_0_10px_#A3FF12]"></div>
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#A3FF12] rounded-xs rotate-45 shadow-[0_0_10px_#A3FF12]"></div>
            </div>

            {/* Middle Bezel Ring */}
            <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-full bg-[#101512] border-4 border-[#1A211C] flex items-center justify-center relative shadow-inner">
              
              {/* Core Faceplate (Green Hourglass / Diamond) */}
              <button 
                onClick={handleActivate}
                aria-label="Activate Omnitrix"
                className={`w-36 h-36 rounded-full bg-[#0B0F0C] border-2 border-[#A3FF12] flex items-center justify-center cursor-pointer transition-all duration-300 relative group ${
                  isActivating ? 'scale-110 shadow-[0_0_40px_#A3FF12] bg-[#A3FF12]/20' : 'hover:shadow-[0_0_25px_rgba(163,255,18,0.4)]'
                }`}
              >
                {/* Omnitrix Intersecting Black / Neon Triangles */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="absolute top-0 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px] border-t-[#A3FF12] drop-shadow-[0_0_8px_#A3FF12]"></div>
                  <div className="absolute bottom-0 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-[#A3FF12] drop-shadow-[0_0_8px_#A3FF12]"></div>
                  {/* Center Core dot */}
                  <div className="absolute w-4 h-4 rounded-full bg-[#0B0F0C] border-2 border-[#A3FF12] z-10"></div>
                </div>

                {/* Pulse wave animation when active */}
                {isActivating && (
                  <div className="absolute inset-0 rounded-full border-2 border-[#A3FF12] animate-ping opacity-75"></div>
                )}
              </button>
            </div>

            {/* Left / Right Selector Dial Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous Alien"
              className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A211C] border border-[#1C271F] hover:border-[#A3FF12] hover:bg-[#101512] text-[#E9EFE9] flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Alien"
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A211C] border border-[#1C271F] hover:border-[#A3FF12] hover:bg-[#101512] text-[#E9EFE9] flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          <p className="text-[11px] font-mono text-[#AAB5AD] mt-4 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A3FF12]" />
            <span>Turn dial or click faceplate to activate</span>
          </p>
        </div>

        {/* Right Column: Holographic HUD Alien Readout */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-[radial-gradient(ellipse_at_center,_#1A211C_0%,_#0B0F0C_100%)] border border-[#A3FF12]/50 p-1.5 flex items-center justify-center shrink-0 overflow-hidden shadow-[0_0_20px_rgba(163,255,18,0.25)]">
              <img
                src={currentAlien.primaryImage.imageUrl}
                alt={currentAlien.name}
                className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-[#101512] border border-[#1C271F] text-[11px] font-mono text-[#A3FF12] mb-1">
                <span>CODON: {currentAlien.slug.toUpperCase()}</span>
                <span>•</span>
                <span>{currentAlien.speciesName}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#E9EFE9] tracking-tight">
                {currentAlien.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#AAB5AD]">
            <span>Homeworld: <strong className="text-[#E9EFE9]">{currentAlien.homeworld}</strong></span>
            <span>•</span>
            <span>Debut: <strong className="text-[#A3FF12]">{currentAlien.seriesAppearances[0]?.seriesName}</strong></span>
          </div>

          <p className="text-sm text-[#AAB5AD] leading-relaxed">
            {currentAlien.summary}
          </p>

          {/* Quick Power Bars */}
          <div className="space-y-2 py-2">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-[#AAB5AD] mb-1">
                <span>ENERGY OUTPUT</span>
                <span className="text-[#A3FF12]">{currentAlien.stats.energyOutput}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#0B0F0C] rounded-full overflow-hidden border border-[#1C271F]">
                <div 
                  className="h-full bg-[#A3FF12] transition-all duration-500 rounded-full"
                  style={{ width: `${currentAlien.stats.energyOutput}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-[#AAB5AD] mb-1">
                <span>DURABILITY</span>
                <span className="text-[#A3FF12]">{currentAlien.stats.durability}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#0B0F0C] rounded-full overflow-hidden border border-[#1C271F]">
                <div 
                  className="h-full bg-cyan-400 transition-all duration-500 rounded-full"
                  style={{ width: `${currentAlien.stats.durability}%` }}
                />
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowTransformationModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#A3FF12] text-[#0B0F0C] font-extrabold text-xs sm:text-sm transition-all hover:scale-105 omnitrix-glow cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>TRANSFORM NOW</span>
            </button>

            <Link
              href={`/characters/${currentAlien.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1A211C] hover:bg-[#101512] text-[#E9EFE9] border border-[#1C271F] hover:border-[#A3FF12]/40 font-mono text-xs transition-colors"
            >
              <span>View Dossier</span>
            </Link>

            <Link
              href="/aliens"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-[#AAB5AD] hover:text-[#A3FF12] font-mono text-xs transition-colors"
            >
              <span>All Aliens</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

      {/* Cinematic Omnitrix Transformation Modal */}
      {showTransformationModal && (
        <OmnitrixLoader
          fullScreen={true}
          fixedAlien={currentAlienChoice}
          message={`Simulating Omnitrix activation sequence for ${currentAlien.name}...`}
          interactive={true}
          onClose={() => setShowTransformationModal(false)}
        />
      )}

    </div>
  );
}
