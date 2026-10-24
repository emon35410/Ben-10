'use client';

import React, { useState, useMemo } from 'react';
import { CANONICAL_CHARACTERS, CANONICAL_SPECIES } from '@/lib/data';
import CharacterCard from '@/components/CharacterCard';
import { CanonicalSeriesSlug, CharacterRole } from '@/types';
import { Search, RotateCcw } from 'lucide-react';

export default function CharactersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<CanonicalSeriesSlug | 'all'>('all');
  const [selectedRole, setSelectedRole] = useState<CharacterRole | 'all'>('all');
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'energy' | 'durability'>('name-asc');

  // Filtered and sorted character list
  const filteredCharacters = useMemo(() => {
    return CANONICAL_CHARACTERS.filter((char) => {
      // 1. Search Query filter (matches name, aliases, summary, abilities, homeworld)
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const matchesName = char.name.toLowerCase().includes(q);
        const matchesAlias = char.aliases.some(a => a.toLowerCase().includes(q));
        const matchesHomeworld = char.homeworld.toLowerCase().includes(q);
        const matchesSpecies = char.speciesName?.toLowerCase().includes(q);
        const matchesAbility = char.abilities.some(ab => ab.name.toLowerCase().includes(q));
        if (!matchesName && !matchesAlias && !matchesHomeworld && !matchesSpecies && !matchesAbility) {
          return false;
        }
      }

      // 2. Series filter
      if (selectedSeries !== 'all') {
        const appearsInSeries = char.seriesAppearances.some(app => app.seriesSlug === selectedSeries);
        if (!appearsInSeries) return false;
      }

      // 3. Role filter
      if (selectedRole !== 'all') {
        if (char.role !== selectedRole) return false;
      }

      // 4. Species filter
      if (selectedSpecies !== 'all') {
        if (char.speciesName !== selectedSpecies) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'energy') return b.stats.energyOutput - a.stats.energyOutput;
      if (sortBy === 'durability') return b.stats.durability - a.stats.durability;
      return 0;
    });
  }, [searchQuery, selectedSeries, selectedRole, selectedSpecies, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSeries('all');
    setSelectedRole('all');
    setSelectedSpecies('all');
    setSortBy('name-asc');
  };

  const hasActiveFilters = searchQuery !== '' || selectedSeries !== 'all' || selectedRole !== 'all' || selectedSpecies !== 'all';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-[#1C271F]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF12] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#A3FF12]"></span>
          <span>DATABASE ROSTER SEARCH</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#E9EFE9] tracking-tight">
          Characters Explorer
        </h1>
        <p className="text-sm text-[#AAB5AD] mt-1">
          Search and filter across alien transformations, heroes, villains, and allies strictly within the three canonical series.
        </p>
      </div>

      {/* Filter and Search HUD Bar */}
      <div className="rounded-xl glass-panel p-4 mb-8 space-y-4 border border-[#1C271F]">
        
        {/* Search Input Row */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAB5AD]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by character name, alias (e.g. 'Living Torch'), power, or homeworld..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] text-sm text-[#E9EFE9] placeholder-[#AAB5AD]/50 outline-none transition-colors font-mono"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#AAB5AD] hover:text-[#E9EFE9]"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Filter Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          
          {/* Series Filter */}
          <div>
            <label className="block text-[#AAB5AD] mb-1">CANONICAL SERIES</label>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value as CanonicalSeriesSlug | 'all')}
              className="w-full bg-[#0B0F0C] border border-[#1C271F] rounded-lg px-3 py-2 text-[#E9EFE9] focus:border-[#A3FF12] outline-none"
            >
              <option value="all">All 3 Series Included</option>
              <option value="ben-10-2005">Ben 10 (2005 Original)</option>
              <option value="ben-10-alien-force">Ben 10: Alien Force</option>
              <option value="ben-10-ultimate-alien">Ben 10: Ultimate Alien</option>
            </select>
          </div>

          {/* Role Filter */}
          <div>
            <label className="block text-[#AAB5AD] mb-1">ROLE / ALIGNMENT</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as CharacterRole | 'all')}
              className="w-full bg-[#0B0F0C] border border-[#1C271F] rounded-lg px-3 py-2 text-[#E9EFE9] focus:border-[#A3FF12] outline-none"
            >
              <option value="all">All Roles</option>
              <option value="alien">Omnitrix Alien</option>
              <option value="hero">Hero / Ally</option>
              <option value="villain">Villain / Antagonist</option>
            </select>
          </div>

          {/* Species Filter */}
          <div>
            <label className="block text-[#AAB5AD] mb-1">SPECIES CLASSIFICATION</label>
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="w-full bg-[#0B0F0C] border border-[#1C271F] rounded-lg px-3 py-2 text-[#E9EFE9] focus:border-[#A3FF12] outline-none"
            >
              <option value="all">All Species</option>
              {CANONICAL_SPECIES.map((sp) => (
                <option key={sp.id} value={sp.name}>{sp.name}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[#AAB5AD] mb-1">SORT ORDER</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name-asc' | 'name-desc' | 'energy' | 'durability')}
              className="w-full bg-[#0B0F0C] border border-[#1C271F] rounded-lg px-3 py-2 text-[#E9EFE9] focus:border-[#A3FF12] outline-none"
            >
              <option value="name-asc">Alphabetical (A - Z)</option>
              <option value="name-desc">Alphabetical (Z - A)</option>
              <option value="energy">Highest Energy Output</option>
              <option value="durability">Highest Durability</option>
            </select>
          </div>

        </div>

        {/* Results count & reset */}
        <div className="flex items-center justify-between pt-2 border-t border-[#1C271F]/60 text-xs font-mono">
          <span className="text-[#AAB5AD]">
            Showing <strong className="text-[#A3FF12]">{filteredCharacters.length}</strong> matching profiles
          </span>
          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 text-[#AAB5AD] hover:text-[#A3FF12] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

      </div>

      {/* Characters Cards Grid */}
      {filteredCharacters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      ) : (
        /* Empty Search State */
        <div className="rounded-xl glass-panel p-12 text-center border border-[#1C271F] max-w-md mx-auto my-12">
          <div className="w-16 h-16 rounded-full bg-[#1A211C] border border-[#1C271F] flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-[#AAB5AD]" />
          </div>
          <h3 className="text-lg font-bold text-[#E9EFE9] mb-1">No Characters Found</h3>
          <p className="text-xs text-[#AAB5AD] mb-6">
            No profiles match your active filters or search terms. Remember that Omniverse and the 2016 reboot are excluded from this archive.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-lg bg-[#A3FF12] text-[#0B0F0C] font-bold text-xs font-mono"
          >
            Clear All Filters
          </button>
        </div>
      )}

    </div>
  );
}
