'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Zap, Volume2, VolumeX, X, Cpu, Dna, Sparkles, Orbit } from 'lucide-react';

export type AlienChoice = 'swampfire' | 'humungousaur' | 'big_chill' | 'chromastone' | 'echo_echo' | 'alienx';

interface AlienProfile {
  id: AlienChoice;
  name: string;
  species: string;
  homeworld: string;
  elements: string;
  color: string;
  glowColor: string;
  quote: string;
  imageSrc: string;
}

interface OmnitrixLoaderProps {
  fullScreen?: boolean;
  message?: string;
  submessage?: string;
  fixedAlien?: AlienChoice;
  interactive?: boolean;
  onClose?: () => void;
}

export default function OmnitrixLoader({
  fullScreen = true,
  message,
  submessage,
  fixedAlien,
  interactive = true,
  onClose,
}: OmnitrixLoaderProps) {
  const [mounted, setMounted] = useState(false);
  // Alien Force Phases: 'dial' -> 'scanning' -> 'flash' -> 'alien'
  const [phase, setPhase] = useState<'dial' | 'scanning' | 'flash' | 'alien'>('dial');
  const [scanPercent, setScanPercent] = useState(0); // 0 (feet) to 100 (head)
  const [selectedAlienIndex, setSelectedAlienIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Canonical Alien Force Playlist
  const aliens: AlienProfile[] = [
    {
      id: 'swampfire',
      name: 'SWAMPFIRE',
      species: 'Methanosian',
      homeworld: 'Methanos',
      elements: 'Pyrokinesis & Chlorokinesis',
      color: '#FF6B00',
      glowColor: 'rgba(255, 107, 0, 0.7)',
      quote: "Things are about to get real hot!",
      imageSrc: '/images/characters/swampfire.png',
    },
    {
      id: 'humungousaur',
      name: 'HUMUNGOUSAUR',
      species: 'Vaxasaurian',
      homeworld: 'Terradino',
      elements: 'Enhanced Strength & Size Alteration',
      color: '#B87333',
      glowColor: 'rgba(184, 115, 51, 0.7)',
      quote: "Time to bring out the big guns!",
      imageSrc: '/images/characters/humungousaur.png',
    },
    {
      id: 'big_chill',
      name: 'BIG CHILL',
      species: 'Necrofriggian',
      homeworld: 'Kylmyys',
      elements: 'Cryokinesis & Intangibility',
      color: '#00F0FF',
      glowColor: 'rgba(0, 240, 255, 0.7)',
      quote: "Freezing temperature dropping fast.",
      imageSrc: '/images/characters/big_chill.png',
    },
    {
      id: 'chromastone',
      name: 'CHROMASTONE',
      species: 'Crystalsapien',
      homeworld: 'Petropia',
      elements: 'Energy Absorption & Ultraviolet Light',
      color: '#D946EF',
      glowColor: 'rgba(217, 70, 239, 0.7)',
      quote: "Ready to refract some alien light!",
      imageSrc: '/images/characters/chromastone.png',
    },
    {
      id: 'echo_echo',
      name: 'ECHO ECHO',
      species: 'Sonorosian',
      homeworld: 'Sonorosia',
      elements: 'Sonic Blasts & Self-Duplication',
      color: '#E2E8F0',
      glowColor: 'rgba(226, 232, 240, 0.7)',
      quote: "Echo Echo in the house!",
      imageSrc: '/images/characters/echo_echo.png',
    },
    {
      id: 'alienx',
      name: 'ALIEN X',
      species: 'Celestialsapien',
      homeworld: 'Forge of Creation',
      elements: 'Omnipotence & Reality Warping',
      color: '#A855F7',
      glowColor: 'rgba(168, 85, 247, 0.7)',
      quote: "Motion carried. Reality altered.",
      imageSrc: '/images/characters/alienx.png',
    },
  ];

  const activeAlien = fixedAlien
    ? aliens.find((a) => a.id === fixedAlien) || aliens[0]
    : aliens[selectedAlienIndex];

  // Prevent background scroll when modal is active
  useEffect(() => {
    setMounted(true);
    if (fullScreen && typeof document !== 'undefined') {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [fullScreen]);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Authentic Alien Force Web Audio Synthesizer
  const playAFSound = (type: 'dial_pop' | 'laser_sweep' | 'bone_morph' | 'flash_burst' | 'hero_chime') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const ctx = audioContextRef.current || new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioContextRef.current = ctx;

      const now = ctx.currentTime;

      if (type === 'dial_pop') {
        // High electronic beep when Omnitrix faceplate pops up
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(2400, now + 0.1);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'laser_sweep') {
        // Rising resonant Alien Force laser scanning frequency
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 1.2);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.4);
      } else if (type === 'bone_morph') {
        // Low organic sub-bass impact for skeletal expansion
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'flash_burst') {
        // High energy emerald flash detonation
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(1600, now + 0.25);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'hero_chime') {
        // Triumphant Omnitrix lock chord
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.07, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.4);
        });
      }
    } catch {
      // Audio playback restrictions fallback
    }
  };

  // State Machine for the Alien Force Transformation Sequence
  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    let t4: NodeJS.Timeout;
    let scanInterval: NodeJS.Timeout;

    const startAFSequence = () => {
      // Stage 0: Recalibrated Omnitrix Faceplate Activation
      setPhase('dial');
      setScanPercent(0);
      playAFSound('dial_pop');

      // Stage 1: Laser scanning plane rises from feet to head
      t1 = setTimeout(() => {
        setPhase('scanning');
        playAFSound('laser_sweep');
        playAFSound('bone_morph');

        // Smoothly increment laser height from 0% to 100% over 1.6s
        let currentP = 0;
        scanInterval = setInterval(() => {
          currentP += 5;
          setScanPercent(currentP);
          if (currentP >= 100) {
            clearInterval(scanInterval);
          }
        }, 75);
      }, 700);

      // Stage 2: Blinding Emerald Flash Burst
      t2 = setTimeout(() => {
        setPhase('flash');
        playAFSound('flash_burst');
      }, 2400);

      // Stage 3: Full Alien Force Reveal ("It's Hero Time!")
      t3 = setTimeout(() => {
        setPhase('alien');
        playAFSound('hero_chime');
      }, 2750);

      // Stage 4: Next Alien in loop if not fixed
      t4 = setTimeout(() => {
        if (!fixedAlien) {
          setSelectedAlienIndex((prev) => (prev + 1) % aliens.length);
        }
      }, 5000);
    };

    startAFSequence();
    const mainLoop = setInterval(startAFSequence, 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(scanInterval);
      clearInterval(mainLoop);
    };
  }, [selectedAlienIndex, fixedAlien, soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const loaderContent = (
    <div
      className={`font-sans transition-all duration-500 overflow-hidden ${
        fullScreen
          ? 'fixed inset-0 z-[99999] w-screen h-screen min-h-screen af-void-bg flex flex-col items-center justify-center p-4 sm:p-6'
          : 'relative w-full py-8 px-4 rounded-2xl af-void-bg hud-border flex flex-col items-center justify-center'
      }`}
      style={fullScreen ? { top: 0, left: 0, right: 0, bottom: 0 } : undefined}
    >
      {/* 1. Canonical Alien Force Dark Perspective Grid Floor */}
      <div className="af-perspective-floor pointer-events-none opacity-40" />

      {/* Floating Emerald Codon Energy Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#A3FF12] animate-ping opacity-60" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-[#A3FF12] animate-pulse opacity-40 delay-500" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-[#A3FF12] animate-ping opacity-75 delay-1000" />
      </div>

      {/* Close button for fullscreen mode */}
      {fullScreen && onClose && (
        <button
          onClick={onClose}
          aria-label="Disengage Transformation"
          className="absolute top-5 right-5 sm:top-7 sm:right-7 z-40 px-3.5 py-1.5 rounded-full bg-[#101512]/90 border border-[#A3FF12]/70 text-[#A3FF12] hover:bg-[#A3FF12] hover:text-[#0B0F0C] text-xs font-mono font-bold tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_rgba(163,255,18,0.3)] transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
          <span>DISENGAGE (ESC)</span>
        </button>
      )}

      {/* Radial Alien Energy Backlight Glow */}
      <div
        className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none transition-all duration-700 blur-3xl opacity-35"
        style={{
          background: phase === 'alien' ? activeAlien.glowColor : 'rgba(163, 255, 18, 0.45)',
        }}
      />

      {/* Top Telemetry Header - Alien Force Sci-Fi HUD */}
      <div className="relative z-20 w-full max-w-xl px-4 flex items-center justify-between border-b border-[#1C271F] pb-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A3FF12] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#A3FF12] uppercase font-bold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            BEN 10: ALIEN FORCE • DNA MORPH MATRIX
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            aria-label="Toggle transformation audio"
            className="text-[#AAB5AD] hover:text-[#A3FF12] p-1.5 rounded-md hover:bg-[#1A211C] transition-colors border border-transparent hover:border-[#1C271F] flex items-center gap-1 text-[10px] font-mono cursor-pointer"
            title="Toggle SFX"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#A3FF12]" />
                <span className="hidden sm:inline text-[#A3FF12]">AUDIO: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AUDIO: OFF</span>
              </>
            )}
          </button>

          <span className="text-[10px] font-mono text-[#AAB5AD] bg-[#101512] px-2.5 py-0.5 rounded border border-[#1C271F]">
            OMNITRIX AF
          </span>
        </div>
      </div>

      {/* Center Chamber: The Alien Force Transformation Reactor */}
      <div className="relative z-20 w-72 h-80 sm:w-88 sm:h-96 flex items-center justify-center">
        
        {/* Outermost Concentric Alien Force Energy Rings */}
        <div className="absolute inset-0 rounded-full border border-[#1C271F] animate-omnitrix-spin pointer-events-none opacity-50">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A3FF12] rotate-45 shadow-[0_0_10px_#A3FF12]" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A3FF12] rotate-45 shadow-[0_0_10px_#A3FF12]" />
        </div>

        <div className="absolute inset-4 rounded-full border border-dashed border-[#A3FF12]/40 animate-omnitrix-spin-reverse pointer-events-none" />

        {/* Orbiting DNA Double Helix Ring */}
        <div className="absolute w-72 h-72 sm:w-84 sm:h-84 rounded-full border-2 border-[#A3FF12]/20 animate-af-dna pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#A3FF12] shadow-[0_0_8px_#A3FF12]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#A3FF12] shadow-[0_0_8px_#A3FF12]" />
        </div>

        {/* Pulse Shockwave */}
        {(phase === 'scanning' || phase === 'flash') && (
          <div className="absolute inset-0 rounded-full border-2 border-[#A3FF12] animate-ping opacity-60 pointer-events-none" />
        )}

        {/* Central Cylindrical Stage */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-2xl bg-[#09110B]/85 border-2 border-[#1C271F] flex flex-col items-center justify-center overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Background DNA Grid & Stream Matrix */}
          <div className="absolute inset-0 flex items-center justify-between px-3 opacity-20 pointer-events-none z-0">
            <div className="flex flex-col gap-1.5 font-mono text-[8px] text-[#A3FF12] leading-none">
              <span>AF-01</span>
              <span>CODON</span>
              <span>10-TEN</span>
              <span>HUMAN</span>
              <span>MUTATE</span>
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-[8px] text-[#A3FF12] leading-none text-right">
              <span>{activeAlien.species.toUpperCase()}</span>
              <span>DNA:99.9%</span>
              <span>LVL20</span>
              <span>PRIME</span>
              <span>GALVAN</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* THE ALIEN FORCE TRANSFORMATION MORPHING ZONE */}
          {/* ============================================================ */}
          <div className="relative w-52 h-68 sm:w-56 sm:h-76 flex items-center justify-center z-10">
            
            {/* 1. STAGE: DIAL POPOUT (Recalibrated Omnitrix) */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                phase === 'dial' ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
              }`}
            >
              <div className="relative w-36 h-36 flex items-center justify-center animate-pulse">
                {/* Real Recalibrated Omnitrix render */}
                <img
                  src="/images/characters/omnitrix.png"
                  alt="Recalibrated Omnitrix"
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_#A3FF12]"
                />
                {/* Glowing Core Pulse */}
                <div className="absolute inset-6 rounded-full border-2 border-[#A3FF12] animate-ping opacity-60" />
              </div>
              <span className="mt-3 text-[11px] font-mono text-[#A3FF12] tracking-widest font-bold uppercase animate-pulse">
                OMNITRIX RECALIBRATED
              </span>
            </div>

            {/* 2. STAGE: BEN AF & ALIEN SKELETAL X-RAY LASER MORPH */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                phase === 'scanning' ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Ben AF Teen (Unscanned Top Portion) */}
              <div 
                className="absolute inset-0 flex items-center justify-center transition-all"
                style={{
                  clipPath: `inset(0 0 ${scanPercent}% 0)`,
                }}
              >
                <img
                  src="/images/characters/ben_af.png"
                  alt="Ben Tennyson Alien Force"
                  className="w-full h-full object-contain p-2 drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Alien Form (Scanned Bottom Portion - Rising X-Ray Morph) */}
              <div 
                className="absolute inset-0 flex items-center justify-center transition-all"
                style={{
                  clipPath: `inset(${100 - scanPercent}% 0 0 0)`,
                }}
              >
                <img
                  src={activeAlien.imageSrc}
                  alt={activeAlien.name}
                  className="w-full h-full object-contain p-2 filter drop-shadow-[0_0_15px_#A3FF12]"
                />
              </div>

              {/* The Canonical Green Laser Scanning Plane (Rises Upwards from Feet to Head) */}
              <div
                className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent z-30 transition-all duration-75 shadow-[0_0_20px_#A3FF12,0_0_40px_#A3FF12]"
                style={{
                  top: `${100 - scanPercent}%`,
                }}
              >
                {/* Scanning Laser Spark Nodes */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#FFFFFF]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#FFFFFF]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#A3FF12] shadow-[0_0_12px_#A3FF12]" />
              </div>

              {/* Green Internal Skeletal X-Ray Wireframe Glow Overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70"
                style={{
                  clipPath: `inset(${Math.max(0, 100 - scanPercent - 15)}% 0 ${Math.max(0, scanPercent - 15)}% 0)`,
                }}
              >
                <div className="w-full h-full bg-[#A3FF12]/20 border-y border-[#A3FF12] blur-xs animate-pulse" />
              </div>
            </div>

            {/* 3. STAGE: BLINDING EMERALD FLASH DETONATION */}
            <div
              className={`absolute inset-0 rounded-2xl bg-[#A3FF12] mix-blend-screen transition-opacity pointer-events-none duration-300 flex items-center justify-center ${
                phase === 'flash'
                  ? 'opacity-95 scale-125 blur-sm'
                  : 'opacity-0 scale-75'
              }`}
              style={{
                boxShadow: '0 0 80px #A3FF12, inset 0 0 50px #FFFFFF',
              }}
            >
              {/* Omnitrix Hourglass Flash Symbol */}
              <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-white/40 shadow-[0_0_30px_#FFFFFF]">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <div className="absolute top-0 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[18px] border-t-[#0B0F0C]" />
                  <div className="absolute bottom-0 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[18px] border-b-[#0B0F0C]" />
                </div>
              </div>
            </div>

            {/* 4. STAGE: CANONICAL ALIEN FORCE REVEAL */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                phase === 'alien'
                  ? 'opacity-100 scale-100 filter drop-shadow-[0_0_20px_var(--alien-glow)]'
                  : 'opacity-0 scale-110 pointer-events-none'
              }`}
              style={{
                ['--alien-glow' as string]: activeAlien.glowColor,
              }}
            >
              <img
                src={activeAlien.imageSrc}
                alt={activeAlien.name}
                className="w-full h-full object-contain p-2 drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
              />
            </div>

          </div>

          {/* Bottom Chamber Nameplate */}
          <div className="absolute bottom-0 inset-x-0 bg-[#0B0F0C]/90 border-t border-[#1C271F] py-2 px-3 flex items-center justify-between text-[10px] font-mono z-20">
            <span className="text-[#AAB5AD] uppercase truncate max-w-[130px]">
              {phase === 'alien' ? activeAlien.species : 'BEN TENNYSON (AF)'}
            </span>
            <span
              className="font-bold tracking-wider"
              style={{
                color: phase === 'alien' ? activeAlien.color : '#A3FF12',
              }}
            >
              {phase === 'alien' ? activeAlien.name : 'EARTH • HUMAN'}
            </span>
          </div>

        </div>
      </div>

      {/* Main Dynamic Status Banner */}
      <div className="relative z-20 mt-4 sm:mt-6 text-center max-w-md px-4">
        
        {/* Animated Title */}
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <Zap className="w-4 h-4 text-[#A3FF12] animate-bounce" />
          <h3 className="text-sm sm:text-base font-black tracking-widest uppercase text-[#E9EFE9] font-mono">
            {phase === 'dial' && 'ACTIVATING RECALIBRATED OMNITRIX...'}
            {phase === 'scanning' && 'RECOMBINING INTERNAL SKELETON & MUSCLE...'}
            {phase === 'flash' && 'TRANSFORMATION DETONATION ENGAGED!'}
            {phase === 'alien' && `HERO TIME: ${activeAlien.name}!`}
          </h3>
        </div>

        {/* Dynamic Context Submessage */}
        <p className="text-xs text-[#AAB5AD] font-mono tracking-wide mb-3">
          {message || (phase === 'alien' ? `"${activeAlien.quote}"` : 'Synthesizing extraterrestrial DNA matrices...')}
        </p>

        {/* Sci-Fi Progress Equalizer */}
        <div className="w-full bg-[#101512] h-2 rounded-full border border-[#1C271F] overflow-hidden p-0.5 relative mb-2.5">
          <div
            className="h-full rounded-full transition-all duration-300 relative"
            style={{
              width: `${phase === 'alien' ? 100 : Math.max(15, scanPercent)}%`,
              background: phase === 'alien' 
                ? `linear-gradient(90deg, #A3FF12, ${activeAlien.color})` 
                : 'linear-gradient(90deg, #5b9604, #A3FF12)',
              boxShadow: phase === 'alien' 
                ? `0 0 10px ${activeAlien.color}` 
                : '0 0 10px #A3FF12',
            }}
          />
        </div>

        {/* Telemetry Readouts */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#AAB5AD]">
          <span>GENOME: {phase === 'alien' ? '100% COMPLETE' : `${scanPercent}% SCAN`}</span>
          <span className="text-[#A3FF12] font-bold">ALIEN FORCE</span>
          <span>ORIGIN: {activeAlien.homeworld}</span>
        </div>
      </div>

      {/* Interactive Alien Force Codon Selector Pills */}
      {interactive && (
        <div className="relative z-20 mt-4 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap max-w-lg px-2">
          <span className="text-[10px] font-mono text-[#AAB5AD] mr-1 hidden sm:inline">
            CODON SELECT:
          </span>
          {aliens.map((alien, idx) => {
            const isSelected = activeAlien.id === alien.id;
            return (
              <button
                key={alien.id}
                onClick={() => {
                  setSelectedAlienIndex(idx);
                  setPhase('flash');
                  setTimeout(() => setPhase('alien'), 350);
                  playAFSound('flash_burst');
                }}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#1A211C] border-[#A3FF12] text-[#A3FF12] shadow-[0_0_12px_rgba(163,255,18,0.4)] scale-105'
                    : 'bg-[#101512] border-[#1C271F] text-[#AAB5AD] hover:border-[#A3FF12]/50 hover:text-[#E9EFE9]'
                }`}
              >
                {alien.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  if (fullScreen && mounted && typeof document !== 'undefined') {
    return createPortal(loaderContent, document.body);
  }

  return loaderContent;
}
