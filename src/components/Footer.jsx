import React from 'react';

export default function Footer({ onSelectTab }) {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant py-10 border-t border-surface-container-highest/40 mt-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Status Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 bg-surface-container-low border border-surface-container-highest/60 p-4 rounded">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-label-caps text-xs text-on-surface font-bold tracking-wider">
                SYSTEM PROTOCOL: ONLINE
              </span>
            </div>
            <div className="hidden sm:block w-px h-3 bg-surface-container-highest" />
            <span className="font-telemetry-data text-xs text-on-surface-variant">
              REGION: AP-SOUTHEAST (MNL)
            </span>
            <div className="hidden sm:block w-px h-3 bg-surface-container-highest" />
            <span className="font-telemetry-data text-xs text-tertiary-fixed">
              LATENCY: 14MS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-surface-container border border-surface-container-highest/60 px-2.5 py-1 rounded text-xs">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">language</span>
              <span className="font-label-caps text-on-surface font-semibold">ENGLISH (US)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container border border-surface-container-highest/60 px-2.5 py-1 rounded text-xs">
              <span className="material-symbols-outlined text-[16px] text-primary-container">payments</span>
              <span className="font-label-caps text-on-surface font-semibold">PHP (₱)</span>
            </div>
          </div>
        </div>

        {/* Riot Brand & Ratings */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-headline-sm text-sm uppercase text-primary font-bold tracking-wider">
              RIOT GAMES • VALORANT ARMORY DIVISION
            </span>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              © 2024 Riot Games, Inc. VALORANT, the VALORANT Logo, and all associated properties are trademarks, 
              service marks, and/or registered trademarks of Riot Games, Inc. Unsanctioned telemetry exploitation prohibited by sovereign armory protocol.
            </p>
          </div>
        </div>

        {/* Legal & Version Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-container-highest/30 text-xs">
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#privacy" className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors">
              PRIVACY NOTICE
            </a>
            <a href="#terms" className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="#cookies" className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors">
              COOKIE PREFERENCES
            </a>
          </div>
          <span className="font-telemetry-data text-[10px] text-on-surface-variant">
            BUILD: REV_9.08.TACTICAL_COMMERCE
          </span>
        </div>

      </div>
    </footer>
  );
}
