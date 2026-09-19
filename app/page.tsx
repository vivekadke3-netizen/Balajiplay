"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  // Popup दिसावा की नाही यासाठी State (Default: true)
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-x-hidden">
      
      {/* 1. TOP HEADER */}
      <header className="bg-slate-900 border-b border-slate-800 p-3 px-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-amber-500 tracking-wider">BALAJIPLAY</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1.5 px-3 rounded flex items-center gap-1">
              🔑 DEMO
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-1.5 px-3 rounded flex items-center gap-1">
              ➔ LOGIN
            </button>
          </Link>
        </div>
      </header>

      {/* ANNOUNCEMENT TICKER */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-1.5 px-4 text-xs text-amber-400 flex items-center gap-2">
        <span>📢</span>
        <marquee className="font-medium">WELCOME TO BALAJIPLAY - VIRTUAL DEMO BETTING PLATFORM! FASTEST AUTOMATED SYSTEM.</marquee>
      </div>

      {/* BACKGROUND CONTENT (HOMEPAGE BANNER & GAMES) */}
      <main className="p-4 max-w-4xl mx-auto space-y-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 to-slate-900 p-6 border border-slate-800 text-center">
          <h2 className="text-3xl font-extrabold text-amber-400 mb-2">PLAY. SPIN. HAVE FUN.</h2>
          <p className="text-sm text-slate-300">Explore classic casino-style games in a safe Demo Mode using virtual coins only.</p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/dashboard">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2 rounded-lg text-sm">
                EXPLORE GAMES
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* 2. POPUP MODAL (11XPLAY STYLE) */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            {/* CLOSE BUTTON (X) */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold z-20"
            >
              ✕
            </button>

            {/* POPUP HEADER - WARNING BANNER */}
            <div className="bg-slate-950 p-4 text-center border-b border-slate-800">
              <div className="inline-flex items-center gap-2 text-red-500 font-extrabold text-sm tracking-wide bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-1">
                <span>⚠️</span> STOP RISKING!
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">
                SITE CAN'T BE REACHED...
              </h3>
            </div>

            {/* WARNING POINTS */}
            <div className="p-3 bg-red-950/20 grid grid-cols-2 gap-2 text-[10px] border-b border-slate-800">
              <div className="bg-slate-900/80 p-2 rounded border border-slate-800 flex items-center gap-1.5">
                <span className="text-red-400">🔗</span>
                <span className="text-slate-300 font-medium">Link changes every day</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded border border-slate-800 flex items-center gap-1.5">
                <span className="text-red-400">🚫</span>
                <span className="text-slate-300 font-medium">Fake links = High Risk</span>
              </div>
            </div>

            {/* APK DOWNLOAD SECTION */}
            <div className="p-4 text-center space-y-3">
              <div className="bg-gradient-to-b from-blue-600/20 to-transparent p-3 rounded-xl border border-blue-500/30">
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Smart Choice. Safe Choice.</p>
                <h4 className="text-2xl font-black text-white mt-0.5">DOWNLOAD APK</h4>
                <p className="text-[10px] text-slate-400">ONCE & USE FOREVER!</p>
              </div>

              {/* FEATURES LIST */}
              <div className="space-y-1.5 text-left text-[11px] bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Super Fast Lightning Speed</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>100% Safe & Secure Data</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Auto Link Update Always Working</span>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  alert("APK डाउनलोड सुरू होत आहे...");
                }}
                className="block w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-extrabold py-3 rounded-xl text-sm shadow-lg shadow-blue-500/20 tracking-wider uppercase transition transform active:scale-95"
              >
                📥 DOWNLOAD APK NOW
              </a>

              <p className="text-[9px] text-slate-500 font-medium">
                SAFE & SECURE • FAST & SMOOTH • 24x7 SUPPORT
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
