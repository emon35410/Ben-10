'use client';

import React from 'react';
import { CharacterStats } from '@/types';
import { Shield, Zap, Activity, Brain, Flame, Sparkles } from 'lucide-react';

interface StatRadarProps {
  stats: CharacterStats;
  characterName: string;
}

export default function StatRadar({ stats, characterName }: StatRadarProps) {
  const statItems = [
    { label: 'Strength', value: stats.strength, icon: Shield, color: 'bg-emerald-500' },
    { label: 'Speed', value: stats.speed, icon: Zap, color: 'bg-lime-400' },
    { label: 'Durability', value: stats.durability, icon: Activity, color: 'bg-cyan-400' },
    { label: 'Intelligence', value: stats.intelligence, icon: Brain, color: 'bg-purple-400' },
    { label: 'Energy Output', value: stats.energyOutput, icon: Flame, color: 'bg-orange-400' },
    { label: 'Versatility', value: stats.versatility, icon: Sparkles, color: 'bg-[#A3FF12]' },
  ];

  const overallRating = Math.round(
    (stats.strength + stats.speed + stats.durability + stats.intelligence + stats.energyOutput + stats.versatility) / 6
  );

  return (
    <div className="rounded-xl glass-panel-elevated p-5 border border-[#1C271F] hud-border">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1C271F]">
        <h4 className="text-xs font-mono font-bold uppercase text-[#A3FF12] tracking-wider flex items-center gap-2">
          <span>OMNITRIX BIO-METRIC ANALYSIS &bull; {characterName.toUpperCase()}</span>
        </h4>
        <div className="text-xs font-mono text-[#AAB5AD] bg-[#101512] px-2.5 py-0.5 rounded-full border border-[#1C271F]">
          INDEX: <strong className="text-[#A3FF12]">{overallRating}</strong>/100
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {statItems.map((stat) => (
          <div key={stat.label} className="bg-[#101512] p-2.5 rounded-lg border border-[#1C271F]/80">
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span className="flex items-center gap-1.5 text-[#E9EFE9]">
                <stat.icon className="w-3.5 h-3.5 text-[#A3FF12]" />
                {stat.label}
              </span>
              <span className="text-[#A3FF12] font-bold">{stat.value}</span>
            </div>
            <div className="w-full h-1.5 bg-[#0B0F0C] rounded-full overflow-hidden border border-[#1C271F]">
              <div
                className={`h-full ${stat.color} rounded-full transition-all duration-700`}
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[#AAB5AD] font-mono mt-3 text-center">
        *Metrics are compiled from canonical combat encounters across the three series.
      </p>
    </div>
  );
}
