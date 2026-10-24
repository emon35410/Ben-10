'use client';

import React, { useState, useEffect } from 'react';
import { MOCK_RESEARCH_JOBS, MOCK_CONTENT_REVISIONS } from '@/lib/data';
import { ResearchJob, JobStatus, CanonicalSeriesSlug } from '@/types';
import { 
  Database, 
  CheckCircle2, 
  XCircle, 
  Play, 
  Plus,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Key,
  LogOut,
  Mail,
  RotateCw
} from 'lucide-react';

export default function AdminDashboardPage() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPasscode, setLoginPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Dashboard state
  const [jobs, setJobs] = useState<ResearchJob[]>(MOCK_RESEARCH_JOBS);
  const [activeTab, setActiveTab] = useState<'queue' | 'rights' | 'revisions'>('queue');
  const [newEntityName, setNewEntityName] = useState('');
  const [newSeriesSlug, setNewSeriesSlug] = useState<CanonicalSeriesSlug>('ben-10-2005');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Check existing session on mount
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/admin/auth');
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setIsAuthenticated(true);
          }
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsCheckingAuth(false);
      }
    }
    checkSession();
  }, []);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setIsAuthenticating(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, passcode: loginPasscode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setAuthError(data.error || 'Authentication failed. Please verify credentials.');
      } else {
        setIsAuthenticated(true);
        setLoginPasscode('');
      }
    } catch {
      setAuthError('Network communication error with the Plumber Security Core.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
    } catch {
      // Continue client logout
    }
    setIsAuthenticated(false);
    setLoginPasscode('');
    setFeedbackMessage('Plumber session terminated. Terminal locked.');
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  // Status counters
  const queuedCount = jobs.filter(j => j.status === 'queued').length;
  const researchingCount = jobs.filter(j => j.status === 'researching').length;
  const needsReviewCount = jobs.filter(j => j.status === 'needs_review').length;
  const approvedCount = jobs.filter(j => j.status === 'approved').length;

  const handleApprove = (jobId: string) => {
    setJobs(prev => prev.map(j => {
      if (j.id === jobId) {
        return { ...j, status: 'approved' as JobStatus };
      }
      return j;
    }));
    setFeedbackMessage(`Job ${jobId} approved for publication gate.`);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const handleReject = (jobId: string) => {
    setJobs(prev => prev.map(j => {
      if (j.id === jobId) {
        return { ...j, status: 'rejected' as JobStatus, errorMessage: 'Rejected during manual editorial audit: conflicting canon facts.' };
      }
      return j;
    }));
    setFeedbackMessage(`Job ${jobId} rejected.`);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const handleCreateJob = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntityName.trim()) return;

    setIsSubmitting(true);
    try {
      // Attempt backend API queueing
      await fetch('/api/ai-worker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entityName: newEntityName.trim(), seriesSlug: newSeriesSlug }),
      });
    } catch {
      // Fallback to local state if needed
    }

    const newJob: ResearchJob = {
      id: `job-${Date.now().toString().slice(-4)}`,
      entityName: newEntityName.trim(),
      seriesSlug: newSeriesSlug,
      status: 'queued',
      attempts: 0,
      factsFound: 0,
      imagesFound: 0,
      confidenceAverage: 0.0,
      startedAt: new Date().toISOString()
    };
    setJobs(prev => [newJob, ...prev]);
    setNewEntityName('');
    setIsSubmitting(false);
    setFeedbackMessage(`New AI research job queued for "${newJob.entityName}".`);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  // 1. Loading screen while verifying session
  if (isCheckingAuth) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 px-4">
        <div className="w-12 h-12 rounded-full border-2 border-[#A3FF12] border-t-transparent animate-spin" />
        <p className="text-xs font-mono text-[#A3FF12] tracking-widest uppercase">
          SCANNING BIOMETRIC & PLUMBER BADGE CLEARANCE...
        </p>
      </div>
    );
  }

  // 2. Unauthenticated: Plumber Command Security Gate
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
        <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-[#A3FF12]/30 shadow-2xl relative overflow-hidden">
          {/* Top glow accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A3FF12] to-transparent" />

          {/* Plumber Icon Badge */}
          <div className="flex flex-col items-center text-center space-y-3 pb-6 border-b border-[#1C271F]">
            <div className="w-14 h-14 rounded-full bg-[#101512] border-2 border-[#A3FF12] flex items-center justify-center shadow-[0_0_20px_rgba(163,255,18,0.25)]">
              <Lock className="w-6 h-6 text-[#A3FF12]" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#A3FF12] uppercase block">
                PLUMBERS HIGH-COMMAND TERMINAL
              </span>
              <h1 className="text-xl font-black text-[#E9EFE9] tracking-tight mt-1">
                Restricted Admin Access
              </h1>
              <p className="text-xs text-[#AAB5AD] mt-1.5 leading-relaxed">
                Autonomous research ingestion, fact moderation, and publication gating are restricted to designated Plumber Command.
              </p>
            </div>
          </div>

          {/* Error Banner */}
          {authError && (
            <div className="mt-4 p-3 rounded-lg bg-red-950/70 border border-red-700/80 text-red-300 text-xs font-mono flex items-start gap-2 animate-in fade-in">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-[11px] font-mono uppercase text-[#AAB5AD] mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#A3FF12]" />
                <span>Authorized Officer Email</span>
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="officer@plumbers.mil"
                className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg px-3.5 py-2.5 text-sm text-[#E9EFE9] font-mono outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#AAB5AD] mb-1.5 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-[#A3FF12]" />
                <span>Plumber Security Passcode</span>
              </label>
              <input
                type="password"
                required
                value={loginPasscode}
                onChange={(e) => setLoginPasscode(e.target.value)}
                placeholder="Enter security passcode..."
                className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg px-3.5 py-2.5 text-sm text-[#E9EFE9] font-mono outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3 rounded-lg font-mono font-bold text-xs uppercase tracking-wider text-black bg-[#A3FF12] hover:bg-[#8ee600] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(163,255,18,0.3)] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              {isAuthenticating ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authenticate Clearance</span>
                </>
              )}
            </button>
          </form>

          {/* Clearance Notice */}
          <div className="mt-6 pt-4 border-t border-[#1C271F] text-center">
            <span className="text-[10px] font-mono text-[#AAB5AD]">
              Earth Outpost #42 • Earth Sub-Sector 1 • Interstellar RLS Active
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Authenticated: Full Admin Dashboard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#1C271F] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A3FF12] uppercase mb-1">
            <Database className="w-4 h-4 text-[#A3FF12]" />
            <span>EDITORIAL CONTROL & AI RESEARCH INGESTION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#E9EFE9] tracking-tight">
            Admin & Moderation Dashboard
          </h1>
          <p className="text-sm text-[#AAB5AD] mt-1">
            Review fact citations, inspect copyright provenance, manage the research worker queue, and publish approved entries.
          </p>
        </div>

        {/* Authenticated Officer Pill & Logout */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 text-xs font-mono bg-[#101512] px-3 py-1.5 rounded-lg border border-emerald-800/60 text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A3FF12]" />
            <span>Officer: <strong>mhhsan341@gmail.com</strong> (Level 5)</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs font-mono bg-[#101512] hover:bg-red-950/40 text-[#AAB5AD] hover:text-red-300 border border-[#1C271F] hover:border-red-800/60 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            title="Terminate high-command session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock Terminal</span>
          </button>
        </div>
      </div>

      {feedbackMessage && (
        <div className="rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 p-3 text-xs font-mono flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-xl bg-[#101512] border border-[#1C271F] p-4">
          <span className="text-[10px] font-mono uppercase text-[#AAB5AD] block">IN QUEUE</span>
          <span className="text-2xl font-black text-amber-400">{queuedCount}</span>
          <span className="text-[10px] font-mono text-[#AAB5AD] block mt-1">Pending worker pickup</span>
        </div>

        <div className="rounded-xl bg-[#101512] border border-[#1C271F] p-4">
          <span className="text-[10px] font-mono uppercase text-[#AAB5AD] block">RESEARCHING</span>
          <span className="text-2xl font-black text-cyan-400">{researchingCount}</span>
          <span className="text-[10px] font-mono text-[#AAB5AD] block mt-1">Extracting broadcast facts</span>
        </div>

        <div className="rounded-xl bg-[#101512] border border-[#1C271F] p-4">
          <span className="text-[10px] font-mono uppercase text-[#AAB5AD] block">NEEDS REVIEW</span>
          <span className="text-2xl font-black text-[#A3FF12]">{needsReviewCount}</span>
          <span className="text-[10px] font-mono text-[#AAB5AD] block mt-1">Requires human gate</span>
        </div>

        <div className="rounded-xl bg-[#101512] border border-[#1C271F] p-4">
          <span className="text-[10px] font-mono uppercase text-[#AAB5AD] block">APPROVED</span>
          <span className="text-2xl font-black text-emerald-400">{approvedCount}</span>
          <span className="text-[10px] font-mono text-[#AAB5AD] block mt-1">Ready for public database</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-[#1C271F] gap-2 font-mono text-xs">
        <button
          onClick={() => setActiveTab('queue')}
          className={`px-4 py-2.5 font-bold transition-colors border-b-2 ${
            activeTab === 'queue'
              ? 'border-[#A3FF12] text-[#A3FF12]'
              : 'border-transparent text-[#AAB5AD] hover:text-[#E9EFE9]'
          }`}
        >
          Research Ingestion Queue ({jobs.length})
        </button>

        <button
          onClick={() => setActiveTab('rights')}
          className={`px-4 py-2.5 font-bold transition-colors border-b-2 ${
            activeTab === 'rights'
              ? 'border-[#A3FF12] text-[#A3FF12]'
              : 'border-transparent text-[#AAB5AD] hover:text-[#E9EFE9]'
          }`}
        >
          Image Rights Gate (Stage 3 & 4)
        </button>

        <button
          onClick={() => setActiveTab('revisions')}
          className={`px-4 py-2.5 font-bold transition-colors border-b-2 ${
            activeTab === 'revisions'
              ? 'border-[#A3FF12] text-[#A3FF12]'
              : 'border-transparent text-[#AAB5AD] hover:text-[#E9EFE9]'
          }`}
        >
          Audit Log & Revisions
        </button>
      </div>

      {/* Tab 1: Research Queue */}
      {activeTab === 'queue' && (
        <div className="space-y-6">
          
          {/* Add Job Form */}
          <div className="rounded-xl glass-panel p-5 border border-[#1C271F]">
            <h3 className="text-xs font-mono font-bold uppercase text-[#A3FF12] tracking-wider mb-3">
              Trigger New AI Research Ingestion Job
            </h3>
            <form onSubmit={handleCreateJob} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-6">
                <input
                  type="text"
                  value={newEntityName}
                  onChange={(e) => setNewEntityName(e.target.value)}
                  placeholder="Candidate character name (e.g. 'Ghostfreak', 'Ripjaws', 'Dr. Animo')..."
                  className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg px-3 py-2 text-sm text-[#E9EFE9] font-mono outline-none"
                />
              </div>

              <div className="sm:col-span-4">
                <select
                  value={newSeriesSlug}
                  onChange={(e) => setNewSeriesSlug(e.target.value as CanonicalSeriesSlug)}
                  className="w-full bg-[#0B0F0C] border border-[#1C271F] focus:border-[#A3FF12] rounded-lg px-3 py-2 text-sm text-[#E9EFE9] font-mono outline-none"
                >
                  <option value="ben-10-2005">Ben 10 (2005 Original)</option>
                  <option value="ben-10-alien-force">Ben 10: Alien Force</option>
                  <option value="ben-10-ultimate-alien">Ben 10: Ultimate Alien</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !newEntityName.trim()}
                  className="w-full py-2 px-3 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#A3FF12] hover:bg-[#8ee600] disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Enqueue</span>
                </button>
              </div>
            </form>
          </div>

          {/* Job List */}
          <div className="space-y-3">
            {jobs.map((job) => {
              const statusColors = {
                queued: 'text-amber-400 bg-amber-950/30 border-amber-800/40',
                researching: 'text-cyan-400 bg-cyan-950/30 border-cyan-800/40',
                image_review: 'text-purple-400 bg-purple-950/30 border-purple-800/40',
                needs_review: 'text-[#A3FF12] bg-[#A3FF12]/10 border-[#A3FF12]/40',
                approved: 'text-emerald-400 bg-emerald-950/30 border-emerald-800/40',
                published: 'text-emerald-400 bg-emerald-950/30 border-emerald-800/40',
                failed: 'text-red-400 bg-red-950/30 border-red-800/40',
                rejected: 'text-red-400 bg-red-950/30 border-red-800/40'
              };

              return (
                <div 
                  key={job.id} 
                  className="p-4 rounded-xl bg-[#101512] border border-[#1C271F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-[#E9EFE9] text-base">{job.entityName}</span>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${statusColors[job.status]}`}>
                        {job.status.replace('_', ' ')}
                      </span>
                      <span className="text-[11px] font-mono text-[#AAB5AD]">
                        Series: {job.seriesSlug}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#AAB5AD]">
                      <span>Facts: <strong className="text-[#E9EFE9]">{job.factsFound}</strong></span>
                      <span>Images: <strong className="text-[#E9EFE9]">{job.imagesFound}</strong></span>
                      {job.confidenceAverage > 0 && (
                        <span>Confidence: <strong className="text-[#A3FF12]">{Math.round(job.confidenceAverage * 100)}%</strong></span>
                      )}
                      <span>Job ID: {job.id}</span>
                    </div>

                    {job.errorMessage && (
                      <p className="text-xs text-red-400 font-mono mt-1">
                        Reason: {job.errorMessage}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  {job.status === 'needs_review' && (
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => handleApprove(job.id)}
                        className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold text-black bg-[#A3FF12] hover:bg-[#8ee600] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Approve & Gate</span>
                      </button>

                      <button
                        onClick={() => handleReject(job.id)}
                        className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold text-red-400 bg-red-950/30 hover:bg-red-950/60 border border-red-800/40 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Reject</span>
                      </button>
                    </div>
                  )}

                  {job.status === 'queued' && (
                    <div className="text-xs font-mono text-amber-400 flex items-center gap-1 self-end sm:self-center">
                      <Play className="w-3.5 h-3.5 animate-pulse" />
                      <span>Ready for Worker Pickup</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* Tab 2: Image Rights Gatekeeper */}
      {activeTab === 'rights' && (
        <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
          <div className="pb-3 border-b border-[#1C271F]">
            <h3 className="text-sm font-bold text-[#E9EFE9]">Image Rights Clearance Pipeline (Stage 3 & 4)</h3>
            <p className="text-xs text-[#AAB5AD] mt-1 font-mono">
              Blueprint Rule: Public availability does not grant permission. Assets must carry verified provenance or acceptable fair use editorial classification before publication.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-[#101512] border border-[#1C271F] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#E9EFE9]">Heatblast Model Sheet #1</span>
                <p className="text-[11px] font-mono text-[#AAB5AD]">
                  Rights Holder: Cartoon Network Studios / Dave Johnson • License: Editorial Fair Use Fan Archive
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                Cleared & Approved
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[#101512] border border-[#1C271F] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#E9EFE9]">Vilgax Flame Keepers Circle Concept</span>
                <p className="text-[11px] font-mono text-[#AAB5AD]">
                  Rights Holder: Cartoon Network / Glen Murakami • License: Unverified Web Scrape Candidate
                </p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded-full">
                Pending Rights Verification
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Revisions & Audit Log */}
      {activeTab === 'revisions' && (
        <div className="rounded-xl glass-panel p-6 border border-[#1C271F] space-y-4">
          <div className="pb-3 border-b border-[#1C271F]">
            <h3 className="text-sm font-bold text-[#E9EFE9]">Content Revision History (Audit Trail)</h3>
            <p className="text-xs text-[#AAB5AD] mt-1 font-mono">
              Rollback and immutable record of modifications to character lore and rights metadata.
            </p>
          </div>

          <div className="space-y-3">
            {MOCK_CONTENT_REVISIONS.map((rev) => (
              <div key={rev.id} className="p-4 rounded-lg bg-[#101512] border border-[#1C271F] space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A3FF12] font-bold">{rev.entityName}</span>
                  <span className="text-[#AAB5AD]">{new Date(rev.timestamp).toLocaleString()}</span>
                </div>
                <p className="text-xs text-[#E9EFE9]">
                  {rev.details}
                </p>
                <div className="text-[10px] font-mono text-[#AAB5AD]">
                  Reviewed By: <strong className="text-[#E9EFE9]">{rev.changedBy}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
