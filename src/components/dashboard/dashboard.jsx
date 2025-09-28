import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../../assets/Hero.webp';
import { Rocket, CheckCircle2, Wand2, XCircle } from 'lucide-react';

function Dashboard() {
  const [contentActive, setContentActive] = useState(() => {
    // Try to read from localStorage on mount
    const stored = localStorage.getItem('promptflow_content_active');
    return stored === 'true';
  });

  // Sync chrome.storage.local and localStorage on mount
  useEffect(() => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get(['promptflow_content_active'], (result) => {
        if (typeof result.promptflow_content_active !== 'undefined') {
          setContentActive(!!result.promptflow_content_active);
          localStorage.setItem('promptflow_content_active', result.promptflow_content_active);
        }
      });
      // Listen for chrome.storage changes and update localStorage
      chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'local' && changes.promptflow_content_active) {
          setContentActive(!!changes.promptflow_content_active.newValue);
          localStorage.setItem('promptflow_content_active', changes.promptflow_content_active.newValue);
        }
      });
    }
  }, []);

  const handleToggle = () => {
    const newValue = !contentActive;
    setContentActive(newValue);
    localStorage.setItem('promptflow_content_active', newValue);
    // For Chrome extension storage
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ promptflow_content_active: newValue });
    }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects & Hero Image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full overflow-hidden">
          {/* Hero Background Image */}
          <img
            src={HeroImg}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          {/* Conditional overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 dark:opacity-100 opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30 dark:opacity-100 opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 dark:opacity-0 opacity-100"></div>
          {/* Animated gradient blobs */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-gradient-to-l from-purple-500 to-pink-500 blur-3xl"
          />
        </div>
      </div>
      {/* Main Dashboard Card */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="w-full max-w-7xl relative z-10"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col items-center"
        >
          <div className="mb-4">
            <img src="/icon.svg" alt="logo" className="w-16 h-16 drop-shadow-lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Rocket className="w-7 h-7 text-blue-400 animate-bounce" />
            PromptFlow
          </h1>
          <p className="text-lg text-gray-200 mb-4 flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-blue-300" />
            Activate & Get Started
          </p>
          <div className="bg-gray-800/80 rounded-xl p-4 mb-6 text-gray-300 text-center shadow border border-white/10 flex flex-col items-center">
            <p className='m-4'>Self-hosting? Navigate to your workflow, then activate the extension by pressing the button below:</p>
            <div className="flex justify-center w-full">
              <button
                onClick={handleToggle}
                className={`group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden flex items-center gap-2`}
              >
                <span className="flex items-center gap-2">
                  {contentActive ? (
                    <XCircle className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform" />
                  )}
                  {contentActive ? 'Deactivate' : 'Activate on Canva'}
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-opacity rounded-xl"></span>
              </button>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
}

export default Dashboard;