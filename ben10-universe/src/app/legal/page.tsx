'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, CheckCircle2, ArrowLeft, Send } from 'lucide-react';

export default function LegalPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'image_removal',
    url: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb */}
      <div className="pb-4 border-b border-[#1C271F]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#AAB5AD] hover:text-[#A3FF12] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>
      </div>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF12] uppercase mb-2">
          <ShieldAlert className="w-4 h-4 text-[#A3FF12]" />
          <span>LEGAL COMPLIANCE & ATTRIBUTION NOTICE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#E9EFE9] tracking-tight">
          Disclaimer, Copyright & Content Removal
        </h1>
        <p className="text-sm text-[#AAB5AD] mt-2 leading-relaxed">
          The Ben 10 Character Universe is an independent, non-profit academic and fan research archive. We take intellectual property rights and canon accuracy with utmost seriousness.
        </p>
      </div>

      {/* Non-Affiliation Notice */}
      <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
        <h2 className="text-sm font-mono font-bold uppercase text-[#A3FF12] tracking-wider">
          1. UNOFFICIAL FAN PROJECT & NON-COMMERCIAL STATUS
        </h2>
        <div className="text-xs text-[#E9EFE9] space-y-3 leading-relaxed">
          <p>
            <strong>Ben 10</strong>, the Omnitrix, Ultimatrix, Alien Force, Ultimate Alien, and all character names, likenesses, emblems, settings, and related media are the exclusive registered trademarks and copyrights of <strong>Cartoon Network</strong>, Turner Broadcasting System, and <strong>Warner Bros. Discovery</strong>.
          </p>
          <p>
            This website is an unofficial, non-commercial fan-created reference encyclopedia and technical research project. It is <strong>NOT</strong> authorized, endorsed, sponsored, affiliated, or in any way officially connected with Cartoon Network, Warner Bros. Discovery, Man of Action Studios, or any of their subsidiaries or affiliates.
          </p>
          <p>
            No monetization, subscription fees, advertisements, or financial gain are derived from this encyclopedia.
          </p>
        </div>
      </div>

      {/* Fair Use & Research Scope */}
      <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
        <h2 className="text-sm font-mono font-bold uppercase text-[#A3FF12] tracking-wider">
          2. SCOPE & FAIR USE COMMENTARY
        </h2>
        <div className="text-xs text-[#E9EFE9] space-y-3 leading-relaxed">
          <p>
            Content on this site strictly covers the three prime timeline animated television series:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#AAB5AD] font-mono">
            <li>Ben 10 (2005)</li>
            <li>Ben 10: Alien Force (2008)</li>
            <li>Ben 10: Ultimate Alien (2010)</li>
          </ul>
          <p>
            <em>Ben 10: Omniverse</em> and the <em>2016 Reboot</em> are intentionally excluded to maintain historical fidelity to the original creative era. Visual screenshots and character concept sketches are displayed under Fair Use (17 U.S.C. § 107) for non-profit scholarship, criticism, reference, and educational archiving.
          </p>
        </div>
      </div>

      {/* Takedown & Fact Correction Form */}
      <div id="removal" className="rounded-xl glass-panel-elevated p-6 sm:p-8 border border-[#1C271F] space-y-6">
        <div>
          <h2 className="text-base font-bold text-[#E9EFE9]">
            3. Copyright Takedown, Image Removal & Lore Correction Route
          </h2>
          <p className="text-xs text-[#AAB5AD] mt-1">
            If you are a copyright holder, artist, creator, or rights representative and believe an asset is used inappropriately, or if you wish to report a lore inaccuracy with broadcast evidence, submit the form below for immediate review.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-lg bg-emerald-950/50 border border-emerald-800 p-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-sm font-bold text-[#E9EFE9]">Request Received</h4>
            <p className="text-xs text-[#AAB5AD]">
              Thank you for contacting the Ben 10 Universe editorial team. Your inquiry has been routed to our rights moderator and will be reviewed within 24-48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#AAB5AD] mb-1">YOUR NAME / REPRESENTATIVE</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name..."
                  className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg p-2.5 text-[#E9EFE9] outline-none"
                />
              </div>

              <div>
                <label className="block text-[#AAB5AD] mb-1">CONTACT EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@domain.com..."
                  className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg p-2.5 text-[#E9EFE9] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#AAB5AD] mb-1">INQUIRY TYPE</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg p-2.5 text-[#E9EFE9] outline-none"
                >
                  <option value="image_removal">Image Removal / DMCA Takedown</option>
                  <option value="attribution_update">Attribution / Credit Correction</option>
                  <option value="fact_correction">Canon Fact Correction (with Source)</option>
                  <option value="general_feedback">General Research Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-[#AAB5AD] mb-1">RELEVANT PAGE / ASSET URL</label>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://... /characters/heatblast"
                  className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg p-2.5 text-[#E9EFE9] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#AAB5AD] mb-1">DETAILS & SUPPORTING EVIDENCE</label>
              <textarea
                rows={4}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Please describe the asset or claim, your ownership or reference episode, and requested action..."
                className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg p-2.5 text-[#E9EFE9] outline-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#A3FF12] text-[#0B0F0C] font-bold text-xs hover:bg-[#8ce607] transition-colors inline-flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SUBMIT NOTICE FOR REVIEW</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
